
import { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin, FileText } from 'lucide-react';


function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyecto', href: '#proyecto' },
    { name: 'Publicaciones', href: '#publicaciones' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y título */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  rounded-lg flex items-center justify-center">
              <img src="/logo_uno.png" alt="Logo"  />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Proyecto IyD</h1>
              <p className="text-xs text-gray-500">Universidad Nacional del Oeste</p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#00AEEF] transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Botón idioma y menú móvil */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#00AEEF] border border-gray-300 rounded-lg hover:border-[#00AEEF] transition-colors">
              EN | ES
            </button>
            
            {/* Hamburguesa móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#00AEEF]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#00AEEF] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="mt-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#00AEEF] border border-gray-300 rounded-lg hover:border-[#00AEEF] transition-colors text-left">
                EN | ES
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
