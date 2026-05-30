async function carregarHeader() {

    const resposta = await fetch("header.html"); /* pausa a execução até encontrar o arquivo header.html e o guarda na variável resposta*/

    const conteudo = await resposta.text(); /* lê texto da página Header.html e o insere na variável conteudo*/

    document.getElementById("header").innerHTML = conteudo; /* transforma o texto em código html e altera o código principal */

    const paginaAtual = window.location.pathname; /* descobre a página em que o usuário está*/

    const links = document.querySelectorAll("nav a"); /* seleciona e agrupa todos o links que estão em nav. Gera uma lista */

    links.forEach(link => {
        if (paginaAtual.includes(link.getAttribute("href"))) /* Verifica se o href do link corresponde à página atual. */
        {
            link.classList.add("ativo"); /* Se corresponder, adicione a classe ativo. */
        }
    })
}


async function carregarFooter() {
    const resposta = await fetch("footer.html");
    const conteudo = await resposta.text();
    document.getElementById("footer").innerHTML = conteudo;
    
}


carregarHeader();
carregarFooter();