export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 bg-white shadow-sm gap-4 md:gap-0">
        <div className="text-2xl font-bold text-purple-700">Runs Arts</div>

        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 items-center font-medium text-gray-600">
          <li><a href="#" className="hover:text-purple-600 transition">Home</a></li>

          {/* Dropdown de Produtos */}
          <li className="relative group cursor-pointer py-2">
            <span className="hover:text-purple-600 flex items-center gap-1">
              Produtos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <ul className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-lg py-2 hidden group-hover:block z-10">
              <li><a href="#" className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700">Canecas</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700">Camisetas</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700">Papelaria</a></li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-purple-600 transition">Sobre</a></li>
          <li><a href="#" className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">Contato</a></li>
        </ul>
      </nav>

      {/* Hero Section para o QA testar */}
      <main className="flex flex-col items-center justify-center mt-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-azul-lunar-medio mb-4">
          Personalize Store
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Bem-vindo ao projeto Runs Arts! Transformando ideias em presentes únicos.
        </p>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-cinza-grafite mb-10 text-center">Nossos Destaques</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Caneca */}
            <div data-testid="product-card" className="bg-white p-6 rounded-2xl shadow-sm border border-azul-lunar-claro/30 transition-all duration-300">
              <div className="h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-azul-lunar-claro/10">
                <img
                  src="/images/caneca-runs-arts.webp"
                  alt="Caneca Personalizada"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 data-testid="product-name" className="text-xl font-bold text-cinza-grafite mb-2">
                Caneca Alça Colorida
              </h3>

              <p data-testid="product-price" className="text-dourado-suave font-black text-2xl">
                R$ 35,00
              </p>

              <button
                data-testid="add-to-cart-button"
                className="w-full mt-6 bg-azul-lunar-medio text-white py-3 rounded-lg font-bold hover:bg-cinza-grafite transition-colors duration-300 cursor-pointer"
              >
                Ver detalhes
              </button>
            </div>

            {/* Card 2: Camiseta */}
            <div data-testid="product-card" className="bg-white p-6 rounded-2xl shadow-sm border border-azul-lunar-claro/30 transition-all duration-300">
              <div className="h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-azul-lunar-claro/10">
                <img
                  src="/images/camisa-runs-arts.webp"
                  alt="Camiseta Algodão Premium"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 data-testid="product-name" className="text-xl font-bold text-cinza-grafite mb-2">
                Camiseta Algodão Premium
              </h3>

              <p data-testid="product-price" className="text-dourado-suave font-black text-2xl">
                R$ 55,00
              </p>

              <button
                data-testid="add-to-cart-button"
                className="w-full mt-6 bg-azul-lunar-medio text-white py-3 rounded-lg font-bold hover:bg-cinza-grafite transition-colors duration-300 cursor-pointer"
              >
                Ver detalhes
              </button>
            </div>

            {/* Card 3: Papelaria */}
            <div data-testid="product-card" className="bg-white p-6 rounded-2xl shadow-sm border border-azul-lunar-claro/30 transition-all duration-300">
              <div className="h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-azul-lunar-claro/10">
                <img
                  src="/images/planner-runs-arts.webp"
                  alt="Papelaria Criativa - Planner"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 data-testid="product-name" className="text-xl font-bold text-cinza-grafite mb-2">
                Planner 2026
              </h3>

              <p data-testid="product-price" className="text-dourado-suave font-black text-2xl">
                R$ 45,00
              </p>

              <button
                data-testid="add-to-cart-button"
                className="w-full mt-6 bg-azul-lunar-medio text-white py-3 rounded-lg font-bold hover:bg-cinza-grafite transition-colors duration-300 cursor-pointer"
              >
                Ver detalhes
              </button>
            </div>

          </div>
        </section>
        {/* Footer Completo Horizontal */}
        <footer className="w-full bg-cinza-grafite text-bege-aveia py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-bege-aveia/10 pb-10">

              <div className="max-w-xs">
                <h3 className="text-2xl font-bold mb-3">Run Cards</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Pequenos detalhes, grandes memórias. Produtos feitos com carinho para eternizar momentos.
                </p>
              </div>

              <div className="flex gap-12">
                <div>
                  <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-dourado-suave">Navegação</h4>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li><a href="#" className="hover:text-dourado-suave transition">Início</a></li>
                    <li><a href="#" className="hover:text-dourado-suave transition">Produtos</a></li>
                    <li><a href="#" className="hover:text-dourado-suave transition">Sobre nós</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-dourado-suave">Contato</h4>
                  <p className="text-sm opacity-80 mb-1">Itaim Paulista, São Paulo - SP</p>
                  <p className="text-sm opacity-80 font-medium">WhatsApp: (11) 99709-2920</p>
                </div>
              </div>

            </div>

            <div className="pt-8 text-center text-xs opacity-40">
              © 2026 Run Cards - Todos os direitos reservados.
            </div>
          </div>
        </footer>

        {/* Botão Flutuante WhatsApp - Posicionado acima do Footer */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center group"
          title="Fale Conosco no WhatsApp"
        >
          <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Dúvidas? Chame aqui!
          </span>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886 0 2.125.593 3.73 1.594 5.396l-.979 3.574 3.676-.962z" />
          </svg>
        </a>
      </main>
    </div>
  );
}