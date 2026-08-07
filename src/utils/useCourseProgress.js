import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function useCourseProgress(courseId) {
  const { currentUser } = useAuth() || {};
  const [isCloudLoaded, setIsCloudLoaded] = useState(false);

  // Inicializar desde localStorage primero para evitar parpadeos
  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem(`${courseId}_step`);
    return saved ? parseInt(saved, 10) : 1;
  });

  const [showEvaluation, setShowEvaluation] = useState(() => {
    const saved = localStorage.getItem(`${courseId}_showEvaluation`);
    return saved === 'true';
  });

  // 1. Cargar desde Firebase si el usuario inicia sesión
  useEffect(() => {
    async function loadCloudProgress() {
      if (currentUser && db) {
        try {
          const docRef = doc(db, 'course_progress', `${currentUser.uid}_${courseId}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setStep(data.step || 1);
            setShowEvaluation(data.showEvaluation || false);
          }
        } catch (error) {
          console.error("Error cargando progreso desde la nube:", error);
        } finally {
          setIsCloudLoaded(true);
        }
      } else {
        setIsCloudLoaded(true); // Si no está logueado, asumimos que "cargó"
      }
    }
    loadCloudProgress();
  }, [currentUser, courseId]);

  // 2. Guardar progreso cada vez que cambie
  useEffect(() => {
    // Guardado local (siempre)
    localStorage.setItem(`${courseId}_step`, step);
    localStorage.setItem(`${courseId}_showEvaluation`, showEvaluation);

    // Guardado en la nube (solo si está logueado y ya cargó la versión inicial)
    if (currentUser && db && isCloudLoaded) {
       const saveToCloud = async () => {
         try {
           const docRef = doc(db, 'course_progress', `${currentUser.uid}_${courseId}`);
           await setDoc(docRef, {
             userId: currentUser.uid,
             courseId: courseId,
             step: step,
             showEvaluation: showEvaluation,
             lastUpdatedAt: new Date().toISOString()
           }, { merge: true });
         } catch(error) {
           console.error("Error guardando progreso en la nube:", error);
         }
       };
       
       // Pequeño debounce rudimentario para evitar sobre-escribir la BD muy rápido (ahorro de $0 plan)
       const timeoutId = setTimeout(() => {
         saveToCloud();
       }, 500);

       return () => clearTimeout(timeoutId);
    }
  }, [step, showEvaluation, courseId, currentUser, isCloudLoaded]);

  const resetProgress = () => {
    setStep(1);
    setShowEvaluation(false);
    localStorage.setItem(`${courseId}_step`, 1);
    localStorage.setItem(`${courseId}_showEvaluation`, false);
  };

  return { step, setStep, showEvaluation, setShowEvaluation, resetProgress };
}
