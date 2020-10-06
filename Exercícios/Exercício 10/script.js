let vel = prompt("Qual a velocidade em km/h?");

if (vel<80){
    console.log("Está abaixo da velocidade da via.");
} else if (vel == 80){
    console.log("Está na velocidade da via.");
} else {
    console.log("Está acima da velocidade da via.");
}