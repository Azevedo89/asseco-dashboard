describe('consult', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/consult')
  })

  it('passes lighthouse audit', () => {
    cy.lighthouseAudit()
  })
})
