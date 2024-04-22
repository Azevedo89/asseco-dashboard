import { CommonView as CV } from '@asseco-web/ui'
import { useTranslation } from 'react-i18next'

import type { ReactElement } from 'react'

const CommonView = (props: { title: string; returnData?: string; children: ReactElement }) => {
  const { t } = useTranslation()
  return <CV {...props} backButtonTooltip={t('goBack')} />
}

CommonView.defaultProps = {
  returnData: '',
}

export default CommonView
