const cartas = [
    {
        nome: "Guerreiro",
        imagem: "http://darksouls.wdfiles.com/local--files/classimages/Warrior.png",
        atributos: {
            ataque: 9,
            defesa: 8,
            magia: 1
        }
    },
    {
        nome: "Cavaleiro",
        imagem: "http://darksouls.wdfiles.com/local--files/classimages/Knight.png",
        atributos: {
            ataque: 7,
            defesa: 7,
            magia: 6
        }
    },
    {
        nome: "Andarilho",
        imagem:
            "http://darksouls.wdfiles.com/local--files/classimages/Wanderer.png",
        atributos: {
            ataque: 7,
            defesa: 5,
            magia: 5
        }
    },
    {
        nome: "Ladrão",
        imagem: "http://darksouls.wdfiles.com/local--files/classimages/Thief.png",
        atributos: {
            ataque: 7,
            defesa: 5,
            magia: 3
        }
    },
    {
        nome: "Bandido",
        imagem: "http://darksouls.wdfiles.com/local--files/classimages/Bandit.png",
        atributos: {
            ataque: 9,
            defesa: 5,
            magia: 4
        }
    },
    {
        nome: "Caçador",
        imagem: "http://darksouls.wdfiles.com/local--files/classimages/Hunter.png",
        atributos: {
            ataque: 7,
            defesa: 6,
            magia: 3
        }
    },
    {
        nome: "Feiticeiro",
        imagem:
            "http://darksouls.wdfiles.com/local--files/classimages/Sorceror.png",
        atributos: {
            ataque: 3,
            defesa: 5,
            magia: 10
        }
    },
    {
        nome: "Piromaníaco",
        imagem:
            "http://darksouls.wdfiles.com/local--files/classimages/Pyromancer.png",
        atributos: {
            ataque: 5,
            defesa: 6,
            magia: 10
        }
    },
    {
        nome: "Clérigo",
        imagem: "http://darksouls.wdfiles.com/local--files/classimages/Cleric.png",
        atributos: {
            ataque: 5,
            defesa: 5,
            magia: 10
        }
    },
    {
        nome: "Depravado",
        imagem:
            "http://darksouls.wdfiles.com/local--files/classimages/Deprived.png",
        atributos: {
            ataque: 6,
            defesa: 2,
            magia: 2
        }
    }
];

let cartaJogador;
let cartaMaquina;
const numCartas = cartas.length;

function sortearCarta() {
    const numCartaMaquina = parseInt(Math.random() * numCartas);
    cartaMaquina = cartas[numCartaMaquina];

    let numCartaJogador = parseInt(Math.random() * numCartas);
    while (numCartaJogador == numCartaMaquina) {
        numCartaJogador = parseInt(Math.random() * numCartas);
    }
    cartaJogador = cartas[numCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    let mensagemEscolha = document.getElementById("mensagem-escolha");
    mensagemEscolha.innerHTML = "Escolha seu atributo!";
    exibirCartaJogador();
}

function obterAtributo() {
    let atributosBtnRadio = document.getElementsByName("atributo");

    for (let i = 0; i < atributosBtnRadio.length; i++) {
        if (atributosBtnRadio[i].checked) {
            return atributosBtnRadio[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obterAtributo();
    let divResultado = document.getElementById("resultado");

    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    // if (atributoSelecionado != undefined) {
    //     document.getElementById("btnJogar").disabled = true;
    // }

    if (atributoSelecionado == null || atributoSelecionado == undefined) {
        mensagemResultado =
            "<p class='resultado-final'>Escolha um atributo para utilizar</p>";
    } else if (valorCartaJogador > valorCartaMaquina) {
        mensagemResultado =
            "<p class='resultado-final'>Você derrotou o inimigo</p>";
        document.getElementById("btnJogar").disabled = true;
        exibirCartaMaquina();
    } else if (valorCartaMaquina > valorCartaJogador) {
        mensagemResultado = "<p class='resultado-final'>Você foi derrotado</p>";
        document.getElementById("btnJogar").disabled = true;
        exibirCartaMaquina();
    } else {
        mensagemResultado = "<p class='resultado-final'>Empate</p>";
        document.getElementById("btnJogar").disabled = true;
        exibirCartaMaquina();
    }
    
    divResultado.innerHTML = mensagemResultado;
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    let moldura =
        "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' class='cartas'>";
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    let moldura =
        "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' class='cartas'>";
    let tagHTML = "<div id='opcoes' class='carta-status'>";

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value='" +
            atributo +
            "'>" +
            atributo +
            " " +
            cartaMaquina.atributos[atributo] +
            "</p>";
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
