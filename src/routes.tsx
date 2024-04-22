import CommonView from 'components/CommonView';
import i18next from 'i18next';
import { Login } from 'pages/login/Login';
import UserVerification from 'pages/user-verification/UserVerification';
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
    path: 'user-verification',
    handle: { breadcrumb: t('userVerification') },
    element: (
      <CommonView title={t('userVerification')}>
        <UserVerification />
      </CommonView>
    )
  },
  ...consultsRoutes,
  ...rulesRoutes,
  ...otherPagesRoutes,
];

export default { appRoutes, otherRoutes };
