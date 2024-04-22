import { PeopleAltOutlined } from '@mui/icons-material'
import CommonView from 'components/CommonView'
import i18next from 'i18next'
import Consult from 'pages/consult/Consult'
import Create from 'pages/consult/Create'
import Detail from 'pages/consult/Detail'
import PreSearch from 'pages/consult/PreSearch'
import Search from 'pages/consult/Search'
import DetailStepper from 'pages/detail-stepper/DetailStepper'
import { Navigate } from 'react-router-dom'

const { t } = i18next

export default [
  {
    path: 'consult',
    icon: PeopleAltOutlined,
    handle: { breadcrumb: t('consults') },
    children: [
      {
        // TODO: validar este comportamento
        index: true,
        element: <Navigate to="table" />,
      },
      {
        path: 'table',
        handle: { breadcrumb: t('onlyTable') },
        element: (
          <CommonView title={t('onlyTable')}>
            <Consult />
          </CommonView>
        ),
      },
      {
        path: 'search',
        handle: { breadcrumb: t('tablePlusFilter') },
        element: (
          <CommonView title={t('tablePlusFilter')}>
            <Search />
          </CommonView>
        ),
      },
      {
        path: 'pre-search',
        handle: { breadcrumb: t('tableRequiredFilter') },
        element: (
          <CommonView title={t('tableRequiredFilter')}>
            <PreSearch />
          </CommonView>
        ),
      },
      {
        path: 'detail/:id',
        handle: { breadcrumb: t('details') },
        element: (
          <CommonView title={t('details')}>
            <Detail />
          </CommonView>
        ),
      },
      {
        path: 'create',
        handle: { breadcrumb: t('createEntity') },
        element: (
          <CommonView title={t('createEntity')}>
            <Create />
          </CommonView>
        ),
      },
      {
        path: 'create-card/:id',
        handle: { breadcrumb: t('createClientCard') },
        element: (
          <CommonView title={t('createClientCard')}>
            <DetailStepper />
          </CommonView>
        ),
      },
    ],
  },
]
