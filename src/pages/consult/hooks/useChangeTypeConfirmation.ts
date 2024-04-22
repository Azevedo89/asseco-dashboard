import { ModalType, useDialog } from '@asseco-web/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import type { Client } from 'types/api.types'

export const useChangeTypeConfirmation = () => {
  const { t } = useTranslation()
  const [, setId] = useState<Client['id'] | undefined>()
  const dialogProps = useDialog({
    type: ModalType.CONFIRMATION,
    title: t('changeType'),
    text: t('changeTypeTextInfo'),
    secondaryButtonProps: {
      children: t('no'),
    },
    primaryButtonProps: {
      children: t('yes'),
      onClick: (close) => {
        close()
      },
    },
  })

  const confirm = (id: Client['id']) => {
    setId(id)
    dialogProps.open()
  }

  return {
    confirm,
    dialogProps,
  }
}
