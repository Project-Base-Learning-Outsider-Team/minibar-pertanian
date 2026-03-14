import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

/**
 * Firebase Configuration
 * Disarankan menggunakan environment variables untuk keamanan.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Contoh jika menggunakan Vite
  authDomain: "test-7c8a5.firebaseapp.com",
  projectId: "test-7c8a5",
  storageBucket: "test-7c8a5.firebasestorage.app",
  messagingSenderId: "681305260683",
  appId: "1:681305260683:web:1bd1ce7189695d4c5e0a8e",
  measurementId: "G-1HN238CFS4"
};

/**
 * Inisialisasi Firebase App instance.
 * Bertanggung jawab sebagai bridge antara client-side dan Google services.
 */
export const app = initializeApp(firebaseConfig);

/**
 * Firebase Authentication Service
 * Instance untuk mengelola login, session, dan user management.
 */
export const auth = getAuth(app);

/**
 * Google Auth Provider
 * Digunakan sebagai konfigurasi untuk metode login via Google.
 */
export const googleProvider = new GoogleAuthProvider();

// Opsional: Memaksa user memilih akun setiap kali login (custom parameter)
googleProvider.setCustomParameters({ prompt: 'select_account' });