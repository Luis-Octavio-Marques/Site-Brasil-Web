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
            australiaWeb: "Australia Web",
            australia: "Australia",
          },
          windowsActivation: {
            activate: "Activate Windows",
            accessSettings: "Go to Settings to activate Windows",
          },
          countries: {
            brazil: "Brazil",
            japan: "Japan",
            france: "France",
            egypt: "Egypt",
            australia: "Australia",
          },
          carousel: {
            chooseCountry: "Which country would you like to visit?",
            seeMore: "VISIT",
          },
          descriptions: {
            japan:
              "Tradition and technology side by side. Known for its temples, cherry blossoms, ancient culture, and futuristic cities like Tokyo.",
            australia:
              "An island country with paradise beaches, stunning nature, and unique wildlife.",
            brazil:
              "A land of diversity, music, and nature. Famous for Carnival, the Amazon rainforest, and its beautiful beaches and vibrant cities.",
            egypt:
              "Cradle of one of the oldest civilizations in the world. Known for the pyramids, the sphinx, and the Nile River.",
            france:
              "A symbol of art, culture, and gastronomy. Home to the Eiffel Tower, the Louvre, and charming landscapes.",
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
            language: "Língua",
            flag: "Bandeira",
          },
          title: {
            australiaWeb: "Austrália Web",
            australia: "Austrália",
          },
          windowsActivation: {
            activate: "Ativar o Windows",
            accessSettings: "Acesse Configurações para ativar o Windows",
          },
          countries: {
            brazil: "Brasil",
            japan: "Japão",
            france: "França",
            egypt: "Egito",
            australia: "Austrália",
          },
          carousel: {
            chooseCountry: "Qual país gostaria de visitar?",
            seeMore: "VISITAR",
          },
          descriptions: {
            japan:
              "Tradição e tecnologia lado a lado. Conhecido por seus templos, cerejeiras, cultura milenar e cidades futurísticas como Tóquio.",
            australia:
              "País-ilha com praias paradisíacas, natureza exuberante e vida selvagem única.",
            brazil:
              "Terra de diversidade, música e natureza. Famoso pelo Carnaval, pela Amazônia e por suas belas praias e cidades vibrantes.",
            egypt:
              "Berço de uma das civilizações mais antigas do mundo. Conhecido pelas pirâmides, pela esfinge e pelo Rio Nilo.",
            france:
              "Símbolo de arte, cultura e gastronomia. Lar da Torre Eiffel, do Louvre e de paisagens encantadoras.",
          },
        },
      },
      jp: {
        translation: {
          menu: {
            welcome: "ようこそ",
            history: "歴史",
            culture: "文化",
            gastronomy: "美食",
            nature: "自然",
            language: "言語",
            flag: "フラグ",
          },
          title: {
            australiaWeb: "オーストラリア ウェブ",
            australia: "オーストラリア",
          },
          windowsActivation: {
            activate: "Windowsを有効化",
            accessSettings: "Windowsを有効化するには設定にアクセスしてください",
          },
          countries: {
            brazil: "ブラジル",
            japan: "日本",
            france: "フランス",
            egypt: "エジプト",
            australia: "オーストラリア",
          },
          carousel: {
            chooseCountry: "どの国に行きたいですか？",
            seeMore: "訪問",
          },
          descriptions: {
            japan:
              "伝統と技術が共存する国。寺院、桜、何千年もの文化、そして東京のような未来的な都市で知られています。",
            australia:
              "楽園のようなビーチ、壮大な自然、そしてユニークな野生動物がいる島国。",
            brazil:
              "多様性、音楽、自然の国。カーニバル、アマゾン、そして美しいビーチや活気ある都市で有名です。",
            egypt:
              "世界最古の文明のひとつの発祥地。ピラミッド、スフィンクス、ナイル川で知られています。",
            france:
              "芸術、文化、美食の象徴。エッフェル塔、ルーヴル美術館、魅力的な風景の本拠地。",
          },
        },
      },
      fr: {
        translation: {
          menu: {
            welcome: "Bienvenue",
            history: "Histoire",
            culture: "Culture",
            gastronomy: "Gastronomie",
            nature: "Nature",
            language: "Langue",
            flag: "Drapeau",
          },
          title: {
            australiaWeb: "Australie Web",
            australia: "Australie",
          },
          windowsActivation: {
            activate: "Activer Windows",
            accessSettings: "Accédez aux paramètres pour activer Windows",
          },
          countries: {
            brazil: "Brésil",
            japan: "Japon",
            france: "France",
            egypt: "Égypte",
            australia: "Australie",
          },
          carousel: {
            chooseCountry: "Quel pays souhaitez-vous visiter ?",
            seeMore: "VISITE",
          },
          descriptions: {
            japan:
              "Tradition et technologie côte à côte. Connu pour ses temples, ses cerisiers, sa culture millénaire et ses villes futuristes comme Tokyo.",
            australia:
              "Un pays insulaire avec des plages paradisiaques, une nature époustouflante et une faune unique.",
            brazil:
              "Terre de diversité, de musique et de nature. Célèbre pour le carnaval, l’Amazonie et ses magnifiques plages et villes vibrantes.",
            egypt:
              "Berceau de l’une des plus anciennes civilisations du monde. Connu pour ses pyramides, son sphinx et le Nil.",
            france:
              "Symbole d’art, de culture et de gastronomie. Maison de la Tour Eiffel, du Louvre et de paysages enchanteurs.",
          },
        },
      },
      ar: {
        translation: {
          menu: {
            welcome: "مرحبًا",
            history: "التاريخ",
            culture: "الثقافة",
            gastronomy: "فن الطهو",
            nature: "الطبيعة",
            language: "اللغة",
            flag: "علَم",
          },
          title: {
            australiaWeb: "أستراليا ويب",
            australia: "أستراليا",
          },
          windowsActivation: {
            activate: "تفعيل Windows",
            accessSettings: "انتقل إلى الإعدادات لتفعيل Windows",
          },
          countries: {
            brazil: "البرازيل",
            japan: "اليابان",
            france: "فرنسا",
            egypt: "مصر",
            australia: "أستراليا",
          },
          carousel: {
            chooseCountry: "أي بلد ترغب في زيارته؟",
            seeMore: "يزور",
          },
          descriptions: {
            japan:
              "التقاليد والتكنولوجيا جنبًا إلى جنب. تشتهر بمعابدها وأشجار الكرز وثقافتها القديمة ومدنها المستقبلية مثل طوكيو.",
            australia:
              "بلد جزيرة بشواطئ فردوسية وطبيعة مذهلة وحياة برية فريدة.",
            brazil:
              "أرض التنوع والموسيقى والطبيعة. مشهورة بالكرنفال والأمازون وشواطئها الجميلة ومدنها النابضة بالحياة.",
            egypt:
              "مهد واحدة من أقدم الحضارات في العالم. تشتهر بالأهرامات وأبو الهول ونهر النيل.",
            france:
              "رمز الفن والثقافة وفن الطهو. موطن برج إيفل واللوفر والمناظر الطبيعية الساحرة.",
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
