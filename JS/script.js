
pagina = window.location.pathname.split("/").pop().split(".").at(0).split("-").at(0);
idioma = window.location.pathname.split("-").pop().split(".").at(0);

if (idioma != "ingles") {
    idioma = "pt-br";
}

if (pagina == "galeria") {
    lightbox();
}


//Scroll da nav

let ScrollAnterior = 0;

const nav = document.getElementById("nav")

window.addEventListener("scroll", () => {

    const scrollAtual = window.pageYOffset;

    if (scrollAtual <= 0) {
        nav.classList.remove("scrollParaCima")
    }

    if (scrollAtual > ScrollAnterior && !nav.classList.contains("scrollParaBaixo")) {
        nav.classList.remove("scrollParaCima")
        nav.classList.add("scrollParaBaixo")
    }

    if (scrollAtual < ScrollAnterior && nav.classList.contains("scrollParaBaixo")) {
        nav.classList.remove("scrollParaBaixo")
        nav.classList.add("scrollParaCima")
    }

    ScrollAnterior = scrollAtual;
});

//Coisa de Deixar os tamanhos certos no Celular

mudaMargem();
mudaNav();
if (pagina == "index") {
    mudaMargemHome();
}
if (pagina == "galeria") {
    mudaTamanhoBotaoDaLightbox();
    mudaMargemGaleria();
}
if (pagina == "orcamentos") {
    mudaMargemOrcamento()
}

addEventListener("resize", () => {
    mudaMargem();
    mudaNav();
    if (pagina == "index") {
        mudaMargemHome();
    }
    if (pagina == "galeria") {
        mudaTamanhoBotaoDaLightbox();
        mudaMargemGaleria();
    }
    if (pagina == "orcamentos") {
        mudaMargemOrcamento()
    }
});

function mudaNav() {

    const tituloNav = document.getElementById("titulo-nav");
    const orcamentosAncoraNav = document.getElementById("orcamentos-ancora-nav");
    const orcamentosAncoraNavAtivo = document.getElementById("orcamentos-ancora-nav-ativo");

    if (window.innerWidth < 650) {
        tituloNav.innerHTML = "";
    } else {
        if (idioma == "pt-br") {
            tituloNav.innerHTML = "Pousada Curitiba";
        } else if (idioma == "ingles") {
            tituloNav.innerHTML = "Curitiba Lodge";
        }
    }
    if (window.innerWidth < 990) {
        if (orcamentosAncoraNav) {
            orcamentosAncoraNav.style.setProperty("margin", "0");
        }
        if (orcamentosAncoraNavAtivo) {
            orcamentosAncoraNavAtivo.style.setProperty("margin", "0");
        }
    } else {
        if (orcamentosAncoraNav) {
            orcamentosAncoraNav.style.setProperty("margin", "0 0.5em 0 0.5em");
        }
        if (orcamentosAncoraNavAtivo) {
            orcamentosAncoraNavAtivo.style.setProperty("margin", "0 0.5em 0 0.5em");
        }
    }
}

function mudaMargem() {

    if (window.innerWidth / window.innerHeight < 1) {
        document.documentElement.style.setProperty("--margin-redes-sociais", "0");
    } else {
        document.documentElement.style.setProperty("--margin-redes-sociais", "25%");
    }
}

function mudaMargemHome() {

    const localContainer = document.getElementById("local-container");
    const imagensCarrossel = document.querySelectorAll(".imagem-carrossel");
    const setasCarrossel = document.querySelectorAll(".seta-carrossel");
    const imagemMapaCaixa = document.getElementById("imagem-mapa-caixa")
    const imagemMapa = document.getElementById("imagem-mapa")

    if (window.innerWidth / window.innerHeight < 1441 / 701) {
        localContainer.style.setProperty("display", "grid");
        imagemMapaCaixa.style.setProperty("padding", "5%")
        imagemMapa.classList.add("w-50");
        imagemMapa.classList.remove("w-100");
    } else {
        localContainer.style.setProperty("display", "flex");
        imagemMapaCaixa.style.setProperty("padding", "0")
        imagemMapa.classList.add("w-100");
        imagemMapa.classList.remove("w-50");
    }

    if (window.innerWidth < 768) {
        setasCarrossel.forEach(setaCarrossel => {
            setaCarrossel.classList.add("inativa");
        })
        imagensCarrossel.forEach(imagemCarrossel => {
            imagemCarrossel.classList.add("w-100");
            imagemCarrossel.classList.remove("w-50");
        })
    } else {
        setasCarrossel.forEach(setaCarrossel => {
            setaCarrossel.classList.remove("inativa");
        })
        imagensCarrossel.forEach(imagemCarrossel => {
            imagemCarrossel.classList.add("w-50");
            imagemCarrossel.classList.remove("w-100");
        })
    }
}

