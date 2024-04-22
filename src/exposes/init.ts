import { routes } from './routes'

const configuration = () => ({
  appName: 'OPERATOR',
  routes,
  resourceBundle: {
    module: 'retailMarket',
    collection: 'messages_RetailMarket',
  },
})

export default configuration
