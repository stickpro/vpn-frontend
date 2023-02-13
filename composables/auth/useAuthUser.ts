import type { Auth } from '~~/types/user'

export const useAuthUser = () => {
  return useState<Auth>('auth', () => {
    return {
      'user': null,
      'loggedIn': false,
    }
  })
}
