import { usePlanStore } from './usePlanStore'
import { useApiFetch } from '../useApiFetch'

export const usePlan = () => {
    const planStore = usePlanStore()

    const setPlans = (plans: Array<object>) => {
        planStore.value.plans = plans
    }

    const setUserPlan = (plan: object) => {
        planStore.value.userPlan = plan
    }

    const loadPlans = async () => {
        const { data } = await useApiFetch('/plans')

        setPlans(data.value.data)
        return planStore;
    }
    
    const buyPlan = async (planId: number) => {
        const { data } = await useApiFetch('/user/plans', {
            method: 'POST',
            body: {
                'plan_id': planId,
            }
        })

        return planStore
    }

    const loadUserPlan = async () => {
        const { data } = await useApiFetch('/user/plans')

        setUserPlan(data.value.data)
    }

    return {
        loadPlans,
        buyPlan,
        loadUserPlan,
    }
}