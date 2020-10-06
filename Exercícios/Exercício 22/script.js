let texto = prompt("Insira um texto:");

function limite(tex){
    if(tex.length<=10){
        console.log("Texto dentro do limite");
    } else{
        console.log("Texto acima do limite");
    }
}

limite(texto);