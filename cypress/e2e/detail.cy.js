describe('detail', () => {
  before(() => {
    cy.login()
  })

  beforeEach(() => {
    cy.visit('/detail')
  })

  it('passes lighthouse audit', () => {
    cy.lighthouseAudit()
  })
})
