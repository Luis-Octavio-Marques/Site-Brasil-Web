import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageButton() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0"
        style={{ margin: "15px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        {languages.map((lang, index) => (
          <motion.button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            style={{ padding: "6px 10px", margin: "4px" }}
            className={`rounded-[12px] border-2 border-white font-bold text-white transition hover:opacity-70 ${
              i18n.language === lang.code
                ? "bg-green-700 hover:opacity-100 cursor-default"
                : "bg-transparent cursor-pointer"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1 + index * 0.2,
            }}
          >
            {lang.label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
