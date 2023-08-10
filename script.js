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
    "Nenhuma",
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

const aliadoTypes = [
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

const recompensaTypes = [
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

const reviravoltaTypes = [
    "Um aliado…",
    "A complicação…",
    "Uma vítima…",
    "Um inocente…"
];

const verdadeOptions = [
    "… é o verdadeiro Sujeito.",
    "… não é o que parece.",
    "… ajuda o Sujeito secretamente.",
    "… deu informações falsas."
];

const masOptions = [
    "Fez isso pelo bem…",
    "O Sujeito não tem culpa…",
    "É assassinado misteriosamente…",
    "Entra em contato com os Agentes…"
];

const eOptions = [
    "… há mais inocentes mortos.",
    "… há um outro sujeito.",
    "… era tudo parte de um jogo.",
    "… parar o Sujeito tem um impacto negativo.",
    "… tudo foi friamente planejado."
];

const acoesAgentes = [
    "Atacar",
    "Destruir",
    "Encontrar",
    "Recuperar",
    "Capturar",
    "Proteger",
    "Salvar",
    "Explorar",
    "Sabotar"
];

const palavrasChave1 = [
    "Macabro",
    "Governo",
    "Alienação",
    "Religião",
    "Maus tratos",
    "Insatisfação",
    "União",
    "Doutrina",
    "Injustiça",
    "Violência"
];

const palavrasChave2 = [
    "Energia",
    "Engrenagem",
    "Ajuste",
    "Morte",
    "Tristeza",
    "Agonia",
    "Gritos",
    "Fome",
    "Tortura",
    "Motivo"
];

const palavrasChave3 = [
    "Desonra",
    "Glória",
    "Traição",
    "Sangue",
    "Assassinato",
    "Luto",
    "Corrupção",
    "Escuridão",
    "Frio",
    "Armadilha"
];

const palavrasChave4 = [
    "Mofo",
    "Pavor",
    "Correntes",
    "Prisão",
    "Perigo",
    "Segredo",
    "Cadáver",
    "Cemitério",
    "Alma",
    "Profundeza"
];

const palavrasChave5 = [
    "Realidade",
    "Fantoche",
    "Conhecimento",
    "Invocação",
    "Flagelo",
    "Pacto",
    "Velho",
    "Ritual",
    "Sofrimento",
    "Imortal"
];

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
    const aliado = terAliados ? getRandomOption(aliadoTypes) : "Nenhum aliado";
    const terAliadoBonus = terAliados && aliado === "Aliado que concede bônus (Pag. 155)";
    const aliadoBonus = terAliadoBonus ? getRandomOption(aliadoBonusOptions) : "Nenhum bônus";
    const terRecompensas = getRandomOption(recompensasOptions) === "Sim";
    const recompensa = terRecompensas ? getRandomOption(recompensaTypes) : "Nenhuma recompensa";
    const terReviravoltas = getRandomOption(reviravoltasOptions) === "Sim";
    const reviravolta = terReviravoltas ? getRandomOption(reviravoltaTypes) : "Nenhuma reviravolta";
    const verdade = terReviravoltas ? getRandomOption(verdadeOptions) : "";
    const mas = terReviravoltas ? getRandomOption(masOptions) : "";
    const e = terReviravoltas ? getRandomOption(eOptions) : "";

    const acaoAgentes = getRandomOption(acoesAgentes);
    const palavrasChave1Rolada = getRandomOption(palavrasChave1);
    const palavrasChave2Rolada = getRandomOption(palavrasChave2);
    const palavrasChave3Rolada = getRandomOption(palavrasChave3);
    const palavrasChave4Rolada = getRandomOption(palavrasChave4);
    const palavrasChave5Rolada = getRandomOption(palavrasChave5);

    const missionOutput = `
        <p>O ${sujeito} anda ${acao} em ${local}. Isso está relacionado com ${palavrasChave1Rolada}, ${palavrasChave2Rolada}, ${palavrasChave3Rolada}, ${palavrasChave4Rolada} e ${palavrasChave5Rolada}. No entanto, ${complicacao}. Felizmente, ${aliado} ${aliadoBonus}. Na missão, ainda haverá ${recompensa}. O que os Agentes não esperavam é que ${reviravolta}. ${verdade} ${mas} ${e}</p>
    `;

    document.getElementById("missionOutput").innerHTML = missionOutput;
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateMission);
