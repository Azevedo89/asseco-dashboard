import * as views from './views'

const exposes = {
  './init': './src/exposes/init.js',
  ...views,
}

export default exposes
