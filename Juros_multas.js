
import entrada from 'readline-sync';

let vlr_devido= entrada.question("Informe o valor devido: ")

if(vlr_devido < 1){
    console.log("Digite um valor maior que zero!");
    process.exit(1);
}  

let dias_atraso= entrada.question("Informe quantos dias se passaram desde o vencimento da fatura: ")
let juros;


if(dias_atraso >= 1 && dias_atraso <=15 ){

    juros= vlr_devido * 0.05;
    console.log("Taxa de 5%");
}

else if(dias_atraso < 1 ){
    console.log("Voce esta em dia");
    process.exit(0);


}
else{

    juros= vlr_devido * 0.10;
    console.log("Taxa de 10%");
};
let soma= Number(vlr_devido) + Number(juros);

console.log("Dias em atraso: "+dias_atraso);
console.log("Valor devido original: R$ "+vlr_devido);
console.log("Valor devido com juros: R$ "+soma);



