function salvar(){
    let input : HTMLInputElement | null =
    document.querySelector('#student')!;

    if(input.value != ''){
        let div : HTMLDivElement | null =
        document.querySelector('#content')!;

        let paragrafo : HTMLElement | null =
        document.createElement('b');

        let input : HTMLInputElement | null =
        document.querySelector('#student')!;

        let texto = document.createTextNode(input.value);

        div.appendChild(paragrafo);
        paragrafo.appendChild(texto);

        console.log(input.value);
    }
}