describe('github-search', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.url().should('include', '/finder');
  });
});
