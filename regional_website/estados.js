
const estados = [
  {
    id: 'ac',
    nome: 'Acre (AC)',
    resumo: 'Estado localizado no extremo sudoeste da Amazônia brasileira, conhecido pela floresta, cultura ribeirinha e sua história de luta pela autonomia.',
    capital: 'Rio Branco',
    area: '164.123 km²',
    populacao: '906 mil hab.',
    pib: 'R$ 16 bi',
    flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7cIZmcwdFmJwvVzkI_qO3dUojrY1j8JD3jmwaTjyEQ&s',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDsTHzEIASqkGG2k9G2wdxg2HC61wRbDSgukByfXNr3AItjeJDGfgRiE&s=10',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Acre_in_Brazil.svg/330px-Acre_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'O Acre foi incorporado ao Brasil in 1903 após o Tratado de Petrópolis, que encerrou um conflito com a Bolívia. Antes da cessão, a região era disputada por seringueiros brasileiros que já habitavam o território. A chamada Revolução Acreana liderada por Plácido de Castro foi decisiva para a annexação.' },
      { titulo: 'Dados gerais', texto: 'O estado possui 22 municípios e tem como capital Rio Branco. Faz fronteira com o Peru e a Bolívia, além dos estados do Amazonas e Rondônia. Sua bandeira traz a faixa verde representando a floresta, a faixa vermelha o sangue dos que lutaram pela independência e a estrela a unidade nacional.' },
      { titulo: 'Localização geográfica', texto: 'Situado no extremo sudoeste da Amazônia Legal, o Acre é cortado pelos rios Juruá, Purus e Acre. Sua vegetação é predominantemente de floresta tropical densa, com grande biodiversidade. Faz fronteira internacional com Peru e Bolívia, o que confere ao estado uma posição estratégica no eixo Sul-Americano.' },
      { titulo: 'Economia', texto: 'A economia acreana baseia-se na pecuária extensiva, na extração de borracha e castanha-do-brasil, no funcionalismo público e no comércio. O ecoturismo e as políticas de pagamento por serviços ambientais vêm ganhando espaço. O PIB per capita ainda é um dos menores do país, mas o estado avança em indicadores sociais.' },
      { titulo: 'Demografia', texto: 'A população acreana é marcada pela miscigenação entre indígenas, nordestinos que vieram trabalhar nos seringais e descendentes de populações andinas vindas dos países vizinhos. Cerca de 70% dos habitantes vivem em área urbana. O estado abriga cerca de 15 povos indígenas em seus territórios demarcados.' },
    ]
  },
  {
    id: 'ap',
    nome: 'Amapá (AP)',
    resumo: 'Único estado brasileiro localizado quase inteiramente acima da linha do Equador, com expressiva área de florestas protegidas e influência cultural francesa.',
    capital: 'Macapá',
    area: '142.828 km²',
    populacao: '877 mil hab.',
    pib: 'R$ 17 bi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg',
    foto: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/macapa08.jpg',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Amapa_in_Brazil.svg/330px-Amapa_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'O Amapá foi território federal até 1988, quando a Constituição o elevou à categoria de estado. Sua história colonial é marcada pela presença portuguesa, francesa e holandesa, devido à sua posição estratégica na foz do Amazonas e fronteira com a Guiana Francesa.' },
      { titulo: 'Dados gerais', texto: 'O estado tem 16 municípios e é cortado pela linha do Equador, passando exatamente por Macapá. É o único estado brasileiro cuja capital fica na margem norte do Rio Amazonas. Mais de 70% de seu território é formado por áreas protegidas — florestas nacionais, reservas e terras indígenas.' },
      { titulo: 'Localização geográfica', texto: 'Localizado no extremo norte do Brasil, o Amapá faz fronteira com a Guiana Francesa e o Suriname, além de ter saída para o Oceano Atlântico. O Rio Amazonas delimita boa parte de sua fronteira sul com o Pará. Sua posição próxima ao equador resulta em clima equatorial quente e úmido ao longo de todo o ano.' },
      { titulo: 'Economia', texto: 'A economia amapaense tem forte dependência do setor público. O manganês extraído da Serra do Navio foi historicamente importante. Hoje crescem o setor de serviços, a pesca e o potencial ecoturístico. A fronteira com a Guiana Francesa também movimenta comércio informal e trocas culturais.' },
      { titulo: 'Demografia', texto: 'A população é jovem e majoritariamente urbana, concentrada em Macapá e Santana. Há influência cultural marcante dos povos indígenas, dos quilombolas e da Guiana Francesa. O estado recebe fluxo migratório de haitianos e venezuelanos, o que enriquece ainda mais o perfil multicultural amapaense.' },
    ]
  },
  {
    id: 'am',
    nome: 'Amazonas (AM)',
    resumo: 'O maior estado do Brasil em área, lar da maior floresta tropical do mundo e de uma diversidade cultural e biológica sem paralelo no planeta.',
    capital: 'Manaus',
    area: '1.559.159 km²',
    populacao: '4,2 milhões',
    pib: 'R$ 106 bi',
    flag: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/cidadania-fiscal/naf/nucleos/arquivos-e-imagens/amazonas.png/@@images/image.png',
    foto: 'https://blog.123milhas.com/wp-content/uploads/2022/07/conheca-o-estado-do-amazonas-historia-turismo-e-cultura-rio-amazonas-conexao123.jpeg',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Amazonas_in_Brazil.svg/330px-Amazonas_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'O Amazonas teve sua história marcada pelo ciclo da borracha no final do século XIX e início do XX, período em que Manaus se tornou uma das cidades mais ricas do mundo, simbolizado pela construção do Teatro Amazonas. Antes disso, foi palco de missões jesuítas e do encontro de centenas de povos indígenas com os colonizadores europeus.' },
      { titulo: 'Dados gerais', texto: 'Com 62 municípios e área de 1,5 milhão de km², o Amazonas é maior que muitos países. Abriga a Zona Franca de Manaus, polo industrial que atrai empresas de todo o mundo com incentivos fiscais especiais, sendo referência em produção de eletrônicos, motocicletas e eletrodomésticos.' },
      { titulo: 'Localização geográfica', texto: 'O estado ocupa a porção centro-oeste da Amazônia e é banhado por rios fundamentais como o Rio Negro, o Solimões e o Juruá. O famoso "Encontro das Águas", onde o Rio Negro escuro encontra o Solimões barrento sem se misturar por quilômetros, está localizado em Manaus e é uma das maiores atrações turísticas da região.' },
      { titulo: 'Economia', texto: 'Além da Zona Franca de Manaus, a economia amazonense inclui a extração madeireira controlada, a pesca, o turismo ecológico e o extrativismo de produtos florestais. O estado recebe investimentos crescentes em biotecnologia e bioeconomia, apostando na riqueza da biodiversidade amazônica como vetor de desenvolvimento sustentável.' },
      { titulo: 'Demografia', texto: 'Com mais de 4 milhões de habitantes, cerca de 80% vivem em área urbana. Manaus concentra a maior parte da população. O estado abriga o maior número de povos indígenas do Brasil — são mais de 65 povos, muitos em isolamento voluntário. A presença nordestina, boliviana e peruana também é significativa na composição cultural.' },
    ]
  },
  {
    id: 'pa',
    nome: 'Pará (PA)',
    resumo: 'Segundo maior estado do Brasil, com imensas riquezas naturais, minerais e culturais, além da capital Belém, portal de entrada para a Amazônia.',
    capital: 'Belém',
    area: '1.247.955 km²',
    populacao: '8,8 milhões',
    pib: 'R$ 172 bi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg',
    foto: 'https://agenciapara.com.br/midias/2023/grandes/16933_92e5409a-49c1-9aa7-0faf-44c3e1176831.jpg',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Para_in_Brazil.svg/330px-Para_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'Belém foi fundada em 1616 como base de defesa da entrada da Amazônia. O Pará teve papel central na Cabanagem (1835–1840), revolta popular que envolveu indígenas, mestiços e pobres contra a elite dominante, sendo um dos episódios mais sangrentos da história brasileira com estimativa de 30 mil mortos.' },
      { titulo: 'Dados gerais', texto: 'Com 144 municípios, o Pará é o segundo maior estado em área do Brasil. Abriga a Serra dos Carajás, com as maiores reservas de minério de ferro do mundo, exploradas pela Vale. Belém é conhecida pela arquitetura colonial, pelo Mercado Ver-o-Peso e pela culinária única baseada em ingredientes amazônicos.' },
      { titulo: 'Localização geográfica', texto: 'O Pará é banhado pelo Rio Amazonas e seus inúmeros afluentes, com extenso litoral atlântico. A Ilha de Marajó, localizada na foz do Amazonas, é a maior ilha fluviomarinha do mundo. O estado faz fronteira com nove estados brasileiros e com o Suriname e a Guiana.' },
      { titulo: 'Economia', texto: 'A mineração é o principal vetor econômico, com destaque para ferro, cobre, ouro e bauxita. A agropecuária, especialmente a soja e a pecuária, avança sobre áreas desmatadas, gerando debates sobre sustentabilidade. O turismo ecológico e gastronômico cresce, especialmente após Belém ser escolhida sede da COP30 em 2025.' },
      { titulo: 'Demografia', texto: 'O Pará tem quase 9 milhões de habitantes, com alta concentração na região metropolitana de Belém. É o estado com maior número de municípios da Amazônia. A população é diversa: indígenas, afrodescendentes, migrantes nordestinos e japoneses que vieram trabalhar na agricultura compõem o mosaico cultural paraense.' },
    ]
  },
  {
    id: 'ro',
    nome: 'Rondônia (RO)',
    resumo: 'Estado marcado pela colonização recente, pela diversidade de migrantes de todo o Brasil e pela fronteira com a Bolívia, com forte economia agropecuária.',
    capital: 'Porto Velho',
    area: '237.590 km²',
    populacao: '1,8 milhão',
    pib: 'R$ 46 bi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Rond%C3%B4nia.svg/1280px-Bandeira_de_Rond%C3%B4nia.svg.png',
    foto: 'https://blog.123milhas.com/wp-content/uploads/2022/09/conheca-o-estado-de-rondonia-historia-turismo-e-mais-rio-guapore-conexao123.jpg',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rondonia_in_Brazil.svg/330px-Rondonia_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'Rondônia foi criada como território federal em 1943 e se tornou estado apenas em 1981. Seu nome homenageia o Marechal Cândido Rondon, pioneiro da integração dos povos indígenas. A colonização acelerada nas décadas de 1970 e 1980, incentivada pelo governo militar, trouxe levas de migrantes do Sul e Centro-Oeste, transformando a paisagem social e florestal do estado.' },
      { titulo: 'Dados gerais', texto: 'Com 52 municípios, Rondônia tem como capital Porto Velho, às margens do Rio Madeira. O Complexo Hidrelétrico do Rio Madeira, formado pelas usinas de Jirau e Santo Antônio, é um dos maiores projetos energéticos do Brasil e gerou grande debate ambiental e social.' },
      { titulo: 'Localização geográfica', texto: 'Localizado no sudoeste da Amazônia, Rondônia faz fronteira com a Bolívia a oeste. O Rio Madeira é a principal via de transporte e energia. O estado possui um dos maiores índices de desmatamento histórico da Amazônia, consequência da ocupação agrária intensa nas décadas passadas.' },
      { titulo: 'Economia', texto: 'A agropecuária é o pilar da economia rondoniense — o estado é grande produtor de carne bovina, leite, soja e café. A extração madeireira e a geração de energia hidrelétrica também são relevantes. O comércio com a Bolívia movimenta a região de fronteira, especialmente em Guajará-Mirim.' },
      { titulo: 'Demografia', texto: 'Rondônia tem população heterogênea, resultado da colonização dirigida: gaúchos, paranaenses, paulistas e nordestinos convivem com povos indígenas e comunidades ribeirinhas. Essa diversidade se reflete na culinária, nos dialetos e nas festas populares, tornando o estado um microcosmo do Brasil.' },
    ]
  },
  {
    id: 'rr',
    nome: 'Roraima (RR)',
    resumo: 'O estado mais ao norte do Brasil, com rica presença indígena, fronteiras com Venezuela e Guiana, e o Monte Roraima como símbolo geográfico e cultural.',
    capital: 'Boa Vista',
    area: '224.300 km²',
    populacao: '652 mil hab.',
    pib: 'R$ 14 bi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg',
    foto: 'https://www.visiteamazonia.com.br/_next/image/?url=https%3A%2F%2Fd2bv8dtly8iz1m.cloudfront.net%2Famazonia_v2%2Froraima_2_eafb93a048.jpg&w=1440&q=85',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Roraima_in_Brazil.svg/330px-Roraima_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'Roraima foi território federal até 1988 e é o estado mais jovem do Brasil. Sua história é marcada pela presença indígena milenar — os Yanomami, Macuxi e Wapixana são povos fundamentais para a identidade roraimense. A corrida pelo ouro na Terra Indígena Yanomami nos anos 1980 gerou uma crisis humanitária ainda não completamente resolvida.' },
      { titulo: 'Dados gerais', texto: 'Com apenas 15 municípios, Roraima é o estado menos populoso do Brasil. Mais de 46% do território é formado por terras indígenas e unidades de conservação. Boa Vista é a única capital brasileira localizada completamente ao norte da linha do Equador e tem uma malha viária planejada em estilo radial.' },
      { titulo: 'Localização geográfica', texto: 'Roraima faz fronteira com Venezuela e Guiana, e é o único estado brasileiro que faz divisa com dois países e não possui saída para o mar ou para um rio navegável de grande porte. O Monte Roraima, de onde o estado tira seu nome, é um tepui — formação rochosa de topo plano — compartilhado com Venezuela e Guiana.' },
      { titulo: 'Economia', texto: 'A economia roraimense é fortemente dependente dos repasses federais e do funcionalismo público. O garimpo ilegal ainda é uma atividade relevante, especialmente nas terras indígenas. A agropecuária cresce nas áreas de savana (lavrado). A chegada de imigrantes venezuelanos desde 2015 impactou o mercado de trabalho e a dinâmica econômica local.' },
      { titulo: 'Demografia', texto: 'Roraima tem a menor população entre os estados do Norte. A chegada massiva de venezuelanos — mais de 60 mil vivem no estado — tornou Boa Vista uma cidade com dinâmica migratória intensa. Os povos Yanomami vivem numa das maiores terras indígenas demarcadas do mundo, com mais de 9 milhões de hectares.' },
    ]
  },
  {
    id: 'to',
    nome: 'Tocantins (TO)',
    resumo: 'O mais jovem dos estados brasileiros, criado em 1988, une o cerrado ao norte com influências amazônicas, com o Jalapão como destaque natural e turístico.',
    capital: 'Palmas',
    area: '277.720 km²',
    populacao: '1,6 milhão',
    pib: 'R$ 42 bi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandeira_do_Tocantins.svg/1280px-Bandeira_do_Tocantins.svg.png',
    foto: 'https://www.viagensecaminhos.com/wp-content/uploads/2022/06/miracema-do-tocantins-praia-do-funil.jpg',
    mapa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tocantins_in_Brazil.svg/330px-Tocantins_in_Brazil.svg.png',
    sections: [
      { titulo: 'História', texto: 'Tocantins foi desmembrado de Goiás pela Constituição de 1988 e é o estado mais jovem do Brasil. Sua capital, Palmas, foi a última cidade planejada do século XX a ser construída no país. A região historicamente foi habitada por povos Xerente, Karajá e Javaé, cujas tradições resistem e enriquecem a cultura local.' },
      { titulo: 'Dados gerais', texto: 'Com 139 municípios, Tocantins tem como capital Palmas, planejada e inaugurada em 1990. O estado é banhado pelo Rio Tocantins e pelo Rio Araguaia, que separa Tocantins de Goiás e Mato Grosso. A Ilha do Bananal, no Rio Araguaia, é a maior ilha fluvial do mundo e abriga o Parque Nacional do Araguaia.' },
      { titulo: 'Localização geográfica', texto: 'Tocantins é o único estado da região Norte que não pertence à Amazônia Legal histórica — apesar de atualmente ser considerado parte dela. Sua posição central no Brasil, fazendo fronteira com 6 estados, coloca-o como ponto de passagem e integração entre o cerrado central e a floresta amazônica.' },
      { titulo: 'Economia', texto: 'A agropecuária é o motor da economia tocantinense — o estado é grande produtor de soja, milho e carne bovina. O setor de serviços cresce em Palmas. O turismo ecológico no Jalapão, com suas dunas de areia dourada e cachoeiras cristalinas, posiciona o estado como destino de ecoturismo de classe mundial.' },
      { titulo: 'Demografia', texto: 'Com 1,6 milhão de habitantes, Tocantins tem perfil demográfico jovem e urbano. Palmas concentra quase 30% da população estadual. A miscigenação entre goianos, nordestinos e populações indígenas deu ao estado uma identidade cultural singular, expressa nas festas de vaquejada, nas canções de viola e na culinária do cerrado.' },
    ]
  }
];

