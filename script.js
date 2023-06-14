function salvar() {
    var input = document.querySelector('#student');
    if (input.value != '') {
        var div = document.querySelector('#content');
        var paragrafo = document.createElement('b');
        var input_1 = document.querySelector('#student');
        var texto = document.createTextNode(input_1.value);
        div.appendChild(paragrafo);
        paragrafo.appendChild(texto);
        console.log(input_1.value);
    }
}
