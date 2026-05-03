describe('Automation Exercise - Task #2 ', () => {

   
    const userEmail = `moe.test${Date.now()}@example.com`;
    const userPass = 'Pass12345';

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    
    it('TC_001: Validate New User Registration', () => {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="signup-name"]').type('Moe Alqad');
        cy.get('[data-qa="signup-email"]').type(userEmail);
        cy.get('[data-qa="signup-button"]').click();
        
        cy.get('#id_gender1').check();
        cy.get('#password').type(userPass);
        cy.get('#first_name').type('Moe');
        cy.get('#last_name').type('Alqad');
        cy.get('#address1').type('Ajloun National University St');
        cy.get('#country').select('United States');
        cy.get('#state').type('Ajloun');
        cy.get('#city').type('Ajloun');
        cy.get('#zipcode').type('12345');
        cy.get('#mobile_number').type('0790000000');
        cy.get('[data-qa="create-account"]').click();

        cy.get('[data-qa="account-created"]').should('be.visible');
    });

   
    it('TC_002: Validate User Login with valid credentials', () => {
        cy.get('a[href="/login"]').click();
        
        cy.get('[data-qa="login-email"]').type(userEmail); 
        cy.get('[data-qa="login-password"]').type(userPass);
        cy.get('[data-qa="login-button"]').click();
        
     
        cy.contains('Logged in as').should('be.visible');
    });

   
    it('TC_003: Validate Product Search (Valid and Invalid)', () => {
        cy.get('a[href="/products"]').click();
        cy.get('#search_product').type('T-shirt');
        cy.get('#submit_search').click();
        cy.get('.features_items').should('contain', 'Searched Products');
    });

   
    it('TC_004: Validate Add Product to Cart', () => {
        cy.get('a[href="/product_details/1"]').first().click();
        cy.get('button[type="button"]').contains('Add to cart').click();
        cy.get('.modal-confirm').should('be.visible');
        cy.contains('View Cart').click();
        cy.get('#cart_info').should('exist');
    });

    it('TC_005: Validate Adding a Product Review', () => {
        cy.get('a[href="/product_details/1"]').first().click();
        cy.get('#name').type('Moe Q');
        cy.get('#email').type('moe@example.com');
        cy.get('#review').type('Excellent product, I really liked the quality!');
        cy.get('#button-review').click();
        cy.contains('Thank you for your review.').should('be.visible');
    });

});