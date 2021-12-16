/// <reference types="Cypress"

describe('Register test', () => {
    
    it('Register with empty fields', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        // cy.get('#first-name').type('Proba');
        // cy.get('#last-name').type('Jedan');
        // cy.get('#email').type('Proba@jedan.com');
        // cy.get('#password').type('proba1234');
        // cy.get('#password-confirmation').type('proba1234');
        // cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });
    
    it('Register without email', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        // cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

    it('Register without first name', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        // cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

    it('Register without last name', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        // cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

    it('Register without password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        // cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });
    it('Register without password confirmation', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        // cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

    it('Register without Accepting terms and conditions', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        // cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

    it('Register with empty fields', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

    it('Register with same email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });
   
    it('Valid registration', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(2).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        //cy.get('.form-control').eq(1).click();
        cy.get('#first-name').type('Proba');
        cy.get('#last-name').type('Jedan');
        cy.get('#email').type('Proba@jedan1.com');
        cy.get('#password').type('proba1234');
        cy.get('#password-confirmation').type('proba1234');
        cy.get('.form-check-input').eq(0).click();
        cy.get('button[type="submit"]').click();
    });

});
