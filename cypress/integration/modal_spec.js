describe("Tests the filtering", () => {

  beforeEach(() => {
    cy.visit("localhost:3000")
  })

  it("Finds a card, clicks it to open modal and closes modal, ", () => {
    cy.get(".form-control").click()
      .type("IG-88").get("div.card").click()
      .get("div.modal.fade.show").click("topLeft")
      .get("h5.card-title").contains("IG-88")
      .get("h5.card-title").should("not.contain", "Lars")
  })
})