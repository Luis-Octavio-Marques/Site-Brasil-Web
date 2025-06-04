import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  // Pegando o primeiro segmento da URL como origem
  const currentSection = location.pathname.split("/")[1] || "default";

  const menuItems = [
    { key: "history", link: "/history" },
    { key: "culture", link: "/culture" },
    { key: "gastronomy", link: "/gastronomy" },
    { key: "nature", link: "/nature" },
    { key: "language", link: "/language" },
    { key: "flag", link: "/flag" },
  ];

  return (
    <header
      className="fixed flex items-center justify-center text-center w-full gap-8 border-b border-white text-white backdrop-blur-sm z-50"
      style={{
        padding: "20px 15px",
        backgroundColor: "rgba(0, 0, 0, .15)",
      }}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <h2 className="text-[26px] text-white font-light tracking-wider relative">
          {t(`title.brazilWeb`)}
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </h2>
      </Link>

      <div className="w-[1px] h-6 bg-white/20"></div>

      <nav className="flex items-center">
        <ul className="flex gap-7 list-none">
          {menuItems.map(({ key, link }) => (
            <li
              key={key}
              className="cursor-pointer font-light text-white/90 hover:text-white transition-colors duration-300"
            >
              <Link to={link} state={{ origin: currentSection }}>
                {t(`menu.${key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
