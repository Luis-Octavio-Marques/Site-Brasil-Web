import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const currentSection = location.pathname.split("/")[1] || "default";

  const menuItems = [
    { key: "history", title: "História", link: "/history" },
    { key: "culture", title: "Cultura", link: "/culture" },
    { key: "gastronomy", title: "Gastronomia", link: "/gastronomy" },
    { key: "nature", title: "Natureza", link: "/nature" },
    { key: "language", title: "Idioma", link: "/language" },
    { key: "flag", title: "Bandeira", link: "/flag" },
  ];

  return (
    <header
      className="fixed flex items-center justify-center text-center w-full gap-8 border-b border-white text-white backdrop-blur-sm z-50 animate-fadeIn"
      style={{
        padding: "20px 15px",
        backgroundColor: "rgba(0, 0, 0, .15)",
      }}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <h2 className="text-[26px] text-white font-light tracking-wider relative">
          Brasil Web
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </h2>
      </Link>

      <div className="w-[1px] h-6 bg-white/20"></div>

      <nav className="flex items-center">
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </header>
  );
}

export default Header;
