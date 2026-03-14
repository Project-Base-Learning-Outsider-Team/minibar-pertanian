import { signInService, signUpService } from "@/services/authService"
import { create } from "zustand"
import type { User } from "@/types/authStore.type"

interface AuthState {
  user: User | null
  token: string | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => void
}

/**
 * Store
 * bagian ini untuk menyimpan state
 */
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  signIn: async (email, password) => {
    await signInService(email, password)
  },

  signUp: async (email, password) => {
    await signUpService(email, password)
  },

  signOut: () => {
    set({
      user: null,
      token: null,
    })
  },
}))

export default useAuthStore
