let onibus = {
    rodas : 8,
    limiteDePassageiros : 40,
    portas : 2
};

console.log(onibus);

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus);

console.log(onibus.janelas);