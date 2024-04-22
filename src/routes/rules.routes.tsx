import CommonView from 'components/CommonView'
import i18next from 'i18next'
import Details from 'pages/rules/Details'
import Dialogs from 'pages/rules/Dialogs'
import Drawer from 'pages/rules/Drawer'
import Filters from 'pages/rules/Filters'
import Forms from 'pages/rules/Forms'
import Inputs from 'pages/rules/Inputs'
import Intro from 'pages/rules/Intro'
import Menu from 'pages/rules/Menu'
import Tables from 'pages/rules/Tables'

const { t } = i18next

export default [
  {
    path: 'rules-intro',
    handle: { breadcrumb: t('introduction') },
    element: (
      <CommonView title={t('introduction')}>
        <Intro />
      </CommonView>
    ),
  },
  {
    path: 'rules-tables',
    handle: { breadcrumb: t('tables') },
    element: (
      <CommonView title={t('tables')}>
        <Tables />
      </CommonView>
    ),
  },
  {
    path: 'rules-details',
    handle: { breadcrumb: t('details') },
    element: (
      <CommonView title={t('details')}>
        <Details />
      </CommonView>
    ),
  },
  {
    path: 'rules-preview-drawer',
    handle: { breadcrumb: t('previewDrawer') },
    element: (
      <CommonView title={t('previewDrawer')}>
        <Drawer />
      </CommonView>
    ),
  },
  {
    path: 'rules-filters',
    handle: { breadcrumb: t('filters') },
    element: (
      <CommonView title={t('filters')}>
        <Filters />
      </CommonView>
    ),
  },
  {
    path: 'rules-forms',
    handle: { breadcrumb: t('forms') },
    element: (
      <CommonView title={t('forms')}>
        <Forms />
      </CommonView>
    ),
  },
  {
    path: 'rules-inputs',
    handle: { breadcrumb: t('inputs') },
    element: (
      <CommonView title={t('inputs')}>
        <Inputs />
      </CommonView>
    ),
  },
  {
    path: 'rules-dialogs',
    handle: { breadcrumb: t('dialogs') },
    element: (
      <CommonView title={t('dialogs')}>
        <Dialogs />
      </CommonView>
    ),
  },
  {
    path: 'rules-menu',
    handle: { breadcrumb: t('contextMenu') },
    element: (
      <CommonView title={t('contextMenu')}>
        <Menu />
      </CommonView>
    ),
  },
]
