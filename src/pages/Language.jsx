import React from "react";

import Header from "../components/Header";
import brazilBackgroundLanguage from "../assets/img/country-backgrounds/Brazil-background6.png"

export default function Language() {
  const regions = [
    {
      name: "🏖️ Nordeste",
      description:
        "Preservação de características arcaicas, pronúncia mais clara das vogais",
    },
    {
      name: "🏙️ Sudeste",
      description:
        "Variante mais influente, com características urbanas marcantes",
    },
    {
      name: "🌾 Sul",
      description:
        "Influência de línguas de imigração, especialmente alemã e italiana",
    },
    {
      name: "🌳 Norte",
      description: "Maior influência de línguas indígenas amazônicas",
    },
    {
      name: "🏜️ Centro-Oeste",
      description: "Mistura de características de diferentes regiões",
    },
  ];

  const timeline = [
    {
      date: "1500-1759",
      event: "Período colonial: convivência com línguas indígenas e africanas",
    },
    {
      date: "1759",
      event: "Marquês de Pombal torna o português obrigatório nas escolas",
    },
    {
      date: "1822",
      event: "Independência: início da diferenciação mais acentuada",
    },
    { date: "1990", event: "Acordo Ortográfico da Língua Portuguesa" },
  ];

  const examples = {
    foneticas: [
      {
        title: 'Pronúncia do "r"',
        desc: 'No Brasil, o "r" inicial é aspirado (como em "rato"), enquanto em Portugal é vibrante',
      },
      {
        title: "Vogais abertas",
        desc: 'Maior abertura das vogais médias (como em "pé" e "pó")',
      },
      {
        title: "Nasalização",
        desc: "Menos nasalização que o português europeu",
      },
    ],

    lexicais: [
      {
        title: "Vocabulário único",
        desc: '"abacaxi" (vs. "ananás"), "trem" (vs. "comboio"), "banheiro" (vs. "casa de banho")',
      },
      {
        title: "Influências indígenas",
        desc: "capim, pipoca, tapioca, caipira",
      },
      {
        title: "Influências africanas",
        desc: "samba, caçula, moleque, quitanda",
      },
    ],
  };

  return (
    <div className="min-h-screen transition-all duration-1000 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white min-h-screen w-full animate-fadeIn bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${brazilBackgroundLanguage})` }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 border-white px-4">
          Idioma do Brasil
        </h2>
      </div>

      {/* Main */}
      <main className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 flex flex-col justify-center text-white max-w-7xl mx-auto">
        
        {/* Introdução */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">
              Nas Palavras do Brasil
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg xl:text-xl text-center leading-relaxed max-w-5xl mx-auto">
              <p>
                A língua portuguesa falada no Brasil é um reflexo vivo da
                nossa diversidade cultural. Carregada de regionalismos, gírias
                e expressões únicas, ela mistura influências indígenas,
                africanas e europeias, criando um jeito de falar que é só
                nosso. Do "oxe" do Nordeste ao "bah" do Sul, cada canto do
                país carrega seu próprio sotaque e suas particularidades
                linguísticas, transmitidas de geração em geração como parte da
                nossa identidade.
              </p>
            </div>
          </div>
        </section>

        {/* Content Grid - Visão Geral e História */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          
          {/* Visão Geral */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold border-b-2 border-white/80 pb-2 sm:pb-3 mb-3 sm:mb-5">
              🌍 Visão Geral
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              O português brasileiro é a variante da língua portuguesa falada no
              Brasil, sendo o idioma oficial do país desde a colonização. Com
              mais de 215 milhões de falantes nativos, o Brasil concentra a
              maior população lusófona do mundo.
            </p>

            {/* Blocos informativos */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  title: "Mais falado do mundo lusófono",
                  desc: "O português brasileiro representa cerca de 80% de todos os falantes de português no mundo!",
                },
                {
                  title: "Uso do gerúndio",
                  desc: 'O português brasileiro usa bastante o gerúndio em construções como "estou fazendo" ou "vou estar enviando".',
                },
                {
                  title: "Sotaques diversos",
                  desc: "O Brasil tem uma variedade enorme de sotaques, mudando bastante de uma região para outra.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4 lg:p-5 transition-colors duration-300"
                >
                  <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">{item.title}</p>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {[
                { value: "200M+", label: "Falantes Nativos" },
                { value: "5", label: "Regiões Dialetais" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-3 sm:p-4 lg:p-5"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold block mb-1 sm:mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm lg:text-base opacity-90">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* História e Formação */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold border-b-2 border-white/80 pb-2 sm:pb-3 mb-3 sm:mb-5">
              📚 História e Formação
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              A língua portuguesa chegou ao Brasil em 1500 com os colonizadores
              portugueses, mas sua evolução foi única, influenciada por línguas
              indígenas, africanas e de imigrantes.
            </p>

            <div className="relative pl-6 sm:pl-8 lg:pl-10">
              {/* Linha vertical */}
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-white/30 rounded-full"></div>

              {/* Itens da linha do tempo */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg shadow-lg p-3 sm:p-4"
                  >
                    {/* Marcador */}
                    <div className="absolute -left-[1.1rem] sm:-left-[1.8rem] lg:-left-[2.2rem] top-3 sm:top-4 lg:top-5 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 border-2 sm:border-4 border-white rounded-full shadow-md"></div>
                    <div className="text-xs sm:text-sm lg:text-base font-semibold mb-1 sm:mb-2">{item.date}</div>
                    <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Características Distintivas */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold border-b-2 border-white/80 pb-2 sm:pb-3 mb-4 sm:mb-6 lg:mb-8">
            🗣️ Características Distintivas
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-5xl">
            O português brasileiro desenvolveu características únicas que o
            distinguem do português europeu e de outras variantes da língua.
          </p>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Diferenças Fonéticas */}
            <div>
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
                Principais Diferenças Fonéticas:
              </h4>
              <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                {examples.foneticas.map((example, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4 hover:bg-white/15 transition-colors duration-300"
                  >
                    <strong className="text-sm sm:text-base lg:text-lg">{example.title}:</strong>{" "}
                    <span className="text-xs sm:text-sm lg:text-base">{example.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenças Lexicais */}
            <div>
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
                Diferenças Lexicais:
              </h4>
              <div className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                {examples.lexicais.map((example, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg p-3 sm:p-4"
                  >
                    <strong className="text-sm sm:text-base lg:text-lg">{example.title}:</strong>{" "}
                    <span className="text-xs sm:text-sm lg:text-base text-white/90">{example.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Segunda Grid - Variações Regionais e Educação */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          
          {/* Variações Regionais */}
          <section className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-white/80 pb-2 sm:pb-3 mb-4 sm:mb-6">
              🌎 Variações Regionais
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8">
              O Brasil possui uma rica diversidade dialetal, com variações
              significativas entre as diferentes regiões.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {regions.map((region, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border-1 border-white rounded-lg text-center shadow-md hover:scale-[1.01] hover:bg-white/15 transition-all duration-300 p-3 sm:p-4"
                >
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">{region.name}</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed">{region.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Educação e Norma Culta */}
          <section className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 border-white/80 pb-2 sm:pb-3 mb-4 sm:mb-6">
              🎓 Educação e Norma Culta
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              O ensino do português no Brasil segue a norma culta brasileira,
              estabelecida por gramáticos e instituições como a Academia
              Brasileira de Letras.
            </p>

            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-5">
              Características da Norma Culta Brasileira:
            </h4>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {[
                [
                  "• Uso de 'você' como pronome de tratamento padrão",
                  "• Colocação pronominal mais flexível",
                  "• Uso do gerúndio ('está fazendo' vs. 'está a fazer')",
                  "• Simplificação de certas estruturas sintáticas"
                ],
                [
                  "• O verbo concorda em número e pessoa com o sujeito",
                  "• Adjetivos, artigos e pronomes concordam com o substantivo",
                  "• Verbos e nomes exigem as preposições corretas",
                  "• Utiliza vocabulário neutro e mais universal"
                ],
                [
                  "• Preferência por próclise e ênfase à norma formal",
                  "• Palavras mais específicas e formais são priorizadas",
                  "• Períodos mais longos com uso de subordinadas",
                  "• Evita formas contraídas ou populares"
                ]
              ].map((group, groupIndex) => (
                <div key={groupIndex} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 sm:p-4 lg:p-5 space-y-1 sm:space-y-2">
                  {group.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-xs sm:text-sm lg:text-base text-white/90">{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Importância Cultural */}
        <section className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold border-b-2 border-white/80 pb-2 sm:pb-3 mb-4 sm:mb-6 lg:mb-8">
            🌟 Importância Cultural e Global
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-5xl">
            O português brasileiro transcende fronteiras, sendo fundamental para
            a cultura lusófona mundial e tendo crescente importância no cenário
            internacional.
          </p>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10 mb-6 sm:mb-8 lg:mb-10">
            <div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Influência Cultural:</h4>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                A literatura brasileira, música, cinema e televisão exportam o
                português brasileiro para o mundo, tornando-o uma das variantes mais
                conhecidas da língua portuguesa globalmente.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Presença Digital:</h4>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                O português brasileiro domina o espaço digital lusófono, sendo
                amplamente usado em redes sociais, sites e aplicativos,
                influenciando até mesmo falantes de outras variantes do português.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { value: "8°", label: "Idioma mais falado", color: "text-yellow-400" },
              { value: "9", label: "Países onde é oficial", color: "text-green-400" },
              { value: "260M+", label: "Falantes Globais", color: "text-blue-400" },
            ].map(({ value, label }, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border-1 border-white rounded-xl text-center shadow-lg hover:scale-102 transition-all duration-300 p-4 sm:p-5 lg:p-6"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold block mb-2 sm:mb-3">
                  {value}
                </span>
                <p className="text-xs sm:text-sm lg:text-base text-white">{label}</p>
              </div>
            ))}
          </div>
        </section>
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