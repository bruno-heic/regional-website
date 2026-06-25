// news.js — Banco de notícias estático do Norte Brasileiro
// 50 notícias divididas por categoria
 
const NOTICIAS = [
  // ── NOTÍCIAS DE HOJE ──
  {
    id: 1,
    categoria: "noticias-de-hoje",
    titulo: "Ministério do Empreendedorismo destaca papel dos pequenos negócios na COP 30 em Belém",
    descricao: "O Ministério do Empreendedorismo participa da 30ª Conferência das Nações Unidas sobre Mudanças Climáticas (COP 30), em Belém (PA). A presença reforça o papel dos pequenos negócios na construção de uma economia sustentável e inclusiva para a Amazônia.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 2,
    categoria: "noticias-de-hoje",
    titulo: "Alegoria do Caprichoso cai durante traslado em Parintins e assusta folclore local",
    descricao: "Uma alegoria do Boi-Bumbá Caprichoso caiu durante o traslado até a concentração do Bumbódromo, em Parintins (AM). O incidente provocou correria entre os presentes, mas nenhuma pessoa ficou ferida.",
    imagem: null,
    imagemClasse: "img-cap",
    url: "#"
  },
  {
    id: 3,
    categoria: "noticias-de-hoje",
    titulo: "Belém sedia etapa estadual da conferência sobre futuro da pesca e aquicultura",
    descricao: "A programação contou com representantes da Sedap, que oferece apoio logístico ao evento realizado no Parque da Cidade até quarta-feira (24). Pescadores de todo o Pará participaram dos debates.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
  {
    id: 4,
    categoria: "noticias-de-hoje",
    titulo: "Barco do Movimento Amigos do Garantido parte rumo a Parintins em busca do bicampeonato",
    descricao: "O Movimento Amigos do Garantido iniciou mais uma etapa da viagem rumo à Ilha Tupinambarana com a saída do barco que leva associados e colaboradores para o Festival de Parintins 2026.",
    imagem: null,
    imagemClasse: "img-barco",
    url: "#"
  },
  {
    id: 5,
    categoria: "noticias-de-hoje",
    titulo: "Motoristas ameaçam paralisar ônibus em Manaus por atraso no pagamento de salários",
    descricao: "Segundo a categoria, o valor deveria ter sido depositado no dia 20 de junho, mas como a data caiu em sábado, o pagamento ficou previsto para segunda-feira (22). Os trabalhadores aguardam definição das empresas.",
    imagem: null,
    imagemClasse: "img-bus",
    url: "#"
  },
  {
    id: 6,
    categoria: "noticias-de-hoje",
    titulo: "Porto de Santarém recebe novo terminal de passageiros após reforma de R$ 12 milhões",
    descricao: "O governo federal entregou nesta semana o novo terminal de passageiros do Porto de Santarém, no Pará, com capacidade para atender 1.500 pessoas por dia e wi-fi gratuito em todas as áreas.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 7,
    categoria: "noticias-de-hoje",
    titulo: "Incêndio destrói embarcação no porto de Manaus sem deixar vítimas",
    descricao: "Um incêndio de grandes proporções destruiu uma embarcação de carga ancorada no porto flutuante de Manaus na madrugada desta terça-feira. O Corpo de Bombeiros controlou as chamas após três horas de trabalho.",
    imagem: null,
    imagemClasse: "img-barco",
    url: "#"
  },
  {
    id: 8,
    categoria: "noticias-de-hoje",
    titulo: "Macapá registra novo recorde de temperatura e alerta de saúde é emitido",
    descricao: "A capital do Amapá registrou 38,4°C nesta segunda-feira, o maior índice desde 2019. A Secretaria de Saúde emitiu alerta pedindo hidratação constante, especialmente para crianças e idosos.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
 
  // ── POLÍTICA ──
  {
    id: 9,
    categoria: "politica",
    titulo: "Governador do Pará anuncia investimento de R$ 800 milhões em infraestrutura antes da COP 30",
    descricao: "Helder Barbalho apresentou nesta semana um pacote de obras para modernizar Belém antes da realização da COP 30. O pacote inclui revitalização do Ver-o-Peso, ampliação de vias e novo sistema de drenagem.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
  {
    id: 10,
    categoria: "politica",
    titulo: "Câmara Municipal de Manaus aprova lei que regula uso de drones na cidade",
    descricao: "A Câmara Municipal de Manaus aprovou por unanimidade projeto de lei que estabelece regras para o uso comercial e recreativo de drones na capital amazonense, incluindo zonas de restrição próximas ao aeroporto.",
    imagem: null,
    imagemClasse: "img-security",
    url: "#"
  },
  {
    id: 11,
    categoria: "politica",
    titulo: "Senadores da região Norte articulam frente parlamentar pela proteção da Amazônia",
    descricao: "Senadores dos nove estados da região Norte criaram uma frente parlamentar suprapartidária dedicada a defender políticas de proteção ambiental e desenvolvimento sustentável para a Amazônia Legal.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 12,
    categoria: "politica",
    titulo: "Roraima debate criação de zona de livre comércio na fronteira com a Venezuela",
    descricao: "Representantes do governo de Roraima e parlamentares federais se reuniram em Boa Vista para discutir a viabilidade de uma zona de livre comércio em Pacaraima, visando impulsionar o comércio com o país vizinho.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
  {
    id: 13,
    categoria: "politica",
    titulo: "TCE-AM aponta irregularidades em contratos de merenda escolar no interior do Amazonas",
    descricao: "O Tribunal de Contas do Amazonas identificou sobrepreço e irregularidades em contratos de fornecimento de merenda escolar em sete municípios do interior do estado. Prefeitos têm 30 dias para apresentar defesa.",
    imagem: null,
    imagemClasse: "img-security",
    url: "#"
  },
  {
    id: 14,
    categoria: "politica",
    titulo: "Prefeitura de Porto Velho lança programa de regularização fundiária para 40 mil famílias",
    descricao: "A Prefeitura de Porto Velho iniciou programa de regularização fundiária que vai beneficiar cerca de 40 mil famílias em áreas periféricas da capital rondoniense. As escrituras serão entregues de forma gratuita.",
    imagem: null,
    imagemClasse: "img-cap",
    url: "#"
  },
  {
    id: 15,
    categoria: "politica",
    titulo: "Eleições municipais no Acre: quatro candidatos registram candidatura à prefeitura de Rio Branco",
    descricao: "Quatro candidatos formalizaram candidatura à prefeitura de Rio Branco para as eleições de outubro. Os partidos apresentaram programas distintos para mobilidade urbana e saúde pública na capital acreana.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
  {
    id: 16,
    categoria: "politica",
    titulo: "Governo federal libera R$ 3,2 bilhões para obras de saneamento no Pará e Amazonas",
    descricao: "O Ministério das Cidades anunciou repasse histórico de R$ 3,2 bilhões destinados a projetos de saneamento básico nos dois estados mais populosos da região Norte. As obras devem beneficiar 2,1 milhões de pessoas.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
 
  // ── MEIO-AMBIENTE ──
  {
    id: 17,
    categoria: "meio-ambiente",
    titulo: "Desmatamento na Amazônia cai 42% no primeiro semestre de 2026, aponta INPE",
    descricao: "O Instituto Nacional de Pesquisas Espaciais (INPE) divulgou dados que mostram queda de 42% no desmatamento da Amazônia nos seis primeiros meses de 2026 em comparação com o mesmo período do ano anterior.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 18,
    categoria: "meio-ambiente",
    titulo: "Pescadores do Amazonas relatam redução drástica no estoque de pirarucu no Rio Solimões",
    descricao: "Pescadores artesanais de comunidades ribeirinhas do Rio Solimões alertam para a redução significativa do estoque de pirarucu, considerado o maior peixe de água doce da América Latina, devido à pesca ilegal.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 19,
    categoria: "meio-ambiente",
    titulo: "Expedição científica descobre nova espécie de ave na Serra do Divisor, no Acre",
    descricao: "Uma expedição de pesquisadores do INPA e da Universidade de Oxford descobriu uma nova espécie de ave na Serra do Divisor, no Acre. O pássaro, batizado de sabiá-acreano, possui plumagem azul e dourada inédita.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 20,
    categoria: "meio-ambiente",
    titulo: "Nível do Rio Amazonas sobe 3 metros acima da média e bairros de Tefé ficam alagados",
    descricao: "O nível do Rio Amazonas atingiu 3 metros acima da cota histórica em Tefé (AM), causando alagamentos em comunidades ribeirinhas. A Defesa Civil monitorou o deslocamento de mais de 1.200 famílias.",
    imagem: null,
    imagemClasse: "img-barco",
    url: "#"
  },
  {
    id: 21,
    categoria: "meio-ambiente",
    titulo: "Queimadas no Tocantins atingem 180 mil hectares e colocam estado em alerta máximo",
    descricao: "O Tocantins enfrenta um dos maiores surtos de queimadas dos últimos dez anos. O fogo já consumiu 180 mil hectares de cerrado e florestas de transição, afetando a qualidade do ar em Palmas e cidades vizinhas.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
  {
    id: 22,
    categoria: "meio-ambiente",
    titulo: "Projeto indígena no Pará transforma castanha-do-pará em cosméticos e gera renda",
    descricao: "Comunidades indígenas da Terra Indígena Kayapó, no Pará, desenvolveram linha de cosméticos à base de castanha-do-pará. O projeto gera renda para mais de 300 famílias e vende para mercados europeus.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 23,
    categoria: "meio-ambiente",
    titulo: "Amapá cria corredor ecológico que conecta duas das maiores reservas da Amazônia",
    descricao: "O governo do Amapá formalizou a criação de um corredor ecológico que conecta a Floresta Nacional do Amapá ao Parque Nacional Montanhas do Tumucumaque, protegendo 1,2 milhão de hectares de floresta primária.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
 
  // ── CULTURA ──
  {
    id: 24,
    categoria: "cultura",
    titulo: "Festival de Parintins 2026 bate recorde de visitantes com 80 mil turistas esperados",
    descricao: "O Festival Folclórico de Parintins 2026 deve receber 80 mil visitantes, superando o recorde histórico do evento. Garantido e Caprichoso prometem apresentações épicas com temas ligados à Amazônia e suas tradições.",
    imagem: null,
    imagemClasse: "img-cap",
    url: "#"
  },
  {
    id: 25,
    categoria: "cultura",
    titulo: "Museu do Índio de Manaus reabre após reforma com exposição permanente inédita",
    descricao: "O Museu do Índio de Manaus reabriu suas portas após dois anos de reforma estrutural. A nova exposição permanente conta a história de 67 povos indígenas que vivem no Amazonas, com objetos rituais e audiovisuais interativos.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
  {
    id: 26,
    categoria: "cultura",
    titulo: "Escritora paraense vence prêmio nacional de literatura com romance ambientado na Amazônia",
    descricao: "A escritora belenense Ana Coelho venceu o Prêmio Jabuti de Literatura com o romance 'Filhas do Rio Grande', que narra três gerações de mulheres ribeirinhas e sua relação com o Rio Tapajós.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 27,
    categoria: "cultura",
    titulo: "Boi-Bumbá entra na lista do Patrimônio Cultural Imaterial da UNESCO",
    descricao: "O Boi-Bumbá de Parintins foi oficialmente reconhecido como Patrimônio Cultural Imaterial da Humanidade pela UNESCO, tornando-se a quarta manifestação cultural brasileira a receber o título.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
  {
    id: 28,
    categoria: "cultura",
    titulo: "Teatro Amazonas recebe temporada de ópera com artistas de 12 países",
    descricao: "O lendário Teatro Amazonas, em Manaus, sediará uma temporada de ópera com artistas convidados de 12 países. A série de apresentações comemora os 130 anos do teatro e inclui estreia mundial de obra de compositor amazonense.",
    imagem: null,
    imagemClasse: "img-barco",
    url: "#"
  },
  {
    id: 29,
    categoria: "cultura",
    titulo: "Carimbó do Pará ganha centro cultural dedicado à sua história e à sua música em Belém",
    descricao: "Inaugurado no bairro da Cidade Velha, em Belém, o Centro Cultural do Carimbó reúne acervo histórico, espaço para rodas de dança e gravação de álbuns de artistas independentes da tradição afro-paraense.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 30,
    categoria: "cultura",
    titulo: "Artesãos do Alto Solimões levam trabalhos à Feira Nacional do Artesanato em São Paulo",
    descricao: "Um grupo de 35 artesãos de comunidades do Alto Solimões participou da Feira Nacional do Artesanato em São Paulo, apresentando peças em cerâmica marajoara, palha de buriti e madeira certificada.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
 
  // ── ESPORTE ──
  {
    id: 31,
    categoria: "esporte",
    titulo: "Nacional Futebol Clube elimina time paulista na Copa do Brasil e avança às quartas de final",
    descricao: "O Nacional Futebol Clube, de Manaus, fez história ao eliminar o Santos FC nos pênaltis pela Copa do Brasil. A vitória na Arena Amazônia fez a torcida manauense comemorar nas ruas da capital.",
    imagem: null,
    imagemClasse: "img-cap",
    url: "#"
  },
  {
    id: 32,
    categoria: "esporte",
    titulo: "Atleta de Santarém é convocada para seleção brasileira de canoagem olímpica",
    descricao: "A canoísta Bruna Mendes, nascida em Santarém e revelada pelo clube Fluvial do Pará, foi convocada para integrar a seleção brasileira de canoagem olímpica que se prepara para os Jogos Pan-Americanos de 2027.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 33,
    categoria: "esporte",
    titulo: "Remo e Paysandu decidem título do Campeonato Paraense no Mangueirão com casa cheia",
    descricao: "O clássico Re-Pa volta a decidir o Campeonato Paraense. A final única acontece no Mangueirão, com capacidade de 45 mil torcedores e ingressos esgotados há uma semana. O Remo chega como favorito.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
  {
    id: 34,
    categoria: "esporte",
    titulo: "Jovem de 17 anos de Boa Vista bate recorde sul-americano de natação em competição nacional",
    descricao: "O nadador Lucas Araújo, de 17 anos e natural de Boa Vista, bateu o recorde sul-americano da categoria sub-18 nos 200m medley durante o Campeonato Brasileiro Juvenil realizado em Fortaleza.",
    imagem: null,
    imagemClasse: "img-barco",
    url: "#"
  },
  {
    id: 35,
    categoria: "esporte",
    titulo: "Manaus sediará etapa do Campeonato Brasileiro de Surf de Rio em agosto",
    descricao: "A capital amazonense receberá pela primeira vez uma etapa do Campeonato Brasileiro de Surf de Rio, aproveitando as corredeiras do Rio Negro. A competição está prevista para os dias 14 e 15 de agosto.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 36,
    categoria: "esporte",
    titulo: "Academia de boxe de Rio Branco forma campeões com projeto social para jovens em vulnerabilidade",
    descricao: "A academia Garras do Acre, em Rio Branco, formou três campeões brasileiros de boxe amador nos últimos dois anos. O projeto atende gratuitamente 120 jovens em situação de vulnerabilidade social.",
    imagem: null,
    imagemClasse: "img-security",
    url: "#"
  },
  {
    id: 37,
    categoria: "esporte",
    titulo: "Governo do Tocantins anuncia construção de complexo esportivo em Palmas com pista olímpica",
    descricao: "O governo do Tocantins assinou contrato para construção de um complexo esportivo em Palmas com pista olímpica de atletismo, piscina semiolímpica e ginásio para 3.000 pessoas. Obras iniciam em setembro.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
 
  // ── ECONOMIA ──
  {
    id: 38,
    categoria: "economia",
    titulo: "Zona Franca de Manaus atinge recorde de faturamento: R$ 220 bilhões em 2025",
    descricao: "O Polo Industrial de Manaus registrou faturamento recorde de R$ 220 bilhões em 2025, segundo dados da Suframa. O setor de eletroeletrônicos liderou o crescimento, com alta de 18% em relação ao ano anterior.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
  {
    id: 39,
    categoria: "economia",
    titulo: "Pará lidera exportações de minério de ferro no Brasil com alta de 23% no semestre",
    descricao: "O Pará consolidou sua posição como maior exportador de minério de ferro do país, com alta de 23% no primeiro semestre de 2026. O Porto de Vila do Conde foi o principal ponto de escoamento da produção mineral.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 40,
    categoria: "economia",
    titulo: "Startups de tecnologia se instalam no Amazonas atraídas por incentivos fiscais da ZFM",
    descricao: "Dezessete startups de tecnologia abriram operações em Manaus no primeiro semestre de 2026, atraídas pelos benefícios fiscais da Zona Franca. O setor de inteligência artificial é o que mais cresce na capital.",
    imagem: null,
    imagemClasse: "img-security",
    url: "#"
  },
  {
    id: 41,
    categoria: "economia",
    titulo: "Preço da castanha-do-pará dispara 40% após safra abaixo do esperado na Amazônia",
    descricao: "A castanha-do-pará registrou alta de 40% nos preços ao produtor após a safra 2026 ficar 30% abaixo da média histórica. Especialistas apontam as mudanças climáticas como principal fator da queda na produção.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 42,
    categoria: "economia",
    titulo: "Rondônia amplia exportação de café especial e produto chega a cafeterias do Japão",
    descricao: "Produtores de café de Cacoal e Ji-Paraná, em Rondônia, fecharam contrato de exportação com uma rede de cafeterias japonesas. O café rondoniense ganhou menção honrosa no Campeonato Mundial de Baristas.",
    imagem: null,
    imagemClasse: "img-boi",
    url: "#"
  },
  {
    id: 43,
    categoria: "economia",
    titulo: "Turismo na Amazônia movimenta R$ 4,8 bilhões e cresce 31% no primeiro trimestre",
    descricao: "O turismo na região Norte cresceu 31% no primeiro trimestre de 2026, segundo dados do Ministério do Turismo. Manaus e Belém concentraram 60% dos visitantes, sendo os estrangeiros maioria entre os turistas.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 44,
    categoria: "economia",
    titulo: "Banco da Amazônia lança linha de crédito de R$ 500 milhões para agricultor familiar",
    descricao: "O Banco da Amazônia abriu nova linha de crédito rural de R$ 500 milhões destinada exclusivamente ao agricultor familiar da região Norte. As taxas são as menores da história da instituição, a partir de 3% ao ano.",
    imagem: null,
    imagemClasse: "img-cap",
    url: "#"
  },
 
  // ── SAÚDE ──
  {
    id: 45,
    categoria: "saude",
    titulo: "Surto de dengue em Belém supera 12 mil casos e secretaria declara emergência de saúde",
    descricao: "A Secretaria Municipal de Saúde de Belém declarou emergência sanitária após os registros de dengue superarem 12 mil casos em junho. Bloqueios de focos e fumacês emergenciais foram realizados em 18 bairros.",
    imagem: null,
    imagemClasse: "img-security",
    url: "#"
  },
  {
    id: 46,
    categoria: "saude",
    titulo: "Pesquisadores do INPA descobrem nova planta amazônica com potencial antibiótico",
    descricao: "Cientistas do Instituto Nacional de Pesquisas da Amazônia identificaram compostos com ação antibiótica em uma planta nativa do Rio Negro ainda sem nome científico. A descoberta pode abrir caminho para novos medicamentos.",
    imagem: null,
    imagemClasse: "img-pesca",
    url: "#"
  },
  {
    id: 47,
    categoria: "saude",
    titulo: "Telemedicina chega a 110 municípios sem médico no Amazonas por programa federal",
    descricao: "O Programa Saúde Digital do governo federal levou serviços de telemedicina a 110 municípios do Amazonas que não contavam com médico residente. Consultas especializadas em cardiologia e oncologia são as mais demandadas.",
    imagem: null,
    imagemClasse: "img-bus",
    url: "#"
  },
  {
    id: 48,
    categoria: "saude",
    titulo: "Hospital de Roraima implanta primeiro centro de transplante renal do estado",
    descricao: "O Hospital Geral de Roraima inaugurou seu primeiro centro de transplante renal, eliminando a necessidade de pacientes viajarem a Manaus ou Brasília para realizar o procedimento. Três transplantes já foram realizados.",
    imagem: null,
    imagemClasse: "img-conf",
    url: "#"
  },
  {
    id: 49,
    categoria: "saude",
    titulo: "Campanha de vacinação contra malária alcança 94% do público-alvo em municípios do Pará",
    descricao: "A campanha de vacinação experimental contra malária atingiu 94% do público-alvo nos 22 municípios paraenses participantes do programa-piloto. Os dados preliminares mostram redução de 61% nos casos da doença.",
    imagem: null,
    imagemClasse: "img-amazon",
    url: "#"
  },
  {
    id: 50,
    categoria: "saude",
    titulo: "UPA de Macapá recebe equipamento de ressonância magnética doado por empresa mineradora",
    descricao: "A Unidade de Pronto Atendimento Norte de Macapá recebeu um equipamento de ressonância magnética avaliado em R$ 2,3 milhões, doado por empresa mineradora como parte de acordo de compensação ambiental.",
    imagem: null,
    imagemClasse: "img-cap",
    url: "#"
  }
];
 
// ── MAPEAMENTO DE ESCOPOS ──
const ESCOPOS_VALIDOS = {
  "noticias-de-hoje": "noticias-de-hoje",
  "politica":         "politica",
  "economia":         "economia",
  "saude":            "saude",
  "meio-ambiente":    "meio-ambiente",
  "cultura":          "cultura",
  "esporte":          "esporte"
};
 
// ── INICIALIZAÇÃO ──
document.addEventListener("DOMContentLoaded", () => {
  renderizarNoticias(filtrarNoticias("noticias-de-hoje"));
  configurarPesquisa();
  configurarSidebar();
});
 
// ── FILTRO POR CATEGORIA ──
function filtrarNoticias(escopo, termoPesquisa = "") {
  let resultado = ESCOPOS_VALIDOS[escopo]
    ? NOTICIAS.filter(n => n.categoria === ESCOPOS_VALIDOS[escopo])
    : NOTICIAS;
 
  if (termoPesquisa.trim() !== "") {
    const termo = termoPesquisa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    resultado = resultado.filter(n => {
      const titulo = n.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const desc   = n.descricao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return titulo.includes(termo) || desc.includes(termo);
    });
  }
 
  return resultado;
}
 
// ── RENDERIZAÇÃO ──
function renderizarNoticias(artigos) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
 
  if (artigos.length === 0) {
    container.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: var(--color-muted);'>Nenhuma notícia encontrada para este termo.</p>";
    return;
  }
 
  artigos.forEach(artigo => {
    container.innerHTML += `
      <article class="news-card">
        ${artigo.imagem
          ? `<img src="${artigo.imagem}" alt="Imagem da notícia" class="fake-img" style="object-fit: cover;">`
          : `<div class="fake-img ${artigo.imagemClasse}"></div>`
        }
        <div class="card-content">
          <h2><a href="${artigo.url}" target="_blank">${artigo.titulo}</a></h2>
          <p>${artigo.descricao}</p>
        </div>
      </article>
    `;
  });
}
 
// ── PESQUISA ──
function configurarPesquisa() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;
 
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const termo = e.target.value;
      const itemAtivo = document.querySelector(".sidebar a.active");
      const escopo = itemAtivo ? itemAtivo.getAttribute("data-escopo") : "noticias-de-hoje";
      renderizarNoticias(filtrarNoticias(escopo, termo));
    }
  });
 
  // Pesquisa em tempo real (opcional)
  searchInput.addEventListener("input", (e) => {
    const termo = e.target.value;
    const itemAtivo = document.querySelector(".sidebar a.active");
    const escopo = itemAtivo ? itemAtivo.getAttribute("data-escopo") : "noticias-de-hoje";
    renderizarNoticias(filtrarNoticias(escopo, termo));
  });
}
 
// ── SIDEBAR ──
function configurarSidebar() {
  const linksSidebar = document.querySelectorAll(".sidebar a");
  const tituloPagina = document.querySelector(".main-header h1");
 
  linksSidebar.forEach(link => {
    // Gera o escopo normalizado a partir do texto do link
    const textoNormalizado = link.innerText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
 
    link.setAttribute("data-escopo", textoNormalizado);
 
    link.addEventListener("click", (e) => {
      e.preventDefault();
 
      linksSidebar.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
 
      if (tituloPagina) tituloPagina.innerText = link.innerText;
 
      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = "";
 
      const escopo = link.getAttribute("data-escopo");
      renderizarNoticias(filtrarNoticias(escopo));
    });
  });
}
 