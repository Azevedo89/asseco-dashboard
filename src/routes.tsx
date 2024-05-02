import CommonView from 'components/CommonView';
import i18next from 'i18next';
import Dashboard from 'pages/dashboard/Dashboard';
import { Login } from 'pages/login/Login';
import LogsVerification from 'pages/logs-verification/LogsVerification';
import type { RouteObject } from 'react-router-dom';
import consultsRoutes from 'routes/consult.routes';
import otherPagesRoutes from 'routes/other-pages.routes';
import rulesRoutes from 'routes/rules.routes';

const { t } = i18next;

const otherRoutes: RouteObject[] = [
  {
    path: 'auth',
    element: <Login />,
  },
];

const appRoutes: RouteObject[] = [
  {
    path: 'logs-verification',
    handle: { breadcrumb: t('logsVerification') },
    element: (
      <CommonView title={t('logsVerification')}>
        <LogsVerification />
      </CommonView>
    )
  },
  ...consultsRoutes,
  ...rulesRoutes,
  ...otherPagesRoutes,
  {
    path: 'dashboard',
    handle: { breadcrumb: t('dashboard') },
    element: (
      <CommonView title={t('dashboard')}>
        <Dashboard />
      </CommonView>
    )
  },
];

export default { appRoutes, otherRoutes };
