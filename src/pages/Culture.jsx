import React, { useRef, useState, useEffect } from "react";
import {
  Music,
  MapPin,
  Users,
  Palette,
  Calendar,
  Volume2,
  Play,
  Pause,
  Menu,
  X,
} from "lucide-react";

import brazilBackgroundCulture from "../assets/img/country-backgrounds/Brazil-background3.png";
import Header from "../components/Header";
import SpotifyMusicCards from "../components/SpotifyMusicCards";
import Card from "../components/Card";

import song from "../assets/songs/Hino Nacional do Brasil - Oficial.mp3";

export default function Culture() {
  const [activeSection, setActiveSection] = useState("intro");
  const [visibleCards, setVisibleCards] = useState([]);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  });

  const sections = [
    { id: "intro", title: "Introdução", icon: MapPin },
    { id: "musica", title: "Músicas", icon: Music },
    { id: "festas", title: "Festas", icon: Calendar },
    { id: "arte", title: "Arte", icon: Palette },
    { id: "diversidade", title: "Diversidade", icon: Users },
    { id: "hino", title: "Hino", icon: Volume2 },
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

  const festas = [
    {
      id: 1,
      titulo: "🎭 Carnaval",
      descricao:
        "O Carnaval é a maior e mais famosa festa do Brasil, celebrada em praticamente todo o país, com destaque para cidades como Rio de Janeiro, São Paulo, Salvador e Recife. Essa festa é marcada por desfiles grandiosos das escolas de samba, blocos de rua animados, fantasias cheias de cores e criatividade, além de muita música e dança que contagiam moradores e turistas.",
    },
    {
      id: 2,
      titulo: "🔥 Festa Junina",
      descricao:
        "As Festas Juninas são tradições populares celebradas durante o mês de junho, em homenagem a santos católicos como Santo Antônio, São João e São Pedro. Muito presentes no Nordeste brasileiro, essas festas reúnem quadrilhas típicas, fogueiras, comidas tradicionais como pamonha, canjica e milho cozido, além de brincadeiras populares.",
    },
    {
      id: 3,
      titulo: "🐂 Bumba Meu Boi",
      descricao:
        "Originado no Maranhão e difundido por outras regiões do Norte e Nordeste, o Bumba Meu Boi é uma festa tradicional que mistura teatro, música e dança para contar a lenda da morte e ressurreição de um boi. As apresentações são vibrantes e coloridas, com personagens típicos e muita animação.",
    },
    {
      id: 4,
      titulo: "🎶 Festival de Parintins",
      descricao:
        "O Festival de Parintins, realizado em Parintins, no Amazonas, é uma celebração anual que acontece em junho e é conhecida pela disputa entre dois bois-bumbás: Caprichoso e Garantido. Com apresentações de músicas regionais, alegorias gigantes e performances folclóricas, o festival destaca a riqueza da cultura amazônica.",
    },
    {
      id: 5,
      titulo: "🎅 Natal de Gramado",
      descricao:
        "O Natal de Gramado, no Rio Grande do Sul, é uma festa que transforma a cidade em um cenário mágico durante toda a temporada natalina. Com decorações iluminadas, espetáculos musicais, desfiles temáticos e atrações para todas as idades, Gramado se torna um dos destinos mais procurados do Brasil nessa época.",
    },
    {
      id: 6,
      titulo: "🏹 São João de Campina Grande e Caruaru",
      descricao:
        "As festas de São João de Campina Grande (Paraíba) e Caruaru (Pernambuco) disputam o título de maior São João do mundo, atraindo milhões de pessoas todos os anos. Essas celebrações são marcadas por quadrilhas animadas, grandes fogueiras, comidas típicas e shows musicais que exaltam a cultura nordestina.",
    },
    {
      id: 7,
      titulo: "🎡 Oktoberfest de Blumenau",
      descricao:
        "Inspirada na festa tradicional alemã, a Oktoberfest de Blumenau, em Santa Catarina, é a maior festa germânica fora da Alemanha. Reúne cervejas artesanais, danças típicas, trajes tradicionais e uma gastronomia rica, refletindo a forte herança cultural dos imigrantes alemães na região.",
    },
    {
      id: 8,
      titulo: "🎺 Folia de Reis",
      descricao:
        "Comemorada principalmente nas zonas rurais do Brasil entre o Natal e o Dia de Reis (6 de janeiro), a Folia de Reis é uma festa religiosa que envolve grupos de foliões que cantam e visitam casas, representando os Reis Magos.",
    },
  ];

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const seekTime = ((e.clientX - rect.left) / rect.width) * audio.duration;

    audio.currentTime = seekTime;
  };

  return (
    <div className="min-h-screen transition-all duration-1000 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
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
          <h2 className="text-4xl md:text-6xl font-bold border-b-4 border-white px-4">
            Cultura do Brasil
          </h2>
        </div>
      </div>

      {/* Navigation - Mobile */}
      <div className="md:hidden sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full py-4 px-6 flex justify-between items-center text-white"
        >
          <span className="text-lg font-medium">
            {sections.find((s) => s.id === activeSection)?.title || "Menu"}
          </span>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="bg-white/10 backdrop-blur-lg pb-4 px-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg my-1 transition-all
                    ${
                      isActive
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/20"
                    }`}
                >
                  <Icon size={20} />
                  {section.title}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50 animate-fadeIn">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base
                    ${
                      isActive
                        ? "bg-white text-black shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                    }`}
                >
                  <Icon size={16} className="md:size-5" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-4 sm:mx-6 md:mx-8 lg:mx-24 py-3 md:py-6">
        {/* Introdução */}
        {activeSection === "intro" && (
          <section className="animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-4 md:p-8 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-3 md:mb-4">
                Brasil Cultural
              </h2>

              <div className="grid gap-4 md:gap-8">
                <div className="text-white/90 text-base md:text-lg leading-relaxed text-center space-y-2 md:space-y-4">
                  <p>
                    O Brasil é um mosaico cultural extraordinário, resultado da
                    fusão harmoniosa entre tradições indígenas milenares,
                    herança africana trazida pelos escravizados, e influências
                    europeias dos colonizadores.
                  </p>
                </div>

                <div className="flex flex-col gap-3 md:gap-4">
                  {/* Card 1 */}
                  <div className="w-full rounded-lg border-1 border-white backdrop-blur-md bg-white/5 p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                      🌍 Diversidade Regional
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      O Brasil é formado por 5 regiões e 26 estados, além do
                      Distrito Federal. Cada um carrega suas próprias tradições,
                      culturas, culinárias, sotaques e manifestações típicas.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="w-full rounded-lg border-1 border-white backdrop-blur-md bg-white/5 p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                      👥 Povo Brasileiro
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      O povo brasileiro é resultado de uma mistura de etnias,
                      culturas e histórias. Somos reconhecidos pela alegria,
                      hospitalidade e resiliência.
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
            <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-4 md:p-8 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Music size={24} className="md:size-8" />
                Música Brasileira
                <Music size={24} className="md:size-8" />
              </h2>
              <p className="text-base md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-3 md:mb-4">
                Do samba que nasceu nas senzalas ao funk que ecoa nas favelas, a
                música brasileira é a trilha sonora de um povo alegre e
                resiliente.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-8">
              {musicaGeneros.map((genero, index) => (
                <div
                  key={genero.nome}
                  className={`bg-white/5 backdrop-blur-md border border-white rounded-lg relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl group p-4 md:p-8`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Music className="w-5 h-5 md:w-8 md:h-8 text-white animate-pulse" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-green-400 transition-colors mb-1 md:mb-2">
                            {genero.nome}
                          </h3>
                          <div className="flex gap-1 md:gap-2">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 md:w-2 bg-white/40 rounded-full group-hover:bg-green-500 transition-all duration-300"
                                style={{
                                  animationDelay: `${i * 0.1}s`,
                                  height: `${Math.random() * 20 + 10}px`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-white/90 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors mb-3 md:mb-4">
                        {genero.descricao}
                      </p>

                      {/* Player de música */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white p-2 md:p-4">
                        <div className="flex items-center gap-2 md:gap-3">
                          <button className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                            <div className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-white border-y-[4px] md:border-y-[6px] border-y-transparent group-hover:border-l-gray-100" />
                          </button>
                          <div className="flex-1 h-1 md:h-2 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white rounded-full"
                              style={{ width: `${Math.random() * 50 + 25}%` }}
                            />
                          </div>
                          <span className="text-white text-xs md:text-sm font-mono">
                            {Math.floor(Math.random() * 3 + 2)}:
                            {Math.floor(Math.random() * 59)
                              .toString()
                              .padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Ícone musical decorativo */}
                    <div className="hidden md:block ml-4 md:ml-8">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                          <div className="text-4xl md:text-6xl">
                            {["🥁", "🎸", "🎹", "🎺", "🎤", "🎻"][index % 6]}
                          </div>
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
            <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg flex flex-col justify-center text-center p-4 md:p-8 mb-6 md:mb-8">
              <div className="flex items-center justify-center w-full gap-2 md:gap-4 text-white mb-3 md:mb-4">
                <Calendar size={24} className="md:size-8" />
                <h2 className="text-2xl md:text-4xl font-bold">
                  Festas Brasileiras
                </h2>
                <Calendar size={24} className="md:size-8" />
              </div>
              <p className="text-base md:text-xl text-white/90 text-center max-w-4xl mx-auto">
                Os brasileiros sabem comemorar como ninguém! Nossas festas
                refletem a rica diversidade cultural do país.
              </p>
            </div>

            {/* Seções Informativas Detalhadas */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-white mb-6 md:mb-8">
              {/* Origens e Significados */}
              <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                  🎉 Origens e Significados
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  As festas tradicionais no Brasil refletem a rica mistura
                  cultural do país, combinando influências indígenas, africanas
                  e europeias.
                </p>
              </div>

              {/* Impacto Social */}
              <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                  🤝 Impacto Social
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  As festas tradicionais no Brasil têm um grande impacto social,
                  pois promovem a união comunitária e fortalecem a identidade
                  cultural local.
                </p>
              </div>
            </div>

            {/* Destaque para Festas Específicas */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {festas.map((festa, index) => (
                <div
                  key={festa.id}
                  className={`
                    bg-white/5 backdrop-blur-md border border-white rounded-lg w-full text-white
                    transition-all duration-700 ease-out
                    hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-white/20
                    p-4 md:p-6
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: visibleCards.includes(index)
                      ? "0 0 30px rgba(255, 255, 255, 0.1)"
                      : "none",
                  }}
                >
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                    <span>{festa.emoji}</span>
                    {festa.titulo}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed cursor-default">
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
            <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-8 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Palette size={24} className="md:size-8" />
                Arte e Expressão
                <Palette size={24} className="md:size-8" />
              </h2>
              <p className="text-base md:text-xl text-white/90 text-center max-w-3xl mx-auto">
                A arte brasileira reflete nossa alma: colorida, vibrante e cheia
                de vida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
              {/* Coluna 1 */}
              <div className="space-y-4 md:space-y-6">
                {/* Arte Clássica */}
                <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    🏛️ Arte Clássica
                  </h3>
                  <ul className="text-white/90 space-y-3 md:space-y-6 text-sm md:text-base">
                    <li>
                      • <strong>Renascimento:</strong> Movimento artístico e
                      cultural que valorizava o humanismo, o conhecimento, as
                      ciências e a harmonia estética.
                    </li>
                    <li>
                      • <strong>Barroco:</strong> Marcado por dramatismo,
                      contraste entre luz e sombra e forte influência religiosa.
                    </li>
                  </ul>
                </div>

                {/* Literatura Brasileira */}
                <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    📚 Literatura Brasileira
                  </h3>
                  <ul className="text-white/90 space-y-3 md:space-y-6 text-sm md:text-base">
                    <li>
                      • <strong>Romantismo:</strong> Movimento que valorizou os
                      sentimentos, a natureza e a identidade nacional.
                    </li>
                    <li>
                      • <strong>Realismo e Naturalismo:</strong> Trouxeram um
                      olhar crítico sobre a sociedade, explorando temas como
                      hipocrisia e desigualdade.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-4 md:space-y-6">
                {/* Cinema Brasileiro */}
                <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    🎬 Cinema Brasileiro
                  </h3>
                  <ul className="text-white/90 space-y-3 md:space-y-6 text-sm md:text-base">
                    <li>
                      • <strong>Cidade de Deus:</strong> Filme aclamado
                      internacionalmente que retrata a vida nas favelas
                      cariocas.
                    </li>
                    <li>
                      • <strong>Tropa de Elite:</strong> Obra de grande impacto
                      que aborda a atuação do BOPE no combate ao tráfico no Rio.
                    </li>
                  </ul>
                </div>

                {/* Arte Popular Brasileira */}
                <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    🖌️ Arte Popular Brasileira
                  </h3>
                  <ul className="text-white/90 space-y-3 md:space-y-6 text-sm md:text-base">
                    <li>
                      • <strong>Cordel Nordestino:</strong> Literatura popular
                      em versos, impressa em folhetos ilustrados e pendurados em
                      cordas.
                    </li>
                    <li>
                      • <strong>Grafite Urbano:</strong> Expressão artística que
                      ocupa os muros das cidades, refletindo críticas sociais.
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
            {/* Título */}
            <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Users size={24} className="md:size-8" />
                Diversidade Cultural
                <Users size={24} className="md:size-8" />
              </h2>
              <p className="text-base md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-3 md:mb-4">
                Somos um povo miscigenado, resultado da união de diferentes
                etnias que construíram juntas uma nação plural e acolhedora.
              </p>
            </div>

            {/* Heranças */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
              {/* Indígena */}
              <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                  🏺 Herança Indígena
                </h3>
                <div className="text-white/90 space-y-1 text-sm md:text-base">
                  <p>305 etnias diferentes</p>
                  <p>274 línguas faladas</p>
                  <p>Conhecimento ancestral</p>
                </div>
              </div>
              {/* Africana */}
              <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                  🌍 Herança Africana
                </h3>
                <div className="text-white/90 space-y-1 text-sm md:text-base">
                  <p>Capoeira e religiões afro</p>
                  <p>Ritmos e danças</p>
                  <p>Culinária temperada</p>
                </div>
              </div>
              {/* Europeia */}
              <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-6 mb-4 md:mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                  🏛️ Herança Europeia
                </h3>
                <div className="text-white/90 space-y-1 text-sm md:text-base">
                  <p>Arquitetura colonial</p>
                  <p>Tradições religiosas</p>
                  <p>Técnicas artísticas</p>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md mb-6 md:mb-8 grid md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6 text-left">
              {[
                {
                  icon: "🌈",
                  title: "Pluralidade",
                  text: "Um país onde diferentes culturas, histórias e tradições convivem, se respeitam e se fortalecem mutuamente.",
                },
                {
                  icon: "🤜🤛",
                  title: "Acolhimento",
                  text: "Aqui, cada pessoa encontra espaço, voz e respeito, independente de sua origem, crença ou história.",
                },
                {
                  icon: "🎉",
                  title: "Alegria",
                  text: "Uma nação que transforma desafios em festa, onde a alegria se reflete nas cores, na música e na cultura.",
                },
                {
                  icon: "❤️",
                  title: "Amor",
                  text: "O amor que une, que acolhe e que constrói pontes entre as diferenças, criando laços de respeito e empatia.",
                },
              ].map(({ icon, title, text }, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-lg p-3 md:p-4 border-1 border-white"
                >
                  <p className="text-white text-lg md:text-xl font-semibold mb-1">
                    {icon} {title}
                  </p>
                  <p className="text-white/80 text-sm md:text-base">{text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hino */}
        {activeSection === "hino" && (
          <section className="animate-fadeIn">
            <div className="text-white">
              <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-8 mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-3 md:mb-4">
                  Hino Nacional Brasileiro
                </h2>
                <div className="grid gap-4 md:gap-8">
                  <div className="space-y-2 md:space-y-4 text-white/90 text-base md:text-lg leading-relaxed gap-2 md:gap-4">
                    <p className="leading-relaxed text-center">
                      Composta em 1822, nossa melodia nacional é mais que uma
                      canção — é um símbolo de identidade e coragem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md p-4 md:p-8 mb-3 md:mb-4">
                {/* História e Origem */}
                <div>
                  <h3 className="text-xl md:text-3xl font-bold flex items-center mb-3 md:mb-4">
                    📖 História e Origem
                  </h3>
                  <div className="text-sm md:text-base leading-relaxed">
                    <p>
                      O Hino Nacional Brasileiro foi composto em
                      <strong> 1822 </strong> por{" "}
                      <strong> Francisco Manuel da Silva, </strong> inicialmente
                      como "Hino da Independência". A letra atual foi escrita
                      pelo poeta <strong>Joaquim Osório Duque Estrada</strong>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg mt-3 md:mt-4">
                    <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md flex items-center gap-3 md:gap-4 p-3 md:p-5">
                      {/* Badge do Ano */}
                      <div className="bg-green-700 rounded-lg shadow-md px-2 py-1 md:px-3 md:py-2">
                        <span className="font-bold text-base md:text-lg">
                          1822
                        </span>
                      </div>
                      <p className="leading-relaxed text-xs md:text-sm">
                        Francisco Manuel da Silva compõe a melodia do 'Hino da
                        Independência'
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md flex items-center gap-3 md:gap-4 p-3 md:p-5">
                      {/* Badge do Ano */}
                      <div className="bg-green-700 rounded-lg shadow-md px-2 py-1 md:px-3 md:py-2">
                        <span className="font-bold text-base md:text-lg">
                          1909
                        </span>
                      </div>
                      <p className="leading-relaxed text-xs md:text-sm">
                        Joaquim Osório Duque Estrada escreve a letra definitiva
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md flex items-center gap-3 md:gap-4 p-3 md:p-5">
                      {/* Badge do Ano */}
                      <div className="bg-green-700 rounded-lg shadow-md px-2 py-1 md:px-3 md:py-2">
                        <span className="font-bold text-base md:text-lg">
                          1922
                        </span>
                      </div>
                      <p className="leading-relaxed text-xs md:text-sm">
                        Oficialização do hino com melodia e letra atuais
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white shadow-md flex items-center gap-3 md:gap-4 p-3 md:p-5">
                      {/* Badge do Ano */}
                      <div className="bg-green-700 rounded-lg shadow-md px-2 py-1 md:px-3 md:py-2">
                        <span className="font-bold text-base md:text-lg">
                          1971
                        </span>
                      </div>
                      <p className="leading-relaxed text-xs md:text-sm">
                        Lei nº 5.700 regulamenta o uso dos símbolos nacionais
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hino Letra */}
              <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white relative z-10 mx-auto py-3 px-6 md:py-6">
                <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white text-center shadow-2xl relative mb-3 md:mb-4 p-4 md:p-8">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 md:mb-4">
                    Hino Nacional Brasileiro
                  </h1>
                  <p className="text-sm md:text-xl font-semibold italic">
                    Letra: Joaquim Osório Duque Estrada • Música: Francisco
                    Manuel da Silva
                  </p>
                </div>

                <div className="block text-xl gap-10 mx-5 md:flex md:justify-between md:my-8">
                  <div className="flex flex-col gap-6">
                    <div>
                      Ouviram do Ipiranga as margens plácidas
                      <br />
                      De um povo heroico o brado retumbante,
                      <br />
                      E o sol da Liberdade, em raios fúlgidos,
                      <br />
                      Brilhou no céu da Pátria nesse instante.
                    </div>

                    <div>
                      Se o penhor dessa igualdade
                      <br />
                      Conseguimos conquistar com braço forte,
                      <br />
                      Em teu seio, ó Liberdade,
                      <br />
                      Desafia o nosso peito a própria morte!
                    </div>

                    <div className="font-bold">
                      Ó Pátria amada,
                      <br />
                      Idolatrada,
                      <br />
                      Salve! Salve!
                    </div>

                    <div>
                      Brasil, um sonho intenso, um raio vívido
                      <br />
                      De amor e de esperança à terra desce,
                      <br />
                      Se em teu formoso céu, risonho e límpido,
                      <br />
                      A imagem do Cruzeiro resplandece.
                    </div>

                    <div>
                      Gigante pela própria natureza,
                      <br />
                      És belo, és forte, impávido colosso,
                      <br />
                      E o seu futuro extreme essa grandeza.
                    </div>

                    <div className="font-bold">
                      Terra adorada, Entre outras mil,
                      <br />
                      És tu, Brasil, Ó Pátria amada!
                      <br />
                      Dos filhos deste solo és mãe gentil,
                      <br />
                      Pátria amada, Brasil!
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      Deitado eternamente em berço esplêndido,
                      <br />
                      Ao som do mar e à luz do céu profundo,
                      <br /> 
                      Fulguras, ó Brasil, florão da América,
                      <br />
                      Iluminado ao sol do Novo Mundo!
                    </div>

                    <div>
                      Do que a terra mais garrida
                      <br />
                      Teus risonhos, lindos campos têm mais flores;
                      <br />
                      "Nossos bosques têm mais vida",
                      <br />
                      "Nossa vida" no teu seio "mais amores".
                    </div>

                    <div className="font-bold">
                      Ó Pátria amada,
                      <br />
                      Idolatrada,
                      <br />
                      Salve! Salve!
                    </div>

                    <div>
                      Brasil, de amor eterno seja símbolo
                      <br />
                      O lábaro que ostentas estrelado,
                      <br />
                      E diga o verde-louro desta flâmula
                      <br />
                      – "Paz no futuro e glória no passado."
                    </div>

                    <div>
                      Mas, se ergues da justiça a clava forte,
                      <br />
                      Verás que um filho teu não foge à luta,
                      <br />
                      Nem teme, quem te adora, a própria morte.
                    </div>

                    <div className="font-bold">
                      Terra adorada, Entre outras mil,
                      <br />
                      És tu, Brasil, Ó Pátria amada!
                      <br />
                      Dos filhos deste solo és mãe gentil,
                      <br />
                      Pátria amada, Brasil!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Player de Música */}
            <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white text-white mt-4 shadow-2xl overflow-hidden">
              {/* Conteúdo do Player */}
              <div className="px-4 py-3 md:px-8 md:py-6">
                <audio ref={audioRef} src={song} preload="metadata"></audio>

                {/* Visualizador de Ondas Sonoras (Decorativo) */}
                <div className="flex items-center justify-center gap-1 h-12 md:h-16 mb-2">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`bg-green-700 rounded-full transition-all duration-300 ${
                        isPlaying ? "animate-pulse" : ""
                      }`}
                      style={{
                        width: "3px",
                        height: `${Math.random() * 30 + 8}px`,
                        animationDelay: `${i * 0.1}s`,
                        opacity: isPlaying ? 0.8 : 0.3,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Informações de tempo */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs md:text-sm font-medium mb-2">
                    <span>0:00</span>
                    <span>3:29</span>
                  </div>

                  {/* Barra de Progresso */}
                  <div
                    className="w-full h-2 md:h-3 bg-gray-200 rounded-full relative cursor-pointer group overflow-hidden"
                    onClick={handleSeek}
                  >
                    {/* Barra de progresso com gradiente */}
                    <div
                      className="h-full bg-green-500 rounded-full relative transition-all duration-300 shadow-sm"
                      style={{ width: `${progress}%` }}
                    >
                      {/* Brilho no final da barra */}
                      <div className="absolute right-0 top-0 w-1 h-full bg-white/40 rounded-full"></div>
                    </div>

                    {/* Indicador de posição */}
                    <div
                      className="absolute top-1/2 w-3 h-3 md:w-5 md:h-5 bg-white rounded-full border-2 border-green-500 shadow-lg transform -translate-y-1/2 transition-all duration-300 group-hover:scale-110"
                      style={{
                        left: `calc(${progress}% - 6px)`,
                        boxShadow: "0 2px 8px rgba(34, 197, 94, 0.4)",
                      }}
                    ></div>
                  </div>

                  {/* Botão Play/Pause Principal */}
                  <div className="flex items-center justify-center gap-4 md:gap-8 my-3 md:my-4">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center ring-2 md:ring-4 ring-green-500/20"
                    >
                      {isPlaying ? (
                        <Pause size={20} className="md:size-7" />
                      ) : (
                        <Play
                          size={20}
                          className="md:size-7"
                          style={{ marginLeft: "2px" }}
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* Mensagem motivacional */}
                <div className="rounded-xl bg-white/5 backdrop-blur-md border-1 border-white text-center mt-3 md:mt-4 p-2 md:p-3">
                  <h2 className="text-md font-medium">
                    🏆 Orgulhe-se de ser brasileiro! Nossa pátria amada, Brasil!
                  </h2>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
