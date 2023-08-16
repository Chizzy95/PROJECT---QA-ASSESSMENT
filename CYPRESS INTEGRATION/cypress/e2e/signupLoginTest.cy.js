describe("Signup and Login Tests", () => {
    it("should be able to sign up, log in, and be redirected", () => {
        // Visit the signup page
        cy.visit("https://plug-frontend.vercel.app/register");
        //cypress fetches the First Name field
        cy.get(':nth-child(2) > :nth-child(1) > .sc-iBkjds > .input-fieldset > .input-field-container > .input-field')
            //cypress types the First Name character in the First Name field
            .type("Chibuzor");
        //cypress fetches the Last Name field
        cy.get(':nth-child(2) > :nth-child(2) > .sc-iBkjds > .input-fieldset > .input-field-container > .input-field')
            //cypress types a Last Name character in the Last Name field
            .type("Edison");
        //cypress fetches the Email Address field
        cy.get('.email-container > .sc-iBkjds > .input-fieldset > .input-field-container > .input-field')
            //cypress types the email character in the Email address Field
            .type("naomibrown5778@gmail.com");
        //cypress fetches the Password field
        cy.get('.password-field-column > .sc-iBkjds > .input-fieldset > .input-field-container > .input-field')
            //cypress types the Password in the password field
            .type("Naomi&78");
        //cypress fetches the "Show" button in the password field
        cy.get('.password-field-column > .sc-iBkjds > .input-fieldset > .input-field-container > .toggle-type-button')
            //cypress clicks "show" button
            .click();
        //cypress fetches the "confirm password" field
        cy.get(':nth-child(4) > :nth-child(2) > .sc-iBkjds > .input-fieldset > .input-field-container > .input-field')
            //cypress types the same password written in the password field into the "confirm password" field
            .type("Naomi&78");
        //cypress fetches the "show" button in the "confirm password" field
        cy.get(':nth-child(2) > .sc-iBkjds > .input-fieldset > .input-field-container > .toggle-type-button')
            //cypress clicks the "show" button
            .click();
        //cypress fetches the "Get Code" field
        cy.get('.sc-dkzDqf')
            //cypress clicks on the "get code" button
            .click();
        //Assertion: Verify error message for OTP error
        cy.get('.toast-title').should("be.visible");

        //Cypress Visits the Login page
        cy.visit("https://plug-frontend.vercel.app/login");
        //cypress fetches the "email address" field
        cy.get(':nth-child(2) > .input-fieldset > .input-field-container > .input-field')
            //cypress types the email address
            .type("naomibrown5778@gmail.com");
        //cypress fetches the "password" field
        cy.get('.password-container > .sc-iBkjds > .input-fieldset > .input-field-container > .input-field')
            //cypress enters the password in the "password field"
            .type("Naomi&78");
        //cypress fetches the "Login field"
        cy.get('.sc-dkzDqf')
            //cypress clicks the login button
            .click();
        // Assertion: Verify error message
        cy.contains('Error').should("be.visible");
        cy.contains('User not found').should("be.visible");




    });
})