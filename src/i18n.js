import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            welcome: "Welcome",
            history: "History",
            culture: "Culture",
            gastronomy: "Gastronomy",
            nature: "Nature",
            language: "Language",
            flag: "Flag",
          },
          title: {
            brazilWeb: "Brazil Web",
            brazil: "Brazil",
          },
          windowsActivation: {
            activate: "Activate Windows",
            accessSettings: "Go to Settings to activate Windows",
          },
          history: {
            title: "History of Brazil"
          },
          culture: {
            title: "Brazilian culture"
          },
          gastronomy: {
            title: "Gastronomy of Brazil"
          },
          nature: {
            title: "Nature of Brazil"
          },
          language: {
            title: "Language of Brazil"
          },
          flag: {
            title: "Flag of Brazil"
          },
        },
      },
      pt: {
        translation: {
          menu: {
            welcome: "Bem-vindo",
            history: "História",
            culture: "Cultura",
            gastronomy: "Gastronomia",
            nature: "Natureza",
            language: "idioma",
            flag: "Bandeira",
          },
          title: {
            brazilWeb: "Brasil Web",
            brazil: "Brasil",
          },
          windowsActivation: {
            activate: "Ativar o Windows",
            accessSettings: "Acesse Configurações para ativar o Windows",
          },
          history: {
            title: "História do Brasil"
          },
          culture: {
            title: "Cultura do Brasil"
          },
          gastronomy: {
            title: "Gastronomia do Brasil"
          },
          nature: {
            title: "Natureza do Brasil"
          },
          language: {
            title: "Idioma do Brasil"
          },
          flag: {
            title: "Bandeira do Brasil"
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
