import CommonView from 'components/CommonView'
import i18next from 'i18next'
import Create from 'pages/consult/Create'
import Detail from 'pages/consult/Detail'
import Dashboard from 'pages/dashboard/Dashboard'
import DetailStepper from 'pages/detail-stepper/DetailStepper'
import StepperForm from 'pages/stepper-form/StepperForm'
import { Navigate } from 'react-router-dom'

const { t } = i18next

export default [
  {
    path: '/',
    handle: { breadcrumb: t('dashboard') },
    element: (
      <CommonView title={t('dashboard')}>
        <Dashboard />
      </CommonView>
    ),
  },
  {
    path: 'details',
    handle: { breadcrumb: t('details') },
    children: [
      {
        // TODO: validar este comportamento
        index: true,
        element: <Navigate to="detail" />,
      },
      {
        path: 'detail',
        handle: { breadcrumb: t(`${t('detail')} #1`) },
        element: (
          <CommonView title={t(`${t('detail')} #1`)}>
            <Detail id={4} />
          </CommonView>
        ),
      },
    ],
  },
  {
    path: 'forms',
    handle: { breadcrumb: t('forms') },
    children: [
      {
        // TODO: validar este comportamento
        index: true,
        element: <Navigate to="fullscreen" />,
      },
      {
        path: 'fullscreen',
        handle: { breadcrumb: t('fullScreen') },
        element: (
          <CommonView title={t('fullScreen')}>
            <Create />
          </CommonView>
        ),
      },
      {
        path: 'stepper-form',
        handle: { breadcrumb: t('stepper') },
        element: (
          <CommonView title={t('stepper')}>
            <StepperForm />
          </CommonView>
        ),
      },
      {
        path: 'detail-stepper',
        handle: { breadcrumb: t('detailsAndStepper') },
        element: (
          <CommonView title={t('detailsAndStepper')}>
            <DetailStepper id={4} />
          </CommonView>
        ),
      },
    ],
  },
]
