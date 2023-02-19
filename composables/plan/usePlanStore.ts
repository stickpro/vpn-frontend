import type { Plan } from '~~/types/plan'

export const usePlanStore = () => {
  return useState<Plan>('plan', () => {
    return {
      'plans': null,
      'userPlan': {},
    }
  })
}
