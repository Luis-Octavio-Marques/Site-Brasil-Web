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
    }, 2000); // Muda a cada 2.5 segundos

    return () => clearInterval(interval);
  });

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
          <section className="animate-fadeIn px-4 sm:px-8 lg:px-16 py-6 sm:py-8 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
              Regiões do Brasil
            </h2>

            <div className="my-4">
              {regioes.map((regiao, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white rounded-lg shadow-2xl transition-all duration-500 cursor-default hover:bg-white/10 mb-6 sm:mb-8 p-4 sm:p-5"
                >
                  <div className="flex flex-col items-center justify-between">
                    {/* Cabeçalho */}
                    <div className="flex items-center gap-3 sm:gap-5 w-full justify-center">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-center">
                        {regiao.nome}
                      </h3>
                    </div>

                    <div className="w-20 sm:w-32 lg:w-55 h-0.5 bg-white/60 my-2" />

                    {/* Características */}
                    <div className="flex-1 mb-4 px-2 sm:px-4 lg:px-8">
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center max-w-full sm:max-w-2xl lg:mx-40">
                        {regiao.caracteristicas}
                      </p>
                    </div>

                    {/* Estatísticas */}
                    <div className="flex flex-col items-center gap-3 w-full">
                      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-5 w-full">
                        {/* Área */}
                        <div className="text-center bg-white/10 backdrop-blur-md border border-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[120px] sm:min-w-[80px] flex-1 sm:flex-none max-w-[200px] sm:max-w-none">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                            {regiao.area}
                          </div>
                          <div className="text-xs sm:text-sm lg:text-md opacity-80">
                            Área Territorial
                          </div>
                        </div>

                        {/* Estados */}
                        <div className="text-center bg-white/10 backdrop-blur-md border border-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[120px] sm:min-w-[80px] flex-1 sm:flex-none max-w-[200px] sm:max-w-none">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                            {regiao.estados.length}
                          </div>
                          <div className="text-xs sm:text-sm lg:text-md opacity-80">
                            Estados
                          </div>
                        </div>

                        {/* Climas */}
                        <div className="text-center bg-white/10 backdrop-blur-md border border-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[120px] flex-1 sm:flex-none max-w-[200px] sm:max-w-none">
                          <div className="text-sm sm:text-lg lg:text-xl font-medium transition-all duration-500">
                            {getClimaAtual(regiao, index)}
                          </div>
                          <div className="text-xs sm:text-sm lg:text-md opacity-80 flex flex-col items-center justify-center gap-1">
                            {regiao.climas.length > 1 ? "Climas" : "Clima"}
                            {regiao.climas.length > 1 && (
                              <div className="flex gap-1">
                                {regiao.climas.map((_, climaIdx) => (
                                  <div
                                    key={climaIdx}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                      (climaAtualIndex[index] || 0) === climaIdx
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

                      {/* Lista de Estados */}
                      <div className="text-center w-full">
                        <div className="text-xs sm:text-sm lg:text-md mb-2">
                          Estados da Região:
                        </div>
                        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                          {regiao.estados.slice(0, 7).map((estado, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-white/10 backdrop-blur-md border border-white rounded-lg text-xs sm:text-sm px-2 sm:px-3 py-1 text-white"
                            >
                              {estado}
                            </span>
                          ))}
                          {regiao.destrito && (
                            <span className="inline-block bg-white/10 backdrop-blur-md border border-white rounded-lg text-xs sm:text-sm px-2 sm:px-3 py-1 text-white">
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
          </section>
        );

      case "clima":
        return (
          <div className="my-6 sm:my-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                🌡️ Clima do Brasil
              </h3>
              <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                A diversidade climática brasileira é resultado de sua extensão
                territorial, posição geográfica e variações de relevo, criando
                diferentes zonas climáticas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {climas.map((clima, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default p-4 sm:p-6 lg:p-8"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">
                      {clima.icon}
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold ml-2 sm:ml-3 leading-tight">
                      {clima.tipo}
                    </h4>
                  </div>

                  <div className="my-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3">
                        <p className="text-xs sm:text-sm font-semibold opacity-90">
                          Temperatura
                        </p>
                        <p className="text-base sm:text-lg font-bold mt-1">
                          {clima.temperatura}
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3">
                        <p className="text-xs sm:text-sm font-semibold opacity-90">
                          Precipitação
                        </p>
                        <p className="text-base sm:text-lg font-bold mt-1">
                          {clima.chuva}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-sm sm:text-base">
                        <strong className="font-semibold">Região:</strong>{" "}
                        <span className="font-medium">{clima.regiao}</span>
                      </p>
                      <p className="leading-relaxed text-sm sm:text-base opacity-95">
                        {clima.caracteristicas}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "relevo":
        return (
          <div className="my-6 sm:my-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                ⛰️ Relevo Brasileiro
              </h3>
              <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                O relevo brasileiro é caracterizado por grandes planícies,
                planaltos antigos e depressões, moldados por milhões de anos de
                processos geológicos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {relevos.map((relevo, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default p-4 sm:p-5 lg:p-6"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Mountain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                      {relevo.nome}
                    </h4>
                  </div>

                  <div className="my-3 space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white/10 backdrop-blur-md border border-white rounded-lg p-3 gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm font-semibold opacity-90">
                        Altitude
                      </span>
                      <span className="text-base sm:text-lg font-bold">
                        {relevo.altitude}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white/10 backdrop-blur-md border border-white rounded-lg p-3 gap-1 sm:gap-0">
                      <span className="text-xs sm:text-sm font-semibold opacity-90">
                        Extensão
                      </span>
                      <span className="text-base sm:text-lg font-bold">
                        {relevo.extensao}
                      </span>
                    </div>

                    <div className="pt-2">
                      <p className="leading-relaxed mb-3 text-sm sm:text-base opacity-95">
                        {relevo.caracteristicas}
                      </p>
                      <p className="text-sm sm:text-base font-semibold flex items-start gap-1">
                        <span className="text-base">📍</span>
                        <span>{relevo.localizacao}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "hidrografia":
        return (
          <div className="my-6 sm:my-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                🌊 Hidrografia do Brasil
              </h3>
              <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                O Brasil possui uma das maiores redes hidrográficas do mundo,
                com rios caudalosos que drenam o território e formam grandes
                bacias hidrográficas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {hidrografia.map((bacia, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default p-4 sm:p-5 lg:p-6"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Waves className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                      Bacia {bacia.bacia}
                    </h4>
                  </div>

                  <div className="my-4 space-y-3 sm:space-y-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3 sm:p-4">
                      <h5 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                        {bacia.rio}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="opacity-90">Extensão:</span>
                          <span className="font-bold sm:ml-2">
                            {bacia.extensao}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="opacity-90">Área:</span>
                          <span className="font-bold sm:ml-2">
                            {bacia.area}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="leading-relaxed text-sm sm:text-base opacity-95">
                      {bacia.caracteristicas}
                    </p>

                    <div>
                      <p className="text-xs sm:text-sm font-semibold mb-2 opacity-90">
                        Principais afluentes:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {bacia.afluentes.map((afluente, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-2"
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
          <div className="my-6 sm:my-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                🌿 Vegetação Brasileira
              </h3>
              <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                A vegetação brasileira reflete a diversidade climática e
                geográfica do país, abrigando desde florestas tropicais até
                formações savânicas e campestres.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {vegetacoes.map((veg, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default p-4 sm:p-5 lg:p-6"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Leaf className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                      {veg.tipo}
                    </h4>
                  </div>

                  <div className="my-4 space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3">
                        <p className="text-xs sm:text-sm font-semibold opacity-90 mb-1">
                          Área de cobertura
                        </p>
                        <p className="text-base sm:text-lg font-bold">
                          {veg.area}
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3">
                        <p className="text-xs sm:text-sm font-semibold opacity-90 mb-1">
                          Diversidade
                        </p>
                        <p className="text-base sm:text-lg font-bold">
                          {veg.especies}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm font-semibold mb-2 opacity-90">
                        Características:
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed opacity-95">
                        {veg.caracteristicas}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm font-semibold mb-2 opacity-90">
                        Importância:
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed opacity-95">
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
          <div className="my-6 sm:my-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                🌳 Biomas do Brasil
              </h3>
              <p className="text-base sm:text-lg lg:text-xl max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                Os seis biomas brasileiros representam diferentes conjuntos de
                ecossistemas, cada um com características únicas de flora, fauna
                e condições ambientais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {biomas.map((bioma, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-500 cursor-default p-4 sm:p-5 lg:p-6"
                >
                  <div className="text-center mb-3 sm:mb-4">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                      <span className="text-2xl sm:text-3xl lg:text-4xl mr-2">
                        {bioma.icon}
                      </span>
                      {bioma.nome}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-3 my-3">
                    <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-2 sm:p-3">
                      <p className="text-xs sm:text-sm font-semibold opacity-90 mb-1">
                        Área total
                      </p>
                      <p className="text-base sm:text-lg font-bold">
                        {bioma.area}
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-2 sm:p-3">
                      <p className="text-xs sm:text-sm font-semibold opacity-90 mb-1">
                        Estados abrangidos
                      </p>
                      <p className="text-base sm:text-lg font-bold">
                        {bioma.estados} estados
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-2 sm:p-3">
                      <p className="text-xs sm:text-sm font-semibold opacity-90 mb-1">
                        Biodiversidade
                      </p>
                      <p className="text-xs sm:text-sm font-bold opacity-95">
                        {bioma.especies}
                      </p>
                    </div>

                    <div className="pt-1 sm:pt-2">
                      <p className="text-sm sm:text-base leading-relaxed opacity-95">
                        {bioma.caracteristicas}
                      </p>
                    </div>
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

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white min-h-screen w-full animate-fadeIn bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${brazilBackgroundNature})` }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 border-white px-4">
          Natureza do Brasil
        </h2>
      </div>

      <main className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-center">
        {/* Estatísticas */}
        <section className="animate-fadeIn sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
              Brasilzão da Natureza
            </h2>
            <div className="grid gap-6 lg:gap-8">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed text-center px-2 sm:px-0">
                A natureza do Brasil é um espetáculo grandioso, marcada por uma
                diversidade impressionante de paisagens, climas e ecossistemas.
                Do verde infinito da Floresta Amazônica à exuberância do
                Pantanal, passando pelas praias paradisíacas, cerrados,
                caatingas e mata atlântica, o Brasil abriga uma das maiores
                biodiversidades do planeta. Essa riqueza natural é reflexo da
                vastidão do território e da harmonia entre os diferentes biomas.
                Somos um país que acolhe a força dos rios, a imponência das
                montanhas e a delicadeza das flores tropicais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {estatisticas.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-md border border-white rounded-lg text-white shadow-2xl p-4 sm:p-6 transition-transform duration-500 hover:scale-105 min-h-[140px] flex flex-col justify-center"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                      {stat.numero}
                    </div>
                    <div className="text-base sm:text-lg font-semibold mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm opacity-90">
                      {stat.descricao}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navegação */}
        <section className="relative z-10 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto text-white px-4 sm:px-6 pt-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
              Explore a Natureza Brasileira
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              {navegacao.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center rounded-full transition-all duration-300 px-3 sm:px-6 py-2 text-sm sm:text-base ${
                      activeSection === item.id
                        ? "bg-white text-black shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-4 sm:p-6 lg:p-8">
              {renderSection()}
            </div>
          </div>
        </section>

        {/* Conservação */}
        <section className="text-white relative z-10 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              🛡️ Conservação e Sustentabilidade
            </h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              A preservação da natureza brasileira é fundamental para o
              equilíbrio ambiental global. Cada bioma, rio, montanha e espécie
              representa um patrimônio único que deve ser protegido para as
              futuras gerações através de políticas públicas eficazes e
              conscientização social.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
              {[
                {
                  icon: "🌱",
                  title: "Preservação",
                  text: "Unidades de conservação protegem 18% do território nacional",
                },
                {
                  icon: "🔬",
                  title: "Pesquisa",
                  text: "Estudos científicos revelam novas espécies constantemente",
                },
                {
                  icon: "🤝",
                  title: "Educação",
                  text: "Conscientização é fundamental para a conservação",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white rounded-lg p-4 sm:p-6 hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curiosidades */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto text-white px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
              🤔 Você Sabia?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 cursor-default">
              {[
                {
                  title: "🐆 Maior Felino das Américas",
                  text: "A onça-pintada brasileira pode pesar até 158kg e é o terceiro maior felino do mundo",
                },
                {
                  title: "🌊 Rio Subterrâneo",
                  text: "O Aquífero Guarani, sob o Brasil, contém água doce suficiente para abastecer o mundo por 200 anos",
                },
                {
                  title: "🦋 Borboletas Gigantes",
                  text: "A borboleta-azul brasileira tem envergadura de até 20cm, uma das maiores do mundo",
                },
                {
                  title: "🌺 Orquídeas Raras",
                  text: "O Brasil possui mais de 3.500 espécies de orquídeas, sendo 60% endêmicas",
                },
                {
                  title: "🐨 Preguiça Especial",
                  text: "As preguiças se movem tão lentamente que algas crescem em seus pelos, servindo de camuflagem natural",
                },
                {
                  title: "🦜 Arara-azul-de-lear",
                  text: "Essa arara rara do Brasil é uma das mais ameaçadas do mundo, com menos de 1.500 indivíduos em vida selvagem",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 p-4 sm:p-6 min-h-[160px] flex flex-col"
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex-shrink-0">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base flex-grow">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Estilos para animações */}
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
