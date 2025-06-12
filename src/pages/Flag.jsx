import { Star, Calendar, Users, MapPin, Info } from "lucide-react";

import brazilBackgroundFlag from "../assets/img/country-backgrounds/Brazil-background7.png";
import Header from "../components/Header";

export default function Flag() {
  return (
    <div className="min-h-screen transition-all duration-1000 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white min-h-screen w-full animate-fadeIn bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${brazilBackgroundFlag})` }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 border-white px-4">
          Bandeira do Brasil
        </h2>
      </div>

      {/* Main */}
      <main className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 flex flex-col justify-center max-w-7xl mx-auto">
        {/* Introdução */}
        <section className="my-4 sm:my-6 lg:my-8">
          <div className="bg-white/5 backdrop-blur-md border border-white rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-3 sm:mb-4 lg:mb-6">
              A Bandeira Que Conta Nossa História
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              A bandeira do Brasil é linda de ver! Tem verde, amarelo, azul e
              branco pra valer. O verde é da floresta, o amarelo do tesouro, o
              azul é do céu e as estrelas são de ouro! No meio tem uma frase que
              a gente quer dizer: "Ordem e Progresso" pra tudo crescer! Ela
              representa nosso Brasil tão querido, com muito amor e orgulho no
              coração colorido! 💚💛💙🤍
            </p>
          </div>
        </section>

        <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8">
          {/* História da Bandeira */}
          <section className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
              História da Bandeira
            </h3>
            <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-4 sm:p-6">
              <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                A bandeira atual do Brasil foi adotada em{" "}
                <strong>
                  19 de novembro de 1889
                </strong>
                , quatro dias após a Proclamação da República. Foi criada por
                Raimundo Teixeira Mendes e Miguel Lemos, com desenho de Décio
                Vilares.
              </p>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                A bandeira substituiu a bandeira do Império do Brasil e manteve
                as cores verde e amarela, mas substituiu o brasão imperial pela
                esfera celeste azul.
              </p>
              <div className="mt-8">
                <h4 className="font-semibold mb-2 text-xl sm:text-base lg:text-lg">
                  Evolução:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm lg:text-base">
                  <li>1822-1889: Bandeira do Império (com brasão imperial)</li>
                  <li>1889: Bandeira Provisória da República</li>
                  <li>1889-hoje: Bandeira atual com esfera celeste</li>
                  <li>1992: Última modificação (inclusão de novas estrelas)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Símbolos e Significados */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
              Símbolos e Significados
            </h3>

            {/* Grid responsivo para Esfera Celeste e Faixa com Lema */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6">
                <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                  Esfera Celeste
                </h4>
                <p className="mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                  Representa o céu do Rio de Janeiro na madrugada de 15 de
                  novembro de 1889, às 8h30, momento da Proclamação da
                  República.
                </p>
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-2 sm:p-3">
                  <p className="text-xs sm:text-sm lg:text-base">
                    <strong>27 estrelas</strong>{" "}
                    representam os 26 estados brasileiros e o Distrito Federal.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6">
                <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                  Faixa com Lema
                </h4>
                <p className="mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                  "ORDEM E PROGRESSO" é inspirado no lema positivista de Auguste
                  Comte: "O Amor por princípio e a Ordem por base; o Progresso
                  por fim."
                </p>
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-2 sm:p-3">
                  <p className="text-xs sm:text-sm lg:text-base">
                    Representa os ideais republicanos e científicos da época.
                  </p>
                </div>
              </div>
            </div>

            {/* Constelações */}
            <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6">
              <h4 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                Constelações Representadas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm lg:text-base">
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3">
                  <strong>Cruzeiro do Sul:</strong>{" "}
                  Estrela mais importante, representa todos os estados
                </div>
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3">
                  <strong>Cão Maior:</strong> Inclui
                  Sírius, a estrela mais brilhante
                </div>
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:col-span-2 lg:col-span-1">
                  <strong>Escorpião:</strong>{" "}
                  Constelação zodiacal visível no hemisfério sul
                </div>
              </div>
            </div>
          </section>

          {/* Significado das Cores */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
              Significado das Cores
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Verde */}
              <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl text-white border border-white/30 p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  🟢 VERDE
                </h4>
                <p className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">
                  Representa as matas e florestas brasileiras.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Simboliza a esperança e a natureza exuberante do país.
                </p>
              </div>

              {/* Amarelo */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl text-white border border-black/30 p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  🟡 AMARELO
                </h4>
                <p className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">
                  Representa as riquezas minerais do Brasil.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Simboliza o ouro e a prosperidade da nação.
                </p>
              </div>

              {/* Azul */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white border border-white/30 p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  🔵 AZUL
                </h4>
                <p className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">
                  Representa o céu brasileiro e seus rios.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Simboliza a imensidão do território e a serenidade.
                </p>
              </div>

              {/* Branco */}
              <div className="bg-gradient-to-r from-gray-100 to-white rounded-xl text-gray-800 border border-black/30 p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  ⚪ BRANCO
                </h4>
                <p className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg">
                  Representa a paz e a harmonia.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Simboliza o desejo de unidade nacional.
                </p>
              </div>
            </div>
          </section>

          {/* Estrelas e Estados */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
              Estrelas e Estados
            </h3>
            <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6">
              <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                Cada estrela na bandeira representa um estado brasileiro ou o
                Distrito Federal. A posição das estrelas corresponde à sua
                localização no céu.
              </p>

              {/* Grid de regiões - responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 text-xs sm:text-sm lg:text-base">
                {/* Norte */}
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4">
                  <h5 className="font-semibold text-xl sm:text-base lg:text-lg xl:text-xl mb-2">
                    Região Norte
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                    <li>Acre</li>
                    <li>Amazonas</li>
                    <li>Amapá</li>
                    <li>Pará</li>
                    <li>Rondônia</li>
                    <li>Roraima</li>
                    <li>Tocantins</li>
                  </ul>
                </div>

                {/* Nordeste */}
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4">
                  <h5 className="font-semibold text-xl sm:text-base lg:text-lg xl:text-xl mb-2">
                    Região Nordeste
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                    <li>Maranhão</li>
                    <li>Piauí</li>
                    <li>Ceará</li>
                    <li>Rio Grande do Norte</li>
                    <li>Paraíba</li>
                    <li>Pernambuco</li>
                    <li>Alagoas</li>
                    <li>Sergipe</li>
                    <li>Bahia</li>
                  </ul>
                </div>

                {/* Centro-Oeste */}
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4">
                  <h5 className="font-semibold text-xl sm:text-base lg:text-lg xl:text-xl mb-2">
                    Região Centro-Oeste
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                    <li>Mato Grosso</li>
                    <li>Mato Grosso do Sul</li>
                    <li>Goiás</li>
                    <li>Distrito Federal</li>
                  </ul>
                </div>

                {/* Sudeste */}
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4">
                  <h5 className="font-semibold text-xl sm:text-base lg:text-lg xl:text-xl mb-2">
                    Região Sudeste
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                    <li>São Paulo</li>
                    <li>Rio de Janeiro</li>
                    <li>Minas Gerais</li>
                    <li>Espírito Santo</li>
                  </ul>
                </div>

                {/* Sul */}
                <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4 sm:col-span-2 lg:col-span-3 xl:col-span-1">
                  <h5 className="font-semibold text-xl sm:text-base lg:text-lg xl:text-xl mb-2">
                    Região Sul
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                    <li>Paraná</li>
                    <li>Santa Catarina</li>
                    <li>Rio Grande do Sul</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
