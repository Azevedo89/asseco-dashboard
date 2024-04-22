describe('dashboard', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('passes lighthouse audit', () => {
    cy.lighthouseAudit()
  })
})
