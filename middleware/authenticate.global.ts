import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    authStore.signin();
  }
})