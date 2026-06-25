document.addEventListener("DOMContentLoaded", () => {
    atualizarData();
    obterCotacao();
    obterClimaPorLocalizacao();
  });
  
  // 1. Atualiza a data do Sub-header automaticamente para o dia de hoje
  function atualizarData() {
    const dataEl = document.getElementById("data-atual");
    if (!dataEl) return;
    
    const opcoes = { weekday: 'long', day: 'numeric', month: 'long' };
    const hoje = new Date().toLocaleDateString('pt-BR', opcoes);
    
    // Deixa a primeira letra maiúscula (ex: Sábado -> Sábado)
    dataEl.textContent = hoje.charAt(0).toUpperCase() + hoje.slice(1);
  }
  
  // 2. Busca cotação do Dólar (AwesomeAPI)
  async function obterCotacao() {
    const cotacaoEl = document.getElementById("cotacao-valor");
    try {
      const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
      if (!response.ok) throw new Error("Erro na requisição da moeda");
      
      const dados = await response.json();
      const valorDolar = parseFloat(dados.USDBRL.bid);
      
      // Formata para o padrão de moeda brasileiro (R$ X,XX)
      cotacaoEl.textContent = valorDolar.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    } catch (error) {
      console.error("Erro ao buscar cotação:", error);
      cotacaoEl.textContent = "Erro ao carregar";
    }
  }
  
  // 3. Captura Localização e busca o Clima (Open-Meteo)
  function obterClimaPorLocalizacao() {
    const climaEl = document.getElementById("clima-valor");
  
    if (!navigator.geolocation) {
      climaEl.textContent = "-- ºC";
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
          const response = await fetch(url);
          if (!response.ok) throw new Error("Erro na requisição do clima");
          
          const dados = await response.json();
          const temperatura = Math.round(dados.current_weather.temperature);
          
          climaEl.textContent = `${temperatura}ºC`;
        } catch (error) {
          console.error("Erro ao buscar clima:", error);
          climaEl.textContent = "Erro";
        }
      },
      (error) => {
        console.warn("Usuário negou a localização. Usando localização padrão (São Paulo).");
        // Fallback para São Paulo caso o usuário negue a permissão
        buscarClimaPadrao(-23.5505, -46.6333);
      }
    );
  }
  
  // Função auxiliar de fallback para o clima
  async function buscarClimaPadrao(lat, lon) {
    const climaEl = document.getElementById("clima-valor");
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const response = await fetch(url);
      const dados = await response.json();
      const temperatura = Math.round(dados.current_weather.temperature);
      climaEl.textContent = `${temperatura}ºC`;
    } catch (e) {
      climaEl.textContent = "-- ºC";
    }
  }