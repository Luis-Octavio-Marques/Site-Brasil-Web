import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            welcome: 'Welcome',
            history: 'History',
            culture: 'Culture',
            gastronomy: 'Gastronomy',
            nature: 'Nature',
            language: 'Language',
            inspiration: 'Inspiration'
          },
          title: {
            australiaWeb: 'Australia Web',
            australia: 'Australia'
          },
          windowsActivation: {
            activate: 'Activate Windows',
            accessSettings: 'Go to Settings to activate Windows'
          },
          countries: {
            brazil: 'Brazil',
            japan: 'Japan',
            france: 'France',
            egypt: 'Egypt',
            australia: 'Australia'
          }
        }
      },
      pt: {
        translation: {
          menu: {
            welcome: 'Bem-vindo',
            history: 'História',
            culture: 'Cultura',
            gastronomy: 'Gastronomia',
            nature: 'Natureza',
            language: 'Língua',
            inspiration: 'Inspiração'
          },
          title: {
            australiaWeb: 'Austrália Web',
            australia: 'Austrália'
          },
          windowsActivation: {
            activate: 'Ativar o Windows',
            accessSettings: 'Acesse Configurações para ativar o Windows'
          },
          countries: {
            brazil: 'Brasil',
            japan: 'Japão',
            france: 'França',
            egypt: 'Egito',
            australia: 'Austrália'
          }
        }
      },
      jp: {
        translation: {
          menu: {
            welcome: 'ようこそ',
            history: '歴史',
            culture: '文化',
            gastronomy: '美食',
            nature: '自然',
            language: '言語',
            inspiration: 'インスピレーション'
          },
          title: {
            australiaWeb: 'オーストラリア ウェブ',
            australia: 'オーストラリア'
          },
          windowsActivation: {
            activate: 'Windowsを有効化',
            accessSettings: 'Windowsを有効化するには設定にアクセスしてください'
          },
          countries: {
            brazil: 'ブラジル',
            japan: '日本',
            france: 'フランス',
            egypt: 'エジプト',
            australia: 'オーストラリア'
          }
        }
      },
      fr: {
        translation: {
          menu: {
            welcome: 'Bienvenue',
            history: 'Histoire',
            culture: 'Culture',
            gastronomy: 'Gastronomie',
            nature: 'Nature',
            language: 'Langue',
            inspiration: 'Inspiration'
          },
          title: {
            australiaWeb: 'Australie Web',
            australia: 'Australie'
          },
          windowsActivation: {
            activate: 'Activer Windows',
            accessSettings: 'Accédez aux paramètres pour activer Windows'
          },
          countries: {
            brazil: 'Brésil',
            japan: 'Japon',
            france: 'France',
            egypt: 'Égypte',
            australia: 'Australie'
          }
        }
      },
      ar: {
        translation: {
          menu: {
            welcome: 'مرحبًا',
            history: 'التاريخ',
            culture: 'الثقافة',
            gastronomy: 'فن الطهو',
            nature: 'الطبيعة',
            language: 'اللغة',
            inspiration: 'إلهام'
          },
          title: {
            australiaWeb: 'أستراليا ويب',
            australia: 'أستراليا'
          },
          windowsActivation: {
            activate: 'تفعيل Windows',
            accessSettings: 'انتقل إلى الإعدادات لتفعيل Windows'
          },
          countries: {
            brazil: 'البرازيل',
            japan: 'اليابان',
            france: 'فرنسا',
            egypt: 'مصر',
            australia: 'أستراليا'
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
