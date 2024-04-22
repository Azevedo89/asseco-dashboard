import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import { clearRoutesHistory } from '@asseco-web/reducers/actions'
import { Login as L } from '@asseco-web/ui'
import { Alert, Row } from '@asseco-web/ui/atomic'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginMutation } from 'api/auth.api'
import logo from 'assets/images/logo_asseco_login.svg'
import useAuth from 'hooks/useAuth'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { z } from 'zod'

import type { LoginForm } from '@asseco-web/ui'
import type { FieldValues } from 'react-hook-form'

export const Login = () => {
  const { t } = useTranslation()
  const { isLoggedIn } = useAuth()
  const dispatch = useDispatch()

  const validationSchema = z.object({
    user: z.string().min(1).default(''),
    password: z.string().min(1).default(''),
    rememberMe2: z.boolean().default(false),
  })

  const form = useForm<LoginForm>({
    mode: 'all',
    defaultValues: getDefaultsFromZodSchema(validationSchema),
    resolver: zodResolver(validationSchema),
  })
  const [formError, setFormError] = useState('')
  const [login, { isError }] = useLoginMutation()

  useEffect(() => {
    if (isError) {
      setFormError(t('wrongCredentials'))
    } else {
      setFormError('')
    }
  }, [isError])

  useEffect(() => {
    dispatch(clearRoutesHistory())
  }, [])

  const beforeLogin = (values: FieldValues) => {
    login({
      email: values.user,
      password: values.password,
    })
  }

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Row
      height="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: (theme) => theme.palette.primary.light,
        '> *': {
          flex: 1,
        },
      }}
    >
      <L
        img={logo}
        alert={
          <>
            {/* <Alert severity="info" sx={{ alignSelf: 'center' }}>
              <Typography fontWeight="medium">user</Typography>
              <Typography fontWeight="medium">password</Typography>
            </Alert> */}
            {formError && <Alert severity="error">{formError}</Alert>}
          </>
        }
        control={form.control}
        handleSubmit={form.handleSubmit}
        onSubmit={beforeLogin}
      />
    </Row>
  )
}