const informanteOptions = [
    "Sobrevivente/Testemunha",
    "Policial",
    "Ocultista",
    "Inteligência da Ordem",
    "Inteligência da Ordem",
    "Inteligência da Ordem"
];

const sujeitoOptions = [
    "Criatura de Sangue",
    "Criatura de Morte",
    "Criatura de Conhecimento",
    "Criatura de Energia",
    "Ordem de Cultistas",
    "Criminosos",
    "Ocultista Poderoso",
    "Item Amaldiçoado",
    "Civil Curioso",
    "Grupo Convicto"
    // ... add more options as needed
];

const acaoOptions = [
    "Buscando Sacrifícios",
    "Invocando Criatura de Sangue",
    "Invocando Criatura de Morte",
    "Invocando Criatura de Conhecimento",
    "Invocando Criatura de Energia",
    "Caçando Agentes da Ordo Realitas",
    "Coletando Itens Paranormais",
    "Aterrorizando",
    "Completando um Ritual"
    // ... add more options as needed
];

const localOptions = [
    "Hospital",
    "Ilha remota",
    "Pequeno vilarejo",
    "Becos e ruelas de grande cidade",
    "Prédio abandonado",
    "Condomínio fechado",
    "Escola",
    "Prédio histórico",
    "Zona industrial da cidade",
    "Zona rural da cidade",
    "Subterrâneo/Esgotos",
    "Estabelecimento Comercial",
    "Floresta",
    "Deserto",
    "Pântano",
    "Montanhas",
    "Cemitério",
    "Cidade Grande",
    "Cidade Pequena"
    // ... add more options as needed
];

const complicacaoOptions = [
    "Combate convencional não é eficaz",
    "Item Amaldiçoado descontrolado",
    "Muitos inocentes afetados",
    "Há um suspeito acusado erroneamente",
    "Uma seita tenta atrapalhar os Agentes",
    "Outros Investigadores tentam atrapalhar",
    "Criminosos tentam atrapalhar os Agentes",
    "“Local” tem difícil acesso",
    "Há armadilhas os esperando",
    "Há emboscadas os esperando",
    "Uma informação está errada (Sujeito, Ação ou Local)",
    "O Sujeito tem muitos recursos"
    // ... add more options as needed
];

const aliadosOptions = [
    "Não",
    "Sim"
];

const aliadoTypeOptions = [
    "Item Amaldiçoado",
    "Civil",
    "Policial",
    "Ocultista",
    "Outro Agente",
    "Um refúgio",
    "Aliado que concede bônus (Pag. 155)"
];

const aliadoBonusOptions = [
    "Cultista",
    "Bolsa de Componentes",
    "Faz-Tudo",
    "Dica Valiosa",
    "Guerrilheiro",
    "Golpe Poderoso",
    "Médico",
    "Bolsa de Componentes (Segundo)"
];

const recompensasOptions = [
    "Não",
    "Sim"
];

const recompensaTypeOptions = [
    "Um nível de Limite de Crédito acima do normal na próxima missão",
    "Uma Arma modificada",
    "Uma Proteção modificada",
    "Um Acessório modificado",
    "Um equipamento de Prestígio I",
    "Exposição Paranormal",
    "Pontos de Prestígio bônus",
    "Item Amaldiçoado"
];

const reviravoltasOptions = [
    "Não",
    "Sim"
];

const reviravoltaQuemOptions = [
    "Um aliado",
    "A complicação",
    "Uma vítima",
    "Um inocente"
];

const reviravoltaVerdadeOptions = [
    "é o verdadeiro Sujeito",
    "não é o que parece",
    "ajuda o Sujeito secretamente",
    "deu informações falsas"
];

const reviravoltaMasOptions = [
    "Fez isso pelo bem",
    "O Sujeito não tem culpa",
    "É assassinado misteriosamente",
    "Entra em contato com os Agentes"
];

const reviravoltaEOptions = [
    "há mais inocentes mortos",
    "há um outro sujeito",
    "era tudo parte de um jogo",
    "parar o Sujeito tem um impacto negativo",
    "tudo foi friamente planejado"
];

// Define other options arrays similarly

function getRandomOption(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function generateMission() {
    const informante = getRandomOption(informanteOptions);
    const sujeito = getRandomOption(sujeitoOptions);
    const acao = getRandomOption(acaoOptions);
    const local = getRandomOption(localOptions);
    const complicacao = getRandomOption(complicacaoOptions);
    const terAliados = getRandomOption(aliadosOptions) === "Sim";
    const aliado = terAliados ? getRandomOption(aliadoTypeOptions) : "Nenhum aliado";
    const terAliadoBonus = terAliados && aliado === "Aliado que concede bônus (Pag. 155)";
    const aliadoBonus = terAliadoBonus ? getRandomOption(aliadoBonusOptions) : "Nenhum bônus";
    const terRecompensas = getRandomOption(recompensasOptions) === "Sim";
    const recompensa = terRecompensas ? getRandomOption(recompensaTypeOptions) : "Nenhuma recompensa";
    const terReviravoltas = getRandomOption(reviravoltasOptions) === "Sim";
    const reviravolta = terReviravoltas ? generateReviravolta() : "Nenhuma reviravolta";

    const missionOutput = `
        <p>O ${sujeito} anda ${acao} em ${local}. Porém ${complicacao}. Felizmente há ${aliado} ${aliadoBonus}. Na missão ainda haverá ${recompensa}. O que os Agentes não esperavam é que ${reviravolta}.</p>
    `;

    document.getElementById("missionOutput").innerHTML = missionOutput;
}

function generateReviravolta() {
    const quem = getRandomOption(reviravoltaQuemOptions);
    const naVerdade = getRandomOption(reviravoltaVerdadeOptions);
    const mas = getRandomOption(reviravoltaMasOptions);
    const e = getRandomOption(reviravoltaEOptions);

    return `Um aliado ${quem} na verdade ${naVerdade}. Mas ${mas}. E ${e}.`;
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateMission);
