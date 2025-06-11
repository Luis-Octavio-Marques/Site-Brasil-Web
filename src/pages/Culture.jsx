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
} from "lucide-react";

import brazilBackgroundCulture from "../assets/img/country-backgrounds/Brazil-background3.png";
import Header from "../components/Header";
import SpotifyMusicCards from "../components/SpotifyMusicCards";

import song from "../assets/songs/Hino Nacional do Brasil - Oficial.mp3";

export default function Culture() {
  const [activeSection, setActiveSection] = useState("intro");
  const [visibleCards, setVisibleCards] = useState([]);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const glassCard =
    "bg-white/5 backdrop-blur-md border border-white rounded-lg";

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
        "O Carnaval é a maior e mais famosa festa do Brasil, celebrada em praticamente todo o país, com destaque para cidades como Rio de Janeiro, São Paulo, Salvador e Recife. Essa festa é marcada por desfiles grandiosos das escolas de samba, blocos de rua animados, fantasias cheias de cores e criatividade, além de muita música e dança que contagiam moradores e turistas. Com suas origens nas tradições europeias e influências africanas e indígenas, o Carnaval se tornou um símbolo da diversidade cultural brasileira e da alegria popular que une pessoas de todas as idades e classes sociais.",
    },
    {
      id: 2,
      titulo: "🔥 Festa Junina",
      descricao:
        "As Festas Juninas são tradições populares celebradas durante o mês de junho, em homenagem a santos católicos como Santo Antônio, São João e São Pedro. Muito presentes no Nordeste brasileiro, essas festas reúnem quadrilhas típicas, fogueiras, comidas tradicionais como pamonha, canjica e milho cozido, além de brincadeiras populares. Elas celebram a cultura rural do Brasil, marcando os ciclos agrícolas e a fé das comunidades. As Festas juninas são momentos de confraternização, valorização das raízes nordestinas e manifestações folclóricas que envolvem música, dança e costumes ancestrais.",
    },
    {
      id: 3,
      titulo: "🐂 Bumba Meu Boi",
      descricao:
        "Originado no Maranhão e difundido por outras regiões do Norte e Nordeste, o Bumba Meu Boi é uma festa tradicional que mistura teatro, música e dança para contar a lenda da morte e ressurreição de um boi. As apresentações são vibrantes e coloridas, com personagens típicos e muita animação. Reconhecido pela UNESCO como Patrimônio Cultural Imaterial da Humanidade, o Bumba Meu Boi é uma expressão cultural que une elementos indígenas, africanos e portugueses, mantendo viva a memória e a identidade dessas comunidades.",
    },
    {
      id: 4,
      titulo: "🎶 Festival de Parintins",
      descricao:
        "O Festival de Parintins, realizado em Parintins, no Amazonas, é uma celebração anual que acontece em junho e é conhecida pela disputa entre dois bois-bumbás: Caprichoso e Garantido. Com apresentações de músicas regionais, alegorias gigantes e performances folclóricas, o festival destaca a riqueza da cultura amazônica. O evento atrai milhares de visitantes e é uma importante manifestação cultural que fortalece a identidade local e promove o turismo na região.",
    },
    {
      id: 5,
      titulo: "🎅 Natal de Gramado",
      descricao:
        "O Natal de Gramado, no Rio Grande do Sul, é uma festa que transforma a cidade em um cenário mágico durante toda a temporada natalina. Com decorações iluminadas, espetáculos musicais, desfiles temáticos e atrações para todas as idades, Gramado se torna um dos destinos mais procurados do Brasil nessa época. O evento celebra o espírito do Natal, reunindo famílias e visitantes em um clima de esperança, fé e encantamento.",
    },
    {
      id: 6,
      titulo: "🏹 São João de Campina Grande e Caruaru",
      descricao:
        "As festas de São João de Campina Grande (Paraíba) e Caruaru (Pernambuco) disputam o título de maior São João do mundo, atraindo milhões de pessoas todos os anos. Essas celebrações são marcadas por quadrilhas animadas, grandes fogueiras, comidas típicas e shows musicais que exaltam a cultura nordestina. Além de festejar os santos juninos, esses eventos promovem a valorização da tradição popular e a integração entre comunidades locais e turistas.",
    },
    {
      id: 7,
      titulo: "🎡 Oktoberfest de Blumenau",
      descricao:
        "Inspirada na festa tradicional alemã, a Oktoberfest de Blumenau, em Santa Catarina, é a maior festa germânica fora da Alemanha. Reúne cervejas artesanais, danças típicas, trajes tradicionais e uma gastronomia rica, refletindo a forte herança cultural dos imigrantes alemães na região. A festa promove a convivência multicultural e é um importante evento para o turismo e a economia local, celebrando a história e os costumes dos descendentes alemães no Brasil.",
    },
    {
      id: 8,
      titulo: "🎺 Folia de Reis",
      descricao:
        "Comemorada principalmente nas zonas rurais do Brasil entre o Natal e o Dia de Reis (6 de janeiro), a Folia de Reis é uma festa religiosa que envolve grupos de foliões que cantam e visitam casas, representando os Reis Magos. Eles levam bênçãos, orações e alegria, mantendo viva uma tradição que combina fé e cultura popular. Essa festa reforça os laços comunitários, valorizando as manifestações religiosas e folclóricas locais.",
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
            Cultura do Brasil
          </h2>
        </div>
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
                    style={{ marginInline: "6px" }}
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Introdução */}
        {activeSection === "intro" && (
          <section className="animate-fadeIn">
            <div
              className={glassCard}
              style={{ padding: "32px", marginBottom: "32px" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center"
                style={{ marginBottom: "16px" }}
              >
                Brasil Cultural
              </h2>
              <div className="grid" style={{ gap: "32px" }}>
                <div
                  className="space-y-4 text-white/90 text-lg leading-relaxed"
                  style={{ gap: "16px" }}
                >
                  <p className="leading-relaxed text-center">
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
                    className="bg-white/2 backdrop-blur-md border-white border-1 rounded-lg w-full"
                    style={{ padding: "24px" }}
                  >
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ marginBottom: "6px" }}
                    >
                      🌍 Diversidade Regional
                    </h3>
                    <p className="text-white/90">
                      O Brasil é formado por 5 regiões e 26 estados, além do
                      Distrito Federal. Cada um carrega suas próprias tradições,
                      culturas, culinárias, sotaques e manifestações típicas,
                      que refletem a diversidade e a riqueza do nosso povo. De
                      Norte a Sul, cada canto do país tem algo único para contar
                      e celebrar.
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
                      👥 Povo Brasileiro
                    </h3>
                    <p className="text-white/90">
                      O povo brasileiro é resultado de uma mistura de etnias,
                      culturas e histórias. Somos reconhecidos pela alegria,
                      hospitalidade e resiliência. De norte a sul, nossa força
                      está na união das diferenças, na criatividade, na fé e na
                      capacidade de transformar desafios em esperança.
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
              className={glassCard}
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <h2
                className="text-4xl font-bold text-white text-center flex items-center justify-center"
                style={{ marginBottom: "1.5rem", gap: "0.75rem" }}
              >
                <Music />
                Música Brasileira
                <Music />
              </h2>
              <p
                className="text-xl text-white/90 text-center max-w-3xl"
                style={{ margin: "auto auto 1rem auto" }}
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
                  className={`${glassCard} relative overflow-hidden  transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl group ${
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
              className={`${glassCard} flex flex-col justify-center text-center`}
              style={{ padding: "2rem", marginBottom: "2rem" }}
            >
              <div className="flex items-center justify-center w-full gap-4 text-white">
                <Calendar />
                <h2 className="text-4xl font-bold text-white">
                  Festas Brasileiras
                </h2>
                <Calendar />
              </div>
              <p
                className="text-xl text-white/90 text-center max-w-4xl"
                style={{ margin: "1rem auto 1rem auto" }}
              >
                Os brasileiros sabem comemorar como ninguém! Nossas festas
                refletem a rica diversidade cultural do país, combinando
                influências indígenas, africanas e europeias em celebrações que
                preservam tradições seculares e fortalecem a identidade
                nacional.
              </p>
            </div>

            {/* Seções Informativas Detalhadas */}
            <div
              className="grid lg:grid-cols-2 text-white"
              style={{ gap: "32px", marginBottom: "32px" }}
            >
              {/* Origens e Significados */}
              <div className={glassCard} style={{ padding: "24px" }}>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "6px" }}
                >
                  🎉 Origens e Significados
                </h3>
                <p className="text-white/90">
                  As festas tradicionais no Brasil refletem a rica mistura
                  cultural do país, combinando influências indígenas, africanas
                  e europeias. O Carnaval, por exemplo, tem sua origem nas
                  festas europeias pré-quaresmais, mas no Brasil incorpora
                  ritmos e danças africanas e indígenas, tornando-se uma grande
                  celebração popular.
                </p>
              </div>

              {/* Impacto Social */}
              <div className={glassCard} style={{ padding: "24px" }}>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ marginBottom: "6px" }}
                >
                  🤝 Impacto Social
                </h3>
                <p className="text-white/90">
                  As festas tradicionais no Brasil têm um grande impacto social,
                  pois promovem a união comunitária e fortalecem a identidade
                  cultural local. Elas geram emprego e renda para milhares de
                  pessoas, principalmente em setores como turismo, artesanato,
                  gastronomia e eventos.
                </p>
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
              ${glassCard} w-full text-white
              transition-all duration-700 ease-out
              hover:transform hover:-translate-y-1 hover:scale-101 hover:shadow-2xl hover:shadow-white/20
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
              className={glassCard}
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
                  className={glassCard}
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

                <div className={glassCard} style={{ padding: "1.5rem" }}>
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
                  className={glassCard}
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

                <div className={glassCard} style={{ padding: "1.5rem" }}>
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
              className={glassCard}
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
                className={`${glassCard} text-center`}
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
                className={`${glassCard} text-center`}
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
                className={`${glassCard} text-center`}
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
              className={`${glassCard} grid md:grid-cols-2 text-left`}
              style={{ gap: "1.5rem", padding: "2em 1em" }}
            >
              <div
                className="bg-white/10 rounded-lg"
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
                className="bg-white/10 rounded-lg"
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
                className="bg-white/10 rounded-lg"
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
                className="bg-white/10 rounded-lg"
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

        {/* Hino */}
        {activeSection === "hino" && (
          <section className="animate-fadeIn">
            <div className="text-white">
              <div
                className={glassCard}
                style={{ padding: "32px", marginBottom: "32px" }}
              >
                <h2
                  className="text-4xl font-bold text-white text-center"
                  style={{ marginBottom: "16px" }}
                >
                  Hino Nacional Brasileiro
                </h2>
                <div className="grid" style={{ gap: "32px" }}>
                  <div
                    className="space-y-4 text-white/90 text-lg leading-relaxed"
                    style={{ gap: "16px" }}
                  >
                    <p className="leading-relaxed text-center">
                      Composta em 1822, nossa melodia nacional é mais que uma
                      canção — é um símbolo de identidade e coragem. Seus
                      acordes atravessam gerações, unindo brasileiros desde o
                      grito do Ipiranga até os grandes momentos da história. Em
                      estádios, escolas e solenidades, ela embala corações com
                      orgulho e esperança. Mais que notas, é a alma de um povo
                      que canta sua própria história.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={glassCard}
                style={{ padding: "2rem", marginBottom: "1rem" }}
              >
                {/* História e Origem */}
                <div>
                  <h3
                    className="text-3xl font-bold flex items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    📖 História e Origem
                  </h3>
                  <div className="text-md leading-relaxed">
                    <p>
                      O Hino Nacional Brasileiro foi composto em
                      <strong> 1822 </strong> por{" "}
                      <strong> Francisco Manuel da Silva, </strong> inicialmente
                      como "Hino da Independência". A melodia foi criada para
                      celebrar a independência do Brasil, tornando-se
                      posteriormente o hino oficial do país. A letra atual foi
                      escrita pelo poeta{" "}
                      <strong>Joaquim Osório Duque Estrada</strong> em
                      <strong>1909</strong>, substituindo outras versões
                      anteriores. O hino com a letra definitiva foi oficializado
                      apenas em <strong>1922</strong>, durante as comemorações
                      do Centenário da Independência.
                    </p>
                  </div>

                  <div
                    className="grid grid-cols-2 gap-3 rounded-lg"
                    style={{ marginTop: "1rem" }}
                  >
                    <div
                      className={`${glassCard} flex items-center gap-4`}
                      style={{ padding: "1.25rem" }}
                    >
                      <div
                        className="bg-green-700 rounded-lg shadow-md"
                        style={{ padding: "0.5rem 0.75rem" }}
                      >
                        <span className="font-bold text-lg">1822</span>
                      </div>
                      <p className="leading-relaxed text-base">
                        Francisco Manuel da Silva compõe a melodia do <br />{" "}
                        'Hino da Independência'
                      </p>
                    </div>
                    <div
                      className={`${glassCard} flex items-center gap-4`}
                      style={{ padding: "1.25rem" }}
                    >
                      {/* Badge do Ano */}
                      <div
                        className="bg-green-700 rounded-lg shadow-md"
                        style={{ padding: "0.5rem 0.75rem" }}
                      >
                        <span className="font-bold text-lg">1822</span>
                      </div>

                      {/* Conteúdo do Texto */}
                      <div>
                        <p className="leading-relaxed text-base">
                          Joaquim Osório Duque Estrada escreve a letra
                          definitiva
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${glassCard} flex items-center gap-4`}
                      style={{ padding: "1.25rem" }}
                    >
                      {/* Badge do Ano */}
                      <div
                        className="bg-green-700 rounded-lg shadow-md"
                        style={{ padding: "0.5rem 0.75rem" }}
                      >
                        <span className="font-bold text-lg">1822</span>
                      </div>

                      {/* Conteúdo do Texto */}
                      <div>
                        <p className="leading-relaxed text-base">
                          Oficialização do hino com melodia e letra atuais
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${glassCard} flex items-center gap-4`}
                      style={{ padding: "1.25rem" }}
                    >
                      {/* Badge do Ano */}
                      <div
                        className="bg-green-700 rounded-lg shadow-md"
                        style={{ padding: "0.5rem 0.75rem" }}
                      >
                        <span className="font-bold text-lg">1822</span>
                      </div>

                      {/* Conteúdo do Texto */}
                      <div>
                        <p className="leading-relaxed text-base">
                          Lei nº 5.700 regulamenta o uso dos símbolos nacionais
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Características Musicais */}
              <div className={`${glassCard}`} style={{ padding: "1.5rem" }}>
                <h3
                  className="text-3xl font-bold flex items-center"
                  style={{ marginBottom: "1rem" }}
                >
                  🎼 Características Musicais
                </h3>
                <div className="space-y-4 leading-relaxed">
                  <p>
                    O Hino Nacional Brasileiro é considerado um dos mais belos e
                    complexos hinos do mundo. Escrito em{" "}
                    <strong>Fá maior</strong>, possui uma estrutura musical
                    sofisticada que exige grande habilidade técnica para ser
                    interpretado corretamente.
                  </p>
                  <p>
                    A melodia abrange <strong>uma oitava e meia</strong>, com
                    notas que vão desde o Dó central até o Sol agudo, tornando
                    sua execução um desafio mesmo para cantores experientes. O
                    tempo deve ser <strong>moderado</strong>, e a duração total
                    é de aproximadamente 2 minutos e 30 segundos.
                  </p>
                </div>

                {/* Letra Completa */}
                <h2
                  className="text-3xl font-bold text-center"
                  style={{ marginTop: "2rem" }}
                >
                  📝 Letra Completa do Hino Nacional
                </h2>

                <div
                  className="relative z-10"
                  style={{ marginInline: "auto", paddingBlock: "1.5rem" }}
                >
                  {/* Header */}
                  <div
                    className={`${glassCard} text-center shadow-2xl relative`}
                    style={{ marginBottom: "1rem", padding: "2rem" }}
                  >
                    <h1
                      className="text-5xl md:text-6xl font-bold tracking-tight"
                      style={{ marginBottom: "1rem" }}
                    >
                      Hino Nacional Brasileiro
                    </h1>
                    <p className="text-xl font-semibold italic">
                      Letra: Joaquim Osório Duque Estrada • Música: Francisco
                      Manuel da Silva
                    </p>
                  </div>

                  {/* Main content */}
                  <div>
                    {/* First verse section */}
                    <div
                      className={`${glassCard} shadow-2xl`}
                      style={{ marginBottom: "3rem", padding: "2rem" }}
                    >
                      <div
                        className="space-y-6 text-xl leading-relaxed"
                        style={{ paddingLeft: "1rem" }}
                      >
                        <div>
                          Ouviram do Ipiranga as margens plácidas
                          <br />
                          De um povo heroico o brado retumbante,
                          <br />
                          E o sol da liberdade, em raios fúlgidos,
                          <br />
                          Brilhou no céu da pátria nesse instante.
                        </div>

                        <div>
                          Se o penhor dessa igualdade
                          <br />
                          Conseguimos conquistar com braço forte,
                          <br />
                          Em teu seio, ó liberdade,
                          <br />
                          Desafia o nosso peito a própria morte!
                        </div>
                      </div>
                    </div>

                    {/* First chorus */}
                    <div
                      className={`${glassCard} shadow-2xl text-center`}
                      style={{ marginBottom: "3rem", padding: "1rem" }}
                    >
                      <div className="text-2xl font-bold leading-relaxed">
                        Ó Pátria amada,
                        <br />
                        Idolatrada,
                        <br />
                        Salve! Salve!
                      </div>
                    </div>

                    {/* Second verse section */}
                    <div
                      className={`${glassCard} shadow-2xl`}
                      style={{ marginBottom: "3rem", padding: "2rem" }}
                    >
                      <div
                        className="flex justify-around items-center"
                        style={{ paddingLeft: "1rem" }}
                      >
                        <div className="text-xl leading-relaxed">
                          Brasil, um sonho intenso, um raio vívido
                          <br />
                          De amor e de esperança à terra desce,
                          <br />
                          Se em teu formoso céu, risonho e límpido,
                          <br />A imagem do Cruzeiro resplandece.
                        </div>

                        <div
                          className={`${glassCard} shadow-2xl text-xl`}
                          style={{ padding: "1rem", marginTop: "0.5rem" }}
                        >
                          Gigante pela própria natureza,
                          <br />
                          És belo, és forte, impávido colosso,
                          <br />E o teu futuro espelha essa grandeza.
                        </div>
                      </div>
                    </div>

                    {/* Second chorus */}
                    <div
                      className={`${glassCard} shadow-2xl text-center`}
                      style={{ marginBottom: "3rem", padding: "2rem" }}
                    >
                      <div className="text-2xl font-bold  leading-relaxed">
                        Terra adorada, Entre outras mil,
                        <br />
                        És tu, Brasil, Ó Pátria amada! Dos filhos deste solo és
                        mãe gentil,
                        <br />
                        Pátria amada, Brasil!
                      </div>
                    </div>

                    {/* Rarely sung section */}
                    <div className="space-y-12">
                      {/* Third verse section */}
                      <div
                        className={`${glassCard}`}
                        style={{ padding: "2rem" }}
                      >
                        <div
                          className="space-y-6 text-xl leading-relaxed"
                          style={{ paddingLeft: "1rem" }}
                        >
                          <div>
                            Dos filhos deste solo és mãe gentil,
                            <br />
                            Pátria amada,
                            <br />
                            Brasil!
                          </div>

                          <div>
                            Deitado eternamente em berço esplêndido,
                            <br />
                            Ao som do mar e à luz do céu profundo,
                          </div>

                          <div>
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
                        </div>
                      </div>

                      {/* Third chorus */}
                      <div
                        className={`${glassCard} shadow-2xl text-center`}
                        style={{ marginBlock: "3rem", padding: "1rem" }}
                      >
                        <div className="text-2xl font-bold leading-relaxed">
                          Ó Pátria amada,
                          <br />
                          Idolatrada,
                          <br />
                          Salve! Salve!
                        </div>
                      </div>

                      {/* Fourth verse section */}
                      <div
                        className={`${glassCard}`}
                        style={{ padding: "2rem" }}
                      >
                        <div
                          className="space-y-6 text-xl leading-relaxed"
                          style={{ paddingLeft: "1rem" }}
                        >
                          <div>
                            Brasil, de amor eterno seja símbolo
                            <br />
                            O lábaro que ostentas estrelado,
                            <br />
                            E diga o verde-louro desta flâmula
                            <br />– "Paz no futuro e glória no passado."
                          </div>

                          <div>
                            Mas, se ergues da justiça a clava forte,
                            <br />
                            Verás que um filho teu não foge à luta,
                            <br />
                            Nem teme, quem te adora, a própria morte.
                          </div>
                        </div>
                      </div>

                      {/* Final chorus */}
                      <div
                        className={`${glassCard} shadow-2xl text-center`}
                        style={{ marginBlock: "3rem", padding: "2rem" }}
                      >
                        <div className="text-2xl font-bold  leading-relaxed">
                          Terra adorada, Entre outras mil,
                          <br />
                          És tu, Brasil, Ó Pátria amada! Dos filhos deste solo
                          és mãe gentil,
                          <br />
                          Pátria amada, Brasil!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${glassCard}`}
                  style={{ padding: "1rem", marginBottom: "2rem" }}
                >
                  <p className="text-md">
                    <strong>Nota:</strong> A letra foi escrita por Joaquim
                    Osório Duque Estrada em 1909. Nas execuções oficiais,
                    geralmente cantam-se apenas a primeira parte e o coro,
                    devido à extensão e complexidade da obra completa.
                  </p>
                </div>

                {/* Protocolo e Uso Oficial */}
                <div className={`${glassCard}`} style={{ padding: "1.5rem" }}>
                  <h2
                    className="text-2xl font-bold"
                    style={{ marginBottom: "1rem" }}
                  >
                    🏛️ Protocolo e Uso Oficial
                  </h2>
                  <div className="space-y-4 leading-relaxed">
                    <p>
                      O Hino Nacional deve ser executado em ocasiões solenes e
                      cívicas, como cerimônias oficiais, eventos esportivos
                      internacionais e comemorações pátrias. Durante sua
                      execução, todos devem permanecer em posição de respeito,
                      preferencialmente em pé. É <strong> obrigatório </strong>{" "}
                      nas escolas brasileiras, devendo ser ensinado e cantado
                      semanalmente. O desrespeito aos símbolos nacionais,
                      incluindo o hino, constitui contravenção penal segundo a
                      legislação brasileira.
                    </p>
                  </div>
                </div>

                {/* Curiosidades */}
                <div
                  className={`${glassCard}`}
                  style={{ padding: "1.5rem", marginBlock: "1rem" }}
                >
                  <h2
                    className="text-2xl font-bold"
                    style={{ marginBottom: "1rem" }}
                  >
                    🎙️ Curiosidades
                  </h2>
                  <div className="space-y-3">
                    <p>
                      • O Hino Nacional Brasileiro é considerado um dos mais
                      difíceis de cantar do mundo devido à sua extensão vocal
                    </p>
                    <p>
                      • Francisco Manuel da Silva era regente da Capela Imperial
                      e professor de música
                    </p>
                    <p>
                      • A primeira gravação oficial foi feita em 1922,
                      interpretada pela Banda do Corpo de Bombeiros
                    </p>
                    <p>
                      • Existe uma versão instrumental oficial para cerimônias
                      protocolares
                    </p>
                    <p>
                      • O hino não pode ser usado para fins comerciais ou
                      publicitários
                    </p>
                  </div>
                </div>

                {/* Player de Música */}
                <div
                  className={`${glassCard} shadow-2xl overflow-hidden`}
                  style={{
                    padding: "0",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Header com gradiente */}

                  <div className="relative z-10 text-center">
                    <div
                      className="flex items-center justify-center gap-3 mb-2"
                      style={{ marginBlock: "0.5rem" }}
                    >
                      <h2 className="text-4xl font-bold">
                        Hino Nacional Brasileiro
                      </h2>
                    </div>
                    <p className="italic text-md font-medium">
                      Interpretação oficial - Una-se a milhões de brasileiros
                      neste momento cívico
                    </p>
                  </div>

                  {/* Conteúdo do Player */}
                  <div
                    style={{ paddingInline: "2rem", paddingBlock: "1.5rem" }}
                  >
                    <audio ref={audioRef} src={song} preload="metadata"></audio>

                    {/* Visualizador de Ondas Sonoras (Decorativo) */}
                    <div
                      className="flex items-center justify-center gap-1 h-16"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className={`bg-green-700 rounded-full transition-all duration-300 ${
                            isPlaying ? "animate-pulse" : ""
                          }`}
                          style={{
                            width: "4px",
                            height: `${Math.random() * 40 + 10}px`,
                            animationDelay: `${i * 0.1}s`,
                            opacity: isPlaying ? 0.8 : 0.3,
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Informações de tempo */}
                    <div className="space-y-2">
                      <div
                        className="flex justify-between text-sm font-medium"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        <span>0:00</span>
                        <span>3:29</span>
                      </div>

                      {/* Barra de Progresso */}
                      <div
                        className="w-full h-3 bg-gray-200 rounded-full relative cursor-pointer group overflow-hidden"
                        onClick={handleSeek}
                        style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)" }}
                      >
                        {/* Trilha de fundo com gradiente */}
                        <div className="absolute inset-0 bg-white rounded-full"></div>

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
                          className="absolute top-1/2 w-5 h-5 bg-white rounded-full border-2 border-green-500 shadow-lg transform -translate-y-1/2 transition-all duration-300 group-hover:scale-110"
                          style={{
                            left: `calc(${progress}% - 10px)`,
                            boxShadow: "0 2px 8px rgba(34, 197, 94, 0.4)",
                          }}
                        ></div>
                      </div>

                      {/* Botão Play/Pause Principal */}
                      <div
                        className="flex items-center justify-center gap-8"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <button
                          onClick={togglePlay}
                          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center ring-4 ring-green-500/20"
                          style={{
                            boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                          }}
                        >
                          {isPlaying ? (
                            <Pause size={28} />
                          ) : (
                            <Play size={28} style={{ marginLeft: "2px" }} />
                          )}
                        </button>
                      </div>
                    </div>                   

                    {/* Mensagem motivacional */}
                    <div className={`${glassCard} text-center`} style={{ marginTop: "1rem", padding: "0.75rem" }}>
                      <h2 className="text-md font-medium">
                        🏆 Orgulhe-se de ser brasileiro! Nossa pátria amada,
                        Brasil!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