function mudaMargemGaleria() {

    const galeria = document.getElementById("galeria-container");
    const tituloImagemGaleria = document.querySelectorAll(".titulo-imagem-galeria");

    if (window.innerWidth / window.innerHeight < 1) {
        galeria.classList.remove("row-cols-4");
        galeria.classList.add("row-cols-2");
        galeria.style.setProperty("margin-left", "auto")
        galeria.style.setProperty("margin-right", "auto")
        tituloImagemGaleria.forEach(tituloImagem => {
            tituloImagem.style.setProperty("display", "none");
        })

    } else {
        galeria.classList.remove("row-cols-2");
        galeria.classList.add("row-cols-4");
        galeria.style.setProperty("margin-left", "3em")
        galeria.style.setProperty("margin-right", "3em")
        tituloImagemGaleria.forEach(tituloImagem => {
            tituloImagem.style.setProperty("display", "block");
        })
    }
}

function mudaMargemOrcamento() {

    if (window.innerWidth / window.innerHeight < 1) {
        document.documentElement.style.setProperty("--margin-formulario", "5%");
    } else {
        document.documentElement.style.setProperty("--margin-formulario", "35%");
    }
}

function mudaTamanhoBotaoDaLightbox() {

    const img = document.getElementById("lightbox-imagem");

    const lightboxTituloIimagem = document.getElementById("lightbox-titulo-imagem");
    const lightboxIndice = document.getElementById("lightbox-indice");
    document.documentElement.style.setProperty("--tamhanho-botao-lightbox", ((window.innerWidth / window.innerHeight * 81 / 16) + "em"))
    if (window.innerHeight < 850) {
        lightboxTituloIimagem.style.setProperty("margin-top", "16em");
        lightboxIndice.style.setProperty("margin-top", "28em");
    } else {
        lightboxTituloIimagem.style.setProperty("margin-top", "30em");
        lightboxIndice.style.setProperty("margin-top", "50em");
    }
    if (window.innerWidth / window.innerHeight < 1) {
        if (img) {
            img.classList.add("w-100");
            img.classList.remove("w-50");
        }
        document.getElementById("lightbox-botao-imagem-anterior").style.setProperty("margin-right", "80%");
        document.getElementById("lightbox-botao-imagem-posterior").style.setProperty("margin-left", "80%");
    }
    else {
        if (img) {
            img.classList.add("w-50");
            img.classList.remove("w-100");
        }
        document.getElementById("lightbox-botao-imagem-anterior").style.setProperty("margin-right", "40%");
        document.getElementById("lightbox-botao-imagem-posterior").style.setProperty("margin-left", "40%");
    }

}

//Lightbox
var indiceImagemLightbox = 0;
var tamanhoMaximoImagemLightbox;

function lightbox() {

    const lightbox = document.getElementById("lightbox")

    const imagens = document.querySelectorAll(".imagem-galeria")
    tamanhoMaximoImagemLightbox = imagens.length

    for (let index = 0; index < imagens.length; index++) {

        imagens[index].addEventListener("click", elemento => {

            lightboxAdicionarImagem(index);

        })
    }

    lightbox.addEventListener("click", elemento => {
        if (elemento.target !== elemento.currentTarget) {
            return;
        }
        lightbox.classList.remove("ativa");
    })
}

function LightboxImagemAnterior() {

    const lightbox = document.getElementById("lightbox")

    const imagens = document.querySelectorAll(".imagem-galeria")
    tamanhoMaximoImagemLightbox = imagens.length

    if (indiceImagemLightbox > 0) {

        lightboxAdicionarImagem(indiceImagemLightbox - 1);

    } else {
        lightboxAdicionarImagem(tamanhoMaximoImagemLightbox - 1);
    }
}

