import React, { useState } from "react";
import { ChefHat, MapPin, Clock, Users, Star, BookOpen } from "lucide-react";

import brazilBackgroundGastronomy from "../assets/img/country-backgrounds/Brazil-background4.png";
import Header from "../components/Header";

export default function Gastronomy() {
  const [selectedPrato, setSelectedPrato] = useState(null);
  const [activeRegiao, setActiveRegiao] = useState("todos");

  // Ordem desejada: Nacional - Nordeste - Norte - Centro-Oeste - Sul - Sudeste
  const ordemRegioes = [
    "Nacional",
    "Nordeste",
    "Norte",
    "Centro-Oeste",
    "Sul",
    "Sudeste",
  ];

  const pratos = [
    // Nacional
    {
      id: 1,
      nome: "Feijoada",
      regiao: "Nacional",
      origem:
        "Originária do período colonial, a feijoada nasceu nas senzalas como uma forma de aproveitar as partes menos nobres do porco. Hoje é considerada o prato nacional brasileiro.",
      descricao:
        "O prato mais icônico do Brasil, feito com feijão preto e diversos tipos de carne suína.",
      ingredientes: [
        "500g de feijão preto",
        "300g de linguiça calabresa",
        "200g de costela de porco",
        "150g de bacon",
        "100g de paio",
        "2 folhas de louro",
        "1 cebola grande",
        "4 dentes de alho",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Deixe o feijão de molho na véspera",
        "Cozinhe o feijão com as folhas de louro",
        "Em panela separada, doure as carnes",
        "Refogue cebola e alho, junte as carnes",
        "Misture tudo com o feijão e cozinhe por 1h",
        "Tempere com sal e pimenta",
        "Sirva com arroz, couve e laranja",
      ],
      tempo: "3 horas",
      pessoas: "6-8 pessoas",
      dificuldade: "Médio",
      imagem: "🍲",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 2,
      nome: "Brigadeiro",
      regiao: "Nacional",
      origem:
        "Criado na década de 1940 em homenagem ao Brigadeiro Eduardo Gomes. Rapidamente se tornou o doce mais popular do Brasil.",
      descricao:
        "Doce brasileiro feito com leite condensado, chocolate em pó e manteiga.",
      ingredientes: [
        "1 lata de leite condensado",
        "3 colheres de sopa de chocolate em pó",
        "1 colher de sopa de manteiga",
        "Chocolate granulado",
      ],
      preparo: [
        "Misture todos os ingredientes em panela",
        "Cozinhe em fogo baixo mexendo sempre",
        "Pare quando desgrudar do fundo",
        "Deixe esfriar completamente",
        "Faça bolinhas com as mãos",
        "Passe no chocolate granulado",
      ],
      tempo: "30 minutos",
      pessoas: "20 docinhos",
      dificuldade: "Fácil",
      imagem: "🍫",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 3,
      nome: "Pão de Açúcar",
      regiao: "Nacional",
      origem:
        "Pão francês adaptado no Brasil, tornou-se elemento fundamental do café da manhã brasileiro em todo o país.",
      descricao:
        "Pão crocante por fora e macio por dentro, consumido diariamente pelos brasileiros.",
      ingredientes: [
        "500g de farinha de trigo",
        "300ml de água morna",
        "10g de fermento biológico",
        "1 colher de chá de sal",
        "1 colher de sopa de açúcar",
        "2 colheres de sopa de óleo",
      ],
      preparo: [
        "Dissolva o fermento na água morna com açúcar",
        "Misture farinha e sal em tigela",
        "Adicione água com fermento e óleo",
        "Sove por 10 minutos até lisa",
        "Deixe crescer por 1 hora",
        "Modele e asse por 20 minutos",
      ],
      tempo: "3 horas",
      pessoas: "10 pães",
      dificuldade: "Médio",
      imagem: "🥖",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 4,
      nome: "Caipirinha",
      regiao: "Nacional",
      origem:
        "Bebida nacional do Brasil, criada no interior paulista no século XIX como remédio para gripe.",
      descricao: "Coquetel brasileiro feito com cachaça, limão, açúcar e gelo.",
      ingredientes: [
        "1 limão tahiti",
        "2 colheres de sopa de açúcar",
        "50ml de cachaça",
        "Gelo a gosto",
      ],
      preparo: [
        "Corte o limão em gomos",
        "Macere com açúcar no copo",
        "Adicione gelo",
        "Complete com cachaça",
        "Misture bem",
        "Sirva imediatamente",
      ],
      tempo: "5 minutos",
      pessoas: "1 drink",
      dificuldade: "Fácil",
      imagem: "🍹",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 5,
      nome: "Arroz e Feijão",
      regiao: "Nacional",
      origem:
        "Combinação que se tornou base da alimentação brasileira, presente em todas as regiões do país desde o período colonial.",
      descricao: "Dupla inseparável que forma a base da refeição brasileira.",
      ingredientes: [
        "2 xícaras de arroz",
        "1 xícara de feijão carioca",
        "1 cebola",
        "3 dentes de alho",
        "Óleo, sal e temperos",
      ],
      preparo: [
        "Cozinhe o feijão até ficar macio",
        "Refogue cebola e alho",
        "Adicione o feijão e tempere",
        "Para o arroz, refogue alho e cebola",
        "Adicione arroz e água",
        "Cozinhe até secar",
      ],
      tempo: "1 hora",
      pessoas: "4-6 pessoas",
      dificuldade: "Fácil",
      imagem: "🍚",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 6,
      nome: "Guaraná",
      regiao: "Nacional",
      origem:
        "Refrigerante criado no Brasil em 1921, feito com extrato do fruto amazônico guaraná, tornou-se símbolo nacional.",
      descricao: "Refrigerante brasileiro feito com extrato de guaraná.",
      ingredientes: [
        "Extrato de guaraná",
        "Água gaseificada",
        "Açúcar",
        "Ácido cítrico",
        "Aroma natural",
      ],
      preparo: [
        "Misture o extrato de guaraná com água",
        "Adicione açúcar ao gosto",
        "Acrescente ácido cítrico",
        "Gasifique a mistura",
        "Adicione aroma natural",
        "Sirva bem gelado",
      ],
      tempo: "15 minutos",
      pessoas: "1 litro",
      dificuldade: "Médio",
      imagem: "🥤",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },

    // Nordeste
    {
      id: 7,
      nome: "Acarajé",
      regiao: "Nordeste",
      origem:
        "Prato de origem africana trazido pelas escravas, especialmente na Bahia. É considerado patrimônio cultural brasileiro e tem forte ligação com o candomblé.",
      descricao:
        "Bolinho de feijão-fradinho frito no dendê, recheado com vatapá, caruru e camarão.",
      ingredientes: [
        "500g de feijão-fradinho",
        "1 cebola média",
        "Sal a gosto",
        "Azeite de dendê para fritar",
        "Vatapá para rechear",
        "Caruru",
        "Camarão seco",
        "Pimenta malagueta",
      ],
      preparo: [
        "Deixe o feijão de molho e retire as cascas",
        "Bata no liquidificador com cebola e sal",
        "Faça uma massa consistente",
        "Frite bolinhos no dendê bem quente",
        "Abra e recheie com vatapá e caruru",
        "Finalize com camarão e pimenta",
      ],
      tempo: "2 horas",
      pessoas: "4-6 pessoas",
      dificuldade: "Difícil",
      imagem: "🍤",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 8,
      nome: "Baião de Dois",
      regiao: "Nordeste",
      origem:
        "Prato típico do Ceará que homenageia os cantores Luiz Gonzaga e Humberto Teixeira, criadores do baião musical.",
      descricao:
        "Arroz cozido com feijão de corda, linguiça, queijo coalho e temperos nordestinos.",
      ingredientes: [
        "2 xícaras de arroz",
        "1 xícara de feijão de corda",
        "200g de linguiça calabresa",
        "100g de queijo coalho",
        "1 cebola",
        "Alho, coentro e cebolinha",
      ],
      preparo: [
        "Cozinhe o feijão de corda",
        "Doure a linguiça em pedaços",
        "Refogue cebola e alho",
        "Adicione arroz e misture",
        "Junte o feijão cozido",
        "Finalize com queijo e cheiro-verde",
      ],
      tempo: "1h30min",
      pessoas: "4-6 pessoas",
      dificuldade: "Médio",
      imagem: "🍛",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 9,
      nome: "Carne de Sol",
      regiao: "Nordeste",
      origem:
        "Técnica de conservação criada no sertão nordestino para preservar a carne sem refrigeração.",
      descricao:
        "Carne bovina salgada e seca ao sol, depois grelhada na brasa.",
      ingredientes: [
        "2kg de carne bovina (alcatra)",
        "Sal grosso",
        "Manteiga de garrafa",
        "Cebola",
        "Alho",
        "Pimenta do reino",
      ],
      preparo: [
        "Corte a carne em mantas",
        "Cubra com sal grosso por 2 dias",
        "Seque ao sol por 3-4 dias",
        "Hidrate em água por 1 hora",
        "Grelhe na brasa com manteiga",
        "Sirva com macaxeira e baião",
      ],
      tempo: "7 dias",
      pessoas: "8-10 pessoas",
      dificuldade: "Difícil",
      imagem: "🥩",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 10,
      nome: "Tapioca",
      regiao: "Nordeste",
      origem:
        "Herança indígena que se tornou popular em todo o Nordeste, especialmente como lanche e café da manhã.",
      descricao: "Crepe feito com goma de tapioca, recheado doce ou salgado.",
      ingredientes: [
        "1 xícara de goma de tapioca",
        "Pitada de sal",
        "Recheio a escolha",
        "Queijo coalho",
        "Coco ralado",
        "Leite condensado",
      ],
      preparo: [
        "Peneire a goma de tapioca",
        "Tempere com sal",
        "Espalhe na frigideira quente",
        "Deixe formar uma película",
        "Adicione o recheio escolhido",
        "Dobre ao meio e sirva",
      ],
      tempo: "15 minutos",
      pessoas: "2-3 tapiocas",
      dificuldade: "Fácil",
      imagem: "🌾",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 11,
      nome: "Cocada",
      regiao: "Nordeste",
      origem:
        "Doce de origem africana adaptado no Brasil colonial, especialmente popular no Nordeste.",
      descricao:
        "Doce feito com coco ralado e açúcar, podendo ser branca ou preta.",
      ingredientes: [
        "1 coco seco ralado",
        "2 xícaras de açúcar cristal",
        "1 xícara de água",
        "1 pitada de sal",
      ],
      preparo: [
        "Faça calda com açúcar e água",
        "Adicione o coco ralado",
        "Cozinhe mexendo até desgrudar",
        "Para cocada preta, deixe caramelizar",
        "Despeje em superfície untada",
        "Corte em quadrados ainda morno",
      ],
      tempo: "45 minutos",
      pessoas: "20 pedaços",
      dificuldade: "Médio",
      imagem: "🥥",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 12,
      nome: "Buchada de Bode",
      regiao: "Nordeste",
      origem:
        "Prato tradicional do sertão nordestino, especialmente consumido em festividades e comemorações.",
      descricao:
        "Vísceras de bode cozidas e temperadas, servidas dentro do próprio estômago do animal.",
      ingredientes: [
        "1 estômago de bode limpo",
        "Fígado, coração, rins de bode",
        "Arroz cozido",
        "Temperos: cebola, alho, coentro",
        "Pimenta de cheiro",
        "Sal e limão",
      ],
      preparo: [
        "Limpe bem as vísceras com limão e sal",
        "Pique as vísceras em pequenos pedaços",
        "Refogue com cebola, alho e temperos",
        "Misture com arroz cozido",
        "Recheie o estômago com a mistura",
        "Costure e cozinhe por 2 horas",
      ],
      tempo: "3 horas",
      pessoas: "6-8 pessoas",
      dificuldade: "Muito Difícil",
      imagem: "🐐",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },

    // Norte
    {
      id: 13,
      nome: "Tacacá",
      regiao: "Norte",
      origem:
        "Prato típico do Pará, com raízes indígenas, servido quente em cuias nas ruas.",
      descricao:
        "Caldo quente feito de tucupi, goma de mandioca, camarão seco e jambu.",
      ingredientes: [
        "1 litro de tucupi",
        "1 maço de jambu",
        "200g de goma de mandioca",
        "300g de camarão seco",
        "2 dentes de alho",
        "Sal e pimenta-de-cheiro a gosto",
      ],
      preparo: [
        "Cozinhe o jambu até as folhas ficarem macias e levemente adormecidas.",
        "Ferva o tucupi com alho, sal e pimenta por cerca de 30 minutos.",
        "Hidrate a goma em água e cozinhe até formar um mingau ralo.",
        "Ferva o camarão seco rapidamente para higienizar.",
        "Monte na cuia: coloque a goma, adicione o jambu, o tucupi e finalize com camarões.",
        "Sirva bem quente.",
      ],
      tempo: "1 hora",
      pessoas: "4 pessoas",
      dificuldade: "Média",
      imagem: "🍲",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 14,
      nome: "Maniçoba",
      regiao: "Norte",
      origem:
        "Conhecida como a 'feijoada paraense', feita com folhas de mandioca cozidas por dias.",
      descricao: "Folhas de mandioca brava cozidas com carnes diversas.",
      ingredientes: [
        "3kg de folhas de mandioca moídas (maniçoba)",
        "500g de carne-seca",
        "500g de charque",
        "500g de costelinha suína",
        "300g de paio",
        "300g de linguiça calabresa",
        "Bacon a gosto",
        "Folha de louro, alho, sal e pimenta a gosto",
      ],
      preparo: [
        "Ferva as folhas de mandioca por pelo menos 4 dias, trocando a água para retirar o ácido.",
        "Dessalgue as carnes e corte em pedaços médios.",
        "Cozinhe as carnes juntas até ficarem bem macias.",
        "Adicione as folhas cozidas e continue cozinhando por mais 4 a 6 horas em fogo baixo.",
        "Acerte os temperos e sirva com arroz branco e farinha.",
      ],
      tempo: "5 dias",
      pessoas: "10 pessoas",
      dificuldade: "Difícil",
      imagem: "🥬",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 15,
      nome: "Pato no Tucupi",
      regiao: "Norte",
      origem:
        "Prato tradicional do Pará, servido principalmente nas festas do Círio de Nazaré.",
      descricao: "Pato assado servido em caldo de tucupi e jambu.",
      ingredientes: [
        "1 pato inteiro (cerca de 2,5kg)",
        "2 litros de tucupi",
        "2 maços de jambu",
        "4 dentes de alho picados",
        "Sal, pimenta e cheiro-verde a gosto",
      ],
      preparo: [
        "Tempere o pato com alho, sal e pimenta, e asse até dourar bem.",
        "Cozinhe o tucupi com alho e cheiro-verde por 30 minutos.",
        "Ferva o jambu até as folhas ficarem macias.",
        "Corte o pato em pedaços e cozinhe no tucupi por cerca de 30 minutos.",
        "Sirva com arroz branco e farinha d’água.",
      ],
      tempo: "3 horas",
      pessoas: "6 pessoas",
      dificuldade: "Média",
      imagem: "🦆",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 16,
      nome: "Moqueca de Pirarucu",
      regiao: "Norte",
      origem:
        "Prato feito com pirarucu, peixe amazônico considerado um dos maiores do mundo.",
      descricao:
        "Pirarucu cozido com leite de coco, pimentões, tomate e coentro.",
      ingredientes: [
        "1kg de filé de pirarucu",
        "2 tomates em rodelas",
        "1 pimentão vermelho em rodelas",
        "1 pimentão amarelo em rodelas",
        "1 cebola grande em rodelas",
        "200ml de leite de coco",
        "Azeite de dendê a gosto",
        "Coentro, sal e pimenta a gosto",
      ],
      preparo: [
        "Tempere o peixe com sal e pimenta.",
        "Em uma panela, faça camadas de cebola, tomate, pimentões e peixe.",
        "Regue com leite de coco e azeite de dendê.",
        "Tampe e cozinhe em fogo médio por cerca de 20 minutos.",
        "Finalize com coentro picado e sirva com arroz branco.",
      ],
      tempo: "1 hora",
      pessoas: "5 pessoas",
      dificuldade: "Fácil",
      imagem: "🐟",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 17,
      nome: "Bolo de Macaxeira",
      regiao: "Norte",
      origem: "Sobremesa muito popular na região, feita com mandioca ralada.",
      descricao:
        "Bolo úmido feito de macaxeira (mandioca), leite de coco e açúcar.",
      ingredientes: [
        "1kg de macaxeira ralada",
        "2 xícaras de açúcar",
        "200ml de leite de coco",
        "100g de manteiga",
        "3 ovos",
      ],
      preparo: [
        "Misture todos os ingredientes em uma tigela.",
        "Coloque a massa em uma forma untada.",
        "Leve ao forno pré-aquecido a 180°C por cerca de 45 minutos ou até dourar.",
        "Espere esfriar um pouco e sirva.",
      ],
      tempo: "1 hora",
      pessoas: "8 pessoas",
      dificuldade: "Fácil",
      imagem: "🍰",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 18,
      nome: "Caldeirada de Tambaqui",
      regiao: "Norte",
      origem:
        "Prato típico dos estados do Amazonas e Pará, com influência indígena.",
      descricao: "Peixe tambaqui cozido com legumes, cheiro-verde e pimentas.",
      ingredientes: [
        "1kg de tambaqui em postas",
        "2 tomates picados",
        "1 pimentão verde em tiras",
        "1 cebola em rodelas",
        "Cheiro-verde a gosto",
        "Pimenta-de-cheiro a gosto",
        "Azeite, sal e limão",
      ],
      preparo: [
        "Tempere o peixe com sal e limão.",
        "Em uma panela, refogue cebola, tomate e pimentão no azeite.",
        "Acrescente o peixe e cubra com água.",
        "Cozinhe até o peixe ficar macio e o caldo encorpar.",
        "Finalize com cheiro-verde e sirva com arroz branco.",
      ],
      tempo: "1 hora",
      pessoas: "6 pessoas",
      dificuldade: "Média",
      imagem: "🐠",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },

    // Centro-Oeste
    {
      id: 19,
      nome: "Galinhada",
      regiao: "Centro-Oeste",
      origem:
        "Prato típico do interior de Goiás e Mato Grosso, surgiu como uma refeição prática dos trabalhadores rurais, aproveitando ingredientes simples como arroz e frango caipira.",
      descricao:
        "Arroz cozido junto com pedaços de frango bem temperados, acompanhado de pequi ou açafrão.",
      ingredientes: [
        "1 frango caipira em pedaços",
        "2 xícaras de arroz",
        "1 cebola picada",
        "4 dentes de alho",
        "2 tomates picados",
        "1 pimentão picado",
        "Pequi (opcional)",
        "Colorau ou açafrão",
        "Óleo ou banha",
        "Sal e pimenta-do-reino",
        "Cheiro-verde",
      ],
      preparo: [
        "Tempere o frango com sal, alho e pimenta",
        "Doure o frango no óleo até ficar bem selado",
        "Adicione cebola, alho, tomate e pimentão, refogando bem",
        "Acrescente o arroz e mexa para pegar sabor",
        "Adicione água fervente cobrindo tudo",
        "Coloque pequi ou açafrão a gosto",
        "Cozinhe até o arroz ficar macio e o frango cozido",
        "Finalize com cheiro-verde",
      ],
      tempo: "1h30min",
      pessoas: "6 pessoas",
      dificuldade: "Médio",
      imagem: "🍗",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 20,
      nome: "Empadão Goiano",
      regiao: "Centro-Oeste",
      origem:
        "Surgiu no estado de Goiás, com influência das receitas portuguesas de empadas, adaptadas com ingredientes locais como pequi, linguiça e guariroba.",
      descricao:
        "Empada gigante recheada com frango, linguiça, milho, queijo e guariroba (palmito típico).",
      ingredientes: [
        "500g de farinha de trigo",
        "250g de manteiga ou banha",
        "2 ovos",
        "1 gema para pincelar",
        "Sal a gosto",
        "500g de peito de frango cozido e desfiado",
        "200g de linguiça calabresa picada",
        "100g de queijo muçarela",
        "1 lata de milho verde",
        "Guariroba (opcional)",
        "Cebola, alho, tomate",
        "Azeitonas a gosto",
      ],
      preparo: [
        "Misture farinha, manteiga, ovos e sal até formar a massa",
        "Deixe a massa descansar na geladeira por 30 minutos",
        "Refogue frango, linguiça, cebola, alho e tomate",
        "Adicione milho, azeitonas e guariroba (se quiser)",
        "Abra parte da massa e forre uma forma",
        "Coloque o recheio e cubra com queijo",
        "Cubra com o restante da massa e pincele gema",
        "Asse por 40-50 minutos até dourar",
      ],
      tempo: "2 horas",
      pessoas: "8 pessoas",
      dificuldade: "Médio",
      imagem: "🥧",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 21,
      nome: "Pintado na Brasa",
      regiao: "Centro-Oeste",
      origem:
        "Prato típico da região do Pantanal e de Mato Grosso do Sul, utilizando o pintado, peixe abundante nos rios da região.",
      descricao:
        "Filé de pintado temperado e assado na brasa, servido com farofa e vinagrete.",
      ingredientes: [
        "1kg de filé de pintado",
        "Suco de 2 limões",
        "Sal grosso",
        "Pimenta-do-reino",
        "Azeite ou manteiga",
        "Alho picado",
        "Ervas frescas (coentro, salsa ou manjericão)",
      ],
      preparo: [
        "Tempere o filé com limão, sal, pimenta e alho",
        "Deixe marinar por 30 minutos",
        "Aqueça a grelha ou churrasqueira",
        "Unte os filés com azeite ou manteiga",
        "Asse na brasa até dourar dos dois lados",
        "Sirva com farofa e vinagrete",
      ],
      tempo: "1 hora",
      pessoas: "4 pessoas",
      dificuldade: "Fácil",
      imagem: "🐟",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 22,
      nome: "Arroz com Pequi",
      regiao: "Centro-Oeste",
      origem:
        "Prato típico de Goiás e do Cerrado brasileiro. O pequi é um fruto nativo da região, muito aromático e com sabor marcante.",
      descricao:
        "Arroz cozido junto com o fruto do pequi, que confere um sabor forte e característico ao prato.",
      ingredientes: [
        "2 xícaras de arroz",
        "6 a 8 frutos de pequi",
        "1 cebola picada",
        "3 dentes de alho",
        "Óleo ou banha",
        "Sal a gosto",
        "Cheiro-verde para finalizar",
      ],
      preparo: [
        "Refogue alho e cebola no óleo",
        "Acrescente o pequi e refogue rapidamente",
        "Adicione o arroz e refogue até ficar brilhante",
        "Coloque água fervente e acerte o sal",
        "Cozinhe até o arroz ficar macio",
        "Finalize com cheiro-verde",
      ],
      tempo: "40 minutos",
      pessoas: "4 pessoas",
      dificuldade: "Fácil",
      imagem: "🍚",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 23,
      nome: "Pamonha Salgada",
      regiao: "Centro-Oeste",
      origem:
        "Prato típico feito com milho verde, muito consumido em festas juninas.",
      descricao:
        "Pamonha salgada feita com milho, queijo e temperos, cozida na palha do milho.",
      ingredientes: [
        "6 espigas de milho verde",
        "200g de queijo minas ralado",
        "1 cebola pequena picada",
        "Sal a gosto",
        "Pimenta do reino a gosto",
        "Palhas de milho para enrolar",
      ],
      preparo: [
        "Rale o milho e reserve.",
        "Refogue a cebola e misture ao milho ralado.",
        "Acrescente o queijo ralado, sal e pimenta.",
        "Coloque a mistura nas palhas de milho e feche formando pacotinhos.",
        "Cozinhe em água fervente por cerca de 40 minutos.",
        "Sirva quente.",
      ],
      tempo: "1 hora 30 minutos",
      pessoas: "6 pessoas",
      dificuldade: "Média",
      imagem: "🌽",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 24,
      nome: "Sopa Paraguaia",
      regiao: "Centro-Oeste",
      origem:
        "Apesar do nome, é um pão-salgado à base de milho, consumido no Centro-Oeste.",
      descricao: "Torta salgada de milho, queijo e cebola, densa e saborosa.",
      ingredientes: [
        "2 xícaras de farinha de milho",
        "1 lata de milho verde",
        "1 cebola picada",
        "200g de queijo",
        "3 ovos",
        "1 copo de leite",
        "Fermento em pó",
        "Sal e óleo",
      ],
      preparo: [
        "Refogue a cebola e deixe esfriar.",
        "Misture ovos, leite, milho, farinha e fermento.",
        "Incorpore a cebola refogada e o queijo.",
        "Coloque em forma untada e asse a 180 °C por 40 minutos.",
      ],
      tempo: "1 Horas",
      pessoas: "6 pessoas",
      dificuldade: "Fácil",
      imagem: "🌽",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },

    // Sul
    {
      id: 25,
      nome: "Churrasco Gaúcho",
      regiao: "Sul",
      origem:
        "Tradição dos pampas do Rio Grande do Sul, inspirado na cultura dos gaúchos.",
      descricao:
        "Carnes assadas na brasa, temperadas apenas com sal grosso, servidas com farofa, pão e vinagrete.",
      ingredientes: [
        "2kg de costela bovina",
        "1kg de picanha",
        "1kg de linguiça",
        "Sal grosso a gosto",
        "Pão de alho (opcional)",
      ],
      preparo: [
        "Tempere as carnes apenas com sal grosso.",
        "Espete as carnes ou coloque na grelha.",
        "Asse na brasa, lentamente, até atingir o ponto desejado.",
        "Sirva com farofa, pão e vinagrete.",
      ],
      tempo: "2 horas",
      pessoas: "10 pessoas",
      dificuldade: "Fácil",
      imagem: "🥩",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 26,
      nome: "Barreado",
      regiao: "Sul",
      origem:
        "Prato típico do litoral do Paraná, preparado em panelas de barro vedadas.",
      descricao:
        "Carne bovina cozida por horas até desfiar, servida com farinha de mandioca e banana.",
      ingredientes: [
        "2kg de carne bovina (acém, músculo ou paleta)",
        "200g de bacon",
        "2 cebolas picadas",
        "4 dentes de alho picados",
        "Cominho, pimenta-do-reino e louro a gosto",
        "Sal a gosto",
        "Farinha de mandioca e banana para acompanhar",
      ],
      preparo: [
        "Refogue o bacon, alho e cebola.",
        "Adicione a carne e os temperos.",
        "Cozinhe lentamente em panela vedada (tradicionalmente com barro) por cerca de 6 horas.",
        "Sirva a carne desfiada, com farinha de mandioca e banana.",
      ],
      tempo: "6 horas",
      pessoas: "8 pessoas",
      dificuldade: "Alta",
      imagem: "🍲",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 27,
      nome: "Pinhão Cozido",
      regiao: "Sul",
      origem:
        "Tradicional nas festas juninas e invernos de Santa Catarina, Paraná e Rio Grande do Sul.",
      descricao:
        "Semente da araucária cozida com sal, muito apreciada no inverno.",
      ingredientes: [
        "1kg de pinhão",
        "Sal a gosto",
        "Água suficiente para cobrir",
      ],
      preparo: [
        "Lave bem o pinhão.",
        "Coloque em uma panela de pressão, cubra com água e adicione sal.",
        "Cozinhe por 40 minutos após pegar pressão.",
        "Espere esfriar um pouco e sirva.",
      ],
      tempo: "1 hora",
      pessoas: "6 pessoas",
      dificuldade: "Muito fácil",
      imagem: "🌰",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 28,
      nome: "Cuca Alemã",
      regiao: "Sul",
      origem:
        "Receita de origem alemã trazida pelos imigrantes, muito tradicional no sul.",
      descricao:
        "Bolo com farofa doce crocante por cima, recheado com banana, goiabada ou chocolate.",
      ingredientes: [
        "3 xícaras de farinha de trigo",
        "1 xícara de açúcar",
        "1 colher de fermento biológico seco",
        "1 xícara de leite morno",
        "2 ovos",
        "100g de manteiga",
        "Banana, goiabada ou chocolate (recheio)",
        "Farofa (açúcar, manteiga e farinha)",
      ],
      preparo: [
        "Misture a farinha, o açúcar, o fermento, os ovos, a manteiga e o leite até formar uma massa macia.",
        "Deixe descansar por 30 minutos.",
        "Coloque a massa em uma assadeira untada, adicione o recheio (banana, goiabada ou chocolate).",
        "Cubra com a farofa doce.",
        "Asse em forno pré-aquecido a 180°C por 40 minutos.",
      ],
      tempo: "1 hora e 20 minutos",
      pessoas: "8 pessoas",
      dificuldade: "Média",
      imagem: "🍰",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 29,
      nome: "Entrevero",
      regiao: "Sul",
      origem: "Prato típico dos pampas e serras, mistura carnes e legumes.",
      descricao:
        "Mistura de carnes bovina, suína, frango e linguiça, com legumes, feita na chapa ou panela.",
      ingredientes: [
        "300g de carne bovina em tiras",
        "300g de carne suína em tiras",
        "300g de frango em tiras",
        "200g de linguiça calabresa",
        "Pimentão, cebola e tomate picados",
        "Alho, sal, pimenta e cheiro-verde a gosto",
        "Óleo ou manteiga para refogar",
      ],
      preparo: [
        "Refogue as carnes na manteiga ou óleo até dourarem.",
        "Adicione a calabresa e os legumes.",
        "Tempere com sal, pimenta e cheiro-verde.",
        "Refogue até os legumes ficarem macios e sirva quente.",
      ],
      tempo: "1 hora",
      pessoas: "6 pessoas",
      dificuldade: "Média",
      imagem: "🍖",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 30,
      nome: "Sopa de Capeletti",
      regiao: "Sul",
      origem:
        "De influência italiana, é muito consumida no inverno, especialmente na Serra Gaúcha.",
      descricao:
        "Sopa com massa recheada (capeletti) servida em caldo de frango.",
      ingredientes: [
        "500g de capeletti (frango ou carne)",
        "2 litros de caldo de frango",
        "1 cebola picada",
        "2 dentes de alho picados",
        "Sal, pimenta e cheiro-verde a gosto",
      ],
      preparo: [
        "Refogue a cebola e o alho.",
        "Adicione o caldo de frango e deixe ferver.",
        "Acrescente o capeletti e cozinhe até ficar macio (cerca de 10 minutos).",
        "Ajuste o sal e finalize com cheiro-verde.",
        "Sirva bem quente, ideal para dias frios.",
      ],
      tempo: "50 minutos",
      pessoas: "5 pessoas",
      dificuldade: "Fácil",
      imagem: "🍜",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },

    // Sudeste
    {
      id: 31,
      nome: "Feijoada do Sudeste",
      regiao: "Sudeste",
      origem:
        "Prato símbolo do Brasil, surgiu no Rio de Janeiro como aproveitamento das carnes menos nobres.",
      descricao:
        "Feijão preto cozido com carnes suínas, acompanhado de arroz, farofa, couve e laranja.",
      ingredientes: [
        "1kg de feijão preto",
        "500g de carne-seca",
        "300g de costelinha suína",
        "300g de paio",
        "300g de linguiça calabresa",
        "200g de bacon",
        "2 folhas de louro",
        "1 cebola grande picada",
        "4 dentes de alho picados",
        "Sal, pimenta-do-reino e cheiro-verde a gosto",
      ],
      preparo: [
        "Deixe as carnes salgadas (carne-seca e costelinha) de molho por 12 horas, trocando a água.",
        "Cozinhe o feijão em uma panela grande com louro até começar a amolecer.",
        "Em uma frigideira, refogue o bacon, cebola e alho.",
        "Adicione as carnes dessalgadas, o paio e a linguiça cortados em pedaços ao feijão.",
        "Cozinhe por mais 2 horas até tudo ficar bem macio e o caldo encorpar.",
        "Finalize com cheiro-verde e sirva com arroz, farofa, couve refogada e laranja.",
      ],
      tempo: "4 horas",
      pessoas: "10 pessoas",
      dificuldade: "Alta",
      imagem: "🍲",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 32,
      nome: "Pão de Açúcar Mineiro",
      regiao: "Sudeste",
      origem:
        "Doce tradicional mineiro que leva o nome do famoso ponto turístico carioca. Surgiu nas fazendas de Minas Gerais no século XVIII.",
      descricao:
        "Doce cremoso feito com açúcar cristal, leite e ovos, típico da culinária mineira.",
      ingredientes: [
        "2 xícaras de açúcar cristal",
        "1 xícara de leite",
        "6 gemas de ovo",
        "1 colher de sopa de manteiga",
        "Canela em pó para polvilhar",
      ],
      preparo: [
        "Faça uma calda com açúcar e leite",
        "Bata as gemas e adicione à calda morna",
        "Cozinhe mexendo até engrossar",
        "Adicione a manteiga",
        "Despeje em formas e polvilhe canela",
        "Deixe esfriar antes de servir",
      ],
      tempo: "45 minutos",
      pessoas: "8 pessoas",
      dificuldade: "Médio",
      imagem: "🍮",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 33,
      nome: "Pão de Queijo",
      regiao: "Sudeste",
      origem:
        "Criado em Minas Gerais no século XVIII, utilizando polvilho da mandioca e queijo local.",
      descricao:
        "Pãozinho de polvilho com queijo, crocante por fora e macio por dentro.",
      ingredientes: [
        "2 xícaras de polvilho doce",
        "1 xícara de leite",
        "1/2 xícara de óleo",
        "1 ovo",
        "1 xícara de queijo minas ralado",
        "1 colher de chá de sal",
      ],
      preparo: [
        "Ferva leite, óleo e sal",
        "Despeje sobre o polvilho mexendo",
        "Deixe esfriar e adicione ovo",
        "Misture o queijo ralado",
        "Faça bolinhas e disponha na assadeira",
        "Asse por 20 minutos a 200°C",
      ],
      tempo: "40 minutos",
      pessoas: "20 pães",
      dificuldade: "Fácil",
      imagem: "🧀",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 34,
      nome: "Feijão Tropeiro",
      regiao: "Sudeste",
      origem:
        "Prato criado pelos tropeiros mineiros que transportavam mercadorias pelo interior do Brasil colonial.",
      descricao:
        "Feijão refogado com farinha de mandioca, bacon, linguiça e ovos.",
      ingredientes: [
        "2 xícaras de feijão cozido",
        "200g de bacon picado",
        "1 linguiça calabresa",
        "3 ovos",
        "1 xícara de farinha de mandioca",
        "Cebola, alho e cheiro-verde",
      ],
      preparo: [
        "Frite o bacon até dourar",
        "Adicione linguiça em rodelas",
        "Refogue cebola e alho",
        "Junte o feijão escorrido",
        "Adicione farinha aos poucos",
        "Finalize com ovos mexidos e cheiro-verde",
      ],
      tempo: "30 minutos",
      pessoas: "4-6 pessoas",
      dificuldade: "Médio",
      imagem: "🥓",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 35,
      nome: "Brigadeiro Gourmet",
      regiao: "Sudeste",
      origem:
        "Versão sofisticada do brigadeiro tradicional, criada em confeitarias paulistas nos anos 2000.",
      descricao: "Brigadeiro feito com chocolate nobre e coberturas especiais.",
      ingredientes: [
        "1 lata de leite condensado",
        "200g de chocolate meio amargo",
        "2 colheres de sopa de manteiga",
        "Cobertura: pistache, castanha, coco",
      ],
      preparo: [
        "Derreta o chocolate em banho-maria",
        "Misture com leite condensado",
        "Adicione manteiga e cozinhe",
        "Mexa até desgrudar do fundo",
        "Deixe esfriar completamente",
        "Modele e passe na cobertura escolhida",
      ],
      tempo: "1 hora",
      pessoas: "25 brigadeiros",
      dificuldade: "Médio",
      imagem: "🍬",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
    {
      id: 36,
      nome: "Pudim de Leite",
      regiao: "Sudeste",
      origem:
        "Adaptação brasileira dos pudins europeus, muito popular em todo o Sudeste desde o século XIX.",
      descricao:
        "Sobremesa cremosa feita com leite condensado, ovos e açúcar caramelizado.",
      ingredientes: [
        "1 lata de leite condensado",
        "1 lata de leite (use a mesma medida)",
        "3 ovos inteiros",
        "1 xícara de açúcar para a calda",
      ],
      preparo: [
        "Faça calda com açúcar em forma redonda",
        "Bata todos os ingredientes no liquidificador",
        "Despeje sobre a calda na forma",
        "Cubra com papel alumínio",
        "Cozinhe em banho-maria por 1 hora",
        "Desenforme após esfriar",
      ],
      tempo: "2 horas",
      pessoas: "8-10 pessoas",
      dificuldade: "Médio",
      imagem: "🍮",
      cor: "bg-gradient-to-r from-gray-700 to-gray-900",
    },
  ].sort((a, b) => {
    const idxA = ordemRegioes.indexOf(a.regiao);
    const idxB = ordemRegioes.indexOf(b.regiao);
    return idxA - idxB;
  });

  const regioes = [
    "todos",
    "Nacional",
    "Nordeste",
    "Norte",
    "Centro-Oeste",
    "Sul",
    "Sudeste",
  ];

  const pratosFiltrados =
    activeRegiao === "todos"
      ? pratos
      : pratos.filter((prato) => prato.regiao === activeRegiao);

  // Função para bloquear/desbloquear o scroll do body ao abrir/fechar o modal
  React.useEffect(() => {
    if (selectedPrato) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedPrato]);

  return (
    <div
      className={`min-h-screen transition-all duration-1000 overflow-x-hidden`}
    >
      <Header />

      {/* Tela Inicial */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white h-screen w-screen animate-fadeIn"
        style={{
          backgroundImage: `url(${brazilBackgroundGastronomy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <div>
          <h2 className="text-6xl font-bold border-b-4 border-white">
            Gastronomia do Brasil
          </h2>
        </div>
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
              Bem-vindos à Mesa Brasileira
            </h2>
            <div className="grid" style={{ gap: "32px" }}>
              <div
                className="space-y-4 text-white/90 text-lg leading-relaxed"
                style={{ gap: "16px" }}
              >
                <p className="leading-relaxed text-center">
                  A culinária brasileira é uma festa de sabores que conta a
                  história do nosso país. Mistura influências indígenas,
                  africanas e portuguesas, criando pratos únicos que despertam
                  os sentidos e aquecem o coração. Cada região tem seus segredos
                  culinários, passados de geração em geração.
                </p>
              </div>
            </div>
            <div
              className="grid md:grid-cols-3 gap-8"
              style={{ marginTop: "2rem" }}
            >
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg shadow-lg text-center text-lg text-white"
                style={{ padding: "2rem" }}
              >
                <h3
                  className="text-2xl font-semibold"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {" "}
                  🌎 Diversidade Regional
                </h3>
                <p>
                  Cada região brasileira possui características culinárias
                  únicas
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg shadow-lg text-center text-lg text-white"
                style={{ padding: "2rem" }}
              >
                <h3
                  className="text-2xl font-semibold"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {" "}
                  🍽️ Fusão Cultural{" "}
                </h3>
                <p>
                  Influências indígenas, africanas e europeias em perfeita
                  harmonia
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg shadow-lg text-center text-lg text-white"
                style={{ padding: "2rem" }}
              >
                <h3
                  className="text-2xl font-semibold"
                  style={{ marginBottom: "0.5rem" }}
                >
                  🎯 Patrimônio Nacional
                </h3>
                <p>
                  Pratos que são verdadeiros símbolos da identidade brasileira
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por Região */}
        <section
          className="container mx-auto px-6"
          style={{ padding: "2rem 1.5rem" }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {regioes.map((regiao) => (
              <button
                key={regiao}
                onClick={() => setActiveRegiao(regiao)}
                style={{ paddingInline: "1.5rem", paddingBlock: "0.5rem" }}
                className={`rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeRegiao === regiao
                    ? "bg-white text-black shadow-lg scale-105"
                    : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                }`}
              >
                {regiao === "todos" ? "Todas as Regiões" : regiao}
              </button>
            ))}
          </div>
        </section>

        {/* Grid de Pratos */}
        <section
          className="container mx-auto"
          style={{
            marginInline: "auto",
            padding: "0 1.5rem 4rem",
            paddingInline: "1.5rem",
          }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pratosFiltrados.map((prato) => (
              <div
                key={prato.id}
                className="bg-white/20 backdrop-blur-md border-white border-1 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-2xl cursor-pointer text-white"
                onClick={() => setSelectedPrato(prato)}
              >
                <div
                  className={`h-32 bg-gradient-to-r ${prato.cor} flex items-center justify-center text-6xl`}
                >
                  {prato.imagem}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div
                    className="flex items-center justify-between"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    <h3 className="text-lg font-bold">{prato.nome}</h3>
                    <span
                      className="bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      style={{
                        paddingInline: "0.75rem",
                        paddingBlock: "0.25rem",
                      }}
                    >
                      {prato.regiao}
                    </span>
                  </div>
                  <p className="line-clamp-3" style={{ marginBottom: "1rem" }}>
                    {prato.descricao}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div
                      className="flex items-center"
                      style={{
                        marginInlineStart: "0.25rem",
                        marginInlineEnd: "0.25rem",
                      }}
                    >
                      <Clock size={16} style={{ marginRight: "0.25rem" }} />
                      <span>{prato.tempo}</span>
                    </div>
                    <div
                      className="flex items-center"
                      style={{
                        marginInlineStart: "0.25rem",
                        marginInlineEnd: "0.25rem",
                      }}
                    >
                      <Users size={16} style={{ marginRight: "0.5rem" }} />
                      <span>{prato.pessoas}</span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    style={{ marginTop: "1rem" }}
                  >
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        prato.dificuldade === "Fácil"
                          ? "bg-green-100 text-green-800"
                          : prato.dificuldade === "Médio"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                      style={{
                        paddingInline: "0.75rem",
                        paddingBlock: "0.25rem",
                      }}
                    >
                      {prato.dificuldade}
                    </span>
                    <button
                      className="bg-green-700 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300 rounded-[12px] border-2 border-white font-bold cursor-pointer"
                      style={{
                        paddingInline: "0.75rem",
                        paddingBlock: "0.25rem",
                      }}
                    >
                      Ver Receita
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal de Receita */}
        {selectedPrato && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            style={{ padding: "1rem" }}
          >
            <div className="bg-gradient-to-br from-green-400 via-blue-500 to-yellow-400 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white">
              <div
                className={`h-40 bg-gradient-to-r ${selectedPrato.cor} flex items-center justify-center text-8xl relative`}
              >
                {selectedPrato.imagem}
                <button
                  onClick={() => setSelectedPrato(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-300 cursor-pointer"
                >
                  ×
                </button>
              </div>
              <div style={{ padding: "2rem" }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <h2 className="text-4xl font-bold">{selectedPrato.nome}</h2>
                  <span
                    className="bg-blue-100 text-blue-800 rounded-full font-medium"
                    style={{ paddingInline: "1rem", paddingBlock: "0.5rem" }}
                  >
                    {selectedPrato.regiao}
                  </span>
                </div>

                <div
                  className="grid md:grid-cols-3 gap-6 mb-8"
                  style={{ marginBottom: "2rem" }}
                >
                  <div
                    className="bg-white/20 backdrop-blur-md border-white border-1 rounded-lg text-center"
                    style={{ padding: "1rem" }}
                  >
                    <Clock
                      style={{ marginBottom: "0.5rem", marginInline: "auto" }}
                      size={28}
                    />
                    <p className="font-semibold text-lg">Tempo</p>
                    <p className="text-md">{selectedPrato.tempo}</p>
                  </div>
                  <div
                    className="bg-white/20 backdrop-blur-md border-white border-1 rounded-lg text-center"
                    style={{ padding: "1rem" }}
                  >
                    <Users
                      style={{ marginBottom: "0.5rem", marginInline: "auto" }}
                      size={28}
                    />
                    <p className="font-semibold text-lg">Porções</p>
                    <p className="text-md">{selectedPrato.pessoas}</p>
                  </div>
                  <div
                    className="bg-white/20 backdrop-blur-md border-white border-1 rounded-lg text-center"
                    style={{ padding: "1rem" }}
                  >
                    <Star
                      style={{ marginBottom: "0.5rem", marginInline: "auto" }}
                      size={28}
                    />
                    <p className="font-semibold text-lg">Dificuldade</p>
                    <p className="text-md">{selectedPrato.dificuldade}</p>
                  </div>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    className="text-2xl font-semibold flex items-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <MapPin style={{ marginRight: "0.5rem" }} />
                    Origem e História
                  </h3>
                  <p
                    className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg text-center text-md font-semibold leading-relaxed flex justify-center"
                    style={{ padding: "1rem" }}
                  >
                    {selectedPrato.origem}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3
                      className="text-2xl font-semibold flex items-center"
                      style={{ marginBottom: "1rem" }}
                    >
                      <BookOpen style={{ marginRight: "0.5rem" }} />
                      Ingredientes
                    </h3>
                    <ul
                      style={{
                        marginBlockStart: "0.5rem",
                        marginBlockEnd: "0.5rem",
                      }}
                    >
                      {selectedPrato.ingredientes.map((ingrediente, index) => (
                        <li
                          key={index}
                          className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg flex items-center"
                          style={{ padding: "1rem", marginBottom: "0.5rem" }}
                        >
                          <div style={{ marginRight: "0.75rem" }}>
                            {ingrediente}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-semibold flex items-center"
                      style={{ marginBottom: "1rem" }}
                    >
                      <ChefHat style={{ marginRight: "0.5rem" }} />
                      Modo de Preparo
                    </h3>
                    <ol
                      style={{
                        marginBlockStart: "0.75rem",
                        marginBlockEnd: "0.75rem",
                      }}
                    >
                      {selectedPrato.preparo.map((passo, index) => (
                        <li
                          key={index}
                          className="bg-white/10 backdrop-blur-md border-white border-1 rounded-lg flex items-center"
                          style={{ padding: "0.75rem", marginBottom: "0.5rem" }}
                        >
                          <span
                            className="bg-transparent backdrop-blur-md border-white border-1 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0"
                            style={{ marginRight: "0.75rem" }}
                          >
                            {index + 1}
                          </span>
                          <span>{passo}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
