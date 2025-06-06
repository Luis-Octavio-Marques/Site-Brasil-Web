import React from "react";

import brazilBackgroundNature from "../assets/img/country-backgrounds/Brazil-background5.png";
import Header from "../components/Header";
import LanguageButton from "../components/LanguageButton";
import { useTranslation } from "react-i18next";

export default function Nature() {
  const { t } = useTranslation();
  
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn overflow-x-hidden`}
        style={{
          backgroundImage: `url(${brazilBackgroundNature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          {t(`nature.title`)}
        </h2>

        <LanguageButton />
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
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
