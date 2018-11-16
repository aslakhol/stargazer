describe("Tests the filtering", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Searches for Lars and finds results", () => {
    cy.get(".form-control")
      .click()
      .type("Lars")
    cy.get("div.mb-3.row")
      .children().should("be.visible")
    cy.get(".btn-group")
      .contains("Male").click()
    cy.get(".btn-group")
      .contains("Hermaphrodite").click()
    cy.get(".btn-group")
      .contains("N/A").click()
    cy.get("h5.card-title")
      .contains("Beru Whitesun lars")
    cy.get("h5.card-title")
      .should("not.contain", "Owen Lars")
  })
})
/*

  it("Filters on female and expects 1 result", () => {
  })
*/