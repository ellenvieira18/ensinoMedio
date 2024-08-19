// 1. Variáveis de Escopo Global
let vida = 100;
let inventario = {
    orgulho: 0,
    gratidão: 0,
    dedicação: 0,
    alegria: 0,
    superação: 0,
    paixão: 0,
    disciplina: 0,
    realização: 0,
    evolução: 0,
    tristeza: 0,
    cansaço: 0,
    medo: 0
};
let checkpoint = null;
 
// Função para mostrar o status atual
function mostrarStatus() {
    console.log(`Vida: ${vida}`);
    console.log("Inventário:", inventario);
}
 
// 2. Checkpoints
function salvarCheckpoint() {
    checkpoint = {
        vida: vida,
        inventario: {...inventario}
    };
    console.log("Checkpoint salvo!");
}
 
function carregarCheckpoint() {
    if (checkpoint) {
        vida = checkpoint.vida;
        inventario = {...checkpoint.inventario};
        console.log("Jogo carregado do último checkpoint.");
    } else {
        console.log("Nenhum checkpoint salvo.");
    }
}
 
// 3. Prompt: Decisões do Jogador
 
function promptDecisao(mensagem, opcoes) {
    let decisao;
    do {
        decisao = prompt(`${mensagem}\nEscolha: ${opcoes.join(", ")}`).toLowerCase();
    } while (!opcoes.includes(decisao));
    return decisao;
}
 
// 4. Ações Definidas por Funções
 
function boasVindas1() {
    let boasVindas = prompt("Bem vindo(a) ao jogo da vida!");
 
    let decisao = Number(prompt("Você esta preparado (a)? (1) sim ou (2) não"));
 
    if (decisao === 1) {
        console.log("Vamos jogar!");
    } else if (decisao === 2) {
        console.log("Tente novamente.");
        boasVindas1();
    
}
}

function explorarNivel1() {
    
    let intro = prompt("Seu personagem se chama Jamal e nasceu em 1993 no Sudão.");
    console.log ("Seu personagem é o Jamal")
 
    let nivel1 = prompt("Você está no nível 1: Infância no Sudão.");
    console.log("Você está no nível 1: Infância no Sudão.");
    let infancia = prompt("Sua infância foi simples e de muito trabalho.");
    console.log("Sua infância foi simples e de muito trabalho.")
 
    let decisaoImportante = ("Aos 10 anos de idade você teve que tomar uma decisão que pode mudar sua vida.");
    let milicia = prompt("A milícia invadio a vila onde você vivia, matando 97 pessoas incluindo seu pai.");
    console.log("A milícia invadio a vila onde você vivia, matando 97 pessoas incluindo seu pai.");
    let depoisDaMilicia = prompt("Você sua mãe e irmãos começaram uma luta diaria pela sobrevivencia, mas o amor sempre vai prevalecer.");
    let decisao = Number(prompt("O que você faz? (1) Lutar pela sobrevivencia (2) Desistir"));
 
    if (decisao === 1) {
        vida -= 20;
        inventario.cansaço += 1;
        inventario.união += 1;
        console.log("Você decidiu lutar pela sobrevivencia, e não perdeu ponto 20 de vida e ganhou 1 cansaço e 1 união.");
    } else if (decisao === 2) {
        console.log("Você desistiu. Tente novamente.");
        explorarNivel1();
    }
    mostrarStatus();
    salvarCheckpoint();
}
function explorarNivel2() {
    let nivel2 = prompt("Você está no nível 2 - Fuga para Israel.");
    console.log("Você está no nível 2 - Fuga para Israel. ");  
 
    let violencia = prompt("A violencia infelismente sempre foi algo presente na sua vila");
    console.log ("A violencia infelismente sempre foi algo presente na sua vila");
 
    let fugirOuFicar = prompt("Aos 17 anos, a violência se intensificou, e você é forçado a deixar Sudão para buscar um futuro seguro.");
    let decisao1 = Number (prompt("O que você faz? (1) Fugir ou (2) Ficar"));
 
    if (decisao1 === 1) {
        vida -= 30;
        inventario.tristeza += 1;
        inventario.medo += 1;
        console.log("Você decidiu fugir para buscar um futuro seguro, perdeu 30 pontos de vida e ganhou um medo e um tristeza");
    } else if (decisao1 === 2) {
        console.log("Você decidiu ficar. Tente novamente.");
        explorarNivel2();
    }
    mostrarStatus();
    salvarCheckpoint();
}
function explorarNivel3() {
    let nivel3 = prompt("Nível 3 - Entrada no clube de corrida");
    console.log("Nível 3 - Entrada no clube de corrida.");  
 
    let depoisDeFugir = prompt("Após 3 dias caminhando pelo deserto você chegou em Israel");
    console.log ("A violencia infelismente sempre foi algo presente na sua vila");
 
    let emprego = prompt("Você conheceu outros refugiados e conseguiu em emprego como pintor");
    console.log ("Você conheceu outros refugiados e conseguiu em emprego como pintor");
 
    let clubeCorriga = prompt("Um amigo te apresentou um Clube de Corriga que oferece oportunidades para atletas carentes em Israel");
    let decisao2 =  Number (prompt("Você vai aceitar essa oportunidade? (1) Sim ou (2) Não"));
 
    if (decisao2 === 1) {
        vida += 15;
        inventario.gratidão += 1;
        inventario.alegria += 1;
        console.log("Você decidiu aceitar a oportunidade, ganhou 5 pontos de vida, um gratidão e um alegria");
    } else if (decisao2 === 2) {
        console.log("Você decidiu não aceitar. Tente novamente.");
        explorarNivel3();
    }
    mostrarStatus();
    salvarCheckpoint();
}
 
