describe('Visual Regression Tests', () => {
  it('visit website and compre', () => {
      cy.visit('https://example.com/')
      cy.matchImageSnapshot()
  })  
})