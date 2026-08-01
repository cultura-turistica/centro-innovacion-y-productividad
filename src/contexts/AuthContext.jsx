import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Iniciar sesión con Google (usando popup)
  async function loginWithGoogle() {
    if (!auth) {
      console.warn("Firebase no está configurado. Revisa src/config/firebase.js");
      return;
    }
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // Registrar con Correo y Contraseña
  async function registerWithEmail(email, password) {
    if (!auth) return;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Iniciar sesión con Correo y Contraseña
  async function loginWithEmail(email, password) {
    if (!auth) return;
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Cerrar sesión
  function logout() {
    if (!auth) return;
    return signOut(auth);
  }

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    
    // Escuchar el estado de autenticación (si se loguea o desloguea)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loginWithGoogle,
    registerWithEmail,
    loginWithEmail,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
