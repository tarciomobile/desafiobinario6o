// Elementos da Tela
const terminal = document.getElementById("terminal");
const resultado = document.getElementById("resultado");
const btnExecutar = document.getElementById("btn-run");
const btnClean = document.getElementById("btn-clean");

// Variáveis de Controle
let sala = 0;
let turma = 1; // a = 1 | b = 2 | c = 3

// Comando para interpretar o "enter" no input
terminal.onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13') { // enter
    executarComandosDoTerminal();
  }
}

function sextoanoA() {
  admin();
  turma = 1;
}

function sextoanoB() {
  admin();
  turma = 2;
}

function sextoanoC() {
  admin();
  turma = 3;
}

function admin() {
  limparTerminal();
  mostrarNoTerminal("Você acessou o ponto de origem da transmissão.");
  mostrarNoTerminal("O local possui 4 salas, cada uma com um computador principal.");
  mostrarNoTerminal("Use o comando <u>help</u> no terminal para saber o que é possível fazer nos computadores.");
  mostrarNoTerminal("As salas 1, 2 e 3 estão acessíveis e de algum modo parecem estar conectadas com a sala 4.");
  mostrarNoTerminal("Digite o número da sala que você quer entrar. Por exemplo: sala1");
}

function sala1() {
  sala = 1;
  limparTerminal();
  mostrarNoTerminal("Você acessou o computador da sala 1.");
  mostrarNoTerminal("Digite o comando help para saber o que pode ser feito.");
}

function sala2() {
  sala = 2;
  limparTerminal();
  mostrarNoTerminal("Você acessou o computador da sala 2.");
  mostrarNoTerminal("Digite o comando help para saber o que pode ser feito.");
}

function sala3() {
  sala = 3;
  limparTerminal();
  mostrarNoTerminal("Você acessou o computador da sala 3.");
  mostrarNoTerminal("Digite o comando help para saber o que pode ser feito.");
}

function sala4() {
  sala = 4;
  limparTerminal();
  mostrarNoTerminal("Você acessou o computador da sala 4.");
  mostrarNoTerminal("Esta sala exige uma senha especial.");
  mostrarNoTerminal("Dica: Soma dos resultados dos comandos das salas 1 a 3.");
  mostrarNoTerminal("");
  mostrarNoTerminal("Qual é a senha?");
}

//function sala5() {
//  sala = 5;
//  limparTerminal();
//  mostrarNoTerminal("Você acessou o computador da sala 5.");
//  mostrarNoTerminal("Esta sala exige uma senha especial.");
//  mostrarNoTerminal("Dica: Soma dos resultados dos comandos das salas 1 a 4.");
//  mostrarNoTerminal("");
//  mostrarNoTerminal("Qual é a senha?");
//}


function help() {
  limparTerminal();
  mostrarNoTerminal("\n");
  mostrarNoTerminal("----------------------------------------------------------------");
  mostrarNoTerminal("specs: mostra os dados de hardware do computador");
  mostrarNoTerminal("inspect: monitora o tráfego de rede do computador");
  mostrarNoTerminal("help: mostra os comandos disponíveis no terminal");
  mostrarNoTerminal("dictionary: dicionário dos comandos de comunicação e cálculo do hardware");
  mostrarNoTerminal("table: mostra a conversão de letras para binário");
  mostrarNoTerminal("back: desloga do computador da sala");
  mostrarNoTerminal("----------------------------------------------------------------");
  mostrarNoTerminal("\n");
}

