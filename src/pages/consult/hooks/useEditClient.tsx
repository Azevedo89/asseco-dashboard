import { unformatDate } from '@asseco-web/formatters'
import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import { ModalType, alert, useDialog } from '@asseco-web/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateClientMutation } from 'api/consult.api'
import useErrorToast from 'hooks/useErrorToast'
import * as ClientForm from 'pages/consult/components/ClientForm'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { Client } from 'types/api.types'

export const useEditClient = () => {
  const { t } = useTranslation()
  const schema = ClientForm.schema(t)

  const form = useForm<ClientForm.Schema>({
    mode: 'all',
    defaultValues: getDefaultsFromZodSchema(schema),
    resolver: zodResolver(schema),
  })
  const { handleSubmit, reset } = form

  const [updateClient, { isSuccess, isError, error }] = useUpdateClientMutation()

  const handleUpdate = (values: Partial<ClientForm.Schema>) => {
    updateClient({
      ...values,
      ...(values.birthDate && { birthDate: unformatDate(values.birthDate, 'yyyy-MM-dd', 'yyyy-MM-dd') }),
      ...(values.jobAdmission && { jobAdmission: unformatDate(values.jobAdmission, 'yyyy-MM-dd', 'yyyy-MM-dd') }),
    })
  }

  const dialogProps = useDialog({
    type: ModalType.STANDARD,
    header: t('update'),
    children: <ClientForm.Form form={form} />,
    secondaryButtonProps: {
      children: t('no'),
    },
    primaryButtonProps: {
      children: t('save'),
      onClick: () => handleSubmit(handleUpdate)(),
    },
  })

  const editClient = (client: Client) => {
    reset(client)
    dialogProps.open()
  }

  useEffect(() => {
    if (isSuccess) {
      alert.success(t('successfullyEdited'))
      dialogProps.close()
    }
  }, [isSuccess])

  useErrorToast({ isError, error })

  return {
    editClient,
    dialogProps,
  }
}
