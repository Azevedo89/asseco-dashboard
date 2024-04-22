import log from '@asseco-web/logger'

import type { Middleware } from 'redux'

const defaultLogger: Middleware = () => (next) => (action) => {
  if (action.type.includes('api/executeQuery')) {
    log.debug(JSON.stringify(action), action)
  }
  return next(action)
}

export default defaultLogger
