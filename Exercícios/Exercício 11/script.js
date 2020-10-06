let idade = prompt("Qual a sua idade?");
let cnh = prompt("Você tem CNH?");

if(idade < 18 && cnh == "não"){
    console.log("Não pode dirigir pois não tem idade nem CNH.");
} else if(idade >= 18 && cnh == "não"){
    console.log("Não pode dirigir pois não tem CNH.");
} else if(idade >= 18 && cnh == "sim"){
    console.log("Pode dirigir!");
}