function imprimirNum(...args){
    for(let i = 0; i< args.length; i++){
        console.log(args[i]);
    }

    args.forEach(num => {
        console.log(num);
    })
}


imprimirNum(1,2,3,4,5,6,7,8,9,10);