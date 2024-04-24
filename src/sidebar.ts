import { AppRegistrationOutlined, StoreOutlined } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import type { SidebarProps } from '@asseco-web/ui'

const getSidebar = (): SidebarProps => {
  const { t } = useTranslation()
  return {
    apps: [
      {
        label: 'PD',
        title: t('demoPortal'),
        description: t('pagesExamples'),
        entries: [
          { icon: AppRegistrationOutlined, label: t('logsVerification'), path: 'logs-verification' },
          { type: 'title', label: t('pagesExamples') },
          {
            type: 'group',
            label: t('consults'),
            icon: StoreOutlined,
            entries: [
              { label: t('onlyTable'), path: 'consult/table' },
              { label: t('tablePlusFilter'), path: 'consult/search' },
              { label: t('tableRequiredFilter'), path: 'consult/pre-search' },
            ],
          },
          {
            type: 'group',
            label: t('details'),
            icon: StoreOutlined,
            entries: [{ label: `${t('detail')} #1`, path: 'details/detail' }],
          },
          {
            type: 'group',
            label: t('forms'),
            icon: StoreOutlined,
            entries: [
              { label: t('fullScreen'), path: 'forms/fullscreen' },
              { label: t('stepper'), path: 'forms/stepper-form' },
              { label: t('detailsAndStepper'), path: 'forms/detail-stepper' },
            ],
          },
          { type: 'title', label: 'Regras de Utilização' },
          { icon: AppRegistrationOutlined, label: t('introduction'), path: 'rules-intro' },
          { icon: AppRegistrationOutlined, label: t('tables'), path: 'rules-tables' },
          { icon: AppRegistrationOutlined, label: t('details'), path: 'rules-details' },
          { icon: AppRegistrationOutlined, label: t('previewDrawer'), path: 'rules-preview-drawer' },
          { icon: AppRegistrationOutlined, label: t('inputs'), path: 'rules-inputs' },
          { icon: AppRegistrationOutlined, label: t('filters'), path: 'rules-filters' },
          { icon: AppRegistrationOutlined, label: t('forms'), path: 'rules-forms' },
          { icon: AppRegistrationOutlined, label: t('dialogs'), path: 'rules-dialogs' },
          { icon: AppRegistrationOutlined, label: t('contextMenu'), path: 'rules-menu' },
        ],
      },
    ],
  }
}
export default getSidebar
