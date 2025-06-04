import React, { useState, useEffect } from "react";

import historyImage1 from "./../assets/img/country-history/history-image1.png";
import historyImage2 from "./../assets/img/country-history/history-image2.png";
import historyImage3 from "./../assets/img/country-history/history-image3.png";
import historyImage4 from "./../assets/img/country-history/history-image4.png";
import historyImage5 from "./../assets/img/country-history/history-image5.png";
import historyImage6 from "./../assets/img/country-history/history-image6.png";
import historyImage7 from "./../assets/img/country-history/history-image7.png";
import historyImage8 from "./../assets/img/country-history/history-image8.png";
import historyImage9 from "./../assets/img/country-history/history-image9.png";
import historyImage10 from "./../assets/img/country-history/history-image10.png";
import historyImage11 from "./../assets/img/country-history/history-image11.png";
import historyImage12 from "./../assets/img/country-history/history-image12.png";
import historyImage13 from "./../assets/img/country-history/history-image13.png";
import historyImage14 from "./../assets/img/country-history/history-image14.png";
import historyImage15 from "./../assets/img/country-history/history-image15.png";
import historyImage16 from "./../assets/img/country-history/history-image16.png";
import historyImage17 from "./../assets/img/country-history/history-image17.png";
import historyImage18 from "./../assets/img/country-history/history-image18.png";
import historyImage19 from "./../assets/img/country-history/history-image19.png";
import historyImage20 from "./../assets/img/country-history/history-image20.png";
import historyImage21 from "./../assets/img/country-history/history-image21.png";
import historyImage22 from "./../assets/img/country-history/history-image22.png";
import historyImage23 from "./../assets/img/country-history/history-image23.png";

import brazilBackgroundHistory from "./../assets/img/country-backgrounds/Brazil-background2.png";
import Header from "../components/Header";
import LanguageButton from "../components/LanguageButton";
import { useTranslation } from "react-i18next";

