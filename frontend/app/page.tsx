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
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Personalize Store</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Bem-vindo ao projeto Runs Arts! Transformando ideias em presentes únicos.
        </p>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nossos Destaques</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Produto 1 */}
            <div data-testid="product-card" className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100 group">
              <div className="h-64 bg-purple-50 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-purple-300 font-medium">Imagem do Produto</span>
              </div>

              <h3 data-testid="product-name" className="text-lg font-bold text-gray-700">
                Caneca Alça Colorida
              </h3>

              <p data-testid="product-price" className="text-purple-600 font-bold text-xl mt-2">
                R$ 35,00
              </p>

              <button data-testid="add-to-cart-button" className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg group-hover:bg-purple-600 transition">
                Ver detalhes
              </button>
            </div>

            {/* Card Produto 2 */}
            <div data-testid="product-card" className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100 group">
              <div className="h-64 bg-purple-50 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-purple-300 font-medium">Camiseta Estampada</span>
              </div>
              <h3 className="text-lg font-bold text-gray-700">Camiseta Algodão Premium</h3>
              <p className="text-purple-600 font-bold text-xl mt-2">R$ 55,00</p>
              <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg group-hover:bg-purple-600 transition">
                Ver detalhes
              </button>
            </div>

            {/* Card Produto 3 */}
            <div data-testid="product-card" className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100 group">
              <div className="h-64 bg-purple-50 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-purple-300 font-medium">Caderno Argolado</span>
              </div>
              <h3 className="text-lg font-bold text-gray-700">Planner 2026</h3>
              <p className="text-purple-600 font-bold text-xl mt-2">R$ 45,00</p>
              <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg group-hover:bg-purple-600 transition">
                Ver detalhes
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}