function specs() {
  limparTerminal();
  if(sala === 0) {
    mostrarNoTerminal("Você precisa estar conectado ao computador de uma das salas para ver as especificações.");
  }
  
  if (sala === 1) {
    mostrarNoTerminal(`
      Processador: Intel(R) Core(TM) i7-4790k <br/>
      Memória RAM: 16gb <br/>
      ID do dispositivo: 123DESK12S-12 <br/>
      Sistema Operacional: Windows 10 <br/>
      Arquitetura: 8 bits <br/>
      Versão da BIOS: 2.1 <br/>
      Modo da Bios: UEFI <br/>
    `);
    mostrarNoTerminal("\n");
  }

  if (sala === 2) {
    mostrarNoTerminal(`
      Processador: Intel(R) Core(TM) i5-9054k <br/>
      Memória RAM: 8gb <br/>
      ID do dispositivo: 123DESK12S-13 <br/>
      Sistema Operacional: Ubuntu 13.4 <br/>
      Arquitetura: 8 bits <br/>
      Versão da BIOS: 2.1 <br/>
      Modo da Bios: UEFI <br/>
    `);
    mostrarNoTerminal("\n");
  }
  
  //editar
  if (sala === 3) {
    mostrarNoTerminal(`
      Processador: Intel(R) Core(TM) i7-4790k <br/>
      Memória RAM: 8gb <br/>
      ID do dispositivo: 123DESK12S-14 <br/>
      Sistema Operacional: Machintosh Catalina 12.0 <br/>
      Arquitetura: 8 bits <br/>
      Versão da BIOS: 3.3 <br/>
      Modo da Bios: UEFI <br/>
      mostrarNoTerminal("\n");
    `);
  }

  if (sala === 4) {
    mostrarNoTerminal(`
      Processador: Intel(R) Core(TM) i7-4790k <br/>
      Memória RAM: 32gb <br/>
      ID do dispositivo: 123DESK12S-15 <br/>
      Sistema Operacional: Windows 7 <br/>
      Arquitetura: 8 bits <br/>
      Versão da BIOS: 0.1 <br/>
      Modo da Bios: UEFI <br/>
      mostrarNoTerminal("\n");
    `);
  }
}

function inspect() {
  limparTerminal();
  let message = "";
  if(turma === 1) {
    if (sala === 0) message = "Você precisa estar conectado ao computador de uma das salas para inspecionar."
    if (sala === 1) message = "ADD 10001101  00010011"; // 141 + 19 = 160
    if (sala === 2) message = "MUL 00001111 00000011"; // 15 * 3 = 45
    if (sala === 3) message = "SUB 01100100 00110010"; // 100 - 50 = 50
    //if (sala === 4) message = "GT  00100011 00100010"; // 35 > 34 = 1
  }

  if(turma === 2) {
    if (sala === 0) message = "Você precisa estar conectado ao computador de uma das salas para inspecionar."
    if (sala === 1) message = "MUL 10010110 00000011"; // 25 * 3 = 75
    if (sala === 2) message = "SUB 10000000 01101110"; // 128 - 110 = 18
    if (sala === 3) message = "ADD  00100011 00100010"; // 35 + 34 = 69 (163) / antes era isso: 100 > 50 = 1
    //if (sala === 4) message = "ADD  00100011 00100010"; // 35 + 34 = 69 (163)
  }

  
  if(turma === 3) {
    if (sala === 0) message = "Você precisa estar conectado ao computador de uma das salas para inspecionar."
    if (sala === 1) message = "DIV 11100001 00000011"; // 225 / 3 = 75
    if (sala === 2) message = "ADD 00001111 00000011"; // 15 + 3 = 18
    if (sala === 3) message = "SUB 11001000 01101110"; // 200 - 110 = 90
    //if (sala === 4) message = "ADD  00100011 00100010"; // 35 + 34 = 69 (163)
  }
  
  mostrarNoTerminal(message);
}

function back(){
  sala = 0;
  admin();
}

function dictionary() {
  limparTerminal();
  mostrarNoTerminal("\n");
  mostrarNoTerminal("----------------------------------------------------------------");
  mostrarNoTerminal("ADD: soma dois números binários.");
  mostrarNoTerminal("SUB: subrai dois números binários.");
  mostrarNoTerminal("MUL: multiplica dois números binários.");
  mostrarNoTerminal("DIV: divide dois números binários.");
  mostrarNoTerminal("----------------------------------------------------------------");
  mostrarNoTerminal("\n");
}

function table() {
  limparTerminal();
  mostrarNoTerminal((`
    a 01100001
    b 01100010
    c 01100011
    d 01100100
    e 01100101
    f 01100110
    g 01100111
    h 01101000
    i 01101001
    j 01101010
    k 01101011
    l 01101100
    m 01101101
    n 01101110
    o 01101111
    p 01110000
    q 01110001
    r 01110010
    s 01110011
    t 01110100
    u 01110101
    v 01110110
    w 01110111
    x 01111000
    y 01111001
    z 01111010
    \n
  `));
}

