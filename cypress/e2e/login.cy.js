///<reference types="cypress" />

describe('login into the app', () => {
  const user = 'demo@pst.asseco.com'
  const password = 'demo'

  beforeEach(() => {
    cy.visit('/')
  })

  it('pass lighthouse audit', () => {
    cy.lighthouseAudit()
  })

  it('displays both inputs', () => {
    cy.contains('Utilizador').parents('.MuiFormControl-root').find('input').should('exist')
    cy.contains('Password').parents('.MuiFormControl-root').find('input').should('exist')
  })

  it('clears both inputs', () => {
    cy.get('input[name="user"]').type(user).clear().should('not.have.value')
    cy.get('input[name="password"]').type(password).clear().should('not.have.value')
  })

  it('shows error when empty User field', () => {
    cy.contains('Password').parents('.MuiFormControl-root').find('input').type(password).should('have.value', password)
    cy.contains('Iniciar Sessão').click()
    cy.contains('Utilizador')
      .parents('.MuiFormControl-root')
      .contains('Campo de preenchimento obrigatório')
      .should('exist')
    cy.get('input[name="user"]').parents('.MuiOutlinedInput-root').should('have.class', 'Mui-error')
    cy.contains('Password').parents('.MuiFormControl-root').find('input').clear()
  })

  it('shows error when empty Password field', () => {
    cy.contains('Utilizador').parents('.MuiFormControl-root').find('input').type(user).should('have.value', user)
    cy.contains('Iniciar Sessão').click()
    cy.contains('Password')
      .parents('.MuiFormControl-root')
      .contains('Campo de preenchimento obrigatório')
      .should('exist')
    cy.get('input[name="password"]').parents('.MuiOutlinedInput-root').should('have.class', 'Mui-error')
    cy.contains('Utilizador').parents('.MuiFormControl-root').find('input').clear()
  })

  it('toggles show password correctly', () => {
    cy.contains('Password')
      .parents('.MuiFormControl-root')
      .find('input[type="password"]')
      .type(password)
      .should('have.value', password)
    cy.contains('Password').parents('.MuiFormControl-root').find('.MuiInputAdornment-root > button').click()
    cy.contains('Password').parents('.MuiFormControl-root').find('input[type="text"]').should('have.value', password)
    cy.contains('Password').parents('.MuiFormControl-root').find('.MuiInputAdornment-root > button').click()
    cy.contains('Password').parents('.MuiFormControl-root').find('input').should('have.value', password)
  })

  it('logins into the application', () => {
    cy.contains('Utilizador')
      .parents('.MuiFormControl-root')
      .find('input')
      .clear()
      .type(user)
      .should('have.value', user)
    cy.contains('Password')
      .parents('.MuiFormControl-root')
      .find('input')
      .clear()
      .type(password)
      .should('have.value', password)
    cy.contains('Iniciar Sessão').click()
    cy.url().should('not.include', '/auth')
  })
})
