// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-audit/commands'

// https://mfrachet.github.io/cypress-audit/guides/lighthouse/good-to-know.html#lighthouse-scores-may-be-different-between-local-run-and-cypress-audit
// https://github.com/GoogleChrome/lighthouse/blob/main/core/config/constants.js
const ChromeLighthouseDefaultOptions = {
  formFactor: 'desktop',
  screenEmulation: {
    width: 1350,
    height: 940,
    deviceScaleRatio: 1,
    mobile: false,
    disable: false,
  },
  throttling: {
    rttMs: 40,
    throughputKbps: 10 * 1024,
    cpuSlowdownMultiplier: 1,
    requestLatencyMs: 0, // 0 means unset
    downloadThroughputKbps: 0,
    uploadThroughputKbps: 0,
  },
}

Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.url().should('include', '/auth')
  cy.get('input[name="user"]').type('demo@pst.asseco.com')
  cy.get('input[name="password"]').type('demo')
  cy.contains('Iniciar Sessão').click()
  cy.url().should('not.include', '/auth')
  /* cy.window()
    .then((window) => window.localStorage.getItem('persist:root'))
    .as('localStorage') */
})

/* Cypress.Commands.add('setStorage', function () {
  cy.window().then((window) => window.localStorage.setItem('persist:root', this.localStorage))
}) */

Cypress.Commands.add('lighthouseAudit', () => {
  cy.lighthouse(
    {
      // Performance main metrics
      performance: 90, // score 0-100
      'first-contentful-paint': 1800, // ms
      'speed-index': 3400, // ms
      'largest-contentful-paint': 2500, // ms
      'total-blocking-time': 200, // ms
      'cumulative-layout-shift': 0.1,
      // Others
      'server-response-time': 800, // ms
      'mainthread-work-breakdown': 4000, // ms
      interactive: 5000, // ms
      'total-byte-weight': 5120000, // 5000 KiB
      'dom-size': 800, // number of DOM elements
    },
    ChromeLighthouseDefaultOptions
  )
})
