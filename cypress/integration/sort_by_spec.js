describe("Tests the filtering", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Searches for Lars and sorts by name", () => {
    cy.get(".form-control")
      .click()
      .type("Lars")  
    })
})