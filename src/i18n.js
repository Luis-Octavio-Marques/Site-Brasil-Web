import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            welcome: "Welcome",
            history: "History",
            culture: "Culture",
            gastronomy: "Gastronomy",
            nature: "Nature",
            language: "Language",
            flag: "Flag",
          },
          title: {
            brazilWeb: "Brazil Web",
            brazil: "Brazil",
          },
          buttonSeeMore: {
            seeMore: "Read More",
            seeLess: "Show less",
          },
          windowsActivation: {
            activate: "Activate Windows",
            accessSettings: "Go to Settings to activate Windows",
          },
          history: {
            title: "History of Brazil",
            subtitle: "Where do we come from?",
            subdescription:
              "The history of Brazil is a portrait of struggles, encounters and transformations. From indigenous roots, through the arrival of the Portuguese, to the mixture of peoples and cultures that formed our country. A trajectory marked by achievements, challenges and dreams, which shaped the identity of a strong, creative and diverse people.",
            visualRepresentation: "Visual Representation",
            preCabral: {
              period: "Pre-Cabralian Period",
              title: "First Inhabitants",
              description:
                "Arrival of the first human groups to Brazilian territory via the Bering Strait during Paleolithic migrations. These peoples developed complex and diverse cultures over millennia, adapting to different Brazilian biomes. Hundreds of distinct ethnic groups formed with varied languages and social organizations, ranging from nomadic gatherers to sedentary societies with advanced agriculture. They developed profound knowledge of natural medicine, astronomy, and sustainable resource management. They left archaeological records such as coastal shell mounds (sambaquis), rock paintings in Serra da Capivara, and complex ceremonial sites throughout South America.",
            },

            preColonial: {
              period: "Pre-Colonial Period",
              title: "Arrival of the Portuguese",
              description:
                "Pedro Álvares Cabral lands in Porto Seguro on April 22, 1500, establishing the first official contact between Europeans and Brazilian lands. This period is characterized by initial territorial exploration through coastal reconnaissance expeditions. The main economic activity was the extraction of brazilwood, a tree abundant in the Atlantic Forest, whose red wood was highly valued in Europe for dyeing and luxury woodworking. Barter with indigenous peoples became the predominant form of trade, exchanging tools, mirrors, and fabrics for indigenous labor in cutting and transporting wood. Trading posts were established as temporary commercial stations. During this period, navigators like Amerigo Vespucci and Gonçalo Coelho conducted exploratory expeditions that mapped the Brazilian coast.",
            },

            colonial: {
              period: "Colonial Period",
              title: "Systematic Colonization",
              description:
                "Effective colonization begins with Martim Afonso de Sousa's expedition in 1530, sent by King Dom João III to establish permanent settlements. The hereditary captaincies system was implemented, dividing the territory into 15 land strips granted to Portuguese nobility. São Vicente, founded in 1532, becomes Brazil's first official village. The colonial economy initially structures itself around sugarcane cultivation in the Northeast, using African slave labor starting in 1538. Sugar mills become productive complexes that dominated the global sugar economy for centuries. Colonial society develops hierarchically and mixed-race, with plantation owners at the top, middle layers of merchants and artisans, and a large mass of slaves and dependents at the base.",
            },

            colonial1: {
              period: "Colonial Period",
              title: "General Government",
              description:
                "Tomé de Sousa is appointed as Brazil's first governor-general, centralizing colonial administration that had proven inefficient under the hereditary captaincies system. He founds Salvador in 1549, which becomes Brazil's first capital and remains so until 1763. The general government represents a fundamental shift in Portuguese colonial policy, establishing more direct and efficient administration. The first Jesuits arrive with Tomé de Sousa, led by Father Manuel da Nóbrega, initiating indigenous catechization and the construction of the first schools. The Society of Jesus becomes fundamental in colonial education and (controversial) protection of native peoples. This period establishes the administrative, judicial, and military organization that would endure for centuries.",
            },

            colonial2: {
              period: "Colonial Period",
              title: "Gold Discovery",
              description:
                "Paulista bandeirantes, led by figures like Borba Gato and Fernão Dias Paes, discover the first gold deposits in Minas Gerais, completely revolutionizing the colonial economy. The discovery initially occurs in Ouro Preto (Vila Rica), later expanding to areas like Mariana, Sabará, and Diamantina. This event marks the beginning of the largest economic cycle in colonial America, attracting thousands of Portuguese and causing Brazil's first major internal migration. Minas Gerais' population grows exponentially from virtually zero to over 300,000 inhabitants in just decades. The economic axis shifts from the sugar-producing Northeast to the Center-South, consolidating Rio de Janeiro's importance as an export port. The Portuguese Crown implements strict fiscal control through mint houses and the 'quinto' tax (20% of all gold production).",
            },

            colonial3: {
              period: "Colonial Period",
              title: "Inconfidência Mineira",
              description:
                "The Inconfidência Mineira represents the first major organized movement for Brazilian independence, led by an intellectual and economic elite from Minas Gerais. The movement emerges in response to increasing fiscal pressures from the Portuguese Crown, especially the threat of the 'derrama' - forced collection of overdue taxes. Among the conspirators are Joaquim José da Silva Xavier (Tiradentes), poets Tomás Antônio Gonzaga and Cláudio Manuel da Costa, and influential farmers and merchants. The plan called for proclaiming a republic modeled after the United States, with its capital in São João del-Rei and a university in Vila Rica. The conspiracy is uncovered through denunciation, resulting in arrests. Tiradentes, being the only one of humble origins, becomes the scapegoat and is executed on April 21, 1792, later becoming a martyr for national independence.",
            },

            colonial4: {
              period: "Colonial Period",
              title: "Arrival of the Royal Family",
              description:
                "The Portuguese royal family's arrival in Brazil in March 1808 marks a radical transformation in colonial history. Dom João VI, accompanied by about 15,000 court members, flees Napoleonic invasions with British naval support. Rio de Janeiro becomes, for the first time in history, the seat of a European empire outside Europe. Fundamental modernizing reforms are implemented: opening ports to friendly nations (mainly England), creating the Bank of Brazil, founding the Royal Press, establishing factories and manufactures, and creating higher education schools (Military Academy, Medical School). Rio de Janeiro transforms urbanistically with theaters, libraries, and gardens. In 1815, Brazil is elevated to the status of United Kingdom with Portugal and the Algarves, formally ceasing to be a colony.",
            },

            imperial: {
              period: "Imperial Period",
              title: "Brazilian Independence",
              description:
                "Brazil's independence consolidates through a complex process beginning with pressures from the Lisbon Cortes to recolonize Brazil after Dom João VI's return to Portugal in 1821. Dom Pedro I, pressured by 'cortes decrees' demanding his return and Brazil's subordination, stages the 'Fico' episode in January 1822, declaring he would remain in Brazil. José Bonifácio de Andrada e Silva becomes a central figure as 'Patriarch of Independence,' politically articulating the process. On September 7, 1822, by the Ipiranga brook, Dom Pedro proclaims independence with the cry 'Independence or Death!' Consolidating independence still requires combating Portuguese resistance in several provinces, especially Bahia, Cisplatina, and Pará. The Empire of Brazil emerges as a constitutional monarchy, unique in the Americas, immediately facing tensions between centralizing and federalist tendencies.",
            },

            imperial1: {
              period: "Imperial Period",
              title: "Regency Period",
              description:
                "Dom Pedro I's abdication on April 7, 1831, pressured by political and economic crises, inaugurates one of Brazil's most turbulent historical periods. With Pedro II just 5 years old, a regency takes over facing separatist revolts nationwide. The Cabanagem in Pará (1835-1840) represents the most radical revolt, with cabocla populations taking provincial power. The Ragamuffin War in Rio Grande do Sul (1835-1845) establishes an independent republic for ten years. The Sabinada in Bahia (1837-1838) and Balaiada in Maranhão (1838-1841) demonstrate national unity's fragility. The period features intense debates between liberals and conservatives about centralization versus federalism. The Additional Act of 1834 grants provinces more autonomy but fails to pacify the country. The 'Majority Coup' in 1840 anticipates Pedro II's coronation attempting to restore political stability.",
            },

            imperial2: {
              period: "Imperial Period",
              title: "Second Reign",
              description:
                "Dom Pedro II's reign from 1840 to 1889 represents Brazilian history's most politically stable period, consolidating territorial unity and promoting significant modernization. The emperor, with solid intellectual and scientific training, transforms Brazil into an internationally respected monarchy. The country experiences cultural renaissance with the creation of the Brazilian Historical and Geographical Institute, Imperial Academy of Fine Arts, and flourishing literary Romanticism. The economy diversifies with coffee growing in Vale do Paraíba, becoming the main source of foreign exchange. Infrastructure modernizes with railroads, telegraph, gas lighting, and early water/sewage systems. Pedro II promotes science and education, corresponding with European intellectuals and participating in world expositions. Tensions gradually grow with the Paraguayan War (1864-1870), abolitionist issues, and conflicts with the Catholic Church and military.",
            },

            imperial3: {
              period: "Imperial Period",
              title: "Abolition of Slavery",
              description:
                "The Golden Law, signed by Princess Isabel on May 13, 1888, represents the final act of a long abolitionist process intensifying since 1850 with the end of the slave trade. The abolitionist movement gains strength with figures like Luiz Gama, José do Patrocínio, André Rebouças, and Joaquim Nabuco, mobilizing public opinion through newspapers, conferences, and emancipation societies. The Free Womb Law (1871) frees slaves' children, and the Sexagenarian Law (1885) frees slaves over 60, creating gradual abolition. Slave resistance intensifies with mass escapes, quilombo formations, and urban sectors joining the cause. The coffee economy, initially resistant, adapts through mass European immigration, especially Italian. Brazil becomes the last American country to abolish slavery, ending nearly 400 years of forced labor that brought about 4 million Africans. Paradoxically, abolition weakens the monarchy by losing slave-owning farmers' support.",
            },

            oldRepublic: {
              period: "Old Republic",
              title: "Proclamation of the Republic",
              description:
                "Marshal Deodoro da Fonseca proclaims the Republic on November 15, overthrowing the monarchy and establishing a federalist republican system dominated by coffee oligarchies.",
            },

            oldRepublic1: {
              period: "Old Republic",
              title: "Coffee with Milk Republic",
              description:
                "Power alternation between São Paulo (coffee) and Minas Gerais (milk) oligarchies, characterizing the 'politics of governors' and coronelismo in the countryside.",
            },

            vargasEra: {
              period: "Vargas Era",
              title: "1930 Revolution",
              description:
                "Getúlio Vargas comes to power through a revolutionary movement that overthrows the Old Republic, initiating profound political, social, and economic transformations.",
            },

            vargasEra1: {
              period: "Vargas Era",
              title: "Estado Novo",
              description:
                "Vargas' dictatorial period characterized by power centralization, economic nationalism, authoritarian modernization of the Brazilian state, and proximity to fascist regimes.",
            },

            populistRepublic: {
              period: "People's Republic Period",
              title: "Populist Democracy",
              description:
                "Democratic period marked by populism, accelerated industrialization, Brasília's construction by JK, and growing political polarization culminating in the military coup.",
            },
            populistRepublic1: {
              period: "People's Republic Period",
              title: "JK Government and Brasília",
              description:
                "Juscelino Kubitschek implements the Goals Plan with the motto '50 years in 5,' promotes industrialization, and inaugurates Brasília as the new federal capital in 1960.",
            },

            militaryDictatorship: {
              period: "Military Period",
              title: "Military Coup",
              description:
                "The Armed Forces overthrow President João Goulart on March 31, initiating 21 years of authoritarian military rule with censorship, political repression, and human rights violations.",
            },
            militaryDictatorship1: {
              period: "Military Period",
              title: "AI-5 and Lead Years",
              description:
                "Enactment of Institutional Act No. 5, the dictatorship's harshest, closing Congress and initiating the most repressive period known as 'Lead Years.'",
            },

            newRepublic: {
              period: "New Republic",
              title: "Redemocratization",
              description:
                "End of military dictatorship with Tancredo Neves' indirect election, initiating democratic transition and political opening that consolidated Brazil's democratic regime.",
            },
            newRepublic1: {
              period: "New Republic",
              title: "Citizen Constitution",
              description:
                "Enactment of the new Federal Constitution on October 5, consolidating democracy and establishing broad social, individual rights, and fundamental guarantees.",
            },
            newRepublic2: {
              period: "New Republic",
              title: "Real Plan",
              description:
                "Implementation of the Real Plan during Itamar Franco's government, controlling hyperinflation plaguing the country and establishing lasting monetary stability.",
            },
            newRepublic3: {
              period: "New Republic",
              title: "PT Era",
              description:
                "Luiz Inácio Lula da Silva assumes presidency, followed by Dilma Rousseff, representing democratic alternation and implementing social inclusion and income redistribution policies.",
            },
          },
          culture: {
            title: "Brazilian culture",
            intro: "Intro",
            music: "Music",
            parties: "Parties",
            art: "Art",
            diversity: "Diversity",
            gastronomy: "Gastronomy",
            introsubtitle: "Cultural Brazil",
            introsubdescription:
              "Brazil is an extraordinary cultural mosaic, the result of the harmonious fusion of ancient indigenous traditions, African heritage brought by slaves, and European influences from the colonizers. This unique blend has created a unique cultural identity, recognized worldwide for its creativity, joy and diversity. We are a country that celebrates its differences and transforms them into art, music, dance and gastronomy.",
            introsubtitle1: "🌍 Regional Diversity",
            introsubdescription1:
              "Brazil is made up of 5 regions and 26 states, in addition to the Federal District. Each one carries its own traditions, cultures, cuisines, accents and typical manifestations, which reflect the diversity and richness of our people. From North to South, every corner of the country has something unique to tell and celebrate.",
            introsubtitle2: "👥 Brazilian People",
            introsubdescription2:
              "The Brazilian people are the result of a mixture of ethnicities, cultures and stories. We are known for our joy, hospitality and resilience. From North to South, our strength lies in the union of differences, in creativity, in faith and in the ability to transform challenges into hope.",
            musicsubtitle: "Brazilian Music",
            musicsubdescription:
              "From the samba that was born in the slave quarters to the funk that echoes in the favelas, Brazilian music is the soundtrack of a happy and resilient people.",
            musictext1: "Rhythm born in Rio de Janeiro, symbol of Carnival",
            musictext2: "Gentle fusion of samba and jazz, recognized worldwide",
            musictext3: "Traditional northeastern music, couples dance",
            musictext4: "Urban rhythm of the favelas of Rio de Janeiro",
            musictext5: "Brazilian country music, very popular today",
            musictext6: "Brazilian Popular Music, rich in poetry and melody",
            musicsubtitle1: "🎵 Iconic Artists",
            partiessubtitle: "Brazilian Festivals",
            partiessubdescription:
              "Brazilians know how to celebrate like no one else! Our festivals reflect the country's rich cultural diversity, combining indigenous, African and European influences in celebrations that preserve centuries-old traditions and strengthen national identity.",
            partiessubtitle1: "🎉 Origins and Meanings",
            partiessubdescription1:
              "Traditional festivals in Brazil reflect the country's rich cultural mix, combining indigenous, African and European influences. Carnival, for example, has its origins in European pre-Lenten festivals, but in Brazil it incorporates African and indigenous rhythms and dances, making it a major popular celebration.",
            partiessubtitle2: "🤝 Social Impact",
            partiessubdescription2:
              "Traditional festivals in Brazil have a great social impact, as they promote community unity and strengthen local cultural identity. They generate employment and income for thousands of people, especially in sectors such as tourism, crafts, food and events.",
            partytitle1: "🎭 Carnival",
            partytitle2: "🔥 June Festivals",
            partytitle3: "🎶 Parintins Festival",
            partytitle4: "🎅 Gramado Christmas",
            partytitle5: "🏹 São João in Campina Grande and Caruaru",
            partytitle6: "🎡 Oktoberfest in Blumenau",
            partytext1:
              "Carnival is the largest and most famous festival in Brazil, celebrated in practically the entire country, with special emphasis on cities such as Rio de Janeiro, São Paulo, Salvador and Recife. This festival is marked by grand parades of samba schools, lively street parties, colorful and creative costumes, as well as lots of music and dancing that captivate locals and tourists. With its origins in European traditions and African and indigenous influences, Carnival has become a symbol of Brazilian cultural diversity and the popular joy that unites people of all ages and social classes.",
            partytext2:
              "June Festivals are popular traditions celebrated during the month of June, in honor of Catholic saints such as Saint Anthony, Saint John and Saint Peter. Very common in the Brazilian Northeast, these festivals bring together typical square dances, bonfires, traditional foods such as pamonha, canjica and boiled corn, as well as popular games. They celebrate the rural culture of Brazil, marking the agricultural cycles and the faith of the communities. The June Festivals are moments of fellowship, appreciation of northeastern roots and folkloric manifestations that involve music, dance and ancestral customs.",
            partytext3:
              "Originating in Maranhão and spreading to other regions of the North and Northeast, Bumba Meu Boi is a traditional festival that combines theater, music and dance to tell the legend of the death and resurrection of an ox. The performances are vibrant and colorful, with typical characters and lots of excitement. Recognized by UNESCO as Intangible Cultural Heritage of Humanity, Bumba Meu Boi is a cultural expression that unites indigenous, African and Portuguese elements, keeping alive the memory and identity of these communities.",
            partytext4:
              "The Parintins Festival, held in Parintins, Amazonas, is an annual celebration that takes place in June and is known for the competition between two bulls: Caprichoso and Garantido. With regional music performances, giant floats and folkloric performances, the festival highlights the richness of Amazonian culture. The event attracts thousands of visitors and is an important cultural manifestation that strengthens local identity and promotes tourism in the region.",
            partytext5:
              "Gramado Christmas, in Rio Grande do Sul, is a celebration that transforms the city into a magical setting throughout the Christmas season. With illuminated decorations, musical shows, themed parades and attractions for all ages, Gramado becomes one of the most sought-after destinations in Brazil at this time. The event celebrates the spirit of Christmas, bringing families and visitors together in an atmosphere of hope, faith and enchantment.",
            partytext6:
              "The São João festivals in Campina Grande (Paraíba) and Caruaru (Pernambuco) compete for the title of the largest São João festival in the world, attracting millions of people every year. These celebrations are marked by lively square dances, large bonfires, typical foods and musical shows that exalt the culture of the Northeast. In addition to celebrating the saints of June, these events promote the appreciation of popular tradition and integration between local communities and tourists.",
            partytext7:
              "Inspired by the traditional German festival, the Oktoberfest in Blumenau, in Santa Catarina, is the largest German festival outside Germany. It brings together craft beers, typical dances, traditional costumes and rich cuisine, reflecting the strong cultural heritage of German immigrants in the region. The festival promotes multicultural coexistence and is an important event for tourism and the local economy, celebrating the history and customs of German descendants in Brazil.",
            partytext8:
              "Celebrated mainly in rural areas of Brazil between Christmas and Three Kings Day (January 6), Folia de Reis is a religious festival that involves groups of revelers who sing and visit homes, representing the Three Wise Men. They bring blessings, prayers and joy, keeping alive a tradition that combines faith and popular culture. This festival strengthens community ties, valuing local religious and folkloric manifestations.",
          },
          gastronomy: {
            title: "Gastronomy of Brazil",
          },
          nature: {
            title: "Nature of Brazil",
          },
          language: {
            title: "Language of Brazil",
          },
          flag: {
            title: "Flag of Brazil",
          },
        },
      },
      pt: {
        translation: {
          menu: {
            welcome: "Bem-vindo",
            history: "História",
            culture: "Cultura",
            gastronomy: "Gastronomia",
            nature: "Natureza",
            language: "Idioma",
            flag: "Bandeira",
          },
          title: {
            brazilWeb: "Brasil Web",
            brazil: "Brasil",
          },
          buttonSeeMore: {
            seeMore: "Ler Mais",
            seeLess: "Mostrar Menos",
          },
          windowsActivation: {
            activate: "Ativar o Windows",
            accessSettings: "Acesse Configurações para ativar o Windows",
          },
          history: {
            title: "História do Brasil",
            subtitle: "De onde viemos?",
            subdescription:
              "A história do Brasil é um retrato de lutas, encontros e transformações. Desde as raízes indígenas, passando pela chegada dos portugueses, até a mistura de povos e culturas que formaram nosso país. Uma trajetória marcada por conquistas, desafios e sonhos, que moldaram a identidade de um povo forte, criativo e cheio de diversidade.",
            visualRepresentation: "Representação Visual",
            preCabral: {
              period: "Período Pré-Cabralino",
              title: "Primeiros Habitantes",
              description:
                "Chegada dos primeiros grupos humanos ao território brasileiro pelo Estreito de Bering durante migrações paleolíticas. Esses povos desenvolveram culturas complexas e diversas ao longo de milênios, adaptando-se aos diferentes biomas brasileiros. Centenas de grupos étnicos distintos se formaram com línguas e organizações sociais variadas, indo de coletores nômades a sociedades sedentárias com agricultura avançada. Desenvolveram profundo conhecimento de medicina natural, astronomia e manejo sustentável de recursos. Deixaram registros arqueológicos como sambaquis litorâneos, pinturas rupestres na Serra da Capivara e sítios cerimoniais complexos por toda a América do Sul.",
            },

            preColonial: {
              period: "Período Pré-Colonial",
              title: "Chegada dos Portugueses",
              description:
                "Pedro Álvares Cabral chega a Porto Seguro em 22 de abril de 1500, estabelecendo o primeiro contato oficial entre europeus e terras brasileiras. O período é marcado pela exploração inicial do território por expedições de reconhecimento costeiro. A principal atividade econômica era a extração do pau-brasil, árvore abundante na Mata Atlântica, cuja madeira vermelha era muito valorizada na Europa para tinturaria e marcenaria de luxo. O escambo com indígenas tornou-se a forma predominante de comércio, trocando ferramentas, espelhos e tecidos por mão de obra indígena no corte e transporte da madeira. Feitorias foram estabelecidas como estações comerciais temporárias. Nesse período, navegadores como Américo Vespúcio e Gonçalo Coelho realizaram expedições exploratórias que mapearam o litoral brasileiro.",
            },

            colonial: {
              period: "Período Colonial",
              title: "Colonização Sistemática",
              description:
                "A colonização efetiva começa com a expedição de Martim Afonso de Sousa em 1530, enviada pelo rei Dom João III para fundar povoados permanentes. Implanta-se o sistema de capitanias hereditárias, dividindo o território em 15 faixas de terra concedidas à nobreza portuguesa. São Vicente, fundada em 1532, torna-se a primeira vila oficial do Brasil. A economia colonial estrutura-se inicialmente no cultivo da cana-de-açúcar no Nordeste, utilizando mão de obra escrava africana a partir de 1538. Os engenhos tornam-se complexos produtivos que dominaram a economia mundial do açúcar por séculos. A sociedade colonial desenvolve-se hierarquizada e miscigenada, com senhores de engenho no topo, camadas médias de comerciantes e artesãos, e uma grande massa de escravizados e dependentes na base.",
            },

            colonial1: {
              period: "Período Colonial",
              title: "Governo-Geral",
              description:
                "Tomé de Sousa é nomeado o primeiro governador-geral do Brasil, centralizando a administração colonial que se mostrara ineficiente sob o sistema de capitanias hereditárias. Funda Salvador em 1549, que se torna a primeira capital do Brasil e permanece até 1763. O governo-geral representa uma mudança fundamental na política colonial portuguesa, estabelecendo administração mais direta e eficiente. Os primeiros jesuítas chegam com Tomé de Sousa, liderados pelo padre Manuel da Nóbrega, iniciando a catequese indígena e a construção das primeiras escolas. A Companhia de Jesus torna-se fundamental na educação colonial e (controversa) proteção dos nativos. Esse período estabelece a organização administrativa, judiciária e militar que perduraria por séculos.",
            },

            colonial2: {
              period: "Período Colonial",
              title: "Descoberta do Ouro",
              description:
                "Bandeirantes paulistas, liderados por figuras como Borba Gato e Fernão Dias Paes, descobrem os primeiros veios de ouro em Minas Gerais, revolucionando completamente a economia colonial. A descoberta ocorre inicialmente em Ouro Preto (Vila Rica), expandindo-se depois para Mariana, Sabará e Diamantina. O evento marca o início do maior ciclo econômico da América colonial, atraindo milhares de portugueses e provocando a primeira grande migração interna do Brasil. A população de Minas Gerais cresce exponencialmente de praticamente zero para mais de 300 mil habitantes em poucas décadas. O eixo econômico desloca-se do Nordeste açucareiro para o Centro-Sul, consolidando a importância do Rio de Janeiro como porto exportador. A Coroa portuguesa implementa rígido controle fiscal por casas de fundição e o imposto do quinto (20% de toda produção de ouro).",
            },

            colonial3: {
              period: "Período Colonial",
              title: "Inconfidência Mineira",
              description:
                "A Inconfidência Mineira representa o primeiro grande movimento organizado pela independência do Brasil, liderado por elite intelectual e econômica de Minas Gerais. O movimento surge em resposta ao aumento da pressão fiscal da Coroa portuguesa, especialmente a ameaça da derrama - cobrança forçada de impostos atrasados. Entre os conspiradores estão Joaquim José da Silva Xavier (Tiradentes), os poetas Tomás Antônio Gonzaga e Cláudio Manuel da Costa, além de fazendeiros e comerciantes influentes. O plano previa proclamar uma república inspirada nos Estados Unidos, com capital em São João del-Rei e universidade em Vila Rica. A conspiração é descoberta por delação, resultando em prisões. Tiradentes, sendo o único de origem humilde, torna-se bode expiatório e é executado em 21 de abril de 1792, tornando-se mártir da independência nacional.",
            },

            colonial4: {
              period: "Período Colonial",
              title: "Chegada da Família Real",
              description:
                "A chegada da família real portuguesa ao Brasil em março de 1808 marca uma transformação radical na história colonial. Dom João VI, acompanhado de cerca de 15 mil membros da corte, foge das invasões napoleônicas com apoio naval britânico. O Rio de Janeiro torna-se, pela primeira vez na história, sede de um império europeu fora da Europa. Reformas modernizadoras fundamentais são implementadas: abertura dos portos às nações amigas (principalmente Inglaterra), criação do Banco do Brasil, fundação da Imprensa Régia, instalação de fábricas e manufaturas e criação de escolas superiores (Academia Militar, Escola de Medicina). O Rio de Janeiro transforma-se urbanisticamente com teatros, bibliotecas e jardins. Em 1815, o Brasil é elevado à categoria de Reino Unido a Portugal e Algarves, deixando formalmente de ser colônia.",
            },

            imperial: {
              period: "Período Imperial",
              title: "Independência do Brasil",
              description:
                "A independência do Brasil consolida-se por um processo complexo iniciado com pressões das Cortes de Lisboa para recolonizar o Brasil após o retorno de Dom João VI a Portugal em 1821. Dom Pedro I, pressionado por decretos das cortes exigindo seu retorno e a subordinação do Brasil, protagoniza o episódio do Fico em janeiro de 1822, declarando que permaneceria no Brasil. José Bonifácio de Andrada e Silva torna-se figura central como Patriarca da Independência, articulando politicamente o processo. Em 7 de setembro de 1822, às margens do riacho Ipiranga, Dom Pedro proclama a independência com o grito 'Independência ou Morte!'. Consolidar a independência ainda exige combater resistências portuguesas em várias províncias, especialmente Bahia, Cisplatina e Pará. O Império do Brasil surge como monarquia constitucional, única nas Américas, enfrentando imediatamente tensões entre tendências centralizadoras e federalistas.",
            },
            imperial1: {
              period: "Período Imperial",
              title: "Período Regencial",
              description:
                "A abdicação de Dom Pedro I em 7 de abril de 1831, pressionado por crises políticas e econômicas, inaugura um dos períodos mais turbulentos da história do Brasil. Com Pedro II com apenas 5 anos, uma regência assume enfrentando revoltas separatistas em todo o país. A Cabanagem no Pará (1835-1840) representa a revolta mais radical, com populações caboclas tomando o poder provincial. A Revolução Farroupilha no Rio Grande do Sul (1835-1845) estabelece uma república independente por dez anos. A Sabinada na Bahia (1837-1838) e a Balaiada no Maranhão (1838-1841) demonstram a fragilidade da unidade nacional. O período é marcado por intensos debates entre liberais e conservadores sobre centralização versus federalismo. O Ato Adicional de 1834 concede mais autonomia às províncias, mas não pacifica o país. O Golpe da Maioridade em 1840 antecipa a coroação de Pedro II tentando restaurar a estabilidade política.",
            },
            imperial2: {
              period: "Período Imperial",
              title: "Segundo Reinado",
              description:
                "O reinado de Dom Pedro II de 1840 a 1889 representa o período mais estável politicamente da história brasileira, consolidando a unidade territorial e promovendo significativa modernização. O imperador, com sólida formação intelectual e científica, transforma o Brasil em monarquia respeitada internacionalmente. O país vive renascimento cultural com a criação do Instituto Histórico e Geográfico Brasileiro, Academia Imperial de Belas Artes e o florescimento do romantismo literário. A economia diversifica-se com o café no Vale do Paraíba, tornando-se a principal fonte de divisas. A infraestrutura moderniza-se com ferrovias, telégrafo, iluminação a gás e sistemas iniciais de água/esgoto. Pedro II promove ciência e educação, correspondendo-se com intelectuais europeus e participando de exposições mundiais. Crescem gradualmente as tensões com a Guerra do Paraguai (1864-1870), questões abolicionistas e conflitos com a Igreja Católica e o Exército.",
            },
            imperial3: {
              period: "Período Imperial",
              title: "Abolição da Escravidão",
              description:
                "A Lei Áurea, assinada pela princesa Isabel em 13 de maio de 1888, representa o ato final de um longo processo abolicionista intensificado desde 1850 com o fim do tráfico negreiro. O movimento abolicionista ganha força com figuras como Luiz Gama, José do Patrocínio, André Rebouças e Joaquim Nabuco, mobilizando a opinião pública por jornais, conferências e sociedades emancipatórias. A Lei do Ventre Livre (1871) liberta filhos de escravas e a Lei dos Sexagenários (1885) liberta escravos com mais de 60 anos, criando abolição gradual. A resistência escrava intensifica-se com fugas em massa, formação de quilombos e setores urbanos aderindo à causa. A economia cafeeira, inicialmente resistente, adapta-se com imigração europeia em massa, especialmente italiana. O Brasil torna-se o último país das Américas a abolir a escravidão, encerrando quase 400 anos de trabalho forçado que trouxeram cerca de 4 milhões de africanos. Paradoxalmente, a abolição enfraquece a monarquia ao perder o apoio dos fazendeiros escravistas.",
            },

            oldRepublic: {
              period: "República Velha",
              title: "Proclamação da República",
              description:
                "O marechal Deodoro da Fonseca proclama a República em 15 de novembro, derrubando a monarquia e estabelecendo um sistema republicano federalista dominado pelas oligarquias do café.",
            },

            oldRepublic1: {
              period: "República Velha",
              title: "República do Café com Leite",
              description:
                "Alternância de poder entre as oligarquias de São Paulo (café) e Minas Gerais (leite), caracterizando a política dos governadores e o coronelismo no interior.",
            },

            vargasEra: {
              period: "Era Vargas",
              title: "Revolução de 1930",
              description:
                "Getúlio Vargas chega ao poder por meio de um movimento revolucionário que derruba a Velha República, iniciando profundas transformações políticas, sociais e econômicas.",
            },

            vargasEra1: {
              period: "Era Vargas",
              title: "Estado Novo",
              description:
                "Período ditatorial de Vargas caracterizado pela centralização do poder, nacionalismo econômico, modernização autoritária do Estado brasileiro e aproximação de regimes fascistas.",
            },

            populistRepublic: {
              period: "República Populista",
              title: "Democracia Populista",
              description:
                "Período democrático marcado pelo populismo, industrialização acelerada, construção de Brasília por JK e crescente polarização política culminando no golpe militar.",
            },

            populistRepublic1: {
              period: "República Populista",
              title: "Governo JK e Brasília",
              description:
                "Juscelino Kubitschek implementa o Plano de Metas com o lema '50 anos em 5', promove a industrialização e inaugura Brasília como nova capital federal em 1960.",
            },

            militaryDictatorship: {
              period: "Ditadura Militar",
              year: "1964 - 1985",
              title: "Golpe Militar",
              description:
                "As Forças Armadas depõem o presidente João Goulart em 31 de março, iniciando 21 anos de regime militar autoritário com censura, repressão política e violações de direitos humanos.",
            },

            militaryDictatorship1: {
              period: "Ditadura Militar",
              title: "AI-5 e Anos de Chumbo",
              description:
                "Edição do Ato Institucional nº 5, o mais duro da ditadura, fechando o Congresso e iniciando o período mais repressivo conhecido como Anos de Chumbo.",
            },

            newRepublic: {
              period: "Nova República",
              title: "Redemocratização",
              description:
                "Fim da ditadura militar com a eleição indireta de Tancredo Neves, iniciando a transição democrática e a abertura política que consolidou o regime democrático brasileiro.",
            },

            newRepublic1: {
              period: "Nova República",
              title: "Constituição Cidadã",
              description:
                "Promulgação da nova Constituição Federal em 5 de outubro, consolidando a democracia e estabelecendo amplos direitos sociais, individuais e garantias fundamentais.",
            },

            newRepublic2: {
              period: "Nova República",
              title: "Plano Real",
              description:
                "Implementação do Plano Real durante o governo Itamar Franco, controlando a hiperinflação que assolava o país e estabelecendo estabilidade monetária duradoura.",
            },

            newRepublic3: {
              period: "Nova República",
              title: "Era PT",
              description:
                "Luiz Inácio Lula da Silva assume a presidência, seguido por Dilma Rousseff, representando alternância democrática e implementando políticas de inclusão social e redistribuição de renda.",
            },
          },
          culture: {
            title: "Cultura do Brasil",
            intro: "Introdução",
            music: "Música",
            parties: "Festas",
            art: "Arte",
            diversity: "Diversidade",
            gastronomy: "Gastronomia",
            introsubtitle: "Brasil Cultural",
            introsubdescription:
              "O Brasil é um mosaico cultural extraordinário, resultado da fusão harmoniosa entre tradições indígenas milenares, herança africana trazida pelos escravizados, e influências europeias dos colonizadores. Esta mistura única gerou uma identidade cultural própria, reconhecida mundialmente pela sua criatividade, alegria e diversidade. Somos um país que celebra suas diferenças e as transforma em arte, música, dança e gastronomia.",
            introsubtitle1: "🌍 Diversidade Regional",
            introsubdescription1:
              "O Brasil é formado por 5 regiões e 26 estados, além do Distrito Federal. Cada um carrega suas próprias tradições, culturas, culinárias, sotaques e manifestações típicas, que refletem a diversidade e a riqueza do nosso povo. De Norte a Sul, cada canto do país tem algo único para contar e celebrar.",
            introsubtitle2: "👥 Povo Brasileiro",
            introsubdescription2:
              "O povo brasileiro é resultado de uma mistura de etnias, culturas e histórias. Somos reconhecidos pela alegria, hospitalidade e resiliência. De norte a sul, nossa força está na união das diferenças, na criatividade, na fé e na capacidade de transformar desafios em esperança.",
            musicsubtitle: "Música Brasileira",
            musicsubdescription:
              "Do samba que nasceu nas senzalas ao funk que ecoa nas favelas, a música brasileira é a trilha sonora de um povo alegre e resiliente.",
            musictext1: "Ritmo nascido no Rio de Janeiro, símbolo do Carnaval",
            musictext2: "Fusão suave de samba e jazz, mundialmente reconhecida",
            musictext3: "Música nordestina tradicional, dança de casais",
            musictext4: "Ritmo urbano das favelas do Rio de Janeiro",
            musictext5: "Música country brasileira, muito popular atualmente",
            musictext6: "Música Popular Brasileira, rica em poesia e melodia",
            musicsubtitle1: "🎵 Artistas Icônicos",
            partiessubtitle: "Festas Brasileiras",
            partiessubdescription:
              "Os brasileiros sabem comemorar como ninguém! Nossas festas refletem a rica diversidade cultural do país, combinando influências indígenas, africanas e europeias em celebrações que preservam tradições seculares e fortalecem a identidade nacional.",
            partiessubtitle1: "🎉 Origens e Significados",
            partiessubdescription1:
              "As festas tradicionais no Brasil refletem a rica mistura cultural do país, combinando influências indígenas, africanas e europeias. O Carnaval, por exemplo, tem sua origem nas festas europeias pré-quaresmais, mas no Brasil incorpora ritmos e danças africanas e indígenas, tornando-se uma grande celebração popular.",
            partiessubtitle2: "🤝 Impacto Social",
            partiessubdescription2:
              "As festas tradicionais no Brasil têm um grande impacto social, pois promovem a união comunitária e fortalecem a identidade cultural local. Elas geram emprego e renda para milhares de pessoas, principalmente em setores como turismo, artesanato, gastronomia e eventos.",
            partytitle1: "🎭 Carnaval",
            partytitle2: "🔥 Festa Junina",
            partytitle3: "🎶 Festival de Parintins",
            partytitle4: "🎅 Natal de Gramado",
            partytitle5: "🏹 São João de Campina Grande e Caruaru",
            partytitle6: "🎡 Oktoberfest de Blumenau",
            partytext1:
              "O Carnaval é a maior e mais famosa festa do Brasil, celebrada em praticamente todo o país, com destaque para cidades como Rio de Janeiro, São Paulo, Salvador e Recife. Essa festa é marcada por desfiles grandiosos das escolas de samba, blocos de rua animados, fantasias cheias de cores e criatividade, além de muita música e dança que contagiam moradores e turistas. Com suas origens nas tradições europeias e influências africanas e indígenas, o Carnaval se tornou um símbolo da diversidade cultural brasileira e da alegria popular que une pessoas de todas as idades e classes sociais.",
            partytext2:
              "As Festas Juninas são tradições populares celebradas durante o mês de junho, em homenagem a santos católicos como Santo Antônio, São João e São Pedro. Muito presentes no Nordeste brasileiro, essas festas reúnem quadrilhas típicas, fogueiras, comidas tradicionais como pamonha, canjica e milho cozido, além de brincadeiras populares. Elas celebram a cultura rural do Brasil, marcando os ciclos agrícolas e a fé das comunidades. As Festas juninas são momentos de confraternização, valorização das raízes nordestinas e manifestações folclóricas que envolvem música, dança e costumes ancestrais.",
            partytext3:
              "Originado no Maranhão e difundido por outras regiões do Norte e Nordeste, o Bumba Meu Boi é uma festa tradicional que mistura teatro, música e dança para contar a lenda da morte e ressurreição de um boi. As apresentações são vibrantes e coloridas, com personagens típicos e muita animação. Reconhecido pela UNESCO como Patrimônio Cultural Imaterial da Humanidade, o Bumba Meu Boi é uma expressão cultural que une elementos indígenas, africanos e portugueses, mantendo viva a memória e a identidade dessas comunidades.",
            partytext4:
              "O Festival de Parintins, realizado em Parintins, no Amazonas, é uma celebração anual que acontece em junho e é conhecida pela disputa entre dois bois-bumbás: Caprichoso e Garantido. Com apresentações de músicas regionais, alegorias gigantes e performances folclóricas, o festival destaca a riqueza da cultura amazônica. O evento atrai milhares de visitantes e é uma importante manifestação cultural que fortalece a identidade local e promove o turismo na região.",
            partytext5:
              "O Natal de Gramado, no Rio Grande do Sul, é uma festa que transforma a cidade em um cenário mágico durante toda a temporada natalina. Com decorações iluminadas, espetáculos musicais, desfiles temáticos e atrações para todas as idades, Gramado se torna um dos destinos mais procurados do Brasil nessa época. O evento celebra o espírito do Natal, reunindo famílias e visitantes em um clima de esperança, fé e encantamento.",
            partytext6:
              "As festas de São João de Campina Grande (Paraíba) e Caruaru (Pernambuco) disputam o título de maior São João do mundo, atraindo milhões de pessoas todos os anos. Essas celebrações são marcadas por quadrilhas animadas, grandes fogueiras, comidas típicas e shows musicais que exaltam a cultura nordestina. Além de festejar os santos juninos, esses eventos promovem a valorização da tradição popular e a integração entre comunidades locais e turistas.",
            partytext7:
              "Inspirada na festa tradicional alemã, a Oktoberfest de Blumenau, em Santa Catarina, é a maior festa germânica fora da Alemanha. Reúne cervejas artesanais, danças típicas, trajes tradicionais e uma gastronomia rica, refletindo a forte herança cultural dos imigrantes alemães na região. A festa promove a convivência multicultural e é um importante evento para o turismo e a economia local, celebrando a história e os costumes dos descendentes alemães no Brasil.",
            partytext8:
              "Comemorada principalmente nas zonas rurais do Brasil entre o Natal e o Dia de Reis (6 de janeiro), a Folia de Reis é uma festa religiosa que envolve grupos de foliões que cantam e visitam casas, representando os Reis Magos. Eles levam bênçãos, orações e alegria, mantendo viva uma tradição que combina fé e cultura popular. Essa festa reforça os laços comunitários, valorizando as manifestações religiosas e folclóricas locais.",
          },
          gastronomy: {
            title: "Gastronomia do Brasil",
          },
          nature: {
            title: "Natureza do Brasil",
          },
          language: {
            title: "Idioma do Brasil",
          },
          flag: {
            title: "Bandeira do Brasil",
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
