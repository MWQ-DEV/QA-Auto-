import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user is logged in", () => {
  cy.visit("https://www.saucedemo.com/");

  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("user opens menu", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("clicks logout", () => {
  cy.get("#logout_sidebar_link").click();
});

Then("user should return to login page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
});