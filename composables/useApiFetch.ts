import { UseFetchOptions } from '#app'
import { NitroFetchRequest } from 'nitropack'
import { KeyOfRes } from 'nuxt/dist/app/composables/asyncData'

export function useApiFetch<T>(
  request: NitroFetchRequest,
  opts?:
    | UseFetchOptions<
      T extends void ? unknown : T,
      (res: T extends void ? unknown : T) => T extends void ? unknown : T,
      KeyOfRes<
        (res: T extends void ? unknown : T) => T extends void ? unknown : T
      >
    >
    | undefined
) {
  const config = useRuntimeConfig()
  const accessToken = useCookie('auth-token')
  return useFetch<T>(request, {
    baseURL: config.public.baseURL,
    headers: {
      'Authorization': 'Bearer ' + accessToken.value,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    ...opts,
  })
}