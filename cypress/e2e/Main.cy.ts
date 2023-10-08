describe("service is available", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.get('[class*="Main_sections"]').as("mainSections");
    cy.get('[class*="Card_card"]').as("card");
    cy.get('[class*="SectionConstructor_section"]').as("constructorSection");
  });

  it("test available on baseUrl", function () {
    cy.get("@mainSections").should("be.visible");
  });

  it("test modal", function () {
    cy.get("@mainSections").should("be.visible");
    cy.get("@card").first().click();
    cy.contains("Детали ингридиента").click();
    cy.get('[class*="Modal_close"]').click();
    cy.get("@mainSections").should("be.visible");
  });

  it("test drag and drop", function () {
    const dataTransfer = new DataTransfer();
    cy.get("@card").first().trigger("dragstart", { dataTransfer });
    cy.get("@constructorSection").trigger("drop", { dataTransfer });
  });

  it("test make order", function () {
    const dataTransfer = new DataTransfer();
    cy.get("@mainSections").should("be.visible");
    cy.get("@card").first().trigger("dragstart", { dataTransfer });
    cy.get("@constructorSection").trigger("drop", { dataTransfer });
    cy.get("@card").eq(2).trigger("dragstart", { dataTransfer });
    cy.get("@constructorSection").trigger("drop", { dataTransfer });
    cy.contains("Оформить заказ").click();
    cy.contains("Email").type("test9999@mail.ru");
    cy.contains("Пароль").type("test9999@mail.ru");
    cy.contains("Войти").click();
    cy.contains("Оформить заказ").click();
    cy.get('[class*="Modal_modal"]').should("be.visible");
  });
});
