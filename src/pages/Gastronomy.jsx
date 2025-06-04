import React from "react";

import brazilBackgroundGastronomy from "../assets/img/country-backgrounds/Brazil-background4.png";
import Header from "../components/Header";
import LanguageButton from "../components/LanguageButton";
import { useTranslation } from "react-i18next";

export default function Gastronomy() {
  const { t } = useTranslation();
  
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn overflow-x-hidden`}
        style={{
          backgroundImage: `url(${brazilBackgroundGastronomy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          {t(`gastronomy.title`)}
        </h2>
        <p
          className="text-white text-2xl font-bold"
          style={{ marginTop: "12px" }}
        >
          {" "}
          Melhor que isso, só dois disso
        </p>

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
