import type { Config } from '~~/types/config'

export const useConfigStore = () => {
  return useState<Config>('config', () => {
    return {
      'configs': null,
    }
  })
}
