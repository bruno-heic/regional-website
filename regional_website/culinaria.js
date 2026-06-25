// =========================================================
// Dados dos pratos da Região Norte
// =========================================================
const pratos = {
  "pato-no-tucupi": {
    nome: "Pato no tucupi",
    imagem: "https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-pato-no-tucupi.jpg",
    descricao: "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil. É elaborado com carne de pato selvagem banhada com tucupi - líquido de cor amarela extraído da raiz da mandioca brava - temperado com jambu, erva típica da região Norte.",
    ingredientes: [
      "1 pato inteiro, com cerca de 1,5 kg",
      "1 cebola em cubos",
      "1 cenoura em rodelas",
      "1 alho-poró em rodelas",
      "1 talo de salsão em rodelas",
      "1 folha de louro",
      "1 ramo de tomilho",
      "800 ml de vinho branco",
      "Sal e pimenta-do-reino",
      { titulo: "Para o caldo de pato:" },
      "1 carcaça de pato",
      "1 cebola em cubos",
      "1 cenoura em rodelas",
      "1 alho-poró em rodelas",
      "1 ramo de tomilho",
      "80 ml de óleo de canola",
      { titulo: "Para o caldo de tucupi:" },
      "800 ml de tucupi",
      "300 ml de caldo de pato (acima)",
      "1 maço de jambu limpo (só as folhas)"
    ],
    preparo: [
      {
        titulo: "Caldo de pato",
        passos: [
          "Asse a carcaça de pato no forno a 200ºC, até ficar dourada.",
          "Refogue, em uma panela grande, a cebola, a cenoura, o alho-poró, o salsão e o tomilho no óleo de canola.",
          "Junte a carcaça ao refogado, cubra com 1 litro de água, tampe a panela e leve para ferver por cerca de 40 minutos.",
          "Coa o caldo, separe a quantidade indicada para a receita e o restante pode ser congelado por até 3 meses."
        ]
      },
      {
        titulo: "Pato",
        passos: [
          "Faça uma marinada com a cebola, a cenoura, o alho-poró, o salsão, o louro, o tomilho e o vinho, acrescente o sal e a pimenta-do-reino e o pato. Deixe o pato marinar nesse molho por 24 horas na geladeira.",
          "Retire o pato da geladeira, espere voltar à temperatura ambiente, e asse em forno a 160ºC por cerca de 1h40, até a carne ficar macia e cozida. Desosse o pato.",
          "Em uma panela, ferva o tucupi com o caldo de pato.",
          "Adicione o pato desossado ao caldo para aquecer com as folhas de jambu.",
          "Sirva com farinha d'água ou farinha de mandioca."
        ]
      }
    ]
  },

  "tacaca": {
    nome: "Tacacá",
    imagem: "https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-tacaca.jpg",
    descricao: "Tacacá é uma sopa tradicional da culinária amazônica, servida bem quente em cuias. É preparada com tucupi, goma de mandioca, camarão seco e folhas de jambu, resultando em um caldo encorpado e com o leve formigamento característico do jambu.",
    ingredientes: [
      "1 litro de tucupi",
      "100 g de goma de tapioca (goma para tacacá)",
      "200 g de camarão seco descascado",
      "2 dentes de alho picados",
      "1 maço de folhas de jambu, limpas",
      "Sal a gosto",
      "Pimenta-de-cheiro a gosto (opcional)"
    ],
    preparo: [
      {
        titulo: "Preparo",
        passos: [
          "Em uma panela, leve o tucupi ao fogo com o alho picado e o sal, e deixe cozinhar por cerca de 15 minutos.",
          "Em outra panela com água fervente, escalde rapidamente as folhas de jambu por 1 minuto e reserve.",
          "Dissolva a goma de tapioca em um pouco de água fria até formar uma pasta lisa.",
          "Acrescente a pasta de goma ao tucupi fervente, mexendo sem parar até engrossar e ficar com aspecto de mingau ralo.",
          "Tempere o camarão seco com um pouco do próprio caldo.",
          "Sirva bem quente em cuias, distribuindo o camarão, as folhas de jambu escaldadas e, se desejar, a pimenta-de-cheiro."
        ]
      }
    ]
  },

  "manicoba": {
    nome: "Maniçoba",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7YkOFkYqljs2iZMe2hBYGpNVOOfHXAuy1nPYfeWL3PE_Lk8J9iFwpNh3&s=10",
    descricao: "Maniçoba é conhecida como a 'feijoada paraense'. É feita a partir da maniva, folha moída da mandioca brava, cozida por dias até eliminar suas toxinas naturais, e depois combinada com diversas carnes de porco. É um prato denso, marcante e tradicional das festividades do Pará.",
    ingredientes: [
      "2 kg de maniva moída e já cozida (encontrada pronta em feiras paraenses)",
      "300 g de carne-seca dessalgada",
      "300 g de costela de porco salgada",
      "200 g de bacon em cubos",
      "200 g de linguiça calabresa em rodelas",
      "200 g de paio em rodelas",
      "1 pé de porco (opcional)",
      "1 orelha de porco (opcional)",
      "2 cebolas picadas",
      "4 dentes de alho picados",
      "Pimenta-do-reino a gosto",
      "Óleo para refogar"
    ],
    preparo: [
      {
        titulo: "Preparo",
        passos: [
          "Se a maniva ainda não estiver pré-cozida, cozinhe-a em fogo baixo por, no mínimo, 5 dias, trocando a água diariamente, até eliminar todo o ácido cianídrico natural da planta.",
          "Em uma panela grande, refogue a cebola e o alho no óleo até dourar.",
          "Acrescente as carnes salgadas já dessalgadas e cozidas (carne-seca, costela, pé e orelha de porco) ao refogado.",
          "Adicione o bacon, a linguiça e o paio, e deixe apurar por alguns minutos.",
          "Junte a maniva já cozida e misture bem, deixando cozinhar em fogo baixo por cerca de 1 hora para incorporar os sabores.",
          "Ajuste o sal e a pimenta-do-reino e sirva acompanhada de arroz branco e farinha de mandioca."
        ]
      }
    ]
  },

  "tambaqui": {
    nome: "Tambaqui",
    imagem: "https://static.wixstatic.com/media/540f1d_b22261ba24cf49e4b9e2363ef4091450~mv2.jpg/v1/fill/w_568,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/540f1d_b22261ba24cf49e4b9e2363ef4091450~mv2.jpg",
    descricao: "O tambaqui é um dos peixes mais apreciados da Amazônia. A costela do tambaqui, parte mais gordurosa e suculenta do peixe, é tradicionalmente assada na brasa ou grelhada, resultando em uma carne macia com a pele crocante.",
    ingredientes: [
      "1,5 kg de costela de tambaqui em postas",
      "Suco de 2 limões",
      "4 dentes de alho triturados",
      "1 colher (chá) de páprica",
      "Sal a gosto",
      "Pimenta-do-reino a gosto",
      "Azeite ou óleo para untar",
      "Folhas de coentro para finalizar"
    ],
    preparo: [
      {
        titulo: "Preparo",
        passos: [
          "Tempere as postas de tambaqui com o suco de limão, o alho triturado, a páprica, o sal e a pimenta. Deixe marinar por 30 minutos na geladeira.",
          "Acenda a churrasqueira ou pré-aqueça uma grelha em fogo médio-alto.",
          "Unte a grelha com um pouco de óleo e coloque as postas com a pele voltada para baixo primeiro.",
          "Grelhe por cerca de 8 a 10 minutos de cada lado, até a pele ficar dourada e crocante e a carne se soltar facilmente da espinha.",
          "Finalize com coentro picado e sirva com arroz, farofa e vinagrete."
        ]
      }
    ]
  },

  "caldeirada": {
    nome: "Caldeirada",
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/caldeirada-frutos-do-mar.jpg",
    descricao: "A caldeirada é um cozido de peixe e legumes muito popular na Região Norte, preparado com peixes de água doce, tomate, pimentões e um toque de leite de coco, que dá um sabor suave e característico ao caldo.",
    ingredientes: [
      "1 kg de filé de peixe (tucunaré, dourada ou pescada)",
      "2 tomates em rodelas",
      "1 pimentão verde em rodelas",
      "1 pimentão vermelho em rodelas",
      "1 cebola grande em rodelas",
      "3 dentes de alho picados",
      "200 ml de leite de coco",
      "Suco de 1 limão",
      "Coentro e cebolinha picados",
      "Azeite ou óleo de dendê",
      "Sal e pimenta-do-reino a gosto"
    ],
    preparo: [
      {
        titulo: "Preparo",
        passos: [
          "Tempere o peixe com o suco de limão, sal e pimenta, e deixe descansar por 15 minutos.",
          "Em uma panela larga, faça uma camada com um pouco de azeite, alho, cebola, tomate e pimentões.",
          "Disponha os filés de peixe sobre essa camada e cubra com o restante dos legumes.",
          "Regue com o leite de coco e tampe a panela, deixando cozinhar em fogo médio-baixo por cerca de 20 minutos, sem misturar muito para o peixe não desmanchar.",
          "Finalize com coentro e cebolinha picados e sirva com arroz branco."
        ]
      }
    ]
  },

  "caruru": {
    nome: "Caruru",
    imagem: "https://www.brasildefato.com.br/wp-content/uploads/2024/09/image_processing20210420-10498-w59u8h.jpeg",
    descricao: "O caruru é um prato à base de quiabo, camarão e castanhas, muito presente na culinária do Norte e Nordeste. Tem um sabor marcante, encorpado pelo quiabo e enriquecido pelo azeite de dendê, sendo tradicionalmente servido com arroz e camarões.",
    ingredientes: [
      "500 g de quiabo picado",
      "300 g de camarão limpo",
      "1 cebola picada",
      "3 dentes de alho picados",
      "1 tomate picado",
      "50 g de castanha-de-caju ou amendoim torrado moído",
      "3 colheres (sopa) de azeite de dendê",
      "Coentro picado",
      "Sal e pimenta-de-cheiro a gosto"
    ],
    preparo: [
      {
        titulo: "Preparo",
        passos: [
          "Lave o quiabo e corte em rodelas pequenas.",
          "Em uma panela, refogue a cebola e o alho no azeite de dendê até dourar.",
          "Acrescente o tomate picado e deixe apurar por alguns minutos.",
          "Adicione o quiabo e refogue por cerca de 10 minutos, até murchar e perder parte do seu líquido viscoso.",
          "Junte o camarão e a castanha moída, mexendo bem, e cozinhe por mais 10 minutos em fogo médio.",
          "Ajuste o sal e a pimenta, finalize com coentro picado e sirva com arroz branco."
        ]
      }
    ]
  }
};

