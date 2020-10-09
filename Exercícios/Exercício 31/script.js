let array1 = [1,2];
let array2 = [1,2,3,4,5,6];

let bolsa = [array1, array2];

for(let i=0; i < bolsa.length; i++){
    if(bolsa[i].length>5){
        console.log("Muitos elementos");
    } else{
        console.log("Poucos elementos");
    }
}