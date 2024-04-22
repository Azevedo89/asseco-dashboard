import { Dialog, ModalType, Table, useDialog } from '@asseco-web/ui'
import { Button, Col } from '@asseco-web/ui/atomic'
import { AddOutlined } from '@mui/icons-material'
import DocumentForm from 'pages/stepper-form/DocumentForm'
import { useTranslation } from 'react-i18next'

export const render = () => {
  const { t } = useTranslation()
  const dialog = useDialog({
    type: ModalType.STANDARD,
    header: t('add'),
    secondaryButtonProps: {
      children: t('cancel'),
    },
    primaryButtonProps: {
      children: t('add'),
      color: 'success',
      onClick: (close) => {
        close()
      },
    },
  })

  const onOpen = () => {
    dialog.open()
  }

  return (
    <Col>
      <Button startIcon={<AddOutlined />} sx={{ alignSelf: 'start' }} onClick={onOpen}>
        {t('addDocument')}
      </Button>
      <Table
        columns={[
          {
            accessor: 'type',
            Header: t('type'),
          },
          {
            accessor: 'number',
            Header: t('number'),
          },
        ]}
        data={[
          {
            type: 'Passaporte',
            number: '12345678',
          },
        ]}
      />
      <Dialog {...dialog}>
        <DocumentForm />
      </Dialog>
    </Col>
  )
}
