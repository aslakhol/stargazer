describe("Tests pagination", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Finds the pagination button and goes to next page", () => {
    cy.get(".form-control").click()
      .type("Se")
      .get("h5.card-title").first().contains("Sebulba")
      .get("ul.pagination").contains("2").click()
      .wait(1000)
      .get("h5.card-title").first().contains("Zam Wesell")
  })
})