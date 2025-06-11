import React, { useState } from "react";

import historyImage1 from "../assets/img/country-history/historyImage1.png";
import historyImage2 from "../assets/img/country-history/historyImage2.png";
import historyImage3 from "../assets/img/country-history/historyImage3.png";
import historyImage4 from "../assets/img/country-history/historyImage4.png";
import historyImage5 from "../assets/img/country-history/historyImage5.png";
import historyImage6 from "../assets/img/country-history/historyImage6.png";
import historyImage7 from "../assets/img/country-history/historyImage7.png";
import historyImage8 from "../assets/img/country-history/historyImage8.png";
import historyImage9 from "../assets/img/country-history/historyImage9.png";
import historyImage10 from "../assets/img/country-history/historyImage10.png";
import historyImage11 from "../assets/img/country-history/historyImage11.png";
import historyImage12 from "../assets/img/country-history/historyImage12.png";
import historyImage13 from "../assets/img/country-history/historyImage13.png";
import historyImage14 from "../assets/img/country-history/historyImage14.png";
import historyImage15 from "../assets/img/country-history/historyImage15.png";
import historyImage16 from "../assets/img/country-history/historyImage16.png";
import historyImage17 from "../assets/img/country-history/historyImage17.png";
import historyImage18 from "../assets/img/country-history/historyImage18.png";
import historyImage19 from "../assets/img/country-history/historyImage19.png";
import historyImage20 from "../assets/img/country-history/historyImage20.png";
import historyImage21 from "../assets/img/country-history/historyImage21.png";
import historyImage22 from "../assets/img/country-history/historyImage22.png";
import historyImage23 from "../assets/img/country-history/historyImage23.png";

import brazilBackgroundHistory from "./../assets/img/country-backgrounds/Brazil-background2.png";
import Header from "../components/Header";

