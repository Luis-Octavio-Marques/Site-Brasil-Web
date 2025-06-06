import React, { useState } from "react";

import historyImage1 from "./../assets/img/country-history/history-image1.png";
import historyImage2 from "./../assets/img/country-history/history-image2.png";
import historyImage3 from "./../assets/img/country-history/history-image3.png";
import historyImage4 from "./../assets/img/country-history/history-image4.png";
import historyImage5 from "./../assets/img/country-history/history-image5.png";
import historyImage6 from "./../assets/img/country-history/history-image6.png";
import historyImage7 from "./../assets/img/country-history/history-image7.png";
import historyImage8 from "./../assets/img/country-history/history-image8.png";
import historyImage9 from "./../assets/img/country-history/history-image9.png";
import historyImage10 from "./../assets/img/country-history/history-image10.png";
import historyImage11 from "./../assets/img/country-history/history-image11.png";
import historyImage12 from "./../assets/img/country-history/history-image12.png";
import historyImage13 from "./../assets/img/country-history/history-image13.png";
import historyImage14 from "./../assets/img/country-history/history-image14.png";
import historyImage15 from "./../assets/img/country-history/history-image15.png";
import historyImage16 from "./../assets/img/country-history/history-image16.png";
import historyImage17 from "./../assets/img/country-history/history-image17.png";
import historyImage18 from "./../assets/img/country-history/history-image18.png";
import historyImage19 from "./../assets/img/country-history/history-image19.png";
import historyImage20 from "./../assets/img/country-history/history-image20.png";
import historyImage21 from "./../assets/img/country-history/history-image21.png";
import historyImage22 from "./../assets/img/country-history/history-image22.png";
import historyImage23 from "./../assets/img/country-history/history-image23.png";

import brazilBackgroundHistory from "./../assets/img/country-backgrounds/Brazil-background2.png";
import Header from "../components/Header";
import LanguageButton from "../components/LanguageButton";
import { useTranslation } from "react-i18next";

