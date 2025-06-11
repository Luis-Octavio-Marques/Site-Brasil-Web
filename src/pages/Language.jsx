import React from "react";

import brazilBackgroundLanguage from "../assets/img/country-backgrounds/Brazil-background6.png";
import Header from "../components/Header";

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

    lexicais1: [
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

    lexicais2: [
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
    <div>
      {/* Header */}
      <Header />

      {/* Tela Incial */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn overflow-x-hidden`}
        style={{
          backgroundImage: `url(${brazilBackgroundLanguage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          Idioma do Brasil
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
          color: "white",
        }}
      >
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
              className="text-4xl font-bold text-center"
              style={{ marginBottom: "16px" }}
            >
              Nas Palavras do Brasil
            </h2>
            <div className="grid" style={{ gap: "32px" }}>
              <div
                className="space-y-4 text-lg leading-relaxed"
                style={{ gap: "16px" }}
              >
                <p className="leading-relaxed text-center">
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
          </div>
        </section>

        {/* Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-15 bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
          style={{ marginBottom: "40px", padding: "30px" }}
        >
          {/* Visão Geral */}
          <div>
            <h2
              className="text-3xl font-bold border-b-2 border-white/80"
              style={{ marginBottom: "20px", paddingBottom: "10px" }}
            >
              🌍 Visão Geral
            </h2>
            <p
              className="text-lg text-justify"
              style={{ marginBottom: "15px" }}
            >
              O português brasileiro é a variante da língua portuguesa falada no
              Brasil, sendo o idioma oficial do país desde a colonização. Com
              mais de 215 milhões de falantes nativos, o Brasil concentra a
              maior população lusófona do mundo.
            </p>

            <div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg"
                style={{
                  padding: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="flex flex-col">
                  <p>
                    {" "}
                    <strong> Mais falado do mundo lusófono </strong>{" "}
                  </p>
                  <p>
                    {" "}
                    O português brasileiro representa cerca de 80% de todos os
                    falantes de português no mundo!{" "}
                  </p>
                </div>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg"
                style={{
                  padding: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="flex flex-col">
                  <p>
                    {" "}
                    <strong> Uso do gerúndio </strong>{" "}
                  </p>
                  <p>
                    {" "}
                    O português brasileiro usa bastante o gerúndio em
                    construções como "estou fazendo" ou "vou estar enviando".{" "}
                  </p>
                </div>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg"
                style={{
                  padding: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="flex flex-col">
                  <p>
                    {" "}
                    <strong> Sotaques diversos </strong>{" "}
                  </p>
                  <p>
                    {" "}
                    O Brasil tem uma variedade enorme de sotaques, mudando
                    bastante de uma região para outra.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-4"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <div
                className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default"
                style={{ padding: "20px" }}
              >
                <span
                  className="text-4xl font-bold block"
                  style={{ marginBottom: "10px" }}
                >
                  200M+
                </span>
                <span className="text-sm opacity-90"> Falantes Nativos </span>
              </div>
              <div
                className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default"
                style={{ padding: "20px" }}
              >
                <span
                  className="text-4xl font-bold block"
                  style={{ marginBottom: "10px" }}
                >
                  5
                </span>
                <span className="text-sm opacity-90"> Regiões Dialetas </span>
              </div>
            </div>
          </div>

          {/* História */}
          <div>
            <h2
              className="text-3xl font-bold border-b-2 border-white/80"
              style={{ marginBottom: "20px", paddingBottom: "10px" }}
            >
              📚 História e Formação
            </h2>
            <p
              className="text-lg text-justify"
              style={{ marginBottom: "15px" }}
            >
              A língua portuguesa chegou ao Brasil em 1500 com os colonizadores
              portugueses, mas sua evolução foi única, influenciada por línguas
              indígenas, africanas e de imigrantes.
            </p>

            <div
              className="relative"
              style={{ marginBlock: "2rem", paddingLeft: "2.5rem" }}
            >
              {/* Linha vertical */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-black opacity-30 rounded-full"></div>

              {/* Itens da linha do tempo */}
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white/10 backdrop-blur-lg border-1 border-white rounded-xl shadow-lg transition-transform duration-300 cursor-default"
                  style={{ marginBottom: "2.5rem", padding: "1rem" }}
                >
                  {/* Marcador do evento */}
                  <div className="absolute -left-[1.91rem] top-5 w-4 h-4 bg-black/80 border-4 border-white z-10 rounded-full shadow-md"></div>

                  {/* Data e evento */}
                  <div
                    className="text-sm font-semibold"
                    style={{ marginBottom: "0.25rem" }}
                  >
                    {item.date}
                  </div>
                  <p className="text-sm text-white">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Características Distintivas */}
        <div className="col-span-full bg-white/5 backdrop-blur-md border-white border-1 rounded-lg" style={{ padding: "30px" }}>
          <h2
            className="text-3xl font-bold border-b-2 border-white/80"
            style={{ marginBottom: "20px", paddingBottom: "10px" }}
          >
            🗣️ Características Distintivas
          </h2>
          <p className="text-lg text-justify" style={{ marginBottom: "15px" }}>
            O português brasileiro desenvolveu características únicas que o
            distinguem do português europeu e de outras variantes da língua.
          </p>

          <h3
            className="text-2xl font-semibold"
            style={{ marginTop: "20px", marginBottom: "15px" }}
          >
            Principais Diferenças Fonéticas:
          </h3>
          <div
            className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
            style={{
              padding: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {examples.foneticas.map((example, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <strong>{example.title}:</strong> {example.desc}
              </div>
            ))}
          </div>

          <h3
            className="text-2xl font-semibold"
            style={{ marginTop: "20px", marginBottom: "15px" }}
          >
            Diferenças Lexicais:
          </h3>
          <div
            className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
            style={{
              padding: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {examples.lexicais.map((example, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <strong>{example.title}:</strong> {example.desc}
              </div>
            ))}
          </div>
        </div>

        {/* Nova Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          style={{ marginBlock: "30px" }}
        >
          {/* Variações Regionais */}
          <div className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg" style={{ padding: "30px" }}>
            <h2
              className="text-3xl font-bold border-b-2 border-white/80"
              style={{ marginBottom: "20px", paddingBottom: "10px" }}
            >
              🌎 Variações Regionais
            </h2>
            <p
              className="text-lg text-justify"
              style={{ marginBottom: "15px" }}
            >
              O Brasil possui uma rica diversidade dialetal, com variações
              significativas entre as diferentes regiões.
            </p>

            <div
              className="grid grid-cols-1 gap-4"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{ padding: "15px" }}
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{ marginBottom: "8px" }}
                  >
                    {region.name}
                  </h3>
                  <p className="text-md">{region.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educação e Norma Culta */}
          <div className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg" style={{ padding: "30px" }}>
            <h2
              className="text-3xl font-bold border-b-2 border-white/80"
              style={{ marginBottom: "20px", paddingBottom: "10px" }}
            >
              🎓 Educação e Norma Culta
            </h2>
            <p
              className="text-lg text-justify"
              style={{ marginBottom: "15px" }}
            >
              O ensino do português no Brasil segue a norma culta brasileira,
              estabelecida por gramáticos e instituições como a Academia
              Brasileira de Letras.
            </p>

            <h3
              className="text-xl font-semibold"
              style={{ marginBottom: "15px" }}
            >
              Características da Norma Culta Brasileira:
            </h3>

            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
              style={{
                padding: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="space-y-2">
                <p>• Uso de "você" como pronome de tratamento padrão</p>
                <p>• Colocação pronominal mais flexível</p>
                <p>• Uso do gerúndio ("está fazendo" vs. "está a fazer")</p>
                <p>• Simplificação de certas estruturas sintáticas</p>
              </div>
            </div>
            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
              style={{
                padding: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="space-y-2">
                <p>• O verbo concorda em número e pessoa com o sujeito </p>
                <p>
                  • Adjetivos, artigos e pronomes concordam com o substantivo{" "}
                </p>
                <p>• Verbos e nomes exigem as preposições corretas </p>
                <p>• Utiliza vocabulário neutro e mais universal </p>
              </div>
            </div>
            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
              style={{
                padding: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="space-y-2">
                <p>• Preferência por próclise e ênfase à norma formal </p>
                <p>• Palavras mais específicas e formais são priorizadas </p>
                <p>• Períodos mais longos com uso de subordinadas </p>
                <p>• Evita formas contraídas ou populares </p>
              </div>
            </div>
          </div>
        </div>

        {/* Importância Cultural */}
        <div className="col-span-full bg-white/5 backdrop-blur-md border-white border-1 rounded-lg" style={{ padding: "30px" }}>
          <h2
            className="text-3xl font-bold border-b-2 border-white/80"
            style={{ marginBottom: "20px", paddingBottom: "10px" }}
          >
            🌟 Importância Cultural e Global
          </h2>
          <p className="text-lg text-justify" style={{ marginBottom: "15px" }}>
            O português brasileiro transcende fronteiras, sendo fundamental para
            a cultura lusófona mundial e tendo crescente importância no cenário
            internacional.
          </p>

          <h3
            className="text-2xl font-semibold"
            style={{ margin: "20px 0 15px 0" }}
          >
            Influência Cultural:
          </h3>
          <p className="text-lg text-justify" style={{ marginBottom: "15px" }}>
            A literatura brasileira, música, cinema e televisão exportam o
            português brasileiro para o mundo, tornando-o uma das variantes mais
            conhecidas da língua portuguesa globalmente.
          </p>

          <h3
            className="text-2xl font-semibold"
            style={{ margin: "20px 0 15px 0" }}
          >
            Presença Digital:
          </h3>
          <p className="text-lg text-justify" style={{ marginBottom: "15px" }}>
            O português brasileiro domina o espaço digital lusófono, sendo
            amplamente usado em redes sociais, sites e aplicativos,
            influenciando até mesmo falantes de outras variantes do português.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            style={{ margin: "20px 0" }}
          >
            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ padding: "20px" }}
            >
              <span
                className="text-4xl font-bold block"
                style={{ marginBottom: "10px" }}
              >
                8°
              </span>
              <p> Idioma mais falado </p>
            </div>
            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ padding: "20px" }}
            >
              <span
                className="text-4xl font-bold block"
                style={{ marginBottom: "10px" }}
              >
                9
              </span>
              <p> Países onde é oficial </p>
            </div>
            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ padding: "20px" }}
            >
              <span
                className="text-4xl font-bold block"
                style={{ marginBottom: "10px" }}
              >
                260M+
              </span>
              <p> Falantes Globais </p>
            </div>
          </div>
        </div>
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
