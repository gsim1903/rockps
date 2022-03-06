describe('Display appropriate layout', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to see a header', () => {
    cy.get('[data-cy=header]').should('contain', 'Rock Paper Scissors')
  })

  it('is expected to prompt user for input', () => {
    cy.get('[data-cy=user]').should('contain', 'Please enter your guess:')
  })

  it('is expected users guess will be rock', () => {
    cy.get('[type="radio"]').check('Rock')
  })


})


//    cy.get('[data-cy=user_guess]').should('contain', 'Paper')
