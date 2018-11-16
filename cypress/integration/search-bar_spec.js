describe("Tests the searchbar", () => {

  it("Focuses the searchbar on load",  () => {
    cy.visit("localhost:3000")
    
    cy.focused()
      .should("have.class", "form-control")
  })

  it("Accepts input", () => {
    cy.visit("localhost:3000")

    cy.get(".form-control").click()
      .type("Darth Vader")
      .should("have.value", "Darth Vader")
      
  })

    
})


/*<div class="col-sm-6 col-md-3">

    cy.get("input").click()
      .type("Darth Vader")
      .should("have.value", "Darth Vader")
      cy.get("mb-3 row")
*/