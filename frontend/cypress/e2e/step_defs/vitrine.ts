/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página principal de Runs Arts", () => {
  cy.visit("http://localhost:3000");
});

When("passo o mouse sobre o menu {string}", (menu: string) => {
  // Encontramos o item da lista, pegamos o sub-menu (ul) 
  // e removemos a classe que o mantém invisível
  cy.contains('li', menu)
    .find('ul')
    .invoke('removeClass', 'hidden') // Remove o display: none
    .invoke('addClass', 'block');    // Força o display: block
});

Then("devo visualizar as opções {string}, {string} e {string}", (item1: string, item2: string, item3: string) => {
  // Verificamos se os links estão visíveis e contêm o texto correto
  cy.contains('a', item1).should('be.visible');
  cy.contains('a', item2).should('be.visible');
  cy.contains('a', item3).should('be.visible');
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