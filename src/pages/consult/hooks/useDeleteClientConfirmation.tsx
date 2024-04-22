import { ModalType, alert, useDialog } from '@asseco-web/ui'
import { useDeleteClientMutation } from 'api/consult.api'
import useErrorToast from 'hooks/useErrorToast'
import * as ClientForm from 'pages/consult/components/ClientForm'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { Client } from 'types/api.types'

export const useDeleteClientConfirmation = () => {
  const { t } = useTranslation()
  const form = useForm<ClientForm.Schema>()
  const { reset } = form
  const [deleteClient, { isSuccess, isError, error }] = useDeleteClientMutation()
  const [id, setId] = useState<Client['id'] | undefined>()
  const dialogProps = useDialog({
    type: ModalType.STANDARD,
    header: t('delete'),
    children: <ClientForm.Form form={form} disabled />,
    secondaryButtonProps: {
      children: t('no'),
    },
    primaryButtonProps: {
      children: t('yes'),
      onClick: () => {
        deleteClient(id)
      },
    },
    deferralProps: {
      onClick: (close) => {
        alert.info(t('differed'))
        close()
      },
    },
  })

  const confirm = (client: Client) => {
    reset(client)
    setId(client.id)
    dialogProps.open()
  }

  useEffect(() => {
    if (isSuccess) {
      alert.success(t('deleted'))
      dialogProps.close()
    }
  }, [isSuccess])

  useErrorToast({ isError, error })

  return {
    confirm,
    dialogProps,
  }
}
