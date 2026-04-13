/// <reference types="cypress"/>

describe('Task#1: Element Selection Strategy', () => {
  it('should identify all required elements on the register page', () => {
    
    cy.visit('https://demowebshop.tricentis.com/register')
  
    cy.get('.ico-login'); 
    cy.get('#small-searchterms');

    // --- عناصر القائمة الجانبية والعلوية (Navigation & Sidebar) ---

    // JEWELRY link in top menu (Using Attribute and Text)
    cy.get('.top-menu [href="/jewelry"]');

    // Gift Cards link in Categories (Using contains for text)
    cy.get('.side-2').contains('Gift Cards');

    // Tricentis link under Manufacturers (Using partial href)
    cy.get('a[href*="tricentis"]');

    // --- صفحة التسجيل (Registration Form) ---

    // Register Heading (Using Tag and Text)
    cy.get('h1').contains('Register');

    // Gender Radio Button (Male) (Using ID)
    cy.get('#gender-male');

    // Last Name Input (Using ID) - المشار إليه بالسهم الأحمر
    cy.get('#LastName');

    // Email Input Label (Using for attribute)
    cy.get('label[for="Email"]');

    // Register Button at the bottom (Using ID)
    cy.get('#register-button');

    // --- عناصر أسفل الصفحة والرسائل (Newsletter & Footer) ---

    // Newsletter Input field (Using ID) - المشار إليه بالسهم الأحمر الثاني
    cy.get('#newsletter-email');

    // Subscribe Button (Using ID)
    cy.get('#newsletter-subscribe-button');

    // MY ACCOUNT link in footer (Using Header tag/Class)
    cy.get('.footer-menu-strong').contains('My account');

    // Contact us link in footer (Using href)
    cy.get('a[href="/contactus"]');
  });
});