const TimelineItem = ({ item, index, isExpanded, onToggle }) => {
  const isLeft = index % 2 === 0;

  const getTruncatedText = (text, wordLimit = 25) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div
      className={`flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } animate-fadeIn`}
      style={{
        marginBottom: "48px",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Content Card */}
      <div
        className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}
        style={isLeft ? { paddingRight: "32px" } : { paddingLeft: "32px" }}
      >
        <div
          className="bg-white/20 backdrop-blur-md border-white border-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => onToggle(index)}
        >
          <div style={{ padding: "24px" }}>
            <div
              className="text-sm font-medium text-white/70"
              style={{ marginBottom: "4px" }}
            >
              {item.period}
            </div>
            <div
              className="text-2xl font-bold text-white/90"
              style={{ marginBottom: "8px" }}
            >
              {item.year}
            </div>
            <h3
              className="text-lg font-semibold text-white/90"
              style={{ marginBottom: "12px" }}
            >
              {item.title}
            </h3>

            <div className="text-white/100 leading-relaxed text-left">
              {isExpanded
                ? item.description
                : getTruncatedText(item.description)}
            </div>

            <div
              className="border-t border-gray-200"
              style={{ marginTop: "16px", paddingTop: "16px" }}
            >
              <button
                className="text-sm text-white hover:text-gray-200 font-medium transition-colors duration-200 flex items-center cursor-pointer underline"
                style={{ gap: "4px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(index);
                }}
              >
                {isExpanded ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    Mostrar Menos
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    Ler Mais
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-gray-600 rounded-4xl border-4 border-white shadow-md z-10 relative">
          <div className="absolute inset-0 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Image Card */}
      <div
        className={`w-5/12`}
        style={isLeft ? { paddingLeft: "32px" } : { paddingRight: "32px" }}
      >
        <div className="bg-white/20 backdrop-blur-md border-2 border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div style={{ padding: "16px" }}>
            <div className="text-sm text-white/90 font-medium">
              Representação Visual
            </div>
            <div
              className="text-white font-semibold"
              style={{ marginTop: "4px" }}
            >
              {item.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function History() {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const timelineData = [
    {
      id: "preCabral",
      year: "~ 12.000 a.C.",
      period: "Período Pré-Cabralino",
      title: "Primeiros Habitantes",
      description:
        "Chegada dos primeiros grupos humanos ao território brasileiro pelo Estreito de Bering durante migrações paleolíticas. Esses povos desenvolveram culturas complexas e diversas ao longo de milênios, adaptando-se aos diferentes biomas brasileiros. Centenas de grupos étnicos distintos se formaram com línguas e organizações sociais variadas, indo de coletores nômades a sociedades sedentárias com agricultura avançada. Desenvolveram profundo conhecimento de medicina natural, astronomia e manejo sustentável de recursos. Deixaram registros arqueológicos como sambaquis litorâneos, pinturas rupestres na Serra da Capivara e sítios cerimoniais complexos por toda a América do Sul.",
      image: historyImage1,
    },
    {
      id: "preColonial",
      year: "1500 - 1530",
      period: "Período Pré-Colonial",
      title: "Chegada dos Portugueses",
      description:
        "Pedro Álvares Cabral chega a Porto Seguro em 22 de abril de 1500, estabelecendo o primeiro contato oficial entre europeus e terras brasileiras. O período é marcado pela exploração inicial do território por expedições de reconhecimento costeiro. A principal atividade econômica era a extração do pau-brasil, árvore abundante na Mata Atlântica, cuja madeira vermelha era muito valorizada na Europa para tinturaria e marcenaria de luxo. O escambo com indígenas tornou-se a forma predominante de comércio, trocando ferramentas, espelhos e tecidos por mão de obra indígena no corte e transporte da madeira. Feitorias foram estabelecidas como estações comerciais temporárias. Nesse período, navegadores como Américo Vespúcio e Gonçalo Coelho realizaram expedições exploratórias que mapearam o litoral brasileiro.",
      image: historyImage2,
    },
    {
      id: "colonial",
      year: "1549",
      period: "Período Colonial",
      title: "Colonização Sistemática",
      description:
        "A colonização efetiva começa com a expedição de Martim Afonso de Sousa em 1530, enviada pelo rei Dom João III para fundar povoados permanentes. Implanta-se o sistema de capitanias hereditárias, dividindo o território em 15 faixas de terra concedidas à nobreza portuguesa. São Vicente, fundada em 1532, torna-se a primeira vila oficial do Brasil. A economia colonial estrutura-se inicialmente no cultivo da cana-de-açúcar no Nordeste, utilizando mão de obra escrava africana a partir de 1538. Os engenhos tornam-se complexos produtivos que dominaram a economia mundial do açúcar por séculos. A sociedade colonial desenvolve-se hierarquizada e miscigenada, com senhores de engenho no topo, camadas médias de comerciantes e artesãos, e uma grande massa de escravizados e dependentes na base.",
      image: historyImage3,
    },
    {
      id: "colonial1",
      year: "1695",
      period: "Período Colonial",
      title: "Governo-Geral",
      description:
        "Tomé de Sousa é nomeado o primeiro governador-geral do Brasil, centralizando a administração colonial que se mostrara ineficiente sob o sistema de capitanias hereditárias. Funda Salvador em 1549, que se torna a primeira capital do Brasil e permanece até 1763. O governo-geral representa uma mudança fundamental na política colonial portuguesa, estabelecendo administração mais direta e eficiente. Os primeiros jesuítas chegam com Tomé de Sousa, liderados pelo padre Manuel da Nóbrega, iniciando a catequese indígena e a construção das primeiras escolas. A Companhia de Jesus torna-se fundamental na educação colonial e (controversa) proteção dos nativos. Esse período estabelece a organização administrativa, judiciária e militar que perduraria por séculos.",
      image: historyImage4,
    },
    {
      id: "colonial2",
      year: "1789",
      period: "Período Colonial",
      title: "Descoberta do Ouro",
      description:
        "Bandeirantes paulistas, liderados por figuras como Borba Gato e Fernão Dias Paes, descobrem os primeiros veios de ouro em Minas Gerais, revolucionando completamente a economia colonial. A descoberta ocorre inicialmente em Ouro Preto (Vila Rica), expandindo-se depois para Mariana, Sabará e Diamantina. O evento marca o início do maior ciclo econômico da América colonial, atraindo milhares de portugueses e provocando a primeira grande migração interna do Brasil. A população de Minas Gerais cresce exponencialmente de praticamente zero para mais de 300 mil habitantes em poucas décadas. O eixo econômico desloca-se do Nordeste açucareiro para o Centro-Sul, consolidando a importância do Rio de Janeiro como porto exportador. A Coroa portuguesa implementa rígido controle fiscal por casas de fundição e o imposto do quinto (20% de toda produção de ouro).",
      image: historyImage5,
    },
    {
      id: "colonial3",
      year: "1808",
      period: "Período Colonial",
      title: "Inconfidência Mineira",
      description:
        "A Inconfidência Mineira representa o primeiro grande movimento organizado pela independência do Brasil, liderado por elite intelectual e econômica de Minas Gerais. O movimento surge em resposta ao aumento da pressão fiscal da Coroa portuguesa, especialmente a ameaça da derrama - cobrança forçada de impostos atrasados. Entre os conspiradores estão Joaquim José da Silva Xavier (Tiradentes), os poetas Tomás Antônio Gonzaga e Cláudio Manuel da Costa, além de fazendeiros e comerciantes influentes. O plano previa proclamar uma república inspirada nos Estados Unidos, com capital em São João del-Rei e universidade em Vila Rica. A conspiração é descoberta por delação, resultando em prisões. Tiradentes, sendo o único de origem humilde, torna-se bode expiatório e é executado em 21 de abril de 1792, tornando-se mártir da independência nacional.",
      image: historyImage6,
    },
    {
      id: "colonial4",
      year: "1822 - 1889",
      period: "Período Colonial",
      title: "Chegada da Família Real",
      description:
        "A chegada da família real portuguesa ao Brasil em março de 1808 marca uma transformação radical na história colonial. Dom João VI, acompanhado de cerca de 15 mil membros da corte, foge das invasões napoleônicas com apoio naval britânico. O Rio de Janeiro torna-se, pela primeira vez na história, sede de um império europeu fora da Europa. Reformas modernizadoras fundamentais são implementadas: abertura dos portos às nações amigas (principalmente Inglaterra), criação do Banco do Brasil, fundação da Imprensa Régia, instalação de fábricas e manufaturas e criação de escolas superiores (Academia Militar, Escola de Medicina). O Rio de Janeiro transforma-se urbanisticamente com teatros, bibliotecas e jardins. Em 1815, o Brasil é elevado à categoria de Reino Unido a Portugal e Algarves, deixando formalmente de ser colônia.",
      image: historyImage7,
    },
    {
      id: "imperial",
      year: "1831 - 1840",
      period: "Período Imperial",
      title: "Independência do Brasil",
      description:
        "A independência do Brasil consolida-se por um processo complexo iniciado com pressões das Cortes de Lisboa para recolonizar o Brasil após o retorno de Dom João VI a Portugal em 1821. Dom Pedro I, pressionado por decretos das cortes exigindo seu retorno e a subordinação do Brasil, protagoniza o episódio do Fico em janeiro de 1822, declarando que permaneceria no Brasil. José Bonifácio de Andrada e Silva torna-se figura central como Patriarca da Independência, articulando politicamente o processo. Em 7 de setembro de 1822, às margens do riacho Ipiranga, Dom Pedro proclama a independência com o grito 'Independência ou Morte!'. Consolidar a independência ainda exige combater resistências portuguesas em várias províncias, especialmente Bahia, Cisplatina e Pará. O Império do Brasil surge como monarquia constitucional, única nas Américas, enfrentando imediatamente tensões entre tendências centralizadoras e federalistas.",
      image: historyImage8,
    },
    {
      id: "imperial1",
      year: "1840 - 1889",
      period: "Período Imperial",
      title: "Período Regencial",
      description:
        "A abdicação de Dom Pedro I em 7 de abril de 1831, pressionado por crises políticas e econômicas, inaugura um dos períodos mais turbulentos da história do Brasil. Com Pedro II com apenas 5 anos, uma regência assume enfrentando revoltas separatistas em todo o país. A Cabanagem no Pará (1835-1840) representa a revolta mais radical, com populações caboclas tomando o poder provincial. A Revolução Farroupilha no Rio Grande do Sul (1835-1845) estabelece uma república independente por dez anos. A Sabinada na Bahia (1837-1838) e a Balaiada no Maranhão (1838-1841) demonstram a fragilidade da unidade nacional. O período é marcado por intensos debates entre liberais e conservadores sobre centralização versus federalismo. O Ato Adicional de 1834 concede mais autonomia às províncias, mas não pacifica o país. O Golpe da Maioridade em 1840 antecipa a coroação de Pedro II tentando restaurar a estabilidade política.",
      image: historyImage9,
    },
    {
      id: "imperial2",
      year: "1888",
      period: "Período Imperial",
      title: "Segundo Reinado",
      description:
        "O reinado de Dom Pedro II de 1840 a 1889 representa o período mais estável politicamente da história brasileira, consolidando a unidade territorial e promovendo significativa modernização. O imperador, com sólida formação intelectual e científica, transforma o Brasil em monarquia respeitada internacionalmente. O país vive renascimento cultural com a criação do Instituto Histórico e Geográfico Brasileiro, Academia Imperial de Belas Artes e o florescimento do romantismo literário. A economia diversifica-se com o café no Vale do Paraíba, tornando-se a principal fonte de divisas. A infraestrutura moderniza-se com ferrovias, telégrafo, iluminação a gás e sistemas iniciais de água/esgoto. Pedro II promove ciência e educação, correspondendo-se com intelectuais europeus e participando de exposições mundiais. Crescem gradualmente as tensões com a Guerra do Paraguai (1864-1870), questões abolicionistas e conflitos com a Igreja Católica e o Exército.",
      image: historyImage10,
    },
    {
      id: "imperial3",
      year: "1889 - 1930",
      period: "Período Imperial",
      title: "Abolição da Escravidão",
      description:
        "A Lei Áurea, assinada pela princesa Isabel em 13 de maio de 1888, representa o ato final de um longo processo abolicionista intensificado desde 1850 com o fim do tráfico negreiro. O movimento abolicionista ganha força com figuras como Luiz Gama, José do Patrocínio, André Rebouças e Joaquim Nabuco, mobilizando a opinião pública por jornais, conferências e sociedades emancipatórias. A Lei do Ventre Livre (1871) liberta filhos de escravas e a Lei dos Sexagenários (1885) liberta escravos com mais de 60 anos, criando abolição gradual. A resistência escrava intensifica-se com fugas em massa, formação de quilombos e setores urbanos aderindo à causa. A economia cafeeira, inicialmente resistente, adapta-se com imigração europeia em massa, especialmente italiana. O Brasil torna-se o último país das Américas a abolir a escravidão, encerrando quase 400 anos de trabalho forçado que trouxeram cerca de 4 milhões de africanos. Paradoxalmente, a abolição enfraquece a monarquia ao perder o apoio dos fazendeiros escravistas.",
      image: historyImage11,
    },
    {
      id: "oldRepublic",
      year: "1894 - 1906",
      period: "República Velha",
      title: "Proclamação da República",
      description:
        "O marechal Deodoro da Fonseca proclama a República em 15 de novembro, derrubando a monarquia e estabelecendo um sistema republicano federalista dominado pelas oligarquias do café.",
      image: historyImage12,
    },
    {
      id: "oldRepublic1",
      year: "1930 - 1945",
      period: "República Velha",
      title: "República do Café com Leite",
      description:
        "Alternância de poder entre as oligarquias de São Paulo (café) e Minas Gerais (leite), caracterizando a política dos governadores e o coronelismo no interior.",
      image: historyImage13,
    },
    {
      id: "vargasEra",
      year: "1937 - 1945",
      period: "Era Vargas",
      title: "Revolução de 1930",
      description:
        "Getúlio Vargas chega ao poder por meio de um movimento revolucionário que derruba a Velha República, iniciando profundas transformações políticas, sociais e econômicas.",
      image: historyImage14,
    },
    {
      id: "vargasEra1",
      year: "1946 - 1964",
      period: "Era Vargas",
      title: "Estado Novo",
      description:
        "Período ditatorial de Vargas caracterizado pela centralização do poder, nacionalismo econômico, modernização autoritária do Estado brasileiro e aproximação de regimes fascistas.",
      image: historyImage15,
    },
    {
      id: "populistRepublic",
      year: "1956 - 1961",
      period: "República Populista",
      title: "Democracia Populista",
      description:
        "Período democrático marcado pelo populismo, industrialização acelerada, construção de Brasília por JK e crescente polarização política culminando no golpe militar.",
      image: historyImage16,
    },
    {
      id: "populistRepublic1",
      year: "1964 - 1985",
      period: "República Populista",
      title: "Governo JK e Brasília",
      description:
        "Juscelino Kubitschek implementa o Plano de Metas com o lema '50 anos em 5', promove a industrialização e inaugura Brasília como nova capital federal em 1960.",
      image: historyImage17,
    },
    {
      id: "militaryDictatorship",
      year: "1964 - 1985",
      period: "Ditadura Militar",
      title: "Golpe Militar",
      description:
        "As Forças Armadas depõem o presidente João Goulart em 31 de março, iniciando 21 anos de regime militar autoritário com censura, repressão política e violações de direitos humanos.",
      image: historyImage18,
    },
    {
      id: "militaryDictatorship1",
      year: "1968",
      period: "Ditadura Militar",
      title: "AI-5 e Anos de Chumbo",
      description:
        "Edição do Ato Institucional nº 5, o mais duro da ditadura, fechando o Congresso e iniciando o período mais repressivo conhecido como Anos de Chumbo.",
      image: historyImage19,
    },
    {
      id: "newRepublic",
      year: "1985 - presente",
      period: "Nova República",
      title: "Redemocratização",
      description:
        "Fim da ditadura militar com a eleição indireta de Tancredo Neves, iniciando a transição democrática e a abertura política que consolidou o regime democrático brasileiro.",
      image: historyImage20,
    },
    {
      id: "newRepublic1",
      year: "1988",
      period: "Nova República",
      title: "Constituição Cidadã",
      description:
        "Promulgação da nova Constituição Federal em 5 de outubro, consolidando a democracia e estabelecendo amplos direitos sociais, individuais e garantias fundamentais.",
      image: historyImage21,
    },
    {
      id: "newRepublic2",
      year: "1994",
      period: "Nova República",
      title: "Plano Real",
      description:
        "Implementação do Plano Real durante o governo Itamar Franco, controlando a hiperinflação que assolava o país e estabelecendo estabilidade monetária duradoura.",
      image: historyImage22,
    },
    {
      id: "newRepublic3",
      year: "2002 - 2016",
      period: "Nova República",
      title: "Era PT",
      description:
        "Luiz Inácio Lula da Silva assume a presidência, seguido por Dilma Rousseff, representando alternância democrática e implementando políticas de inclusão social e redistribuição de renda.",
      image: historyImage23,
    },
  ];

  return (
    <div className="min-h-screen transition-all duration-1000 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Telç Inicial */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn`}
        style={{
          backgroundImage: `url(${brazilBackgroundHistory})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          História do Brasil
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
              className="text-4xl font-bold text-white text-center"
              style={{ marginBottom: "16px" }}
            >
              De onde viemos?
            </h2>
            <div className="grid" style={{ gap: "32px" }}>
              <div
                className="space-y-4 text-white/90 text-lg leading-relaxed"
                style={{ gap: "16px" }}
              >
                <p className="leading-relaxed text-center">
                  A história do Brasil é um retrato de lutas, encontros e
                  transformações. Desde as raízes indígenas, passando pela
                  chegada dos portugueses, até a mistura de povos e culturas que
                  formaram nosso país. Uma trajetória marcada por conquistas,
                  desafios e sonhos, que moldaram a identidade de um povo forte,
                  criativo e cheio de diversidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <div className="container relative" style={{ padding: "64px 64px" }}>
          {/* Vertical line */}
          <div className="absolute left-1/2 rounded-full transform -translate-x-1/2 w-1 bg-black h-[98%] opacity-30"></div>

          {/* Timeline items */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isExpanded={expandedItems.has(index)}
                onToggle={toggleExpanded}
              />
            ))}
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
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
