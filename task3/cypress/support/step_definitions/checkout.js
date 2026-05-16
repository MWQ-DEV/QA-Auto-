import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user logged in successfully", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
});

When("user adds a product to cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When("user opens cart", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
});

When("user clicks checkout", () => {
    cy.get('[data-test="checkout"]').click();
});

When("user enters checkout information", () => {
    cy.get('[data-test="firstName"]').type("Mohammad");
    cy.get('[data-test="lastName"]').type("Test");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
});

Then("checkout overview page should appear", () => {
    cy.url().should("include", "checkout-step-two");
});