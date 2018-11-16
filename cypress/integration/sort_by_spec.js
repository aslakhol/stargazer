describe("Tests the order by", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Searches for Skywalker and sorts by name", () => {
    cy.get(".form-control")
      .click()
      .type("Skywalker").get("div.mb-3.row")
      .get("h5.card-title").first().contains("Luke Skywalker")
      .get(".btn-group").contains("Name").click()
      .wait(1000)
      .get("h5.card-title").first().contains("Anakin Skywalker")
  })
})
