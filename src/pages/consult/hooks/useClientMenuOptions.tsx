import { Dialog, StandardMenuOptions } from '@asseco-web/ui'
import { OptionTypes } from '@asseco-web/ui/atomic'
import { ClientAccountsTab } from 'pages/consult/Detail'
import { useChangeTypeConfirmation } from 'pages/consult/hooks/useChangeTypeConfirmation'
import { useDeleteClientConfirmation } from 'pages/consult/hooks/useDeleteClientConfirmation'
import { useEditClient } from 'pages/consult/hooks/useEditClient'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import type { HandleMenuProps } from '@asseco-web/ui'
import type { Client } from 'types/api.types'

export const useClientMenuOptions = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const { confirm: confirmChange, dialogProps: changeDialogProps } = useChangeTypeConfirmation()
  const { confirm: confirmDelete, dialogProps: deleteDialogProps } = useDeleteClientConfirmation()
  const { editClient, dialogProps: editDialogProps } = useEditClient()

  const clientMenuDialogs = (
    <>
      <Dialog {...changeDialogProps} />
      <Dialog {...deleteDialogProps} />
      <Dialog {...editDialogProps} />
    </>
  )

  const clientMenuOptions: HandleMenuProps = {
    defaultRedirectInfo: { route: '/consult/detail/', fields: ['id'], sendContext: true },
    contextMenu: [
      {
        optionType: StandardMenuOptions.Details,
      },
      {
        optionType: StandardMenuOptions.Print,
        onClick: () => window.print(),
        quickAction: true,
      },
      {
        label: t('consults'),
        optionType: OptionTypes.Group,
        nestedOptions: [
          {
            label: t('accounts'),
            optionType: OptionTypes.Consultation,
            render: (props) => <ClientAccountsTab {...props} />,
          },
          { label: t('signatures'), optionType: OptionTypes.Consultation, render: () => <div>Assinaturas</div> },
          { label: t('cards'), optionType: OptionTypes.Consultation, render: () => <div>Cartões</div> },
          { label: t('patrimony'), optionType: OptionTypes.Consultation, render: () => <div>Património</div> },
        ],
      },
      {
        label: t('relationshipManagement'),
        optionType: OptionTypes.Group,
        nestedOptions: [
          { label: 'Option 1', optionType: OptionTypes.Consultation, render: () => <div>Opção 1</div> },
          { label: 'Option 2', optionType: OptionTypes.Consultation, render: () => <div>Opção 2</div> },
          { label: 'Option 3', optionType: OptionTypes.Consultation, render: () => <div>Opção 3</div> },
        ],
      },
      {
        optionType: StandardMenuOptions.Update,
        onClick: (data) => {
          editClient(data as Client)
        },
      },
      {
        label: t('changeType'),
        onClick: (data) => {
          confirmChange((data as Client)?.id)
        },
        optionType: OptionTypes.Maintenance,
      },
      {
        optionType: StandardMenuOptions.Delete,
        onClick: (data) => {
          confirmDelete(data as Client)
        },
      },
      {
        label: t('createClientCard'),
        optionType: OptionTypes.Maintenance,
        onClick: (data) => {
          navigate(`/consult/create-card/${(data as Client)?.id}`)
        },
      },
    ],
  }

  return { clientMenuOptions, clientMenuDialogs }
}
