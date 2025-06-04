import React, { useState, useEffect } from "react";
import {
  Music,
  MapPin,
  Users,
  Utensils,
  Palette,
  Calendar,
} from "lucide-react";

import brazilBackgroundCulture from "../assets/img/country-backgrounds/Brazil-background3.png";
import Header from "../components/Header";
import SpotifyMusicCards from "../components/SpotifyMusicCards";
import LanguageButton from "../components/LanguageButton";
import { useTranslation } from "react-i18next";

export default function Culture() {
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState("intro");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: "intro", title: "Introdução", icon: MapPin },
    { id: "musica", title: "Música", icon: Music },
    { id: "culinaria", title: "Culinária", icon: Utensils },
    { id: "festas", title: "Festas", icon: Calendar },
    { id: "arte", title: "Arte", icon: Palette },
    { id: "diversidade", title: "Diversidade", icon: Users },
  ];

  const musicaGeneros = [
    {
      nome: "Samba",
      descricao: "Ritmo nascido no Rio de Janeiro, símbolo do Carnaval",
    },
    {
      nome: "Bossa Nova",
      descricao: "Fusão suave de samba e jazz, mundialmente reconhecida",
    },
    {
      nome: "Forró",
      descricao: "Música nordestina tradicional, dança de casais",
    },
    {
      nome: "Funk Carioca",
      descricao: "Ritmo urbano das favelas do Rio de Janeiro",
    },
    {
      nome: "Sertanejo",
      descricao: "Música country brasileira, muito popular atualmente",
    },
    {
      nome: "MPB",
      descricao: "Música Popular Brasileira, rica em poesia e melodia",
    },
  ];

  const pratosTypicos = [
    {
      nome: "Feijoada",
      regiao: "Nacional",
      descricao: "Prato nacional com feijão preto e carnes",
    },
    {
      nome: "Acarajé",
      regiao: "Bahia",
      descricao: "Bolinho de feijão fradinho frito no dendê",
    },
    {
      nome: "Pão de Açúcar",
      regiao: "Minas Gerais",
      descricao: "Doce tradicional mineiro",
    },
    {
      nome: "Tucumã",
      regiao: "Amazônia",
      descricao: "Fruto amazônico consumido com farinha",
    },
    {
      nome: "Churrasco",
      regiao: "Sul",
      descricao: "Tradição gaúcha de assar carnes",
    },
    {
      nome: "Tapioca",
      regiao: "Nordeste",
      descricao: "Crepe feito com goma de mandioca",
    },
  ];

  const festasPopulares = [
    { nome: "Carnaval", local: "Todo o Brasil", mes: "Fevereiro/Março" },
    { nome: "Festa Junina", local: "Todo o Brasil", mes: "Junho" },
    { nome: "Festival de Parintins", local: "Amazonas", mes: "Junho" },
    { nome: "Oktoberfest", local: "Santa Catarina", mes: "Outubro" },
    { nome: "Círio de Nazaré", local: "Pará", mes: "Outubro" },
    { nome: "Reveillon", local: "Rio de Janeiro", mes: "Dezembro" },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-yellow-400 transition-all duration-1000 overflow-x-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <Header />

      {/* Main */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn"
        style={{
          backgroundImage: `url(${brazilBackgroundCulture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <div>
          <h2 className="text-6xl font-bold border-b-4 border-white">
            {t(`culture.title`)}
          </h2>
          <p
            className="text-white text-2xl font-bold"
            style={{ marginTop: "12px" }}
          >
            {" "}
            O Brasil não é para amadores
          </p>
        </div>

        <LanguageButton />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div
          style={{
            padding: "16px 24px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="container"
        >
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: "24px" }}
          >
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-white text-blue-600 shadow-lg scale-105"
                      : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                  }`}
                  style={{ padding: "8px 16px" }}
                >
                  <Icon
                    size={20}
                    style={{ marginRight: "10px", marginLeftt: "10px" }}
                  />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "6px",
          paddingRight: "6px",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        {/* Introdução */}
        {activeSection === "intro" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              style={{ padding: "32px", marginBottom: "32px" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center"
                style={{ marginBottom: "16px" }}
              >
                O Brasil Cultural
              </h2>
              <div className="grid" style={{ gap: "32px" }}>
                <div
                  className="space-y-4 text-white/90 text-lg leading-relaxed"
                  style={{ gap: "16px" }}
                >
                  <p>
                    O Brasil é um mosaico cultural extraordinário, resultado da
                    fusão harmoniosa entre tradições indígenas milenares,
                    herança africana trazida pelos escravizados, e influências
                    europeias dos colonizadores. Esta mistura única gerou uma
                    identidade cultural própria, reconhecida mundialmente pela
                    sua criatividade, alegria e diversidade. Somos um país que
                    celebra suas diferenças e as transforma em arte, música,
                    dança e gastronomia.
                  </p>
                </div>
                <div className="flex flex-row" style={{ gap: "16px" }}>
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl w-full"
                    style={{ padding: "24px" }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      🌍 Diversidade Regional
                    </h3>
                    <p className="text-white/90">
                      5 regiões, 26 estados + DF, cada um com suas tradições
                      únicas
                    </p>
                  </div>
                  <div
                    className="bg-gradient-to-r from-yellow-500 to-red-500 rounded-xl w-full"
                    style={{ padding: "24px" }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      🎭 Patrimônio UNESCO
                    </h3>
                    <p className="text-white/90">
                      22 sítios reconhecidos como Patrimônio da Humanidade
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3" style={{ gap: "24px" }}>
              <div
                className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white"
                style={{ padding: "24px" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "12px" }}
                >
                  🏛️ Patrimônio Histórico
                </h3>
                <p>
                  Cidades coloniais preservadas como Ouro Preto, Salvador e
                  Olinda contam nossa história
                </p>
              </div>
              <div
                className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl text-white"
                style={{ padding: "24px" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "12px" }}
                >
                  🌿 Natureza e Cultura
                </h3>
                <p>
                  Amazônia, Cerrado, Mata Atlântica: berços de culturas
                  tradicionais únicas
                </p>
              </div>
              <div
                className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl text-white"
                style={{ padding: "24px" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "12px" }}
                >
                  🤝 Sincretismo
                </h3>
                <p>
                  Religiões, culinárias e tradições se misturam criando algo
                  genuinamente brasileiro
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Música */}
        {activeSection === "musica" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Music className="animate-bounce" />
                Música Brasileira
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl mx-auto"
                style={{ marginBottom: "2rem" }}
              >
                Do samba que nasceu nas senzalas ao funk que ecoa nas favelas, a
                música brasileira é a trilha sonora de um povo alegre e
                resiliente.
              </p>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {musicaGeneros.map((genero, index) => (
                <div
                  key={genero.nome}
                  className={`relative overflow-hidden rounded-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl group ${
                    index % 2 === 0 ? "" : ""
                  }`}
                  style={{
                    padding: "2rem",
                    marginLeft: index % 2 !== 0 ? "2rem" : "0",
                    marginRight: index % 2 === 0 ? "2rem" : "0",
                    animationDelay: `${index * 0.2}s`,
                    background: `linear-gradient(135deg, ${
                      index % 6 === 0
                        ? "#FF6B6B, #FF8E53"
                        : index % 6 === 1
                        ? "#4ECDC4, #44A08D"
                        : index % 6 === 2
                        ? "#845EC2, #B39BC8"
                        : index % 6 === 3
                        ? "#FF9671, #FFC75F"
                        : index % 6 === 4
                        ? "#F38BA8, #A8DADC"
                        : "#6C5CE7, #A29BFE"
                    })`,
                  }}
                >
                  {/* Efeito de ondas musicais no fundo */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-32 h-32 rounded-full border-4 border-white animate-ping"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-2 border-white animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border-2 border-white animate-bounce"></div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <div
                        className="flex items-center"
                        style={{ gap: "1rem", marginBottom: "1rem" }}
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Music className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <div>
                          <h3
                            className="text-3xl font-bold text-white group-hover:text-yellow-200 transition-colors"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            {genero.nome}
                          </h3>
                          <div className="flex" style={{ gap: "0.5rem" }}>
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 bg-white/40 rounded-full group-hover:bg-yellow-300 transition-all duration-300"
                                style={{
                                  animationDelay: `${i * 0.1}s`,
                                  height: `${Math.random() * 20 + 10}px`,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p
                        className="text-white/90 text-lg leading-relaxed group-hover:text-white transition-colors"
                        style={{ marginBottom: "1rem" }}
                      >
                        {genero.descricao}
                      </p>

                      {/* Simulador de player de música */}
                      <div
                        className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                        style={{ padding: "1rem" }}
                      >
                        <div
                          className="flex items-center"
                          style={{ gap: "0.75rem", marginBottom: "0.75rem" }}
                        >
                          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                            <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent group-hover:border-l-yellow-300"></div>
                          </button>
                          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-white to-yellow-300 rounded-full transition-all duration-1000 group-hover:from-yellow-300 group-hover:to-white"
                              style={{ width: `${Math.random() * 50 + 25}%` }}
                            ></div>
                          </div>
                          <span className="text-white/70 text-sm font-mono">
                            {Math.floor(Math.random() * 3 + 2)}:
                            {Math.floor(Math.random() * 59)
                              .toString()
                              .padStart(2, "0")}
                          </span>
                        </div>
                        <div className="text-white/60 text-sm">
                          🎵 Reproduzindo: {genero.nome} Clássico
                        </div>
                      </div>
                    </div>

                    {/* Ícone musical decorativo */}
                    <div
                      className="hidden md:block"
                      style={{ marginLeft: "2rem" }}
                    >
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                          <div className="text-6xl">
                            {index % 6 === 0
                              ? "🥁"
                              : index % 6 === 1
                              ? "🎸"
                              : index % 6 === 2
                              ? "🎹"
                              : index % 6 === 3
                              ? "🎺"
                              : index % 6 === 4
                              ? "🎤"
                              : "🎻"}
                          </div>
                        </div>
                        {/* Notas musicais flutuantes */}
                        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                          ♪
                        </div>
                        <div className="absolute -bottom-2 -left-2 text-xl animate-pulse">
                          ♫
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-center"
              style={{ marginTop: "3rem", padding: "2rem" }}
            >
              <h3
                className="text-3xl font-bold text-white"
                style={{ marginBottom: "1rem" }}
              >
                🎵 Artistas Icônicos
              </h3>

              {/* Card Spotify */}
              <SpotifyMusicCards />
            </div>
          </section>
        )}

        {/* Culinária */}
        {activeSection === "culinaria" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Utensils className="animate-bounce" />
                Culinária Brasileira
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl mx-auto"
                style={{ marginBottom: "2rem" }}
              >
                Nossa mesa é um encontro de sabores: temperos indígenas,
                técnicas africanas e receitas europeias criaram uma gastronomia
                única e saborosa.
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "1.5rem", marginBottom: "2rem" }}
            >
              {pratosTypicos.map((prato, index) => (
                <div
                  key={prato.nome}
                  className="bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl transform hover:scale-105 transition-all duration-300"
                  style={{
                    padding: "1.5rem",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="text-sm bg-white/20 rounded-full inline-block text-white"
                    style={{
                      padding: "0.25rem 0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {prato.regiao}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {prato.nome}
                  </h3>
                  <p className="text-white/90">{prato.descricao}</p>
                </div>
              ))}
            </div>

            <div
              className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl"
              style={{ padding: "2rem" }}
            >
              <h3
                className="text-3xl font-bold text-white text-center"
                style={{ marginBottom: "1.5rem" }}
              >
                🌱 Ingredientes Brasileiros
              </h3>
              <div
                className="grid md:grid-cols-4 text-center"
                style={{ gap: "1rem" }}
              >
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div style={{ marginBottom: "0.5rem" }} className="text-2xl">
                    🥥
                  </div>
                  <div className="text-white font-semibold">Coco</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div style={{ marginBottom: "0.5rem" }} className="text-2xl">
                    🌶️
                  </div>
                  <div className="text-white font-semibold">Pimenta</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div style={{ marginBottom: "0.5rem" }} className="text-2xl">
                    🫘
                  </div>
                  <div className="text-white font-semibold">Feijão</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div style={{ marginBottom: "0.5rem" }} className="text-2xl">
                    🥭
                  </div>
                  <div className="text-white font-semibold">
                    Frutas Tropicais
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Festas */}
        {activeSection === "festas" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Calendar className="animate-bounce" />
                Festas e Celebrações
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl mx-auto"
                style={{ marginBottom: "2rem" }}
              >
                O brasileiro sabe celebrar como ninguém! Nossas festas misturam
                fé, alegria, música e dança, criando momentos únicos de
                confraternização.
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: "1.5rem", marginBottom: "2rem" }}
            >
              {festasPopulares.map((festa, index) => (
                <div
                  key={festa.nome}
                  className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl transform hover:scale-105 transition-all duration-300 hover:rotate-1"
                  style={{
                    padding: "1.5rem",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {festa.nome}
                  </h3>
                  <div className="space-y-2 text-white/90">
                    <div
                      className="flex items-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <MapPin size={16} />
                      {festa.local}
                    </div>
                    <div
                      className="flex items-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <Calendar size={16} />
                      {festa.mes}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-2xl text-center"
              style={{ padding: "2rem" }}
            >
              <h3
                className="text-3xl font-bold text-white"
                style={{ marginBottom: "1.5rem" }}
              >
                🎭 O Maior Show da Terra
              </h3>
              <p
                className="text-xl text-white/90"
                style={{ marginBottom: "1rem" }}
              >
                O Carnaval brasileiro é reconhecido mundialmente como a maior
                festa popular do planeta
              </p>
              <div
                className="grid md:grid-cols-3 text-white"
                style={{ gap: "1rem" }}
              >
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl font-bold">6 milhões</div>
                  <div>Foliões no Rio</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl font-bold">2 milhões</div>
                  <div>Turistas</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl font-bold">500+</div>
                  <div>Anos de História</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Arte */}
        {activeSection === "arte" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Palette className="animate-bounce" />
                Arte e Expressão
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl mx-auto"
                style={{ marginBottom: "2rem" }}
              >
                A arte brasileira reflete nossa alma: colorida, vibrante e cheia
                de vida. Do barroco mineiro ao grafite urbano, expressamos nossa
                criatividade única.
              </p>
            </div>

            <div
              className="grid md:grid-cols-2"
              style={{ gap: "2rem", marginBottom: "2rem" }}
            >
              <div className="space-y-6">
                <div
                  className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    🏛️ Arte Clássica
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    <li>• Aleijadinho - Escultura barroca</li>
                    <li>• Cândido Portinari - Pintura modernista</li>
                    <li>• Oscar Niemeyer - Arquitetura</li>
                    <li>• Burle Marx - Paisagismo</li>
                  </ul>
                </div>
                <div
                  className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    📚 Literatura
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    <li>• Machado de Assis - Realismo</li>
                    <li>• Clarice Lispector - Modernismo</li>
                    <li>• Jorge Amado - Romance regional</li>
                    <li>• Paulo Coelho - Literatura contemporânea</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div
                  className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    🎬 Cinema
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    <li>• Cinema Novo - Glauber Rocha</li>
                    <li>• Cidade de Deus - Fernando Meirelles</li>
                    <li>• Tropa de Elite - José Padilha</li>
                    <li>• Central do Brasil - Walter Salles</li>
                  </ul>
                </div>
                <div
                  className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    🎭 Arte Popular
                  </h3>
                  <ul className="text-white/90 space-y-2">
                    <li>• Cordel nordestino</li>
                    <li>• Grafite urbano</li>
                    <li>• Artesanato regional</li>
                    <li>• Arte indígena contemporânea</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Diversidade */}
        {activeSection === "diversidade" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Users className="animate-bounce" />
                Diversidade Cultural
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl mx-auto"
                style={{ marginBottom: "2rem" }}
              >
                Somos um povo miscigenado, resultado da união de diferentes
                etnias que construíram juntas uma nação plural e acolhedora.
              </p>
            </div>

            <div
              className="grid md:grid-cols-3"
              style={{ gap: "2rem", marginBottom: "2rem" }}
            >
              <div
                className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl text-center"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  🏺 Herança Indígena
                </h3>
                <div className="text-white/90 space-y-2">
                  <p>305 etnias diferentes</p>
                  <p>274 línguas faladas</p>
                  <p>Conhecimento ancestral da natureza</p>
                  <p>Artesanato e medicina tradicional</p>
                </div>
              </div>
              <div
                className="bg-gradient-to-br from-red-600 to-pink-600 rounded-xl text-center"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  🌍 Herança Africana
                </h3>
                <div className="text-white/90 space-y-2">
                  <p>Capoeira e religiões afro</p>
                  <p>Ritmos e danças</p>
                  <p>Culinária temperada</p>
                  <p>Resistência e cultura</p>
                </div>
              </div>
              <div
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-center"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  🏛️ Herança Europeia
                </h3>
                <div className="text-white/90 space-y-2">
                  <p>Arquitetura colonial</p>
                  <p>Tradições religiosas</p>
                  <p>Técnicas artísticas</p>
                  <p>Organização social</p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl text-center"
              style={{ padding: "2rem" }}
            >
              <h3
                className="text-3xl font-bold text-white"
                style={{ marginBottom: "1.5rem" }}
              >
                🤝 Brasil: País de Todos
              </h3>
              <p
                className="text-xl text-white/90"
                style={{ marginBottom: "1.5rem" }}
              >
                Nossa diversidade é nossa força. Somos um povo que celebra as
                diferenças e encontra na pluralidade sua maior riqueza.
              </p>
              <div className="grid md:grid-cols-4" style={{ gap: "1rem" }}>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl" style={{ marginBottom: "0.5rem" }}>
                    🌈
                  </div>
                  <div className="text-white font-semibold">Pluralidade</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl" style={{ marginBottom: "0.5rem" }}>
                    🫶
                  </div>
                  <div className="text-white font-semibold">Acolhimento</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl" style={{ marginBottom: "0.5rem" }}>
                    🎉
                  </div>
                  <div className="text-white font-semibold">Alegria</div>
                </div>
                <div
                  className="bg-white/20 rounded-lg"
                  style={{ padding: "1rem" }}
                >
                  <div className="text-2xl" style={{ marginBottom: "0.5rem" }}>
                    ❤️
                  </div>
                  <div className="text-white font-semibold">Amor</div>
                </div>
              </div>
            </div>
          </section>
        )}
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
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
