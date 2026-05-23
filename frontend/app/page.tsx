export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header / Navbar - Novo Azul Lunar */}
      <header className="bg-[#5B809B] text-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            Run Arts
          </div>

          {/* Navegação Minimalista */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-bege-aveia transition">Início</a>
            <a href="#" className="hover:text-bege-aveia transition">Loja</a>
            <a href="#" className="hover:text-bege-aveia transition">Sobre nós</a>
            <a href="#" className="hover:text-bege-aveia transition">Contato</a>
          </nav>

          {/* Espaçador para manter o equilíbrio sem o carrinho */}
          <div className="w-10 md:hidden"></div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center px-4 text-center">
        {/* Hero Section */}
        <section className="mt-20 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5B809B] mb-4 italic">
            Pequenos detalhes, grandes memórias.
          </h1>
          <p className="text-xl text-cinza-grafite max-w-2xl mx-auto opacity-80">
            Produtos feitos com carinho para eternizar momentos e transformar ideias em arte.
          </p>
        </section>

        {/* Vitrine de Produtos */}
        <section className="max-w-6xl mx-auto px-4 py-12 w-full">
          <h2 className="text-2xl font-bold text-cinza-grafite mb-12 text-center uppercase tracking-widest">Nossas Categorias</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Caneca */}
            <div data-testid="product-card" className="bg-cinza-gelo p-6 rounded-2xl shadow-sm border border-azul-lunar-claro/30 transition-all duration-300 hover:shadow-md">
              <div className="h-64 rounded-xl mb-6 overflow-hidden flex items-center justify-center bg-azul-lunar-claro/10">
                <img 
                  src="/images/caneca-runs-arts.webp" 
                  alt="Caneca Personalizada" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 data-testid="product-name" className="text-2xl font-serif text-cinza-grafite mb-4">Caneca</h3>
              <button data-testid="add-to-cart-button" className="bg-[#5B809B] text-white px-8 py-2 rounded-lg font-medium hover:brightness-110 transition-all cursor-pointer">
                Ver produtos
              </button>
            </div>

            {/* Card 2: Camiseta */}
            <div data-testid="product-card" className="bg-cinza-gelo p-6 rounded-2xl shadow-sm border border-azul-lunar-claro/30 transition-all duration-300 hover:shadow-md">
              <div className="h-64 rounded-xl mb-6 overflow-hidden flex items-center justify-center bg-azul-lunar-claro/10">
                <img 
                  src="/images/camisa-runs-arts.webp" 
                  alt="Camiseta Premium" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 data-testid="product-name" className="text-2xl font-serif text-cinza-grafite mb-4">Camisetas</h3>
              <button data-testid="add-to-cart-button" className="bg-[#5B809B] text-white px-8 py-2 rounded-lg font-medium hover:brightness-110 transition-all cursor-pointer">
                Ver produtos
              </button>
            </div>

            {/* Card 3: Papelaria */}
            <div data-testid="product-card" className="bg-cinza-gelo p-6 rounded-2xl shadow-sm border border-azul-lunar-claro/30 transition-all duration-300 hover:shadow-md">
              <div className="h-64 rounded-xl mb-6 overflow-hidden flex items-center justify-center bg-azul-lunar-claro/10">
                <img 
                  src="/images/planner-runs-arts.webp" 
                  alt="Papelaria Criativa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 data-testid="product-name" className="text-2xl font-serif text-cinza-grafite mb-4">Papelaria</h3>
              <button data-testid="add-to-cart-button" className="bg-[#5B809B] text-white px-8 py-2 rounded-lg font-medium hover:brightness-110 transition-all cursor-pointer">
                Ver produtos
              </button>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#5B809B] text-bege-aveia py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-bege-aveia/10 pb-10">
              <div className="max-w-xs">
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tighter">Run Arts</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Pequenos detalhes, grandes memórias. Produtos feitos com carinho para eternizar momentos.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-dourado-suave">Navegação</h4>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li><a href="#" className="hover:text-dourado-suave transition">Início</a></li>
                    <li><a href="#" className="hover:text-dourado-suave transition">Loja</a></li>
                    <li><a href="#" className="hover:text-dourado-suave transition">Sobre nós</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-dourado-suave">Contato</h4>
                  <p className="text-sm opacity-80 mb-1">Itaim Paulista, São Paulo - SP</p>
                  <p className="text-sm opacity-80 font-medium">WhatsApp: (11) 99709-2920</p>
                </div>
              </div>
            </div>
            <div className="pt-8 text-center text-[10px] opacity-40 uppercase tracking-widest">
              © 2026 Run Cards - Todos os direitos reservados.
            </div>
          </div>
        </footer>

        {/* Botão Flutuante WhatsApp */}
        <a 
          href="https://wa.me/5511997092920" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center group"
        >
          <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
            Dúvidas? Chame aqui!
          </span>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886 0 2.125.593 3.73 1.594 5.396l-.979 3.574 3.676-.962z"/>
          </svg>
        </a>
      </main>
    </div>
  );
}