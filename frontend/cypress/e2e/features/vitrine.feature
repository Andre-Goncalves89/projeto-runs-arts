# language: pt
Funcionalidade: Vitrine da Runs Arts
  Como um usuário da Personalize Store
  Quero visualizar os produtos disponíveis
  Para escolher o que desejo comprar

  Cenário: Visualizar produtos na página inicial
    Dado que acesso a página principal de Runs Arts
    Então devo ver a mensagem "Pequenos detalhes, grandes memórias."
  Cenário: Validar a exibição do menu de produtos
    Dado que acesso a página principal de Runs Arts
    Quando passo o mouse pelos ítens do menu
    Então devo visualizar as opções "Início", "Loja", "Sobre nós" e "Contato"

  Cenário: Validar a renderização dos cards de produtos
    Dado que acesso a página principal de Runs Arts
    Então devo visualizar 3 cards de produtos na vitrine
    E o produto "Caneca Alça Colorida" deve exibir o preço "R$ 35,00"