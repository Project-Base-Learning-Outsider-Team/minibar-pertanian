import { auth, googleProvider } from "@/config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const handleSignin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Login sukses:", user);
  } catch (error: any) {
    console.error("Gagal login:", error.message);
  }
};


export async function signUpService(email: string, password: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result
  } catch (error: any) {
    console.log(error.message)
  }
}

export async function signInService(
  email: string,
  password: string
) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log("Login sukses:", result.user);
    return result
  } catch (error: any) {
    console.log(error.message)
  }
}
