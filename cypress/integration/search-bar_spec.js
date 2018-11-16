describe("Tests the searchbar", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Focuses the searchbar on load",  () => {
    cy.focused()
      .should("have.class", "form-control")
  })

  it("Accepts input and shows output", () => {
    cy.get(".form-control").click()
      .type("Darth Vader")
      .should("have.value", "Darth Vader")
  })

  it("Types input and deletes it", () => {
    cy.get(".form-control").click()
      .type("Darth Vader")
      .focused().clear()
    cy.get("div.mb-3.row").children().should("be.visible")
  })
  
})


/*<div class="col-sm-6 col-md-3">

    cy.get("input").click()
      .type("Darth Vader")
      .should("have.value", "Darth Vader")
      cy.get("mb-3 row")
*/