const finalCode1 = [
  { letter: "P", code: "01110000", color: "red"  },
  { letter: "O", code: "01101111", color: "blue" }, // azul -> ordem da letra no alfabeto (15)
  { letter: "R", code: "01110010", color: "red"  },
  { letter: "T", code: "01110100", color: "red"  },
  { letter: "U", code: "01110101", color: "blue" }, // azul -> ordem da letra no alfabeto (21)
  { letter: "G", code: "01100111", color: "red"  },
  { letter: "A", code: "01100001", color: "red"  },
  { letter: "L", code: "01101100", color: "blue" }, // azul -> ordem da letra no alfabeto (12)
]

const finalCode2 = [
  { letter: "E", code: "01100101", color: "red" },
  { letter: "Q", code: "01110001", color: "red" },
  { letter: "U", code: "01110101", color: "red" },
  { letter: "A", code: "01100001", color: "red" },
  { letter: "D", code: "01100100", color: "red" },
  { letter: "O", code: "01101111", color: "red" },
  { letter: "R", code: "01110010", color: "red" },
]

const finalCode3 = [
  { letter: "S", code: "01110011", color: "red" },
  { letter: "E", code: "01100101", color: "red" },
  { letter: "N", code: "01101110", color: "red" },
  { letter: "E", code: "01100101", color: "red" },
  { letter: "G", code: "01100111", color: "red" },
  { letter: "A", code: "01100001", color: "red" },
  { letter: "L", code: "01101100", color: "red" },
]

function mostrarCodigoFinal() {
  limparTerminal();
  mostrarNoTerminal("Mensagem interceptada. Local do ataque.");

  //if(turma === 1) {
  //  let mensagemFinal = finalCode1;
  //}
  //if(turma === 2) {
  //  let mensagemFinal = finalCode2;
  //}
  //if(turma === 3) {
  //  let mensagemFinal = finalCode3;
  //}
  let mensagemFinal = turma === 1 ? finalCode1 : finalCode2;
  mensagemFinal.forEach(({code}) => {
    let msg = code;
    mostrarNoTerminal(msg);
  });

  mostrarNoTerminal("\n");
  mostrarNoTerminal("fim de transmissão.");
}

// botão executar
btnExecutar.addEventListener('click', function() {
  executarComandosDoTerminal();
});

// botão limpar console
btnClean.addEventListener('click', function(){
  limparTerminal();
});

// FUNÇÕES GLOBAIS

function limparTerminal() {
  resultado.textContent = '';
}

function limparEntradaDoUsuario() {
  terminal.value = '';
}

function mostrarNoTerminal(mensagem) {
  resultado.innerHTML = resultado.innerHTML + '</br>';
  resultado.innerHTML = resultado.innerHTML + ' </br> >> ' + mensagem;
}

//provavelmente mudar as dicas
function dica() {
  var dicas = [
    "A Agência só libera acesso aos dados restritos solicitados. Caso seu comando não resulte em nada (ou em erro de permissão), possivelmente os parâmetros estão incorretos.",
    "Não esqueça de usar as aspas para representar um texto (String) nas funções",
    "Muitos comandos devolvem a mensagem em um texto confuso chamado JSON. Use o https://jsonbeautifier.org/ para ver melhor as informações.",
    "Experimente os comandos que estão listados no comando docs()",
    "Muitos comandos precisam de senhas que são fornecidas apenas pela Agência Reguladora da Internet",
    "Ao ver o erro 'is not defined', verifique se você escreveu o comando corretamente (incluindo aspas e parenteses)"
  ];

  const dica = dicas[Math.floor(Math.random()*dicas.length)];
  mostrarNoTerminal(dica);
}

function abrirNovaJanela(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function executarComandosDoTerminal() {
  try { 
    eval(terminal.value + "()");
  } catch(err) {
    //RESPOSTA FINAL FICA AQUI
    //turma 1: 160 + 45 + 50 = 255 | turma 2: 75 + 18 + 69 = 162 | turma 3: 75 + 18 + 90 = 183 | 
    if((terminal.value === "11111111" && turma === 1) || 
       (terminal.value === "10100010" && turma === 2) ||
       (terminal.value === "10110111" && turma === 3)) {
      mostrarCodigoFinal();
    } else {
      mostrarNoTerminal("Não foi possível executar o comando: " + terminal.value);
    }
  } finally {
    limparEntradaDoUsuario();
  }
}
