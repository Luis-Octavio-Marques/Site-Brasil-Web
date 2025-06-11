import { Star, Calendar, Users, MapPin, Info } from "lucide-react";

import brazilBackgroundFlag from "../assets/img/country-backgrounds/Brazil-background7.png";
import Header from "../components/Header";

export default function Flag() {
  const glassCard =
    "bg-white/5 backdrop-blur-md border border-white rounded-lg";

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Tela Inicial */}
      <div
        className={`relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn overflow-x-hidden`}
        style={{
          backgroundImage: `url(${brazilBackgroundFlag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <h2 className="text-6xl font-bold border-b-4 border-white">
          Bandeira do Brasil
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
              A Bandeira Que Conta Nossa História
            </h2>
            <div className="grid" style={{ gap: "32px" }}>
              <div
                className="space-y-4 text-white/90 text-lg leading-relaxed"
                style={{ gap: "16px" }}
              >
                <p className="leading-relaxed text-center">
                  A bandeira do Brasil é linda de ver! Tem verde, amarelo, azul
                  e branco pra valer. O verde é da floresta, o amarelo do
                  tesouro, o azul é do céu e as estrelas são de ouro! No meio
                  tem uma frase que a gente quer dizer: "Ordem e Progresso" pra
                  tudo crescer! Ela representa nosso Brasil tão querido, com
                  muito amor e orgulho no coração colorido! 💚💛💙🤍
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-white">
          <div
            className={`${glassCard} space-y-6`}
            style={{ padding: "32px", marginBottom: "1.5rem" }}
          >
            <h3 className="text-3xl font-bold" style={{ marginBottom: "1rem" }}>
              História da Bandeira
            </h3>
            <div
              className={`${glassCard} shadow-lg`}
              style={{ padding: "1.5rem" }}
            >
              <p style={{ marginBottom: "1rem" }}>
                A bandeira atual do Brasil foi adotada em{" "}
                <strong>19 de novembro de 1889</strong>, quatro dias após a
                Proclamação da República. Foi criada por Raimundo Teixeira
                Mendes e Miguel Lemos, com desenho de Décio Vilares.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                A bandeira substituiu a bandeira do Império do Brasil e manteve
                as cores verde e amarela, mas substituiu o brasão imperial pela
                esfera celeste azul.
              </p>
              <div className={`${glassCard}`} style={{ padding: "1rem" }}>
                <h4
                  className="font-semibold"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Evolução:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>1822-1889: Bandeira do Império (com brasão imperial)</li>
                  <li>1889: Bandeira Provisória da República</li>
                  <li>1889-hoje: Bandeira atual com esfera celeste</li>
                  <li>1992: Última modificação (inclusão de novas estrelas)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ marginBottom: "1rem" }}>
              Símbolos e Significados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`${glassCard} shadow-lg`}
                style={{ padding: "1.5rem" }}
              >
                <h4
                  className="text-xl font-semibold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Esfera Celeste
                </h4>
                <p style={{ marginBottom: "0.75rem" }}>
                  Representa o céu do Rio de Janeiro na madrugada de 15 de
                  novembro de 1889, às 8h30, momento da Proclamação da
                  República.
                </p>
                <div className={`${glassCard}`} style={{ padding: "0.75rem" }}>
                  <p className="text-sm">
                    <strong>27 estrelas</strong> representam os 26 estados
                    brasileiros e o Distrito Federal.
                  </p>
                </div>
              </div>

              <div
                className={`${glassCard} shadow-lg`}
                style={{ padding: "1.5rem" }}
              >
                <h4
                  className="text-xl font-semibold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Faixa com Lema
                </h4>
                <p style={{ marginBottom: "0.75rem" }}>
                  "ORDEM E PROGRESSO" é inspirado no lema positivista de Auguste
                  Comte: "O Amor por princípio e a Ordem por base; o Progresso
                  por fim."
                </p>
                <div className={`${glassCard}`} style={{ padding: "0.75rem" }}>
                  <p className="text-sm">
                    Representa os ideais republicanos e científicos da época.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${glassCard} shadow-lg`}
              style={{ padding: "1.5rem", marginBlock: "1.5rem" }}
            >
              <h4
                className="text-xl font-semibold"
                style={{ marginBottom: "0.75rem" }}
              >
                Constelações Representadas
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Cruzeiro do Sul:</strong> Estrela mais importante,
                  representa todos os estados
                </div>
                <div>
                  <strong>Cão Maior:</strong> Inclui Sírius, a estrela mais
                  brilhante
                </div>
                <div>
                  <strong>Escorpião:</strong> Constelação zodiacal visível no
                  hemisfério sul
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ marginBottom: "1rem" }}>
              Significado das Cores
            </h3>
            <div className="space-y-4">
              <div
                className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg text-white shadow-lg border-1 border-white"
                style={{ padding: "1.5rem" }}
              >
                <h4
                  className="text-2xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🟢 VERDE
                </h4>
                <p style={{ marginBottom: "0.5rem" }}>
                  Representa as matas e florestas brasileiras.
                </p>
                <p>Simboliza a esperança e a natureza exuberante do país.</p>
              </div>

              <div
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-6 text-white shadow-lg border-1 border-black"
                style={{ padding: "1.5rem", marginBlock: "1.5rem" }}
              >
                <h4
                  className="text-2xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🟡 AMARELO
                </h4>
                <p style={{ marginBottom: "0.5rem" }}>
                  Representa as riquezas minerais do Brasil.
                </p>{" "}
                flag
                <p>Simboliza o ouro e a prosperidade da nação.</p>
              </div>

              <div
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white shadow-lg border-1 border-white"
                style={{ padding: "1.5rem" }}
              >
                <h4
                  className="text-2xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  🔵 AZUL
                </h4>
                <p style={{ marginBottom: "0.5rem" }}>
                  Representa o céu brasileiro e seus rios.
                </p>
                <p>Simboliza a imensidão do território e a serenidade.</p>
              </div>

              <div
                className="bg-gradient-to-r from-gray-100 to-white rounded-lg p-6 text-gray-800 shadow-lg border-1 border-black"
                style={{ padding: "1.5rem", marginBlock: "1.5rem" }}
              >
                <h4
                  className="text-2xl font-bold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  ⚪ BRANCO
                </h4>
                <p style={{ marginBottom: "0.5rem" }}>
                  Representa a paz e a harmonia.
                </p>
                <p>Simboliza o desejo de unidade nacional.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ marginBottom: "1rem" }}>
              Estrelas e Estados
            </h3>
            <div
              className={`${glassCard} shadow-lg`}
              style={{ padding: "1.5rem" }}
            >
              <p style={{ marginBottom: "1rem" }}>
                Cada estrela na bandeira representa um estado brasileiro ou o
                Distrito Federal. A posição das estrelas corresponde à sua
                localização no céu.
              </p>

              <div className="flex gap-4 text-sm">
                <div className={`${glassCard} w-full`} style={{ padding: "0.75rem" }}>
                  <h5 className="font-semibold text-xl">Região Norte</h5>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>• Acre</li>
                    <li>• Amazonas</li>
                    <li>• Amapá</li>
                    <li>• Pará</li>
                    <li>• Rondônia</li>
                    <li>• Roraima</li>
                    <li>• Tocantins</li>
                  </ul>
                </div>

                <div className={`${glassCard} w-full`} style={{ padding: "0.75rem" }}>
                  <h5 className="font-semibold text-xl">Região Nordeste</h5>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>• Alagoas</li>
                    <li>• Bahia</li>
                    <li>• Ceará</li>
                    <li>• Maranhão</li>
                    <li>• Paraíba</li>
                    <li>• Pernambuco</li>
                    <li>• Piauí</li>
                    <li>• Rio Grande do Norte</li>
                    <li>• Sergipe</li>
                  </ul>
                </div>

                <div className={`${glassCard} w-full`} style={{ padding: "0.75rem" }}>
                  <h5 className="font-semibold text-xl">Região Sudeste</h5>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>• Espírito Santo</li>
                    <li>• Minas Gerais</li>
                    <li>• Rio de Janeiro</li>
                    <li>• São Paulo</li>
                  </ul>
                </div>

                <div className={`${glassCard} w-full`} style={{ padding: "0.75rem" }}>
                  <h5 className="font-semibold text-xl">Região Sul</h5>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>• Paraná</li>
                    <li>• Rio Grande do Sul</li>
                    <li>• Santa Catarina</li>
                  </ul>
                </div>

                <div className={`${glassCard} w-full`} style={{ padding: "0.75rem" }}>
                  <h5 className="font-semibold text-xl"> Região Centro-Oeste </h5>
                  <ul style={{ marginTop: "0.5rem" }}>
                    <li>• Goiás</li>
                    <li>• Mato Grosso</li>
                    <li>• Mato Grosso do Sul</li>
                    <li>• Distrito Federal</li>
                  </ul>
                </div>                
              </div>
            </div>
          </div>
          <div className={`${glassCard}`} style={{ marginBlock: "1.5rem", padding: "1.5rem" }}>
            <h3 className="text-3xl font-bold">
              Curiosidades
            </h3>
            <div className="flex flex-col gap-5" style={{ marginTop: "1rem" }}>
              <div className={`${glassCard} shadow-lg hover:shadow-xl transition-shadow`} style={{ padding: "1.5rem" }}>
                <h4 className="text-xl font-semibold mb-2" style={{ marginBottom: "0.5rem" }}>
                  🌟 Única com Mapa Celeste
                </h4>
                <p>
                  O Brasil é o único país do mundo cuja bandeira apresenta um
                  mapa celeste real, mostrando as constelações exatamente como
                  apareciam no céu.
                </p>
              </div>

              <div className={`${glassCard} shadow-lg hover:shadow-xl transition-shadow`} style={{ padding: "1.5rem" }}>
                <h4 className="text-xl font-semibold mb-2" style={{ marginBottom: "0.5rem" }}>
                  📏 Proporções Oficiais
                </h4>
                <p>
                  A bandeira tem proporção oficial de 7:10 (altura:largura). O
                  losango amarelo ocupa exatamente 1,7 parte da altura total.
                </p>
              </div>

              <div className={`${glassCard} shadow-lg hover:shadow-xl transition-shadow`} style={{ padding: "1.5rem" }}>
                <h4 className="text-xl font-semibold mb-2" style={{ marginBottom: "0.5rem" }}>
                  🎨 Design Científico
                </h4>
                <p>
                  A criação foi baseada em princípios científicos positivistas,
                  com cada elemento tendo um significado astronômico e
                  filosófico preciso.
                </p>
              </div>

              <div className={`${glassCard} shadow-lg hover:shadow-xl transition-shadow`} style={{ padding: "1.5rem" }}>
                <h4 className="text-xl font-semibold mb-2" style={{ marginBottom: "0.5rem" }}>
                  🏛️ Lei Específica
                </h4>
                <p>
                  A Lei nº 5.700/1971 regulamenta todos os detalhes da bandeira,
                  incluindo cores exatas, proporções e forma de apresentação.
                </p>
              </div>

              <div className={`${glassCard} shadow-lg hover:shadow-xl transition-shadow`} style={{ padding: "1.5rem" }}>
                <h4 className="text-xl font-semibold mb-2" style={{ marginBottom: "0.5rem" }}>
                  🔄 Última Modificação
                </h4>
                <p>
                  A última modificação foi em 1992, quando foram adicionadas as
                  estrelas representando Amapá, Roraima, Rondônia e Tocantins.
                </p>
              </div>
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
