import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "./components/Header";
import LanguageButton from "./components/LanguageButton";

function App() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="bg-[url('./assets/img/country-backgrounds/Brazil-background1.png')] bg-cover bg-center overflow-hidden w-screen h-screen"
      >
        <Header titleKey={t("menu.title")} hoverColor="#333" />

        <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
          <motion.div
            className="flex items-center"
            style={{ gap: "10px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-1 w-24 bg-white rounded-full"></div>
            <p className="text-white text-xl font-bold">{t("menu.welcome")}</p>
            <div className="h-1 w-24 bg-white rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-white text-9xl border-b-4 border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t(`title.brazil`)}
          </motion.h2>

          <LanguageButton />
        </main>
      </motion.div>
    </div>
  );
}

export default App;
