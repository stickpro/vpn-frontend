export default defineNuxtRouteMiddleware(async (to) => {
    const user = useAuthUser()
    await useAuth().userInfo();
    console.log(user.value);
    if (user.value.loggedIn === false) {
      return navigateTo('/auth/login')
    }
})
  