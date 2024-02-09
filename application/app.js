function criptografar() {
    var outputBox = document.getElementById('outputBox');
    var imagemSaida = document.querySelector('.conteudo__output__saida img');

    // Remove todos os elementos filhos da outputBox, exceto o botão
    while (outputBox.firstChild && outputBox.firstChild !== outputBox.lastElementChild) {
        outputBox.removeChild(outputBox.firstChild);
    }

    // Remove a imagem de conteudo__output__saida
    if (imagemSaida) {
        imagemSaida.remove();
    }

    // Atualiza ou adiciona o conteúdo desejado após a remoção
    outputBox.innerHTML = `
        <h2 class="conteudo__output__sub">Texto Criptografado</h2>
        <p class="conteudo__output__par">Conteúdo criptografado aqui...</p>
        <button class="output__copiar" onclick="copiar()">Copiar</button>
    `;
}