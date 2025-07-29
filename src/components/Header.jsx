import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  const currentSection = location.pathname.split("/")[1] || "default";

  const menuItems = [
    { key: "history", title: "História", link: "/history", icon: "📚" },
    { key: "culture", title: "Cultura", link: "/culture", icon: "🎭" },
    { key: "gastronomy", title: "Gastronomia", link: "/gastronomy", icon: "🍽️" },
    { key: "nature", title: "Natureza", link: "/nature", icon: "🌿" },
    { key: "language", title: "Idioma", link: "/language", icon: "💬" },
    { key: "flag", title: "Bandeira", link: "/flag", icon: "🇧🇷" },
  ];

  // Controla a renderização para animar saída
  useEffect(() => {
    if (menuOpen) {
      setShouldRenderMenu(true);
      // Previne scroll quando menu está aberto
      document.body.style.overflow = 'hidden';
    } else {
      // Espera a animação terminar para desmontar o menu
      const timeout = setTimeout(() => {
        setShouldRenderMenu(false);
        document.body.style.overflow = 'unset';
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  // Cleanup no unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const isCurrentPage = (link) => {
    return location.pathname === link;
  };

  return (
    <>
      <header
      className="fixed flex items-center md:justify-center justify-around w-full gap-8 border-b border-white text-white backdrop-blur-sm z-50 animate-fadeIn px-4 py-5 bg-[rgba(0,0,0,0.15)]"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <h2 className="text-[26px] text-white font-light tracking-wider relative">
          Brasil Web
          <div className="absolute -right-4 top-1 h-8 w-[1px] rounded-full bg-gradient-to-t from-transparent via-white/50 to-transparent md:opacity-100 opacity-0"></div>
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </h2>
      </Link>

      <nav className="hidden md:flex items-center">
        <ul className="flex gap-7 list-none">
          {menuItems.map(({ key, link, title }) => (
            <li
              key={key}
              className="cursor-pointer font-light text-white/90 hover:text-white transition-colors duration-300"
            >
              <Link to={link} state={{ origin: currentSection }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

        {/* Botão hamburguer mobile aprimorado */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-60 group transition-all duration-300 hover:bg-white/30 rounded-lg"
          aria-label="Menu"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen 
                  ? "rotate-45 translate-y-0" 
                  : "-translate-y-1.5 group-hover:w-7"
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen 
                  ? "opacity-0 scale-0" 
                  : "opacity-100 scale-100 group-hover:w-5"
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen 
                  ? "-rotate-45 translate-y-0" 
                  : "translate-y-1.5 group-hover:w-7"
              }`}
            />
          </div>
        </button>
      </header>

      {/* Overlay */}
      {shouldRenderMenu && (
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-350 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleLinkClick}
        />
      )}

      {/* Modal menu mobile com design aprimorado */}
      {shouldRenderMenu && (
        <nav
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-800/95 backdrop-blur-xl border-l border-white/10 md:hidden z-50 shadow-2xl
            transform transition-translate duration-350 ease-out
            ${menuOpen 
              ? "translate-x-0 opacity-100" 
              : "translate-x-full opacity-0"
            }
          `}
        >
          {/* Header do menu */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold text-white">Menu</h3>
            <button
              onClick={handleLinkClick}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>

          {/* Menu items */}
          <ul className="flex flex-col gap-2 list-none p-6 pt-4">
            {menuItems.map(({ key, link, title, icon }, index) => (
              <li 
                key={key} 
                className={`transform transition-all duration-300 ease-out ${
                  menuOpen 
                    ? "translate-x-0 opacity-100" 
                    : "translate-x-8 opacity-0"
                }`}
                style={{ 
                  transitionDelay: menuOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                <Link
                  to={link}
                  state={{ origin: currentSection }}
                  onClick={handleLinkClick}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isCurrentPage(link)
                      ? 'bg-gradient-to-r from-yellow-400/20 to-green-400/20 text-yellow-300 border border-yellow-400/30'
                      : 'hover:bg-white/10 text-white/90 hover:text-white border border-transparent hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </span>
                  <span className="text-lg font-medium tracking-wide">
                    {title}
                  </span>
                  <div className={`ml-auto transition-all duration-300 ${
                    isCurrentPage(link) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>          
        </nav>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default Header;