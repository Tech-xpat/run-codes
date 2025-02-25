import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAz9hb93DBOjO9mTHn9_-XaMYRuJA8tCbU",
  authDomain: "pounds-bosses.firebaseapp.com",
  databaseURL: "https://pounds-bosses-default-rtdb.firebaseio.com",
  projectId: "pounds-bosses",
  storageBucket: "pounds-bosses.firebasestorage.app",
  messagingSenderId: "15515739946",
  appId: "1:15515739946:web:a4c5df7d7c2da5b867a053",
  measurementId: "G-K85DM8JJW8",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null