const timelineData = [
  {
    year: "~ 12.000 a.C.",
    period: "Período Pré-Cabralino",
    title: "Primeiros Habitantes",
    description:
      "Chegada dos primeiros grupos humanos ao território brasileiro através do estreito de Bering, durante as migrações paleolíticas. Esses povos desenvolveram culturas complexas e diversificadas ao longo de milênios, adaptando-se aos diferentes biomas brasileiros. Formaram-se centenas de etnias com línguas distintas, organizações sociais variadas, desde grupos nômades coletores até sociedades sedentárias com agricultura avançada. Desenvolveram conhecimentos profundos sobre medicina natural, astronomia e manejo sustentável dos recursos naturais. Deixaram registros arqueológicos como os sambaquis no litoral, pinturas rupestres na Serra da Capivara e sítios cerimoniais complexos em toda a América do Sul.",
    era: "pre-cabralino",
    image: historyImage1,
  },
  {
    year: "1500 - 1530",
    period: "Período Pré-Colonial",
    title: "Chegada dos Portugueses",
    description:
      "Pedro Álvares Cabral desembarca em Porto Seguro em 22 de abril de 1500, estabelecendo o primeiro contato oficial entre europeus e as terras brasileiras. Este período caracteriza-se pela exploração inicial do território através de expedições de reconhecimento costeiro. A principal atividade econômica foi a extração do pau-brasil, árvore abundante na Mata Atlântica, cuja madeira vermelha era altamente valorizada na Europa para tinturaria e marcenaria de luxo. O escambo com os indígenas tornou-se a forma predominante de comércio, trocando-se ferramentas, espelhos e tecidos por trabalho indígena na derrubada e transporte da madeira. As feitorias foram estabelecidas como postos comerciais temporários. Durante este período, navegadores como Américo Vespúcio e Gonçalo Coelho realizaram expedições exploratórias que mapearam o litoral brasileiro.",
    era: "pre-colonial",
    image: historyImage2,
  },
  {
    year: "1530 - 1822",
    period: "Período Colonial",
    title: "Colonização Sistemática",
    description:
      "A colonização efetiva inicia-se com a expedição de Martim Afonso de Sousa em 1530, enviado pelo rei Dom João III para estabelecer núcleos permanentes de povoamento. O sistema de capitanias hereditárias foi implementado, dividindo o território em 15 faixas de terra doadas a donatários da pequena nobreza portuguesa. São Vicente, fundada em 1532, torna-se a primeira vila oficial do Brasil. A economia colonial estrutura-se inicialmente no cultivo da cana-de-açúcar no Nordeste, utilizando mão de obra escrava africana a partir de 1538. Os engenhos açucareiros transformam-se em complexos produtivos que dominaram a economia mundial do açúcar por séculos. A sociedade colonial desenvolve-se de forma hierárquica e miscigenada, com senhores de engenho no topo, camadas médias de comerciantes e artesãos, e uma grande massa de escravos e agregados na base.",
    era: "colonial",
    image: historyImage3,
  },
  {
    year: "1549",
    period: "Período Colonial",
    title: "Governo-Geral",
    description:
      "Tomé de Sousa é nomeado o primeiro governador-geral do Brasil, centralizando a administração colonial que havia se mostrado ineficiente sob o sistema de capitanias hereditárias. Funda a cidade de Salvador em 1549, que se torna a primeira capital do Brasil e permanece como tal até 1763. O governo-geral representa uma mudança fundamental na política colonial portuguesa, estabelecendo uma administração mais direta e eficiente. Junto com Tomé de Sousa chegam os primeiros jesuítas, liderados pelo padre Manuel da Nóbrega, iniciando o processo de catequização dos indígenas e a construção dos primeiros colégios. A Companhia de Jesus torna-se fundamental na educação colonial e na proteção (controversa) dos povos nativos. Durante este período, estabelecem-se as bases da organização administrativa, judiciária e militar que perdurarão por séculos.",
    era: "colonial",
    image: historyImage4,
  },
  {
    year: "1695",
    period: "Período Colonial",
    title: "Descoberta do Ouro",
    description:
      "Bandeirantes paulistas, liderados por figuras como Borba Gato e Fernão Dias Paes, descobrem as primeiras jazidas auríferas em Minas Gerais, revolucionando completamente a economia colonial. A descoberta ocorre inicialmente na região de Ouro Preto (Vila Rica), expandindo-se posteriormente para outras áreas como Mariana, Sabará e Diamantina. Este evento marca o início do maior ciclo econômico da América colonial, atraindo milhares de portugueses e provocando a primeira grande migração interna do Brasil. A população de Minas Gerais cresce exponencialmente, passando de praticamente zero para mais de 300.000 habitantes em poucas décadas. O eixo econômico desloca-se do Nordeste açucareiro para o Centro-Sul, consolidando a importância do Rio de Janeiro como porto de escoamento. A Coroa portuguesa implementa rígido controle fiscal através da criação das Casas de Fundição e da cobrança do quinto (20% de toda produção aurífera).",
    era: "colonial",
    image: historyImage5,
  },
  {
    year: "1789",
    period: "Período Colonial",
    title: "Inconfidência Mineira",
    description:
      "A Inconfidência Mineira representa o primeiro grande movimento organizado pela independência do Brasil, liderado por uma elite intelectual e econômica de Minas Gerais. O movimento surge como resposta às crescentes pressões fiscais da Coroa portuguesa, especialmente a ameaça da 'derrama' - cobrança forçada de impostos atrasados. Entre os conspiradores destacam-se Joaquim José da Silva Xavier (Tiradentes), os poetas Tomás Antônio Gonzaga e Cláudio Manuel da Costa, além de fazendeiros e comerciantes influentes. O plano previa a proclamação de uma república nos moldes dos Estados Unidos, com capital em São João del-Rei e a criação de uma universidade em Vila Rica. A conspiração é descoberta através de delação, resultando na prisão dos envolvidos. Tiradentes, sendo o único de origem social mais humilde, torna-se bode expiatório e é executado em 21 de abril de 1792, transformando-se posteriormente em mártir da independência nacional.",
    era: "colonial",
    image: historyImage6,
  },
  {
    year: "1808",
    period: "Período Colonial",
    title: "Chegada da Família Real",
    description:
      "A chegada da família real portuguesa ao Brasil em março de 1808 marca uma transformação radical na história colonial. Dom João VI, acompanhado de cerca de 15.000 membros da corte, foge das invasões napoleônicas com apoio da marinha britânica. O Rio de Janeiro torna-se, pela primeira vez na história, sede de um império europeu fora da Europa. São implementadas reformas modernizadoras fundamentais: abertura dos portos às nações amigas (principalmente Inglaterra), criação do Banco do Brasil, fundação da Imprensa Régia, estabelecimento de fábricas e manufaturas, criação de escolas superiores (Academia Militar, Escola de Medicina). A cidade do Rio de Janeiro transforma-se urbanisticamente com a construção de teatros, bibliotecas e jardins. Em 1815, o Brasil é elevado à categoria de Reino Unido a Portugal e Algarves, deixando formalmente de ser colônia.",
    era: "colonial",
    image: historyImage7,
  },
  {
    year: "1822 - 1889",
    period: "Período Imperial",
    title: "Independência do Brasil",
    description:
      "A independência do Brasil consolida-se através de um processo complexo iniciado com as pressões das Cortes de Lisboa para recolonizar o Brasil após o retorno de Dom João VI a Portugal em 1821. Dom Pedro I, pressionado pelos 'decretos das cortes' que exigiam seu retorno e a subordinação do Brasil, protagoniza o episódio do 'Fico' em janeiro de 1822, declarando que permaneceria no Brasil. José Bonifácio de Andrada e Silva torna-se figura central como 'Patriarca da Independência', articulando politicamente o processo. Em 7 de setembro de 1822, às margens do riacho Ipiranga, Dom Pedro proclama a independência com o grito 'Independência ou Morte!'. A consolidação da independência exige ainda combater resistências portuguesas em várias províncias, especialmente na Bahia, Cisplatina e Pará. O Império do Brasil surge como monarquia constitucional, única nas Américas, enfrentando desde o início tensões entre tendências centralizadoras e federalistas.",
    era: "imperial",
    image: historyImage8,
  },
  {
    year: "1831 - 1840",
    period: "Período Imperial",
    title: "Período Regencial",
    description:
      "A abdicação de Dom Pedro I em 7 de abril de 1831, pressionado por crises políticas e econômicas, inaugura um dos períodos mais turbulentos da história brasileira. Com Pedro II tendo apenas 5 anos, assume uma regência que enfrenta revoltas separatistas por todo o país. A Cabanagem no Pará (1835-1840) representa a mais radical das revoltas, com a população cabocla assumindo o poder provincial. A Guerra dos Farrapos no Rio Grande do Sul (1835-1845) estabelece uma república independente por dez anos. A Sabinada na Bahia (1837-1838) e a Balaiada no Maranhão (1838-1841) demonstram a fragilidade da unidade nacional. O período caracteriza-se por intensos debates entre liberais e conservadores sobre centralização versus federalismo. A aprovação do Ato Adicional de 1834 concede maior autonomia às províncias, mas não consegue pacificar o país. O 'Golpe da Maioridade' em 1840 antecipa a coroação de Pedro II na tentativa de restaurar a estabilidade política.",
    era: "imperial",
    image: historyImage9,
  },
  {
    year: "1840 - 1889",
    period: "Período Imperial",
    title: "Segundo Reinado",
    description:
      "O reinado de Dom Pedro II, de 1840 a 1889, representa o período de maior estabilidade política da história brasileira, consolidando a unidade territorial e promovendo significativa modernização. O imperador, dotado de sólida formação intelectual e científica, transforma o Brasil numa monarquia respeitada internacionalmente. O país vive um renascimento cultural com a criação do Instituto Histórico e Geográfico Brasileiro, da Academia Imperial de Belas Artes e o florescimento do Romantismo literário. A economia diversifica-se com o crescimento da cafeicultura no Vale do Paraíba, que se torna a principal fonte de divisas. A infraestrutura moderniza-se com a construção de ferrovias, telégrafo, iluminação a gás e os primeiros sistemas de água e esgoto. Pedro II promove a ciência e educação, mantendo correspondência com intelectuais europeus e participando de exposições universais. As tensões crescem gradualmente com a Guerra do Paraguai (1864-1870), a questão abolicionista e os conflitos com a Igreja Católica e militares.",
    era: "imperial",
    image: historyImage10,
  },
  {
    year: "1888",
    period: "Período Imperial",
    title: "Abolição da Escravatura",
    description:
      "A Lei Áurea, assinada pela Princesa Isabel em 13 de maio de 1888, representa o ato final de um longo processo abolicionista que se intensifica a partir de 1850 com o fim do tráfico negreiro. O movimento abolicionista ganha força com figuras como Luiz Gama, José do Patrocínio, André Rebouças e Joaquim Nabuco, que mobilizam a opinião pública através de jornais, conferências e sociedades emancipadoras. A Lei do Ventre Livre (1871) liberta os filhos de escravos, e a Lei dos Sexagenários (1885) liberta escravos com mais de 60 anos, criando um processo gradual de abolição. A resistência escrava intensifica-se com fugas massivas, formação de quilombos e a adesão de setores urbanos à causa. A economia cafeeira, inicialmente resistente, adapta-se através da imigração europeia massiva, especialmente italiana. O Brasil torna-se o último país das Américas a abolir a escravidão, encerrando quase 400 anos de trabalho forçado que trouxe cerca de 4 milhões de africanos ao país. A abolição, paradoxalmente, fragiliza o regime monárquico ao perder o apoio dos fazendeiros escravistas.",
    era: "imperial",
    image: historyImage11,
  },
  {
    year: "1889 - 1930",
    period: "República Velha",
    title: "Proclamação da República",
    description:
      "Marechal Deodoro da Fonseca proclama a República em 15 de novembro, derrubando a monarquia e estabelecendo um sistema federativo republicano dominado pelas oligarquias cafeeiras.",
    era: "republica-velha",
    image: historyImage12,
  },
  {
    year: "1894 - 1906",
    period: "República Velha",
    title: "República do Café com Leite",
    description:
      "Alternância no poder entre as oligarquias de São Paulo (café) e Minas Gerais (leite), caracterizando a política dos governadores e o coronelismo no interior do país.",
    era: "republica-velha",
    image: historyImage13,
  },
  {
    year: "1930 - 1945",
    period: "Era Vargas",
    title: "Revolução de 1930",
    description:
      "Getúlio Vargas chega ao poder através de um movimento revolucionário que derruba a República Velha, iniciando transformações políticas, sociais e econômicas profundas no país.",
    era: "era-vargas",
    image: historyImage14,
  },
  {
    year: "1937 - 1945",
    period: "Era Vargas",
    title: "Estado Novo",
    description:
      "Período ditatorial de Vargas caracterizado pela centralização do poder, nacionalismo econômico, modernização autoritária do Estado brasileiro e aproximação com regimes fascistas.",
    era: "era-vargas",
    image: historyImage15,
  },
  {
    year: "1946 - 1964",
    period: "República Populista",
    title: "Democracia Populista",
    description:
      "Período democrático marcado pelo populismo, industrialização acelerada, construção de Brasília por JK, e crescente polarização política que culminaria no golpe militar.",
    era: "republica-populista",
    image: historyImage16,
  },
  {
    year: "1956 - 1961",
    period: "República Populista",
    title: "Governo JK e Brasília",
    description:
      "Juscelino Kubitschek implementa o Plano de Metas com o lema '50 anos em 5', promove a industrialização e inaugura Brasília como nova capital federal em 1960.",
    era: "republica-populista",
    image: historyImage17,
  },
  {
    year: "1964 - 1985",
    period: "Ditadura Militar",
    title: "Golpe Militar",
    description:
      "As Forças Armadas derrubam o presidente João Goulart em 31 de março, iniciando 21 anos de regime militar autoritário com censura, repressão política e violação dos direitos humanos.",
    era: "ditadura-militar",
    image: historyImage18,
  },
  {
    year: "1968",
    period: "Ditadura Militar",
    title: "AI-5 e Anos de Chumbo",
    description:
      "Promulgação do Ato Institucional nº 5, o mais duro da ditadura, fechando o Congresso e iniciando o período mais repressivo conhecido como 'Anos de Chumbo'.",
    era: "ditadura-militar",
    image: historyImage19,
  },
  {
    year: "1985 - presente",
    period: "Nova República",
    title: "Redemocratização",
    description:
      "Fim da ditadura militar com a eleição indireta de Tancredo Neves, iniciando a transição democrática e a abertura política que consolidou o regime democrático brasileiro.",
    era: "nova-republica",
    image: historyImage20,
  },
  {
    year: "1988",
    period: "Nova República",
    title: "Constituição Cidadã",
    description:
      "Promulgação da nova Constituição Federal em 5 de outubro, consolidando a democracia e estabelecendo amplos direitos sociais, individuais e garantias fundamentais.",
    era: "nova-republica",
    image: historyImage21,
  },
  {
    year: "1994",
    period: "Nova República",
    title: "Plano Real",
    description:
      "Implementação do Plano Real durante o governo Itamar Franco, controlando a hiperinflação que assolava o país e estabelecendo estabilidade monetária duradoura.",
    era: "nova-republica",
    image: historyImage22,
  },
  {
    year: "2002 - 2016",
    period: "Nova República",
    title: "Era PT",
    description:
      "Luiz Inácio Lula da Silva assume a presidência, seguido por Dilma Rousseff, representando a alternância democrática e implementando políticas de inclusão social e redistribuição de renda.",
    era: "nova-republica",
    image: historyImage23,
  },
];

