import { useConfigStore } from './useConfigStore'
import { useApiFetch } from '../useApiFetch'

export const useConfig = () => {
    const configStore = useConfigStore()

    const setConfigs = (plans: Array<object>) => {
        configStore.value.configs = plans
    }


    const loadConfigs = async () => {
        const { data } = await useApiFetch('/user/config')

        setConfigs(data.value.data)
        return configStore;
    }
    
    const makeConfig = async (serverId: number) => {
        const { data } = await useApiFetch('/user/config', {
            method: 'POST',
            body: {
                'id': serverId,
            }
        })

        return configStore
    }

    return {
        loadConfigs,
        makeConfig
    }
}