describe('Visual Regression Tests', () => {
  it('visit website and compre', () => {
      cy.visit('https://example.com/')
      cy.matchImageSnapshot()
  })
  it('should match a single elements', () => {
    cy.visit('https://example.com/')
    cy.get('h1').matchImageSnapshot()
  })
})