import React from "react";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./CountryPage.module.css";

function CountryPage({
  countryCode,
  titleKey,
  hoverColor,
  backgroundClass,
  countryNameClass,
  buttonLanguageColor,
}) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "jp", label: "JP" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  React.useEffect(() => {
    document.body.classList.add(styles[backgroundClass]);
    return () => {
      document.body.classList.remove(styles[backgroundClass]);
    };
  }, [backgroundClass]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <Header titleKey={t(titleKey)} hoverColor={hoverColor} />

      <main className={styles.main}>
        <motion.div
          className={styles.lineWelcome}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.whiteLine}></div>
          <p className={styles.welcomeText}>{t("menu.welcome")}</p>
          <div className={styles.whiteLine}></div>
        </motion.div>

        <motion.h2
          className={styles[countryNameClass]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t(`countries.${countryCode}`)}
        </motion.h2>

        <motion.div
          className={styles.languageContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {languages.map((lang, index) => (
            <motion.button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`${styles.languageButton} ${
                i18n.language === lang.code ? styles.active : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              style={{
                backgroundColor:
                  i18n.language === lang.code
                    ? buttonLanguageColor
                    : "transparent",
              }}
            >
              {lang.label}
            </motion.button>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}

export default CountryPage;