function LightboxImagemPosterior() {

    const lightbox = document.getElementById("lightbox")

    const imagens = document.querySelectorAll(".imagem-galeria")
    tamanhoMaximoImagemLightbox = imagens.length

    if (indiceImagemLightbox < tamanhoMaximoImagemLightbox - 1) {

        lightboxAdicionarImagem(indiceImagemLightbox + 1);

    } else {
        lightboxAdicionarImagem(0);
    }
}

function lightboxAdicionarImagem(indice) {

    const lightbox = document.getElementById("lightbox")

    const imagens = document.querySelectorAll(".imagem-galeria")
    tamanhoMaximoImagemLightbox = imagens.length

    const imagem = imagens[indice];

    lightbox.classList.add("ativa")

    const img = document.createElement("img");
    img.id = "lightbox-imagem";
    img.src = imagem.src;

    if (window.innerWidth / window.innerHeight < 1) {
        img.classList.add("d-block");
        img.classList.add("w-100");
        document.getElementById("lightbox-botao-imagem-anterior").style.setProperty("margin-right", "80%");
        document.getElementById("lightbox-botao-imagem-posterior").style.setProperty("margin-left", "80%");
    }
    else {
        img.classList.add("d-block");
        img.classList.add("w-50");
        document.getElementById("lightbox-botao-imagem-anterior").style.setProperty("margin-right", "40%");
        document.getElementById("lightbox-botao-imagem-posterior").style.setProperty("margin-left", "40%");
    }

    indiceImagemLightbox = parseInt(indice);

    lightbox.removeChild(lightbox.lastChild);
    lightbox.appendChild(img);

    lightboxTituloImagem(indice);
    lightboxIndice();
}

function lightboxTituloImagem(indice) {
    const lightboxTituloImagem = document.getElementById("lightbox-titulo-imagem");

    const tituloImagemGaleria = document.querySelectorAll(".titulo-imagem-galeria");

    lightboxTituloImagem.innerHTML = tituloImagemGaleria[indice].innerHTML;
}

function lightboxIndice() {
    const lightboxIndice = document.getElementById("lightbox-indice");
    lightboxIndice.innerHTML = "" + (indiceImagemLightbox + 1) + " de " + tamanhoMaximoImagemLightbox;
}

//Orçamentos

function calcularPreco() {

    var suite = document.getElementById("formulario-suite").value;
    var diarias = parseInt(document.getElementById("formulario-diarias").value);

    if (idioma == "pt-br") {

        if (diarias <= 0 || isNaN(diarias)) {
            alert("Insira um número de dias valido");
            return;
        }

        var valorDiaria;
        switch (suite) {
            case "standard":
                valorDiaria = 100;
                break;
            case "exclusive":
                valorDiaria = 200;
                break;
            case "luxo":
                valorDiaria = 300;
                break;
        }

        var servicos = document.getElementsByName("formulario-servicos");
        var valorServicos = 0;

        for (index = 0; index < servicos.length; index++) {

            if (servicos[index].checked) {

                switch (servicos[index].value) {
                    case "lavanderia":
                        valorServicos += 120;
                        break;
                    case "refeicoes":
                        valorServicos += 500;
                        break;
                    case "cityTour":
                        valorServicos += 100;
                        break;
                }

            }

        }

        var valorTotal = (valorDiaria * diarias) + valorServicos;

        document.getElementById("formulario-total").value = "R$ " + valorTotal.toFixed(2);

    } else if (idioma == "ingles") {

        if (diarias <= 0 || isNaN(diarias)) {
            alert("Enter a valid number of days");
            return;
        }

        var valorDiaria;
        switch (suite) {
            case "standard":
                valorDiaria = 20;
                break;
            case "exclusive":
                valorDiaria = 40;
                break;
            case "luxo":
                valorDiaria = 60;
                break;
        }

        var servicos = document.getElementsByName("formulario-servicos");
        var valorServicos = 0;

        for (index = 0; index < servicos.length; index++) {

            if (servicos[index].checked) {

                switch (servicos[index].value) {
                    case "lavanderia":
                        valorServicos += 25;
                        break;
                    case "refeicoes":
                        valorServicos += 100;
                        break;
                    case "cityTour":
                        valorServicos += 20;
                        break;
                }

            }

        }

        var valorTotal = (valorDiaria * diarias) + valorServicos;

        document.getElementById("formulario-total").value = "$ " + valorTotal.toFixed(2);

    }
}