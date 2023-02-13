export default defineNuxtRouteMiddleware(async (to) => {
    const user = useAuthUser()
    await useAuth().userInfo();

    if (user.value.loggedIn === false) {
      return navigateTo('/auth/login')
    }
})
  