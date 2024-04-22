describe('search', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/consult/search')
  })

  it('passes lighthouse audit', () => {
    cy.lighthouseAudit()
  })
})
