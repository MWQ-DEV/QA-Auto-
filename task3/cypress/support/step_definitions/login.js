import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user opens login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("user enters username {string}", (username) => {
    cy.get('[data-test="username"]').type(username);
});

When("user enters password {string}", (password) => {
    cy.get('[data-test="password"]').type(password);
});

When("clicks login button", () => {
    cy.get('[data-test="login-button"]').click();
});

Then("user should navigate to products page", () => {
    cy.url().should("include", "inventory");
});

Then("error message should appear", () => {
    cy.get('[data-test="error"]').should("be.visible");
});