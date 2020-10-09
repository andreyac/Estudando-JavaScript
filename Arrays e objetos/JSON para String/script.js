let pessoa = {
    "nome" : "Andrey",
    "idade" : 26
}

let jsonToString = JSON.stringify(pessoa);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson);