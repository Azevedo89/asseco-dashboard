const { defineConfig } = require('cypress')
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',

  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
    },
  },

  video: false,

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)

      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })

      on('task', {
        lighthouse: lighthouse(),
        pa11y: pa11y(),
      })

      return {
        browsers: [
          ...config.browsers,
          /* {
            name: 'chrome',
            family: 'chromium',
            displayName: 'Chrome',
            version: '110.0.5481.78',
            path: 'C:\\Users\\10000203\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
            majorVersion: 110,
          }, */
        ],
      }
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})
