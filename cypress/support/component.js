// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'
import { Profiler } from 'react'

import { Provider } from 'react-redux'
import store from 'store/store'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@asseco-web/theme'
import '@asseco-web/theme/index.css'
import { BrowserRouter } from 'react-router-dom'

Cypress.Commands.add('mount', (children) =>
  mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
)

Cypress.Commands.add('measurePerformance', (children) => {
  let duration = 0
  let count = 0
  const handleRender = (id, phase, actualTime, baseTime, startTime, commitTime, interactions) => {
    /* console.log(`${id}'s ${phase} phase:`)
    console.log(`Actual time: ${actualTime}`)
    console.log(`Base time: ${baseTime}`)
    console.log(`Start time: ${startTime}`)
    console.log(`Commit time: ${commitTime}`)
    console.log(`interactions: ${interactions}`) */
    duration += actualTime
    count += 1
    console.log('handleRender', { duration, count })
  }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Profiler id="profiler" onRender={handleRender}>
            {children}
          </Profiler>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  ).then(() => {
    return { duration, count }
  })
})

// Example use:
// cy.mount(<MyComponent />)
