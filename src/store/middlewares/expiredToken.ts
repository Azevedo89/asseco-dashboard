import { alert } from '@asseco-web/ui'
import i18next from 'i18next'
import { clearAccessToken } from 'store/reducers/auth.reducer'

import type { Middleware } from 'redux'

const { t } = i18next

export const expiredToken: Middleware = () => (next) => (action) => {
  if (action?.payload?.status === 401 && action?.payload?.data === 'jwt expired') {
    alert.error(t('expiredSession'))
    return next(clearAccessToken())
  }
  return next(action)
}
