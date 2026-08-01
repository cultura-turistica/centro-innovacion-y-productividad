import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Reemplazar con las llaves de tu proyecto Firebase (Cultura T LMS)
// Estas llaves se consiguen en la Consola de Firebase al crear la App Web
const firebaseConfig = {
  projectId: "cultura-t",
  appId: "1:631044096495:web:c9d40efce9e5e5f456b61a",
  storageBucket: "cultura-t.firebasestorage.app",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cultura-t.firebaseapp.com",
  messagingSenderId: "631044096495",
  measurementId: "G-DZLLELVBCR"
};

// Inicializamos la app solo si hay configuración válida para evitar crashes en localhost
let app;
let auth;
let db;

try {
  if (firebaseConfig.apiKey !== "TU_API_KEY") {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  }
} catch (error) {
  console.error("Error inicializando Firebase:", error);
}

export { auth, db };
