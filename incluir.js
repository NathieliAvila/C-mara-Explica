async function carregarHeader() {

    const resposta = await fetch("header.html"); /* pausa a execução até encontrar o arquivo header.html e o guarda na variável resposta*/

    const conteudo = await resposta.text(); /* lê texto da página Header.html e o insere na variável conteudo*/

    document.getElementById("header").innerHTML = conteudo; /* transforma o texto em código html e altera o código principal */
}


async function carregarFooter() {
    const resposta = await fetch("footer.html");
    const conteudo = await resposta.text();
    document.getElementById("footer").innerHTML = conteudo;
    
}
carregarHeader();
carregarFooter();