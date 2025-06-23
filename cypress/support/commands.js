// Cypress.Command.add("validateElementText",(selector,expectedText)=>{
//     selector.should("containText",expectedText);
// });

// Cypress.Command.add("enterCredential",(UserName,password)=>{
//     cy . get('').clear().type(UserName);
//     cy . get('').clear().type(password);
// });

// Cypress.Command.add("clickButton",(selector)=>{
//     selector.click();
// });

Cypress.Commands.add("selectDropdown", (selector, optionText) => {
  cy.get(selector).select(optionText);
});

Cypress.Commands.add('selectState', (stateName) => {
  cy.get(selectState).select(stateName);
});
