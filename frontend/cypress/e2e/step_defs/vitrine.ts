/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página principal de Runs Arts", () => {
  cy.visit("http://localhost:3000");
});

Then("devo ver a mensagem {string}", function (string) {
  return string
});

When("passo o mouse pelos ítens do menu", () => {
  // Dispara o evento de mouseover em cada um dos itens para simular o hover
  cy.get("[data-test='menu-inicio']").trigger("mouseover");
  cy.get("[data-test='menu-loja']").trigger("mouseover");
  cy.get("[data-test='menu-sobre-nos']").trigger("mouseover");
  cy.get("[data-test='menu-contato']").trigger("mouseover");
});


Then("devo visualizar as opções {string}, {string}, {string} e {string}", function (item1: string, item2: string, item3: string, item4: string) {
  // Verificamos se os links estão visíveis e contêm o texto correto
  cy.get("[data-test='menu-inicio']").contains(item1);
  cy.get("[data-test='menu-loja']").contains(item2);
  cy.get("[data-test='menu-sobre-nos']").contains(item3);
  cy.get("[data-test='menu-contato']").contains(item4);
});

Then("devo ver o título {string}", (titulo: string) => {
  // O Cypress vai procurar um h1 que contenha o texto exato
  cy.get('h1').should('contain.text', titulo);
});

Then("devo visualizar {int} cards de produtos na vitrine", (quantidade: number) => {
  // Agora buscamos pelo ID técnico, não importa o que esteja escrito no botão
  cy.get('[data-testid="product-card"]').should('have.length', quantidade);
});

Then("o produto {string} deve exibir o preço {string}", (nomeEsperado: string, precoEsperado: string) => {
  // Buscamos o card que contém o nome específico e verificamos o preço dentro dele
  cy.get('[data-testid="product-card"]').each(($el) => {
    const name = $el.find('[data-testid="product-name"]').text().trim();

    if (name === nomeEsperado) {
      cy.wrap($el).find('[data-testid="product-price"]').should('contain.text', precoEsperado);
    }
  });
});