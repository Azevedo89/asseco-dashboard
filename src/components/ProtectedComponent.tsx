import useAuth from 'hooks/useAuth'
import { Navigate } from 'react-router-dom'

import type { ComponentType } from 'react'

export const protectComponent =
  <P extends object>(Comp: ComponentType<P>) =>
    (props: P) => {
      const { isLoggedIn } = useAuth()
      if (!isLoggedIn) return <Navigate to="/auth" />
      return <Comp {...props} />
    }
