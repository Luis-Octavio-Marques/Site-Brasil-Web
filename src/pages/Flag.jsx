import React from "react";

import brazilBackgroundFlag from "../assets/img/country-backgrounds/Brazil-background7.png";
import Header from "../components/Header";

export default function Flag() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Tela Inicial */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn overflow-x-hidden`}
        style={{
          backgroundImage: `url(${brazilBackgroundFlag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          Bandeira do Brasil
        </h2>
      </div>

      {/* Main */}
      <main
        style={{
          marginLeft: "24px",
          marginRight: "24px",
          paddingLeft: "6px",
          paddingRight: "6px",
          paddingTop: "12px",
          paddingBottom: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        
      </main>

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
