describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('Add list items', () => {
    // Checks items inputted are added to the list
    cy.get('input[id*="add-item"]').type('Peppers');     // Types 'Pepper' into textbox
    cy.get('input[id*="sub-btn"]').click();    // Clicks 'Add-Item' button
    cy.get('li').contains('Peppers');    // Checks item has been added to list

    cy.get('input[id*="add-item"]').type('Milk');
    cy.get('input[id*="sub-btn"]').click();
    cy.get('li').contains('Milk');

    cy.get('input[id*="add-item"]').type('Bread');
    cy.get('input[id*="sub-btn"]').click();
    cy.get('li').contains('Bread');
  })

  it('Checks adding item with no input', () => {
    // Checks item is not added when no text is inputted into the textbox

    cy.reload();    // Reloads page

    cy.get('input[id*="add-item"]').should('have.value','');    // Checks value equals zero
    cy.get('input[id*="sub-btn"]').click();    // Clicks 'Add-Item' button
    cy.get('li').should('have.length', 0);    // Checks no list item has been added
  })

})