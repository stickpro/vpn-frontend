
import { useAuthUser } from './useAuthUser'
import { useApiFetch } from '../useApiFetch'

export const useAuth = () => {
    const authUser = useAuthUser()

    const setUser = (user: any) => {
        authUser.value = user
    }
    const setCookie = (cookie: any) => {
        cookie.value = cookie
    }


    const login = async (
        email: string,
        password: string,
    ) => {
        const data = await useApiFetch('/auth/login', {
            method: 'POST',
            body: {
                email,
                password,
            },
        })

        setUser(data.data)

        return authUser
    }

    const register = async (
        name: string,
        email: string,
        password: string,
        terms: boolean,
    ) => {
        const data = await useApiFetch('/auth/register', {
            method: 'POST',
            body: {
                name,
                email,
                password,
                terms,
            },
        })
        setUser(data.data)

        return authUser
    }

    return {
        login,
        register,
    }
}