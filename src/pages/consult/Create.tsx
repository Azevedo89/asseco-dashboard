import { unformatDate } from '@asseco-web/formatters'
import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import { FormButtons, SaveButton, alert } from '@asseco-web/ui'
import { Col, Input, Surface } from '@asseco-web/ui/atomic'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockOutlined } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import { useCreateClientMutation } from 'api/consult.api'
import { protectComponent } from 'components/ProtectedComponent'
import useErrorToast from 'hooks/useErrorToast'
import * as ClientForm from 'pages/consult/components/ClientForm'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import type { UseFormReturn } from 'react-hook-form'

const Create = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [createClient, { isLoading, isSuccess, isError, error }] = useCreateClientMutation()

  const schema = z
    .object({
      authorization: z.string().min(1).default(''),
    })
    .merge(ClientForm.schema(t))

  type Schema = z.infer<typeof schema>

  const form = useForm<Schema>({
    mode: 'all',
    defaultValues: getDefaultsFromZodSchema(schema),
    resolver: zodResolver(schema),
  })
  const { handleSubmit, control } = form

  const handleCreate = (values: Partial<Schema>) => {
    createClient({
      ...values,
      ...(values.birthDate && { birthDate: unformatDate(values.birthDate, 'yyyy-MM-dd', 'yyyy-MM-dd') }),
      ...(values.jobAdmission && { jobAdmission: unformatDate(values.jobAdmission, 'yyyy-MM-dd', 'yyyy-MM-dd') }),
    })
  }

  useEffect(() => {
    if (isSuccess) {
      alert.success(t('successCreated'))
      navigate(-1)
    }
  }, [isSuccess])

  useErrorToast({ isError, error })

  return (
    <Surface>
      <Col component="form" onSubmit={handleSubmit(handleCreate)}>
        <FormButtons
          cancelProps={{
            children: t('cancel'),
            onClick: () => navigate(-1),
            disabled: isLoading,
          }}
          submitProps={{
            children: t('submit'),
            disabled: isLoading,
          }}
          centerContent={
            <>
              <SaveButton>{t('save')}</SaveButton>
              <Input
                type="password"
                name="authorization"
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                placeholder={t('authorization')}
                control={control}
                w={0}
              />
            </>
          }
        />
        <Col w={0.5}>
          <ClientForm.Form form={form as unknown as UseFormReturn<ClientForm.Schema>} />
        </Col>
      </Col>
    </Surface>
  )
}

export default protectComponent(Create)
