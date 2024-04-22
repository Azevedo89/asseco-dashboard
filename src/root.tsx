import '@asseco-web/common-types'
import { FormattersProvider } from '@asseco-web/formatters'
import { log, LogLevel } from '@asseco-web/logger'
import { theme } from '@asseco-web/theme'
import '@asseco-web/theme/index.css'
import { AlertProvider, LayoutProvider } from '@asseco-web/ui'
import { CssBaseline, ThemeProvider } from '@mui/material'
import logo from 'assets/images/logo_asseco.svg'
import BackdropLoader from 'components/BackdropLoader'
import Loading from 'components/loading/Loading'
import { UserMenu } from 'components/nav/UserMenu'
import useAuth from 'hooks/useAuth'
import { Provider } from 'react-redux'
import { Navigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'
import routes from 'routes'
import getSidebar from 'sidebar'
import store, { persistor } from 'store/store'

const newLayout = () => {
  const { isLoggedIn } = useAuth()
  return !isLoggedIn ? <Navigate to="auth" /> : null
}

const Root = () => {
  log.setOptions({
    level: LogLevel.DEBUG,
    application: 'projeto-demo',
    applicationVersion: '1.0.0',
    remote: { url: `${window._env_.LOG_SERVER_URL}/log-to-file` },
  })

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BackdropLoader />
          <AlertProvider>
            <FormattersProvider locale="pt-PT">
              <LayoutProvider
                {...{
                  routes,
                  getSidebar,
                  newLayout,
                  navbarRightSide: <UserMenu />,
                  logo,
                  routerConfig: {},
                }}
              />
            </FormattersProvider>
          </AlertProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default Root
