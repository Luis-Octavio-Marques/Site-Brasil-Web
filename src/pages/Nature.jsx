import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  Thermometer,
  Mountain,
  Waves,
  Leaf,
  TreePine,
  Sun,
  Cloud,
  Droplets,
  Eye,
} from "lucide-react";

import brazilBackgroundNature from "../assets/img/country-backgrounds/Brazil-background5.png";
import Header from "../components/Header";

export default function Nature() {
  const [activeSection, setActiveSection] = useState("regioes");
  const [floatingElements, setFloatingElements] = useState([]);
  const [climaAtualIndex, setClimaAtualIndex] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newElement = {
        id: Date.now(),
        left: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      };

      setFloatingElements((prev) => [...prev.slice(-10), newElement]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setClimaAtualIndex((prev) => {
        const newIndex = {};
        regioes.forEach((regiao, index) => {
          if (regiao.climas.length > 1) {
            const currentIndex = prev[index] || 0;
            newIndex[index] = (currentIndex + 1) % regiao.climas.length;
          } else {
            newIndex[index] = 0;
          }
        });
        return newIndex;
      });
    }, 2500); // Muda a cada 2.5 segundos

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setClimaAtualIndex((prev) => {
        const newIndex = {};
        regioes.forEach((regiao, index) => {
          if (regiao.climas.length > 1) {
            const currentIndex = prev[index] || 0;
            newIndex[index] = (currentIndex + 1) % regiao.climas.length;
          } else {
            newIndex[index] = 0;
          }
        });
        return newIndex;
      });
    }, 2500); // Muda a cada 2.5 segundos

    return () => clearInterval(interval);
  }, );

  const getClimaAtual = (regiao, index) => {
    if (regiao.climas.length === 1) {
      return regiao.climas[0];
    }
    const currentIndex = climaAtualIndex[index] || 0;
    return regiao.climas[currentIndex];
  };

  const navegacao = [
    { id: "regioes", label: "Regiões", icon: MapPin },
    { id: "clima", label: "Clima", icon: Thermometer },
    { id: "relevo", label: "Relevo", icon: Mountain },
    { id: "hidrografia", label: "Hidrografia", icon: Waves },
    { id: "vegetacao", label: "Vegetação", icon: Leaf },
    { id: "biomas", label: "Biomas", icon: TreePine },
  ];

  const regioes = [
    {
      nome: "Norte",
      estados: [
        "Acre (AC)",
        "Amapá (AP)",
        "Amazonas (AM)",
        "Pará (PA)",
        "Rondônia (RO)",
        "Roraima (RR)",
        "Tocantins (TO)",
      ],
      caracteristicas:
        "Floresta Amazônica, clima equatorial úmido, rios volumosos, rica biodiversidade e presença indígena",
      area: "3.853.676 km²",
      cor: "from-green-600 to-green-800",
      climas: ["Equatorial"],
    },
    {
      nome: "Nordeste",
      estados: [
        "Alagoas (AL)",
        "Bahia (BA)",
        "Ceará (CE)",
        "Maranhão (MA)",
        "Paraíba (PB)",
        "Pernambuco (PE)",
        "Piauí (PI)",
        "Rio Grande do Norte (RN)",
        "Sergipe (SE)",
      ],
      caracteristicas:
        "Caatinga predominante, clima semiárido, litoral extenso, forte cultura popular e herança colonial",
      area: "1.554.257 km²",
      cor: "from-yellow-600 to-orange-700",
      climas: ["Semiárido", "Litorâneo úmido", "Tropical"],
    },
    {
      nome: "Centro-Oeste",
      estados: ["Goiás (GO)", "Mato Grosso (MT)", "Mato Grosso do Sul (MS)"],
      destrito: "Distrito Federal (DF)",
      caracteristicas:
        "Cerrado e Pantanal, clima tropical com estação seca, destaque para o agronegócio e ecoturismo",
      area: "1.606.371 km²",
      cor: "from-amber-600 to-yellow-700",
      climas: ["Tropical"],
    },
    {
      nome: "Sudeste",
      estados: [
        "Espírito Santo (ES)",
        "Minas Gerais (MG)",
        "Rio de Janeiro (RJ)",
        "São Paulo (SP)",
      ],
      caracteristicas:
        "Mata Atlântica, relevo variado, clima tropical, grande urbanização e polo econômico do país",
      area: "924.511 km²",
      cor: "from-blue-600 to-indigo-700",
      climas: ["Tropical de altitude", "Tropical"],
    },
    {
      nome: "Sul",
      estados: ["Paraná (PR)", "Rio Grande do Sul (RS)", "Santa Catarina (SC)"],
      caracteristicas:
        "Campos e araucárias, clima subtropical, relevo ondulado, influência europeia e forte agricultura",
      area: "576.409 km²",
      cor: "from-purple-600 to-pink-700",
      climas: ["Subtropical"],
    },
  ];

  const climas = [
    {
      tipo: "Equatorial",
      regiao: "Amazônia",
      temperatura: "25°C a 28°C",
      chuva: "2000-3000mm/ano",
      caracteristicas: "Quente e úmido o ano todo, chuvas regulares",
      icon: <Sun className="w-8 h-8" />,
    },
    {
      tipo: "Tropical",
      regiao: "Centro e partes do NE/SE",
      temperatura: "20°C a 28°C",
      chuva: "1200-1800mm/ano",
      caracteristicas: "Duas estações: seca (inverno) e chuvosa (verão)",
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      tipo: "Semiárido",
      regiao: "Interior do Nordeste",
      temperatura: "23°C a 30°C",
      chuva: "300-800mm/ano",
      caracteristicas: "Seco, chuvas irregulares e escassas",
      icon: <Sun className="w-8 h-8" />,
    },
    {
      tipo: "Subtropical",
      regiao: "Região Sul",
      temperatura: "15°C a 25°C",
      chuva: "1200-2000mm/ano",
      caracteristicas: "Quatro estações bem definidas, chuvas regulares",
      icon: <Droplets className="w-8 h-8" />,
    },
  ];

  const relevos = [
    {
      nome: "Planície Amazônica",
      altitude: "0-200m",
      extensao: "3,5 milhões km²",
      caracteristicas: "Maior planície do mundo, formada por sedimentos",
      localizacao: "Região Norte",
    },
    {
      nome: "Planalto Central",
      altitude: "300-1200m",
      extensao: "1,8 milhões km²",
      caracteristicas: "Divisor de águas, nascentes dos principais rios",
      localizacao: "Centro-Oeste",
    },
    {
      nome: "Planalto Atlântico",
      altitude: "500-2800m",
      extensao: "Faixa litorânea",
      caracteristicas: "Serra do Mar, picos elevados, escarpas",
      localizacao: "Sudeste/Sul",
    },
    {
      nome: "Depressão Sertaneja",
      altitude: "200-500m",
      extensao: "700.000 km²",
      caracteristicas: "Relevo aplainado, inselbergs isolados",
      localizacao: "Nordeste",
    },
  ];

  const hidrografia = [
    {
      bacia: "Amazônica",
      rio: "Rio Amazonas",
      extensao: "6.400 km",
      area: "7 milhões km²",
      caracteristicas: "Maior bacia hidrográfica do mundo",
      afluentes: ["Solimões", "Negro", "Madeira", "Tapajós", "Xingu"],
    },
    {
      bacia: "Platina",
      rio: "Rio Paraná",
      extensao: "4.880 km",
      area: "1,4 milhões km²",
      caracteristicas: "Grande potencial hidrelétrico",
      afluentes: ["Paraguai", "Uruguai", "Tietê", "Paranapanema"],
    },
    {
      bacia: "São Francisco",
      rio: "Rio São Francisco",
      extensao: "2.800 km",
      area: "640.000 km²",
      caracteristicas: "Rio da integração nacional",
      afluentes: ["Paracatu", "Urucuia", "Carinhanha", "Grande"],
    },
    {
      bacia: "Tocantins-Araguaia",
      rio: "Rio Tocantins",
      extensao: "2.400 km",
      area: "950.000 km²",
      caracteristicas: "Maior bacia totalmente brasileira",
      afluentes: ["Araguaia", "Sono", "Palma"],
    },
  ];

  const vegetacoes = [
    {
      tipo: "Floresta Amazônica",
      area: "60% do território",
      especies: "40.000+ plantas",
      caracteristicas:
        "Floresta densa, múltiplos estratos, biodiversidade única",
      importancia: "Regulação climática global, pulmão do mundo",
    },
    {
      tipo: "Cerrado",
      area: "24% do território",
      especies: "11.000+ plantas",
      caracteristicas: "Savana tropical, árvores tortuosas, gramíneas",
      importancia: "Berço das águas, biodiversidade de savana",
    },
    {
      tipo: "Mata Atlântica",
      area: "12% da cobertura original",
      especies: "15.000+ plantas",
      caracteristicas: "Floresta ombrófila, alta biodiversidade, endemismo",
      importancia: "Hotspot mundial, espécies ameaçadas",
    },
    {
      tipo: "Caatinga",
      area: "11% do território",
      especies: "3.000+ plantas",
      caracteristicas: "Vegetação xerófita, adaptada à seca",
      importancia: "Único bioma exclusivamente brasileiro",
    },
  ];

  const biomas = [
    {
      nome: "Amazônia",
      icon: "🌳",
      area: "4,2 milhões km²",
      estados: 9,
      especies: "10% da biodiversidade mundial",
      caracteristicas:
        "Maior floresta tropical, rios caudalosos, clima equatorial",
    },
    {
      nome: "Cerrado",
      icon: "🌾",
      area: "2 milhões km²",
      estados: 11,
      especies: "Savana mais biodiversa",
      caracteristicas: "Estações seca/chuvosa, nascentes de rios importantes",
    },
    {
      nome: "Mata Atlântica",
      icon: "🌴",
      area: "110.000 km² (restante)",
      estados: 17,
      especies: "60% das espécies ameaçadas",
      caracteristicas: "Hotspot mundial, alta taxa de endemismo",
    },
    {
      nome: "Caatinga",
      icon: "🌵",
      area: "844.000 km²",
      estados: 10,
      especies: "27 milhões de habitantes",
      caracteristicas: "Clima semiárido, plantas xerófilas",
    },
    {
      nome: "Pantanal",
      icon: "🦎",
      area: "150.000 km²",
      estados: 3,
      especies: "Planície alagável",
      caracteristicas: "Patrimônio da Humanidade, fauna abundante",
    },
    {
      nome: "Pampa",
      icon: "🌱",
      area: "176.000 km²",
      estados: 1,
      especies: "Campos nativos",
      caracteristicas: "Gramíneas, pecuária, fronteira com Uruguai/Argentina",
    },
  ];

  const estatisticas = [
    {
      numero: "8,5 mi",
      label: "km² de território",
      descricao: "5º maior país do mundo",
    },
    {
      numero: "200k+",
      label: "espécies catalogadas",
      descricao: "20% da biodiversidade mundial",
    },
    {
      numero: "12%",
      label: "da água doce mundial",
      descricao: "Maior reserva hídrica",
    },
    {
      numero: "6",
      label: "biomas únicos",
      descricao: "Diversidade de ecossistemas",
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "regioes":
        return (
          <section className="animate-fadeIn">
            <div className="text-white" style={{ padding: "32px 64px" }}>
              <h2
                className="text-4xl font-bold text-center"
                style={{ marginBottom: "32px" }}
              >
                Regiões do Brasil
              </h2>

              <div style={{ marginBlockStart: "1rem", marginBlockEnd: "1rem" }}>
                {regioes.map((regiao, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md border-white border rounded-lg shadow-2xl transition-all duration-500 cursor-default hover:bg-white/10"
                    style={{
                      padding: "20px",
                      marginBlockStart: "1rem",
                      marginBlockEnd: "1rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <div className="flex flex-col items-center justify-between">
                      {/* Seção esquerda - Header compacto */}
                      <div
                        className="flex items-center"
                        style={{ gap: "20px" }}
                      >
                        <div>
                          <h3
                            className="text-3xl font-bold"
                            style={{ marginBottom: "0.25rem" }}
                          >
                            {regiao.nome}
                          </h3>
                        </div>
                      </div>
                      <div
                        className="w-55 h-0.5 bg-white/60"
                        style={{ marginBlock: "0.5rem" }}
                      ></div>

                      {/* Seção central - Características */}
                      <div
                        className="flex-1"
                        style={{ marginInline: "2rem", marginBottom: "1rem" }}
                      >
                        <p className="text-lg leading-relaxed text-center" style={{ marginInline: "10rem"}}>
                          {regiao.caracteristicas}
                        </p>
                      </div>

                      {/* Seção direita - Stats compactos */}
                      <div
                        className="flex flex-col items-center"
                        style={{ gap: "12px" }}
                      >
                        <div className="flex gap-5">
                          <div
                            className="text-center bg-white/10 backdrop-blur-md border-white border rounded-lg"
                            style={{ padding: "16px", minWidth: "80px" }}
                          >
                            <div className="text-2xl font-bold">
                              {regiao.area}
                            </div>
                            <div className="text-md opacity-80">
                              Área Territorial
                            </div>
                          </div>
                          <div
                            className="text-center bg-white/10 backdrop-blur-md border-white border rounded-lg"
                            style={{ padding: "12px", minWidth: "80px" }}
                          >
                            <div className="text-2xl font-bold">
                              {regiao.estados.length}
                            </div>
                            <div className="text-md opacity-80">Estados</div>
                          </div>
                          <div
                            className="text-center bg-white/10 backdrop-blur-md border-white border rounded-lg"
                            style={{ padding: "12px", minWidth: "120px" }}
                          >
                            <div className="text-xl font-medium transition-all duration-500">
                              {getClimaAtual(regiao, index)}
                            </div>
                            <div className="text-md opacity-80 flex flex-col items-center justify-center gap-1">
                              {regiao.climas.length > 1 ? "Climas" : "Clima"}
                              {regiao.climas.length > 1 && (
                                <div className="flex gap-1 ml-1">
                                  {regiao.climas.map((_, climaIdx) => (
                                    <div
                                      key={climaIdx}
                                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                        (climaAtualIndex[index] || 0) ===
                                        climaIdx
                                          ? "bg-white"
                                          : "bg-white/40"
                                      }`}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-center ml-4">
                          <div
                            className="text-md mb-1"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            Estados da Região:
                          </div>
                          <div
                            className="flex flex-wrap justify-center"
                            style={{ gap: "0.5rem" }}
                          >
                            {regiao.estados.slice(0, 7).map((estado, idx) => (
                              <span
                                key={idx}
                                className="inline-block text-center bg-white/10 backdrop-blur-md border-white border rounded-lg text-sm text-white"
                                style={{
                                  padding: "4px 12px",
                                  marginBlock: "0.5rem",
                                }}
                              >
                                {estado}
                              </span>
                            ))}
                            {regiao.destrito && (
                              <span
                                className="inline-block text-center bg-white/10 backdrop-blur-md border-white border rounded-lg text-sm text-white"
                                style={{
                                  padding: "4px 12px",
                                  marginBlock: "0.5rem",
                                }}
                              >
                                {regiao.destrito}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "clima":
        return (
          <div style={{ marginBlockStart: "2rem", marginBlockEnd: "2rem" }}>
            <div className="text-center text-white" style={{ marginBottom: "3rem" }}>
              <h3
                className="text-4xl font-bold"
                style={{ marginBottom: "1rem" }}
              >
                {" "}
                🌡️ Clima do Brasil{" "}
              </h3>
              <p className="text-xl max-w-4xl" style={{ marginInline: "auto" }}>
                A diversidade climática brasileira é resultado de sua extensão
                territorial, posição geográfica e variações de relevo, criando
                diferentes zonas climáticas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {climas.map((clima, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default"
                  style={{ padding: "2rem" }}
                >
                  <div
                    className="flex items-center"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    {clima.icon}
                    <h4
                      className="text-2xl font-bold"
                      style={{ marginLeft: "0.75rem" }}
                    >
                      {" "}
                      {clima.tipo}{" "}
                    </h4>
                  </div>
                  <div
                    style={{ marginBlockStart: "1rem", marginBlockEnd: "1rem" }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                        style={{ padding: "0.75rem" }}
                      >
                        <p className="text-sm font-semibold">
                          {" "}
                          Temperatura{" "}
                        </p>
                        <p className="text-lg font-bold">
                          {" "}
                          {clima.temperatura}{" "}
                        </p>
                      </div>
                      <div
                        className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                        style={{ padding: "0.75rem" }}
                      >
                        <p className="text-sm font-semibold">
                          {" "}
                          Precipitação{" "}
                        </p>
                        <p className="text-lg font-bold">
                          {" "}
                          {clima.chuva}{" "}
                        </p>
                      </div>
                    </div>
                    <p
                      style={{ marginTop: "1rem" }}
                    >
                      <strong> Região: </strong> {clima.regiao}{" "}
                    </p>
                    <p className="leading-relaxed">
                      {" "}
                      {clima.caracteristicas}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "relevo":
        return (
          <div style={{ marginBlockStart: "2rem", marginBlockEnd: "2rem" }}>
            <div className="text-center text-white" style={{ marginBottom: "3rem" }}>
              <h3
                className="text-4xl font-bold"
                style={{ marginBottom: "1rem" }}
              >
                {" "}
                ⛰️ Relevo Brasileiro{" "}
              </h3>
              <p
                className="text-xl max-w-4xl"
                style={{ marginInline: "auto" }}
              >
                O relevo brasileiro é caracterizado por grandes planícies,
                planaltos antigos e depressões, moldados por milhões de anos de
                processos geológicos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevos.map((relevo, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default"
                  style={{ padding: "1.5rem" }}
                >
                  <div
                    className="flex items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Mountain
                      className="w-8 h-8"
                      style={{ marginRight: "0.75rem" }}
                    />
                    <h4 className="text-2xl font-bold">
                      {relevo.nome}
                    </h4>
                  </div>
                  <div
                    style={{
                      marginBlockStart: "0.75rem",
                      marginBlockEnd: "0.75rem",
                    }}
                  >
                    <div
                      className="flex justify-between items-center bg-white/10 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "0.75rem", marginBottom: "0.5rem" }}
                    >
                      <span className="text-sm font-semibold">
                        Altitude
                      </span>
                      <span className="text-lg font-bold">
                        {relevo.altitude}
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center bg-white/10 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "0.75rem", marginTop: "0.5rem" }}
                    >
                      <span className="text-sm font-semibold">
                        Extensão
                      </span>
                      <span className="font-bold ">
                        {relevo.extensao}
                      </span>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ marginBlock: "0.5rem" }}
                    >
                      {relevo.caracteristicas}
                    </p>
                    <p className="text-md font-semibold">
                      📍 {relevo.localizacao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "hidrografia":
        return (
          <div style={{ marginBlockStart: "2rem", marginBlockEnd: "2rem" }}>
            <div className="text-center text-white" style={{ marginBottom: "3rem" }}>
              <h3
                className="text-4xl font-bold"
                style={{ marginBottom: "1rem" }}
              >
                🌊 Hidrografia do Brasil
              </h3>
              <p
                className="text-xl max-w-4xl"
                style={{ marginInline: "auto" }}
              >
                O Brasil possui uma das maiores redes hidrográficas do mundo,
                com rios caudalosos que drenam o território e formam grandes
                bacias hidrográficas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hidrografia.map((bacia, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default"
                  style={{ padding: "1.5rem" }}
                >
                  <div
                    className="flex items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Waves
                      className="w-8 h-8"
                      style={{ marginRight: "0.75rem" }}
                    />
                    <h4 className="text-2xl font-bold">
                      Bacia {bacia.bacia}
                    </h4>
                  </div>
                  <div
                    style={{ marginBlockStart: "1rem", marginBlockEnd: "1rem" }}
                  >
                    <div
                      className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "1rem", marginBottom: "0.75rem" }}
                    >
                      <h5
                        className="font-bold text-lg"
                        style={{ marginBottom: "0.75rem" }}
                      >
                        {bacia.rio}
                      </h5>
                      <div className="grid grid-cols-2 gap-3 text-md">
                        <div>
                          <span>Extensão:</span>
                          <span
                            className="font-bold"
                            style={{ marginLeft: "0.5rem" }}
                          >
                            {bacia.extensao}
                          </span>
                        </div>
                        <div>
                          <span>Área:</span>
                          <span
                            className="font-bold"
                            style={{ marginLeft: "0.5rem" }}
                          >
                            {bacia.area}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="leading-relaxed">
                      {bacia.caracteristicas}
                    </p>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ marginBottom: "0.75rem" }}
                      >
                        Principais afluentes:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {bacia.afluentes.map((afluente, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                            style={{
                              paddingInline: "0.75rem",
                              paddingBlock: "0.5rem",
                            }}
                          >
                            {afluente}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "vegetacao":
        return (
          <div style={{ marginBlockStart: "2rem", marginBlockEnd: "2rem" }}>
            <div className="text-center text-white" style={{ marginBottom: "3rem" }}>
              <h3
                className="text-4xl font-bold"
                style={{ marginBottom: "1rem" }}
              >
                🌿 Vegetação Brasileira
              </h3>
              <p
                className="text-xl max-w-4xl"
                style={{ marginInline: "auto" }}
              >
                A vegetação brasileira reflete a diversidade climática e
                geográfica do país, abrigando desde florestas tropicais até
                formações savânicas e campestres.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vegetacoes.map((veg, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default"
                  style={{ padding: "1.5rem" }}
                >
                  <div
                    className="flex items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <Leaf
                      className="w-8 h-8"
                      style={{ marginRight: "0.75rem" }}
                    />
                    <h4 className="text-2xl font-bold">
                      {veg.tipo}
                    </h4>
                  </div>
                  <div
                    style={{ marginBlockStart: "1rem", marginBlockEnd: "1rem" }}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div
                        className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                        style={{ padding: "0.75rem" }}
                      >
                        <p className="text-xs font-semibold">
                          Área de cobertura
                        </p>
                        <p className="text-lg font-bold">
                          {veg.area}
                        </p>
                      </div>
                      <div
                        className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                        style={{ padding: "0.75rem" }}
                      >
                        <p className="text-xs font-semibold">
                          Diversidade
                        </p>
                        <p className="text-lg font-bold">
                          {veg.especies}
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "1rem", marginBlock: "1rem" }}
                    >
                      <p
                        className="text-sm font-semibold"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        Características:
                      </p>
                      <p className="text-sm leading-relaxed">
                        {veg.caracteristicas}
                      </p>
                    </div>
                    <div
                      className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "1rem" }}
                    >
                      <p
                        className="text-sm font-semibold"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        Importância:
                      </p>
                      <p className="text-sm leading-relaxed">
                        {veg.importancia}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "biomas":
        return (
          <div style={{ marginBlockStart: "2rem", marginBlockEnd: "2rem" }}>
            <div className="text-center text-white" style={{ marginBottom: "3rem" }}>
              <h3
                className="text-4xl font-bold"
                style={{ marginBottom: "1rem" }}
              >
                🌳 Biomas do Brasil
              </h3>
              <p
                className="text-xl max-w-4xl"
                style={{ marginInline: "auto" }}
              >
                Os seis biomas brasileiros representam diferentes conjuntos de
                ecossistemas, cada um com características únicas de flora, fauna
                e condições ambientais.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biomas.map((bioma, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-103 cursor-default"
                  style={{ padding: "1.5rem" }}
                >
                  <div className="text-center" style={{ marginBottom: "1rem" }}>
                    <h4 className="text-2xl font-bold">
                      {bioma.icon} {bioma.nome}
                    </h4>
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    style={{
                      marginBlockStart: "0.75rem",
                      marginBlockEnd: "0.75rem",
                    }}
                  >
                    <div
                      className="bg-white/5 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "0.75rem" }}
                    >
                      <p className="text-sm font-semibold">
                        Área total
                      </p>
                      <p className="text-lg font-bold">
                        {bioma.area}
                      </p>
                    </div>
                    <div
                      className="bg-white/5 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "0.75rem" }}
                    >
                      <p className="text-sm font-semibold">
                        Estados abrangidos
                      </p>
                      <p className="text-lg font-bold">
                        {bioma.estados} estados
                      </p>
                    </div>
                    <div
                      className="bg-white/5 backdrop-blur-md border-white border rounded-lg"
                      style={{ padding: "0.75rem" }}
                    >
                      <p className="text-sm font-semibold">
                        {" "}
                        Biodiversidade{" "}
                      </p>
                      <p className="text-sm font-bold">
                        {bioma.especies}{" "}
                      </p>
                    </div>
                    <p className=" text-sm leading-relaxed">
                      {" "}
                      {bioma.caracteristicas}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen transition-all duration-1000 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Tela Inicial */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn"
        style={{
          backgroundImage: `url(${brazilBackgroundNature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <div>
          <h2 className="text-6xl font-bold border-b-4 border-white">
            Natureza do Brasil
          </h2>
        </div>
      </div>

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
        {/* Estatísticas */}
        <section className="animate-fadeIn">
          <div
            className="bg-white/5 backdrop-blur-md border-white border-1 rounded-lg"
            style={{ padding: "32px", margin: "2rem 2rem 1rem 2rem" }}
          >
            <h2
              className="text-4xl font-bold text-white text-center"
              style={{ marginBottom: "16px" }}
            >
              Brasilzão da Natureza
            </h2>
            <div className="grid" style={{ gap: "32px" }}>
              <div
                className="space-y-4 text-white/90 text-lg leading-relaxed"
                style={{ gap: "16px" }}
              >
                <p className="leading-relaxed text-center">
                  A natureza do Brasil é um espetáculo grandioso, marcada por
                  uma diversidade impressionante de paisagens, climas e
                  ecossistemas. Do verde infinito da Floresta Amazônica à
                  exuberância do Pantanal, passando pelas praias paradisíacas,
                  cerrados, caatingas e mata atlântica, o Brasil abriga uma das
                  maiores biodiversidades do planeta. Essa riqueza natural é
                  reflexo da vastidão do território e da harmonia entre os
                  diferentes biomas. Somos um país que acolhe a força dos rios,
                  a imponência das montanhas e a delicadeza das flores tropicais
                </p>
              </div>
              <div className="flex flex-row" style={{ gap: "16px" }}>
                {estatisticas.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/2 backdrop-blur-md border-white border-1 rounded-lg w-full text-white shadow-2xl hover:scale-105 transition-all duration-500 cursor-default"
                    style={{ padding: "1.5rem" }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.numero}</div>
                    <div className="text-lg font-semibold mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm opacity-90">{stat.descricao}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="relative z-10" style={{ paddingBlock: "2rem" }}>
          <div
            className="max-w-6xl text-white"
            style={{
              paddingTop: "1.5rem",
              marginInline: "auto",
              paddingInline: "1.5rem",
            }}
          >
            <h2
              className="text-4xl font-bold text-center"
              style={{ marginBottom: "2rem" }}
            >
              Explore a Natureza Brasileira
            </h2>

            {/* Menu de navegação */}
            <div
              className="flex flex-wrap justify-center gap-4"
              style={{ marginBottom: "3rem" }}
            >
              {navegacao.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-white text-black shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                    }`}
                    style={{ paddingInline: "1.5rem", paddingBlock: "0.5rem" }}
                  >
                    <IconComponent
                      className="w-5 h-5"
                      style={{ marginRight: "0.5rem" }}
                    />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Conteúdo da seção ativa */}
            <div
              className="bg-transparent backdrop-blur-md border-white border-1 rounded-lg"
              style={{ padding: "2rem" }}
            >
              {renderSection()}
            </div>
          </div>
        </section>

        {/* Seção de Conservação */}
        <section
          className="text-white relative z-10"
          style={{ paddingBlock: "1rem" }}
        >
          <div
            className="max-w-4xl text-center"
            style={{ marginInline: "auto", paddingInline: "1.5rem" }}
          >
            <h2 className="text-4xl font-bold" style={{ marginBottom: "2rem" }}>
              🛡️ Conservação e Sustentabilidade
            </h2>
            <p
              className="text-xl leading-relaxed"
              style={{ marginBottom: "2rem" }}
            >
              A preservação da natureza brasileira é fundamental para o
              equilíbrio ambiental global. Cada bioma, rio, montanha e espécie
              representa um patrimônio único que deve ser protegido para as
              futuras gerações através de políticas públicas eficazes e
              conscientização social.
            </p>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              style={{ marginTop: "3rem" }}
            >
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                style={{ padding: "1.5rem" }}
              >
                <div className="text-4xl" style={{ marginBottom: "1rem" }}>
                  🌱
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Preservação
                </h3>
                <p className="text-sm opacity-90">
                  Unidades de conservação protegem 18% do território nacional
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                style={{ padding: "1.5rem" }}
              >
                <div className="text-4xl" style={{ marginBottom: "1rem" }}>
                  🔬
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Pesquisa
                </h3>
                <p className="text-sm opacity-90">
                  Estudos científicos revelam novas espécies constantemente
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg"
                style={{ padding: "1.5rem" }}
              >
                <div className="text-4xl" style={{ marginBottom: "1rem" }}>
                  🤝
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Educação
                </h3>
                <p className="text-sm opacity-90">
                  Conscientização é fundamental para a conservação
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curiosidades */}
        <section className="relative z-10" style={{ paddingBlock: "5rem" }}>
          <div
            className="max-w-6xl text-white"
            style={{ marginInline: "auto", paddingInline: "1.5rem" }}
          >
            <h2
              className="text-4xl font-bold text-center"
              style={{ marginBottom: "2rem" }}
            >
              🤔 Você Sabia?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default">
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🐆 Maior Felino das Américas
                </h3>
                <p>
                  A onça-pintada brasileira pode pesar até 158kg e é o terceiro
                  maior felino do mundo
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🌊 Rio Subterrâneo
                </h3>
                <p>
                  O Aquífero Guarani, sob o Brasil, contém água doce suficiente
                  para abastecer o mundo por 200 anos
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🦋 Borboletas Gigantes
                </h3>
                <p>
                  A borboleta-azul brasileira tem envergadura de até 20cm, uma
                  das maiores do mundo
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🌺 Orquídeas Raras
                </h3>
                <p>
                  O Brasil possui mais de 3.500 espécies de orquídeas, sendo 60%
                  endêmicas
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🐨 Preguiça Especial
                </h3>
                <p>
                  As preguiças se movem tão lentamente que algas crescem em seus
                  pelos, servindo de camuflagem
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-2xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🐬 Boto Cor-de-Rosa
                </h3>
                <p>
                  O boto-cor-de-rosa da Amazônia é o maior golfinho de água doce
                  do mundo
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Estilos para animações */}
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
