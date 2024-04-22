import { ErrorPage } from '@asseco-web/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const ClientError = ({ status }: { status: number | string }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <ErrorPage
      buttonProps={{
        children: status === 404 ? t('returnToPreviousPage') : t('tryAgain'),
        onClick: () => (status === 404 ? navigate(-1) : window.location.reload()),
      }}
      code={status.toString()}
      message={status === 404 ? t('customerNotFund') : t('anErrorHappened')}
    />
  )
}

export default ClientError
