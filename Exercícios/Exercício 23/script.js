let texto = prompt("Digite um texto:");

function limite(tex){
    if(tex.length >10){
        console.log("Texto muito longo");
    } else{
        console.log("Texto dentro dos limites");
    }
}

limite(texto);