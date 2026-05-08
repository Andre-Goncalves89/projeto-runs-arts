# language: pt
Funcionalidade: Vitrine da Runs Arts
  Como um usuário da Personalize Store
  Quero visualizar os produtos disponíveis
  Para escolher o que desejo comprar

  Cenário: Visualizar produtos na página inicial
    Dado que acesso a página principal de Runs Arts
    Então devo ver o título "Personalize Store"

  Cenário: Validar a exibição do menu dropdown de produtos
    Dado que acesso a página principal de Runs Arts
    Quando passo o mouse sobre o menu "Produtos"
    Então devo visualizar as opções "Canecas", "Camisetas" e "Papelaria"

  Cenário: Validar a renderização dos cards de produtos
    Dado que acesso a página principal de Runs Arts
    Então devo visualizar 3 cards de produtos na vitrine
    E o produto "Caneca Alça Colorida" deve exibir o preço "R$ 35,00"