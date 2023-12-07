
pagina = window.location.pathname.split("/").pop().split(".").at(0);

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
    mudaEspacoGaleria();
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
        mudaEspacoGaleria();
    }
    if (pagina == "orcamentos") {
        mudaMargemOrcamento()
    }
});

function mudaNav() {

    const tituloNav = document.getElementById("titulo-nav");

    if (window.innerWidth / window.innerHeight < 11 / 15) {
        tituloNav.innerHTML = "";
    } else {
        tituloNav.innerHTML = "Pousada Curitiba";
    }
}

function mudaMargemHome() {

    const localContainer = document.getElementById("local-container");

    if (window.innerWidth / window.innerHeight < 1) {
        localContainer.style.setProperty("display", "grid");
    } else {
        localContainer.style.setProperty("display", "flex");
    }
}

function mudaMargem() {

    if (window.innerWidth / window.innerHeight < 1) {
        document.documentElement.style.setProperty("--margin-redes-sociais", "0");
    } else {
        document.documentElement.style.setProperty("--margin-redes-sociais", "25%");
    }
}

function mudaMargemOrcamento() {
    
    if (window.innerWidth / window.innerHeight < 1) {
        document.documentElement.style.setProperty("--margin-formulario", "5%");
    } else {
        document.documentElement.style.setProperty("--margin-formulario", "35%");
    }
}

function mudaEspacoGaleria() {

    const galeria = document.getElementById("galeria-container");
    const tituloImagemGaleria = document.querySelectorAll(".titulo-imagem-galeria");

    if (window.innerWidth / window.innerHeight < 1) {
        galeria.classList.remove("row-cols-4");
        galeria.classList.add("row-cols-2");
        for (let index = 0; index < tituloImagemGaleria.length; index++) {
            const tituloImagem = tituloImagemGaleria[index]
            tituloImagem.style.setProperty("display", "none");
        }

    } else {
        galeria.classList.remove("row-cols-2");
        galeria.classList.add("row-cols-4");
        for (let index = 0; index < tituloImagemGaleria.length; index++) {
            const tituloImagem = tituloImagemGaleria[index]
            tituloImagem.style.setProperty("display", "block");
        }
    }
}

function mudaTamanhoBotaoDaLightbox() {
    document.documentElement.style.setProperty("--tamhanho-botao-lightbox", ((window.innerWidth / window.innerHeight * 81/16) + "em"))
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
    img.classList.add("d-block");
    img.classList.add("w-50");

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
    var numeroDiarias = parseInt(document.getElementById("formulario-diarias").value);

    if(numeroDiarias <= 0 || isNaN(numeroDiarias)) {
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
    
    var valorTotal = (valorDiaria * numeroDiarias) + valorServicos;

    document.getElementById("formulario-total").value = "R$ " + valorTotal.toFixed(2);
}