// ── RENDER LIST ───────────────────────────────────────────────
function renderList() {
  const container = document.getElementById('estados-list');
  container.innerHTML = '';
  estados.forEach((e, i) => {
    const card = document.createElement('div');
    card.className = 'estado-card';
    card.innerHTML = `
      <div class="estado-flag">
        <img src="${e.flag}" alt="Bandeira de ${e.nome}" />
      </div>
      <div class="estado-info">
        <h3>${e.nome}</h3>
        <p>${e.resumo}</p>
      </div>
      <button class="btn-saiba" data-idx="${i}">Saiba mais</button>
    `;
    card.querySelector('.btn-saiba').addEventListener('click', () => openDetail(i));
    card.addEventListener('click', (ev) => {
      if (!ev.target.classList.contains('btn-saiba')) openDetail(i);
    });
    container.appendChild(card);
  });
}

// ── RENDER DETAIL ─────────────────────────────────────────────
function openDetail(idx) {
  const e = estados[idx];

  document.getElementById('detail-title').textContent = e.nome;
  document.getElementById('detail-intro').textContent = e.resumo;

  // chips
  const chips = document.getElementById('detail-chips');
  chips.innerHTML = `
    <div class="data-chip"><span>${e.capital}</span>Capital</div>
    <div class="data-chip"><span>${e.area}</span>Área</div>
    <div class="data-chip"><span>${e.populacao}</span>População</div>
    <div class="data-chip"><span>${e.pib}</span>PIB estimado</div>
  `;

  // images
  const imgs = document.getElementById('detail-images');
  imgs.innerHTML = `
    <div class="side-flag-card">
      <img src="${e.flag}" alt="Bandeira de ${e.nome}" />
    </div>
    <div class="side-img-card">
      <img src="${e.foto}" alt="Foto de ${e.nome}" onerror="this.style.display='none'"/>
    </div>
    <div class="side-img-card">
      <img src="${e.mapa}" alt="Mapa de ${e.nome}" onerror="this.style.display='none'"/>
    </div>
  `;

  // sections
  const secs = document.getElementById('detail-sections');
  secs.innerHTML = '';
  e.sections.forEach((s, i) => {
    const sec = document.createElement('div');
    sec.className = 'detail-section';
    sec.innerHTML = `<h2>${s.titulo}</h2><p>${s.texto}</p>`;
    secs.appendChild(sec);
    if (i < e.sections.length - 1) {
      const div = document.createElement('div');
      div.className = 'detail-divider';
      div.innerHTML = '<hr>';
      secs.appendChild(div);
    }
  });

  document.getElementById('view-list').style.display = 'none';
  document.getElementById('view-detail').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── BACK ──────────────────────────────────────────────────────
document.getElementById('btn-back').addEventListener('click', () => {
  document.getElementById('view-detail').style.display = 'none';
  document.getElementById('view-list').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── DATE ──────────────────────────────────────────────────────
const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const now = new Date();
document.getElementById('data-atual').textContent =
  `${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]}`;

// ── INIT ──────────────────────────────────────────────────────
renderList();