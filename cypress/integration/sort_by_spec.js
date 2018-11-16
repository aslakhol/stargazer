describe("Tests the filtering", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Searches for Skywalker and sorts by name", () => {
    cy.get(".form-control")
      .click()
      .type("Skywalker")
      cy.get("div.mb-3.row")
      .children().should("be.visible")
      .get(".btn-group").contains("Name").click()
      cy.get("div.mb-3.row")
      .children().should("be.visible")


    })
})