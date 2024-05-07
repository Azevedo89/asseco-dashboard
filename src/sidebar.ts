import { AppRegistrationOutlined } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import type { SidebarProps } from '@asseco-web/ui'

const getSidebar = (): SidebarProps => {
  const { t } = useTranslation()
  return {
    apps: [
      {
        label: 'PD',
        title: t('demoPortal'),
        entries: [
          { icon: AppRegistrationOutlined, label: t('logsVerification'), path: 'logs-verification' },
          { icon: AppRegistrationOutlined, label: t('dashboard'), path: 'dashboard' },
        ],
      },
    ],
  }
}
export default getSidebar
