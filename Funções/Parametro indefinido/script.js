function idadeNome(idade,nome){
    if(nome === undefined){
        console.log("Sua idade é "+idade);
    } else{
        console.log("Sua idade é " + idade + " e seu nome é " + nome);
    }
}

idadeNome(26,"Andrey");
idadeNome(26);

function mult(a,b){
    if(a === undefined || b === undefined){
        console.log("Essa função precisa de dois parametros");
    } else{
        console.log(a*b);
    }
}

mult();
mult(2,3);
mult(2);