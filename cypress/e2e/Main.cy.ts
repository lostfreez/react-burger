describe("service is available", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("test available on localhost:3000", function () {
    cy.get('[class*="Main_sections"]').should("be.visible");
  });
  it("test modal", function () {
    cy.get('[class*="Main_sections"]').should("be.visible");
    cy.get('[class*="Card_card"]').first().click();
    cy.contains("Детали ингридиента").click();
    cy.get('[class*="Modal_close"]').click();
    cy.get('[class*="Main_sections"]').should("be.visible");
  });
  it("test drag and drop", function () {
    const dataTransfer = new DataTransfer();
    cy.get('[class*="Card_card"]')
      .first()
      .trigger("dragstart", { dataTransfer });
    cy.get('[class*="SectionConstructor_section"]').trigger("drop", {
      dataTransfer,
    });
  });
  it("test make order", function () {
    const dataTransfer = new DataTransfer();
    cy.get('[class*="Main_sections"]').should("be.visible");
    cy.get('[class*="Card_cardDrag"]')
      .first()
      .trigger("dragstart", { dataTransfer });
    cy.get('[class*="SectionConstructor_section"]').trigger("drop", {
      dataTransfer,
    });
    cy.get('[class*="Card_cardDrag"]')
      .eq(2)
      .trigger("dragstart", { dataTransfer });
    cy.get('[class*="SectionConstructor_section"]').trigger("drop", {
      dataTransfer,
    });
    cy.contains("Оформить заказ").click();
    cy.contains("Email").type("test9999@mail.ru");
    cy.contains("Пароль").type("test9999@mail.ru");
    cy.contains("Войти").click();
    cy.contains("Оформить заказ").click();
    cy.get('[class*="Modal_modal"]').should("be.visible");
  });
});
