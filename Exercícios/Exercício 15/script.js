let num = prompt("Insira um número natural:");
primo = true;

for(let x=2; x<num; x+=1){
    if(num%x == 0){
        primo = false;
        break;
    }
}

if(primo == false){
    console.log("Não é número primo.")
} else {
    console.log("É número primo.")
}