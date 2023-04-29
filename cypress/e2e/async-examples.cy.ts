describe("Async examples", () => {
  it("Automatically waits until object is in dom", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.contains("Clicked");
  });

  it("Overriding timeout", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.contains("Clicked", { timeout: 1000 }).should("not.exist");
  });

  it("Automatically waits until buttons are actionable", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.get("button").click();
    cy.contains("Button clicks: 2");
  });

  it("Can force clicking on a disabled button", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.get("button").click({ force: true });
    cy.contains("Button clicks: 1");
  });

  it("Waits incorrectly", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.contains("Button clicks")
      .invoke("text")
      .then((text) => text.split(": ")[1])
      .should("eq", "1");
  });

  it("Waits correctly", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.contains("Button clicks")
      .invoke("text")
      .should((text) => {
        const count = text.split(": ")[1];
        expect(count).eq("1");
      });
  });
});

export {};
