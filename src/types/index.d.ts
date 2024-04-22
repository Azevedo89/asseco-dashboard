import 'i18next'

export * from './accessToken.types'
export * from './hooks.types'

declare global {
  interface Window {
    _env_: { API_URL: string; LOG_SERVER_URL: string }
  }
}
