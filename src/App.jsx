import React from "react";
import Header from "./components/Header";

function App() {

  return (
    <div className="overflow-hidden w-screen h-screen">
      <Header />

      <main className="bg-[url('./assets/img/country-backgrounds/Brazil-background1.png')] bg-cover bg-center flex flex-col items-center justify-center w-full h-full overflow-hidden animate-fadeIn">
        <div className="flex items-center" style={{ gap: "10px" }}>
          <div className="h-1 w-24 bg-white rounded-full"></div>
          <p className="text-white text-xl font-bold"> Bem-Vindo</p>
          <div className="h-1 w-24 bg-white rounded-full"></div>
        </div>

        <h2 className="text-white md:text-9xl text-8xl border-b-4 border-white">
          Brasil
        </h2>

      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

export default App;
