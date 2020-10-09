let calculadora = {
    somar : function(a,b){
        return a+b;
    }, 
    subtrair : function(a,b){
        return a-b;
    },
    multiplicar : function(a,b){
        return a*b;
    },
    dividir : function(a,b){
        return a/b;
    }
}

console.log("O resultado de 5+1 é "+ calculadora.somar(5,1));
console.log("O resultado de 5-1 é "+ calculadora.subtrair(5,1));
console.log("O resultado de 5x2 é "+ calculadora.multiplicar(5,2));
console.log("O resultado de 6/2 é "+ calculadora.dividir(6,2));