function explorarNivel4() {
    let nivel4 = prompt("Nível 4 - Bolsa de Atleta Refugiado");
    console.log("Nível 4 - Bolsa de Atleta Refugiado");  
 
    let entrouNoClube = prompt("O Clube de Corrida acolheu você, ensinaram o novo idioma e se tornaram uma boa rede de apoio.");
    console.log ("O Clube de Corrida acolheu você, ensinaram o novo idioma e se tornaram uma boa rede de apoio.");
 
    let paixao = prompt("A corrida a longa distancia agora é a sua paixão, é uma forma de superar traumas e encontrar um propósito.");
    console.log ("A corrida a longa distancia agora é a sua paixão, é uma forma de superar traumas e encontrar um propósito.");
 
    let clubeCorriga = prompt("Você ganhou uma propósta para uma bolsa de atleta, e treinar em tempo integral.");
    let decisao3 = Number (prompt("Você vai aceitar a bolsa? (1) Sim ou (2) Não" ));
 
    if (decisao3 === 1) {
        vida += 10;
        inventario.paixão += 1;
        inventario.disciplina += 1;
        inventario.orgulho += 1;
        console.log("Você decidiu aceitar a bolsa de atleta, ganhou um paixão, um disciplina e um orgulho");
    } else if (decisao3 === 2) {
        console.log("Você decidiu não aceitar a bolsa. Tente novamente.");
        explorarNivel4();
    }
    mostrarStatus();
    salvarCheckpoint();
}
 
function explorarNivel5() {
    let nivel5 = prompt("Nível 5 - Jogos Olímpicos");
    console.log("Nível 5 - Jogos Olímpicos");  
 
    let depoisDaBolsa = prompt("A bolsa te permitiu treinar em tempo integral. Esse apoio foi crucial para sua evolução como atleta.");
    console.log ("A bolsa te permitiu treinar em tempo integral. Esse apoio foi crucial para sua evolução como atleta.");
 
    let reconhecimento = prompt("Ja estamos em 2020, desde que que ganheia a bolsa fiu ainda mais recolhecido como um verdadeiro atleta.");
    console.log ("Ja estamos em 2020, desde que que ganheia a bolsa fiu ainda mais recolhecido como um verdadeiro atleta.");
 
    let toquio = prompt ("Durante 4 anos eu venho me dedicando para conseguir chegar nas olimpiadas, você tem certeza que quer competir?")
    let decisao4 = Number (prompt("Você vai competir? (1) Sim ou (2) Não"));
 
    if (decisao4 === 1) {
        vida += 10;
        inventario.realização += 1;
        inventario.orgulho += 1;
        console.log("Você competiu nos 5000m e alcansou seu recorde pessoal de 13'42''98");
    } else if (decisao4 === 2) {
        console.log("Você decidiu não competir. Tente novamente.");
        explorarNivel5();
    }
    mostrarStatus();
    salvarCheckpoint();
}
 
function explorarNivel6() {
    let nivel5 = prompt("Nível 6 - Olimpiada 2024");
    console.log("Nível 6 - Olimpiada 2024");  
 
    let jornada = prompt("O Clube e sua família anfitriã em Israel foram fundamentais na sua jornada até aqui.");
    console.log ("O Clube e sua família anfitriã em Israel foram fundamentais na sua jornada até aqui.");
 
    let paris = prompt ("Durante 3 anos eu venho me dedicando para conseguir chegar nas olimpiadas, você tem certeza que quer competir?");
    let decisao5 = Number (prompt("Você vai competir? (1) Sim ou (2) Não"));
 
    if (decisao5 === 1) {
        vida += 15;
        inventario.realização += 1;
        inventario.orgulho += 1;
        console.log("Você conquistou o 18º lugar na corrida de 10.000m-masculino, e sabe que com ainda mais esforço vai conquistar meu lugar no pódio,");
    } else if (decisao5 === 2) {
        console.log("Você decidiu não competir. Tente novamente.");
        explorarNivel6();
    }
    mostrarStatus();
    salvarCheckpoint();
}
 
 
// 5. Laços de Repetição
function iniciarJogo() {
    console.log("Bem-vindo à jornada de Jamal!");
   
    boasVindas1();
    explorarNivel1();  // Nível 1 - Infância no Sudão
    explorarNivel2();  // Nível 2 - Fuga para Israel
    explorarNivel3();  // Nível 3 - Entrada no clube de corrida
    explorarNivel4();  // Nível 4 - Bolsa de Atleta Refugiado
    explorarNivel5();  // Nível 5 - Jogos Olímpicos
    explorarNivel6();  // Nível 6 - Olimpiada 2024
 
    console.log("Parabéns! Você completou a jornada de Jamal.");
}
 
// Iniciar o Jogo
iniciarJogo();