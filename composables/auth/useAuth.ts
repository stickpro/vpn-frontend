
import { useAuthUser } from './useAuthUser'
import { useApiFetch } from '../useApiFetch'

export const useAuth = () => {
    const authUser = useAuthUser()
    const token = useCookie('auth-token')

    const setUser = (user: any) => {
        authUser.value.user = user
        authUser.value.loggedIn = true
    }

    const setCookie = (cookie: string) => {
        token.value = cookie
    }


    const login = async (phone: string, authCode: number|undefined) => {
        const { data } = await useApiFetch('/auth/login', {
            method: 'POST',
            body: {
                phone,
                authCode,
            },
        })
        
        setUser(data.value?.data?.user)
        setCookie(data.value?.data?.token)

        return authUser
    }

    const register = async (
        name: string,
        email: string,
        password: string,
        terms: boolean,
    ) => {
        const { data } = await useApiFetch('/auth/register', {
            method: 'POST',
            body: {
                name,
                email,
                password,
                terms,
            },
        })
        setUser(data.value.data.user)
        setCookie(data.value.data.token)

        return authUser
    }

    const userInfo = async () => {
        try {
            const  { data }  = await useApiFetch('/user/info')
            setUser(data.value.data)
            return authUser
        } catch {
            
        }
  
    }
    

    return {
        login,
        register,
        userInfo,
    }
}