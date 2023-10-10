describe('My First page test', () => {
    beforeEach(() => {
      cy.visit('index.html')
    })

    it('Check if button has class:', () => {
        cy.get('.btn').should('have.class', 'btn-outline-warning');
      })

    it('Checking JSX paragraph', () => {
        cy.get('button').click();
        cy.get('#apiShow').should('have.class', 'bg-warning');
    })

})
describe('My Second page test', () => {
    beforeEach(() => {
        cy.visit('feelings.html')
    })
    it('Checks loading image:', () => {
        cy.get('button').click();
        cy.wait(200);
        cy.get('img').should('have.attr', 'src');
    })
})

describe('My Third page test', () => {
    beforeEach(() => {
        cy.visit('form.html')
    })

    it('Checks form action:', () => {
        cy.get('form').submit();
    })

    it('Checks paragraph text', () => {
        cy.get('button').click();
        cy.wait(1000);
        cy.get('#countdown').should('have.text', '364 Days left to send the email again ');

    })
})
  