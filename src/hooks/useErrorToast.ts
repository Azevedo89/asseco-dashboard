import { alert } from '@asseco-web/ui'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import type { ErrorToastType } from 'types/hooks.types'

const useErrorToast = ({ isError, error }: ErrorToastType) => {
  const { t } = useTranslation()
  useEffect(() => {
    if (isError) {
      alert.error(`${t('anErrorHappened')} ${JSON.stringify(error)}`)
    }
  }, [isError])
}

export default useErrorToast