const TimelineItem = ({ item, index, isExpanded, onToggle }) => {
  const isLeft = index % 2 === 0;

  const getEraColor = (era) => {
    const colors = {
      "pre-cabralino": "border-amber-800",
      "pre-colonial": "border-blue-800",
      colonial: "border-green-800",
      imperial: "border-red-800",
      "republica-velha": "border-orange-800",
      "era-vargas": "border-purple-800",
      "republica-populista": "border-cyan-800",
      "ditadura-militar": "border-gray-800",
      "nova-republica": "border-indigo-800",
    };
    return colors[era] || "border-black bg-black";
  };

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
          className={`bg-white/20 backdrop-blur-md border-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${getEraColor(
            item.era
          )}`}
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

            <div className="text-white/100 leading-relaxed text-justify">
              {isExpanded
                ? item.description
                : getTruncatedText(item.description)}
            </div>

            <div
              className="border-t border-gray-200"
              style={{ marginTop: "16px", paddingTop: "16px" }}
            >
              <button
                className="text-sm text-gray-800 hover:text-gray-600 font-medium transition-colors duration-200 flex items-center cursor-pointer"
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
                    Mostrar menos
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
                    Leia mais
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-gray-600 rounded-full border-4 border-white shadow-md z-10 relative">
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
  const { t } = useTranslation();
  
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

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
          {t(`history.title`)}
        </h2>
        <p
          className="text-white text-2xl font-bold"
          style={{ marginTop: "12px" }}
        >
          {" "}
          Começando no começo e terminando no final
        </p>

        <LanguageButton />
      </div>

      {/* Timeline */}
      <div className="container relative" style={{ padding: "64px 64px" }}>
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-[98%] opacity-30"></div>

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
