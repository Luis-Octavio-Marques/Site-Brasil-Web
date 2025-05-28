import React from "react";
import { useTranslation } from "react-i18next";

function Header({ titleKey }) {
  const { t } = useTranslation();

  const menuItems = [
    { key: "history" },
    { key: "culture" },
    { key: "gastronomy" },
    { key: "nature" },
    { key: "language" },
    { key: "inspiration" },
  ];

  return (
    <header
      className="fixed flex items-center justify-center text-center w-full gap-8 border-b border-white text-white backdrop-blur-sm"
      style={{
        padding: "20px 15px",
        backgroundColor: "rgba(0, 0, 0, .15)",
      }}
    >
      <a href="/" className="flex items-center gap-2 group">
        <h2 className="text-[26px] text-white font-light tracking-wider relative">
          {t(titleKey)}
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </h2>
      </a>

      {/* Separador minimalista */}
      <div className="w-[1px] h-6 bg-white/20"></div>

      <nav className="flex items-center">
        <ul className="flex gap-7 list-none">
          {menuItems.map(({ key }) => (
            <li
              key={key}
              className="cursor-pointer font-light text-white/90 hover:text-white transition-colors duration-300"
            >
              {t(`menu.${key}`)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