const TimelineItem = ({ item, index, isExpanded, onToggle }) => {
  const { t } = useTranslation();

  const isLeft = index % 2 === 0;

  const getTruncatedText = (text, wordLimit = 25) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div
      className={`flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } animate-fadeIn`}
      style={{
        marginBottom: "48px",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Content Card */}
      <div
        className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}
        style={isLeft ? { paddingRight: "32px" } : { paddingLeft: "32px" }}
      >
        <div
          className="bg-white/20 backdrop-blur-md border-white border-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => onToggle(index)}
        >
          <div style={{ padding: "24px" }}>
            <div
              className="text-sm font-medium text-white/70"
              style={{ marginBottom: "4px" }}
            >
              {item.period}
            </div>
            <div
              className="text-2xl font-bold text-white/90"
              style={{ marginBottom: "8px" }}
            >
              {item.year}
            </div>
            <h3
              className="text-lg font-semibold text-white/90"
              style={{ marginBottom: "12px" }}
            >
              {item.title}
            </h3>

            <div className="text-white/100 leading-relaxed text-left">
              {isExpanded
                ? item.description
                : getTruncatedText(item.description)}
            </div>

            <div
              className="border-t border-gray-200"
              style={{ marginTop: "16px", paddingTop: "16px" }}
            >
              <button
                className="text-sm text-white hover:text-gray-200 font-medium transition-colors duration-200 flex items-center cursor-pointer underline"
                style={{ gap: "4px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(index);
                }}
              >
                {isExpanded ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    {t(`buttonSeeMore.seeLess`)}
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {t(`buttonSeeMore.seeMore`)}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-gray-600 rounded-4xl border-4 border-white shadow-md z-10 relative">
          <div className="absolute inset-0 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Image Card */}
      <div
        className={`w-5/12`}
        style={isLeft ? { paddingLeft: "32px" } : { paddingRight: "32px" }}
      >
        <div className="bg-white/20 backdrop-blur-md border-2 border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div style={{ padding: "16px" }}>
            <div className="text-sm text-white/90 font-medium">
              {t(`history.visualRepresentation`)}
            </div>
            <div
              className="text-white font-semibold"
              style={{ marginTop: "4px" }}
            >
              {item.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function History() {
  const { t } = useTranslation();

  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const timelineData = [
    {
      year: "~ 12.000 a.C.",
      period: t("history.preCabral.period"),
      title: t("history.preCabral.title"),
      description: t("history.preCabral.description"),
      era: "pre-cabralino",
      image: historyImage1,
    },
    {
      year: "1500 - 1530",
      period: t("history.preColonial.period"),
      title: t("history.preColonial.title"),
      description: t("history.preColonial.description"),
      era: "pre-colonial",
      image: historyImage2,
    },
    {
      year: "1530 - 1822",
      period: t("history.colonial.period"),
      title: t("history.colonial.title"),
      description: t("history.colonial.description"),
      era: "colonial",
      image: historyImage3,
    },
    {
      year: "1549",
      period: t("history.colonial1.period"),
      title: t("history.colonial1.title"),
      description: t("history.colonial1.description"),
      era: "colonial",
      image: historyImage4,
    },
    {
      year: "1695",
      period: t("history.colonial2.period"),
      title: t("history.colonial2.title"),
      description: t("history.colonial2.description"),
      era: "colonial",
      image: historyImage5,
    },
    {
      year: "1789",
      period: t("history.colonial3.period"),
      title: t("history.colonial3.title"),
      description: t("history.colonial3.description"),
      era: "colonial",
      image: historyImage6,
    },
    {
      year: "1808",
      period: t("history.colonial4.period"),
      title: t("history.colonial4.title"),
      description: t("history.colonial4.description"),
      era: "colonial",
      image: historyImage7,
    },
    {
      year: "1822 - 1889",
      period: t("history.imperial.period"),
      title: t("history.imperial.title"),
      description: t("history.imperial.description"),
      era: "imperial",
      image: historyImage8,
    },
    {
      year: "1831 - 1840",
      period: t("history.imperial1.period"),
      title: t("history.imperial1.title"),
      description: t("history.imperial1.description"),
      era: "imperial",
      image: historyImage9,
    },
    {
      year: "1840 - 1889",
      period: t("history.imperial2.period"),
      title: t("history.imperial2.title"),
      description: t("history.imperial2.description"),
      era: "imperial",
      image: historyImage10,
    },
    {
      year: "1888",
      period: t("history.imperial3.period"),
      title: t("history.imperial3.title"),
      description: t("history.imperial3.description"),
      era: "imperial",
      image: historyImage11,
    },
    {
      year: "1889 - 1930",
      period: t("history.oldRepublic.period"),
      title: t("history.oldRepublic.title"),
      description: t("history.oldRepublic.description"),
      era: "republica-velha",
      image: historyImage12,
    },
    {
      year: "1894 - 1906",
      period: t("history.oldRepublic1.period"),
      title: t("history.oldRepublic1.title"),
      description: t("history.oldRepublic1.description"),
      era: "republica-velha",
      image: historyImage13,
    },
    {
      year: "1930 - 1945",
      period: t("history.vargasEra.period"),
      title: t("history.vargasEra.title"),
      description: t("history.vargasEra.description"),
      era: "era-vargas",
      image: historyImage14,
    },
    {
      year: "1937 - 1945",
      period: t("history.vargasEra1.period"),
      title: t("history.vargasEra1.title"),
      description: t("history.vargasEra1.description"),
      era: "era-vargas",
      image: historyImage15,
    },
    {
      year: "1946 - 1964",
      period: t("history.populistRepublic.period"),
      title: t("history.populistRepublic.title"),
      description: t("history.populistRepublic.description"),
      era: "republica-populista",
      image: historyImage16,
    },
    {
      year: "1956 - 1961",
      period: t("history.populistRepublic1.period"),
      title: t("history.populistRepublic1.title"),
      description: t("history.populistRepublic1.description"),
      era: "republica-populista",
      image: historyImage17,
    },
    {
      year: "1964 - 1985",
      period: t("history.militaryDictatorship.period"),
      title: t("history.militaryDictatorship.title"),
      description: t("history.militaryDictatorship.description"),
      era: "ditadura-militar",
      image: historyImage18,
    },
    {
      year: "1968",
      period: t("history.militaryDictatorship1.period"),
      title: t("history.militaryDictatorship1.title"),
      description: t("history.militaryDictatorship1.description"),
      era: "ditadura-militar",
      image: historyImage19,
    },
    {
      year: "1985 - presente",
      period: t("history.newRepublic.period"),
      title: t("history.newRepublic.title"),
      description: t("history.newRepublic.description"),
      era: "nova-republica",
      image: historyImage20,
    },
    {
      year: "1988",
      period: t("history.newRepublic1.period"),
      title: t("history.newRepublic1.title"),
      description: t("history.newRepublic1.description"),
      era: "nova-republica",
      image: historyImage21,
    },
    {
      year: "1994",
      period: t("history.newRepublic2.period"),
      title: t("history.newRepublic2.title"),
      description: t("history.newRepublic2.description"),
      era: "nova-republica",
      image: historyImage22,
    },
    {
      year: "2002 - 2016",
      period: t("history.newRepublic3.period"),
      title: t("history.newRepublic3.title"),
      description: t("history.newRepublic3.description"),
      era: "nova-republica",
      image: historyImage23,
    },
  ];

  return (
    <div className="min-h-screen transition-all duration-1000 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn`}
        style={{
          backgroundImage: `url(${brazilBackgroundHistory})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          {t(`history.title`)}
        </h2>

        <LanguageButton />
      </div>

      {/* Introdução */}
      <section className="animate-fadeIn">
        <div
          className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
          style={{
            margin: "32px",
            paddingLeft: "32px",
            paddingRight: "32px",
            paddingTop: "32px",
            paddingBottom: "32px",
          }}
        >
          <h2
            className="text-4xl font-bold text-white text-center"
            style={{ marginBottom: "16px" }}
          >
            {t(`history.subtitle`)}
          </h2>
          <div className="grid" style={{ gap: "32px" }}>
            <div
              className="space-y-4 text-white/90 text-lg leading-relaxed"
              style={{ gap: "16px" }}
            >
              <p className="leading-relaxed text-center">
                {t(`history.subdescription`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div className="container relative" style={{ padding: "64px 64px" }}>
        {/* Vertical line */}
        <div className="absolute left-1/2 rounded-full transform -translate-x-1/2 w-1 bg-black h-[98%] opacity-30"></div>

        {/* Timeline items */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isExpanded={expandedItems.has(index)}
              onToggle={toggleExpanded}
            />
          ))}
        </div>
      </div>

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
    </div>
  );
}
