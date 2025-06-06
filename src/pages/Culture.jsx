import React, { useState, useEffect } from "react";
import {
  Music,
  MapPin,
  Users,
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
  const [visibleCards, setVisibleCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        if (prev.length < festas.length) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  });

  const sections = [
    { id: "intro", title: t("culture.intro"), icon: MapPin },
    { id: "musica", title: t("culture.music"), icon: Music },
    { id: "festas", title: t("culture.parties"), icon: Calendar },
    { id: "arte", title: t("culture.art"), icon: Palette },
    { id: "diversidade", title: t("culture.diversity"), icon: Users },
  ];

  const musicaGeneros = [
    {
      nome: "Samba",
      descricao: t("culture.musictext1"),
    },
    {
      nome: "Bossa Nova",
      descricao: t("culture.musictext2"),
    },
    {
      nome: "Forró",
      descricao: t("culture.musictext3"),
    },
    {
      nome: "Funk Carioca",
      descricao: t("culture.musictext4"),
    },
    {
      nome: "Sertanejo",
      descricao: t("culture.musictext5"),
    },
    {
      nome: "MPB",
      descricao: t("culture.musictext6"),
    },
  ];

  const festas = [
    {
      id: 1,
      titulo: t(`culture.partytitle1`),
      descricao: t(`culture.partytext1`),
    },
    {
      id: 2,
      titulo: t(`culture.partytitle2`),
      descricao: t(`culture.partytext2`),
    },
    {
      id: 3,
      emoji: "🐂",
      titulo: "Bumba Meu Boi",
      descricao: t(`culture.partytext3`),
    },
    {
      id: 4,
      titulo: t(`culture.partytitle3`),
      descricao: t(`culture.partytext4`),
    },
    {
      id: 5,
      titulo: t(`culture.partytitle4`),
      descricao: t(`culture.partytext5`),
    },
    {
      id: 6,
      titulo: t(`culture.partytitle5`),
      descricao: t(`culture.partytext6`),
    },
    {
      id: 7,
      titulo: t(`culture.partytitle6`),
      descricao: t(`culture.partytext7`),
    },
    {
      id: 8,
      emoji: "🎺",
      titulo: "Folia de Reis",
      descricao: t(`culture.partytext8`),
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-1000 overflow-x-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <Header />

      {/* Tela Inicial */}
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
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                  }`}
                  style={{ padding: "8px 16px" }}
                >
                  <Icon
                    size={20}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main */}
      <main
        style={{
          marginLeft: "24px",
          marginRight: "24px",
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
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
              style={{ padding: "32px", marginBottom: "32px" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center"
                style={{ marginBottom: "16px" }}
              >
                {t(`culture.introsubtitle`)}
              </h2>
              <div className="grid" style={{ gap: "32px" }}>
                <div
                  className="space-y-4 text-white/90 text-lg leading-relaxed"
                  style={{ gap: "16px" }}
                >
                  <p className="leading-relaxed text-center">
                    {t(`culture.introsubdescription`)}
                  </p>
                </div>
                <div className="flex flex-row" style={{ gap: "16px" }}>
                  <div
                    className="bg-white/2 backdrop-blur-md border-white border-1 rounded-lg w-full"
                    style={{ padding: "24px" }}
                  >
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ marginBottom: "6px" }}
                    >
                      {t(`culture.introsubtitle1`)}
                    </h3>
                    <p className="text-white/90">
                      {t(`culture.introsubdescription1`)}
                    </p>
                  </div>
                  <div
                    className="bg-white/2 backdrop-blur-md border-white border-1 rounded-lg w-full"
                    style={{ padding: "24px" }}
                  >
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ marginBottom: "6px" }}
                    >
                      {t(`culture.introsubtitle2`)}
                    </h3>
                    <p className="text-white/90">
                      {t(`culture.introsubdescription2`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Música */}
        {activeSection === "musica" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Music />
                {t(`culture.musicsubtitle`)}
                <Music />
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl"
                style={{ margin: "auto auto 1rem auto" }}
              >
                {t(`culture.musicsubdescription`)}
              </p>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {musicaGeneros.map((genero, index) => (
                <div
                  key={genero.nome}
                  className={`bg-white/25 backdrop-blur-md border-white border-1 rounded-lg relative overflow-hidden  transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl group ${
                    index % 2 === 0 ? "" : ""
                  }`}
                  style={{
                    padding: "2rem",
                    marginLeft: index % 2 !== 0 ? "2rem" : "0",
                    marginRight: index % 2 === 0 ? "2rem" : "0",
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
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
                            className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            {genero.nome}
                          </h3>
                          <div className="flex" style={{ gap: "0.5rem" }}>
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 bg-white/40 rounded-full group-hover:bg-green-500 transition-all duration-300"
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
                        className="bg-white/10 backdrop-blur-sm rounded-xl border-1 border-white"
                        style={{ padding: "1rem" }}
                      >
                        <div
                          className="flex items-center"
                          style={{ gap: "0.75rem" }}
                        >
                          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                            <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent group-hover:border-l-gray-100"></div>
                          </button>
                          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white rounded-full"
                              style={{ width: `${Math.random() * 50 + 25}%` }}
                            ></div>
                          </div>
                          <span className="text-white text-sm font-mono">
                            {Math.floor(Math.random() * 3 + 2)}:
                            {Math.floor(Math.random() * 59)
                              .toString()
                              .padStart(2, "0")}
                          </span>
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
                        <div className="absolute -top-2 -right-2 text-2xl rotate-[-20deg]">
                          ♪
                        </div>
                        <div className="absolute -bottom-2 -left-2 text-xl rotate-[30deg]">
                          ♫
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Spotify */}
            <SpotifyMusicCards />
          </section>
        )}

        {/* Festas */}
        {activeSection === "festas" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/2 backdrop-blur-md border-white border-1 rounded-lg flex flex-col justify-center text-center "
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <div className="flex items-center justify-center w-full gap-4 text-white">
                <Calendar />
                <h2 className="text-4xl font-bold text-white">
                  {t(`culture.partiessubtitle`)}
                </h2>
                <Calendar />
              </div>
              <p
                className="text-xl text-white/90 text-center max-w-4xl"
                style={{ margin: "1rem auto 1rem auto" }}
              >
                {t(`culture.partiessubdescription`)}
              </p>
            </div>

            {/* Seções Informativas Detalhadas */}
            <div
              className="grid lg:grid-cols-2 text-white"
              style={{ gap: "32px", marginBottom: "32px" }}
            >
              {/* Origens e Significados */}
              <div
                className="bg-white/2 backdrop-blur-md border-white border-1 rounded-lg w-full"
                style={{ padding: "24px" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "6px" }}
                >
                  {t(`culture.partiessubtitle1`)}
                </h3>
                <p className="text-white/90">{t(`culture.partiessubdescription1`)}</p>
              </div>

              {/* Impacto Social */}
              <div
                className="bg-white/2 backdrop-blur-md border-white border-1 rounded-lg w-full"
                style={{ padding: "24px" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "6px" }}
                >
                  {t(`culture.partiessubtitle2`)}
                </h3>
                <p className="text-white/90">{t(`culture.partiessubdescription2`)}</p>
              </div>
            </div>

            {/* Destaque para Festas Específicas */}
            <div
              style={{
                marginBlockStart: "24px",
                marginBlockEnd: "24px",
                marginBottom: "32px",
              }}
            >
              {festas.map((festa, index) => (
                <div
                  key={festa.id}
                  className={`
              bg-white/20 backdrop-blur-md border border-white/100 rounded-lg w-full text-white
              transition-all duration-700 ease-out
              hover:transform hover:-translate-y-2 hover:scale-102 hover:shadow-2xl hover:shadow-white/20
            `}
                  style={{
                    padding: "24px",
                    marginBottom: "24px",
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: visibleCards.includes(index)
                      ? "0 0 30px rgba(255, 255, 255, 0.1)"
                      : "none",
                  }}
                >
                  <h3
                    className="text-3xl font-bold text-white mb-4 flex items-center gap-3"
                    style={{ marginBottom: "16px" }}
                  >
                    <span className="inline-block">{festa.emoji}</span>
                    {festa.titulo}
                  </h3>
                  <p className="text-base leading-relaxed cursor-default">
                    {festa.descricao}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Arte */}
        {activeSection === "arte" && (
          <section className="animate-fadeIn">
            <div
              className="bg-white/2 backdrop-blur-md rounded-lg border border-white"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Palette />
                Arte e Expressão
                <Palette />
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl"
                style={{ margin: "auto" }}
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
                  className="bg-white/20 border-1 border-white rounded-xl"
                  style={{ padding: "1.5rem", marginBottom: "32px" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    🏛️ Arte Clássica
                  </h3>
                  <ul
                    className="text-white/90"
                    style={{ marginBlockEnd: "8px", marginBlockStart: "8px" }}
                  >
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Renascimento: </strong> Movimento artístico e
                      cultural que valorizava o humanismo, o conhecimento, as
                      ciências e a harmonia estética. Grandes nomes incluem
                      Leonardo da Vinci e Michelangelo.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Barroco: </strong> Marcado por dramatismo,
                      contraste entre luz e sombra e forte influência religiosa.
                      No Brasil, destaca-se Aleijadinho com sua arte sacra.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Neoclassicismo: </strong> Inspirado na cultura
                      greco-romana, busca a simplicidade, equilíbrio e perfeição
                      das formas, presente em esculturas, pinturas e
                      arquitetura.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Romantismo na Arte: </strong> Valorizou o
                      subjetivo, as emoções e os ideais de liberdade, refletindo
                      tanto nos quadros quanto na escultura e na literatura da
                      época.
                    </li>
                  </ul>
                </div>

                <div
                  className="bg-white/20 border-1 border-white rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    📚 Literatura Brasileira
                  </h3>
                  <ul
                    className="text-white/90"
                    style={{ marginBlockEnd: "8px", marginBlockStart: "8px" }}
                  >
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Romantismo: </strong> Movimento que valorizou
                      os sentimentos, a natureza e a identidade nacional, com
                      autores como José de Alencar e Castro Alves.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Realismo e Naturalismo: </strong> Trouxeram um
                      olhar crítico sobre a sociedade, explorando temas como
                      hipocrisia e desigualdade. Machado de Assis é o grande
                      destaque.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Modernismo: </strong> Quebrou padrões
                      estéticos, propondo uma arte mais livre, inovadora e
                      voltada à identidade brasileira, com nomes como Mário de
                      Andrade e Oswald de Andrade.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Literatura Contemporânea: </strong> Aborda
                      questões sociais, urbanas, diversidade e novas realidades,
                      dando voz a diferentes grupos e experiências.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div
                  className="bg-white/20 border-1 border-white rounded-xl"
                  style={{ padding: "1.5rem", marginBottom: "32px" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    🎬 Cinema Brasileiro
                  </h3>
                  <ul
                    className="text-white/90"
                    style={{ marginBlockEnd: "8px", marginBlockStart: "8px" }}
                  >
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Ainda Estou Aqui – Glauber Rocha: </strong>{" "}
                      Ganhador do Oscar, retrata a Ditadura Militar no Brasil e
                      a busca por memória, justiça e pelos desaparecidos do
                      período.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Cidade de Deus – Fernando Meirelles: </strong>{" "}
                      Filme aclamado internacionalmente que retrata a vida nas
                      favelas cariocas, mostrando a dura realidade da violência
                      urbana.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> Tropa de Elite – José Padilha: </strong> Obra
                      de grande impacto que aborda a atuação do BOPE no combate
                      ao tráfico no Rio de Janeiro, levantando debates sobre
                      segurança pública e corrupção.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong> O Auto da Compadecida – Guel Arraes: </strong>{" "}
                      Uma comédia brasileira que acompanha João Grilo e Chicó,
                      dois amigos que usam astúcia e fé para enfrentar os
                      desafios do sertão, com humor e crítica social.
                    </li>
                  </ul>
                </div>

                <div
                  className="bg-white/20 border-1 border-white rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    🖌️ Arte Popular Brasileira
                  </h3>
                  <ul
                    className="text-white/90 space-y-2"
                    style={{ marginBlockEnd: "8px", marginBlockStart: "8px" }}
                  >
                    <li style={{ margin: "24px 0px" }}>
                      • <strong>Cordel Nordestino:</strong> Literatura popular
                      em versos, impressa em folhetos ilustrados e pendurados em
                      cordas, que narra histórias, lendas e costumes do povo
                      nordestino.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong>Grafite Urbano:</strong> Expressão artística que
                      ocupa os muros das cidades, refletindo críticas sociais,
                      culturais e políticas, além de valorizar a identidade
                      urbana.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong>Artesanato Regional:</strong> Produzido por
                      comunidades de todo o Brasil, representa tradições,
                      saberes e materiais locais, como cerâmica, palha, madeira
                      e tecidos.
                    </li>
                    <li style={{ margin: "24px 0px" }}>
                      • <strong>Arte Indígena Contemporânea:</strong> União
                      entre técnicas ancestrais e linguagens atuais, que
                      expressa a resistência, os costumes e as narrativas dos
                      povos originários.
                    </li>
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
              className="bg-white/2 backdrop-blur-md rounded-lg border border-white"
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Users />
                Diversidade Cultural
                <Users />
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl mx-auto"
                style={{ margin: "0rem auto 1rem auto" }}
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
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg text-center"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  🏺 Herança Indígena
                </h3>
                <div
                  className="text-white/90"
                  style={{ marginBlockEnd: ".5rem", marginBlockStart: ".5rem" }}
                >
                  <p>305 etnias diferentes</p>
                  <p>274 línguas faladas</p>
                  <p>Conhecimento ancestral da natureza</p>
                  <p>Artesanato e medicina tradicional</p>
                </div>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg text-center"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  🌍 Herança Africana
                </h3>
                <div
                  className="text-white/90"
                  style={{ marginBlockEnd: ".5rem", marginBlockStart: ".5rem" }}
                >
                  <p>Capoeira e religiões afro</p>
                  <p>Ritmos e danças</p>
                  <p>Culinária temperada</p>
                  <p>Resistência e cultura</p>
                </div>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg text-center"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  🏛️ Herança Europeia
                </h3>
                <div
                  className="text-white/90"
                  style={{ marginBlockEnd: ".5rem", marginBlockStart: ".5rem" }}
                >
                  <p>Arquitetura colonial</p>
                  <p>Tradições religiosas</p>
                  <p>Técnicas artísticas</p>
                  <p>Organização social</p>
                </div>
              </div>
            </div>

            <div
              className="grid md:grid-cols-2 bg-white/10 backdrop-blur-md border-white border-1 rounded-lg"
              style={{ gap: "1.5rem", padding: "2em 1em" }}
            >
              <div
                className="bg-white/20 rounded-lg"
                style={{ padding: "1rem" }}
              >
                <p
                  className="text-white text-2xl font-semibold"
                  style={{ marginBottom: "6px" }}
                >
                  {" "}
                  🌈 Pluralidade{" "}
                </p>
                <p className="text-white/80 text-base">
                  Um país onde diferentes culturas, histórias e tradições
                  convivem, se respeitam e se fortalecem mutuamente.
                </p>
              </div>
              <div
                className="bg-white/20 rounded-lg"
                style={{ padding: "1rem" }}
              >
                <p
                  className="text-white text-2xl font-semibold"
                  style={{ marginBottom: "6px" }}
                >
                  {" "}
                  🤜🤛 Acolhimento
                </p>
                <p className="text-white/80 text-base">
                  Aqui, cada pessoa encontra espaço, voz e respeito,
                  independente de sua origem, crença ou história.
                </p>
              </div>
              <div
                className="bg-white/20 rounded-lg"
                style={{ padding: "1rem" }}
              >
                <p
                  className="text-white text-2xl font-semibold"
                  style={{ marginBottom: "6px" }}
                >
                  {" "}
                  🎉 Alegria{" "}
                </p>
                <p className="text-white/80 text-base">
                  Uma nação que transforma desafios em festa, onde a alegria se
                  reflete nas cores, na música e na cultura.
                </p>
              </div>
              <div
                className="bg-white/20 rounded-lg"
                style={{ padding: "1rem" }}
              >
                <p
                  className="text-white text-2xl font-semibold"
                  style={{ marginBottom: "6px" }}
                >
                  {" "}
                  ❤️ Amor{" "}
                </p>
                <p className="text-white/80 text-base">
                  O amor que une, que acolhe e que constrói pontes entre as
                  diferenças, criando laços de respeito e empatia.
                </p>
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
