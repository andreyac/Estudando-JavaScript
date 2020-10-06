function escreverTexto(){
    console.log("Texto da função");
}

escreverTexto();

const textoNoConsole = function(){
    console.log("Função como constante");
}

textoNoConsole();

function textoComParametro(texto){
    console.log(texto);
}

textoComParametro("Texto em parametro");