const pratosGrid = document.getElementById("pratos-grid");
const viewList = document.getElementById("view-list");
const viewDetail = document.getElementById("view-detail");
const btnBack = document.getElementById("btn-back");

function renderCards() {
  pratosGrid.innerHTML = "";

  Object.keys(pratos).forEach((chave) => {
    const prato = pratos[chave];

    const card = document.createElement("button");
    card.className = "prato-card";
    card.type = "button";
    card.setAttribute("data-prato", chave);
    card.innerHTML = `
      <img src="${prato.imagem}" alt="${prato.nome}">
      <div class="prato-overlay">
        <span class="prato-nome">${prato.nome}</span>
        <span class="ver-mais">Ver mais <span class="material-icons-round">chevron_right</span></span>
      </div>
    `;

    card.addEventListener("click", () => abrirReceita(chave));
    pratosGrid.appendChild(card);
  });
}

function abrirReceita(chave) {
  const prato = pratos[chave];
  if (!prato) return;

  document.getElementById("receita-titulo").textContent = prato.nome;
  document.getElementById("receita-descricao").textContent = prato.descricao;

  const img = document.getElementById("receita-imagem");
  img.src = prato.imagem;
  img.alt = prato.nome;

  // Ingredientes
  const listaIngredientes = document.getElementById("receita-ingredientes");
  listaIngredientes.innerHTML = "";
  prato.ingredientes.forEach((item) => {
    const li = document.createElement("li");
    if (typeof item === "object" && item.titulo) {
      li.textContent = item.titulo;
      li.classList.add("subtitulo");
    } else {
      li.textContent = item;
    }
    listaIngredientes.appendChild(li);
  });

  const preparoContainer = document.getElementById("receita-preparo");
  preparoContainer.innerHTML = "";
  prato.preparo.forEach((bloco) => {
    const blocoEl = document.createElement("div");
    blocoEl.className = "preparo-block";

    const titulo = document.createElement("h4");
    titulo.textContent = bloco.titulo;
    blocoEl.appendChild(titulo);

    const ol = document.createElement("ol");
    ol.className = "preparo-steps";

    bloco.passos.forEach((passo, indice) => {
      const li = document.createElement("li");

      const numero = document.createElement("span");
      numero.className = "step-number";
      numero.textContent = indice + 1;

      const texto = document.createElement("span");
      texto.className = "step-text";
      texto.textContent = passo;

      li.appendChild(numero);
      li.appendChild(texto);
      ol.appendChild(li);
    });

    blocoEl.appendChild(ol);
    preparoContainer.appendChild(blocoEl);
  });

  // Troca de tela
  viewList.hidden = true;
  viewDetail.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function voltarParaLista() {
  viewDetail.hidden = true;
  viewList.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

btnBack.addEventListener("click", voltarParaLista);

renderCards();