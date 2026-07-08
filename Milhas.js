import entraDados from "readline-sync";

console.log("*** Conversor de Milhas para Quilometragem: ***\n");

let mi= entraDados.question("Informe o valor em Milhas: ");

let km = mi / 0.62137;

// função toFixed arredonda para 2 casas decimais
km = km.toFixed(2);

console.log(mi + "mi equivale a "+km+"km");