/*Escreva uma função em JavaScript que receba dois números como parâmetros
 e retorne a soma deles.*/

function soma (a, b) {
    return a + b;
}

let resultado = soma (2, 4);
console.log(resultado);




/*Escreva uma função em JavaScript que receba um número como parâmetro e retorne "Par" 
se o número for par e "Ímpar" se for ímpar.*/

let num1 = 8;
if(num1%2==0){
    console.log("par");
}else{
    console.log("impar");
}





/*Escreva uma função em JavaScript que receba dois números como parâmetros
 e retorne o maior deles.*/

function maior (n1, n2) {
    if (n1 > n2)
    return n1
else
return n2
}

console.log(maior(5,10));





/*Escreva uma função em JavaScript que receba uma string como parâmetro e 
retorne a string invertida.*/

function reverseNome (str) {
    return str.split('').reverse().join('')
}

let str = 'Hello'
console.log(reverseNome(str));




/*Escreva uma função em JavaScript que receba um array de números como parâmetro 
e retorne a média dos números no array.*/

function mediaArray (array) {
    
    if (array.length === 0) {
        return 0; 
    }

    const soma = array.reduce((acc, num) => acc + num, 0);

    const media = soma / array.length;

    return media;
}


const numeros = [1,2,3,4,5,6,7,8,9,10];
const media = mediaArray(numeros);
console.log("A média é:", media);






/*Escreva uma função em JavaScript que receba um array de números como parâmetro
 e retorne o maior número presente no array.*/

function encontrarMaiorNumero(array) {
    
    if (array.length === 0) {
        return undefined; 
    }

    let maior = array[0]; 
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return maior;
}

const numerosArray = [5,7,8,10,3,1,3.3];
const maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é:", maiorNumero);




/*Escreva uma função em JavaScript que receba um array de números como parâmetro 
e retorne o número de elementos pares no array.*/

function numerosPares(array) {
    
    let contadorPares = 0;

    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] % 2 === 0) {
            contadorPares++; 
        }
    }

    return contadorPares;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const qtdPares = numerosPares(numeros);
console.log("Número de elementos pares:", qtdPares);





/*Escreva uma função em JavaScript que receba um array de números como parâmetro
 e retorne a soma de todos os elementos do array.*/

 function somarElementos(array) {
    
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}


const num2 = [1, 2, 3, 4, 5];
const somaTotal = somarElementos(num2);
console.log("A soma de todos os elementos é:", somaTotal);




/*Escreva uma função em JavaScript que receba um array de números como parâmetro
 e retorne um novo array com os números ordenados em ordem crescente.*/

 function numerosCrescentes(array) {
    
    const numerosCertos = array.slice().sort((a, b) => a - b);

    return numerosCertos;
}


const num3 = [7, 1, 9, 3, 6];
const numerosCertos = numerosCrescentes(num3);
console.log("Números ordenados em ordem crescente:", numerosCertos);





/*Escreva uma função em JavaScript que receba um array de objetos, 
onde cada objeto representa uma pessoa com uma propriedade 'idade', 
e retorne a média das idades.*/

function calcularMediaIdades(pessoas) {
    
    if (pessoas.length === 0) {
        return 0; 
    }

    const somaIdades = pessoas.reduce((total, pessoa) => total + pessoa.idade, 0);

    const media = somaIdades / pessoas.length;

    return media;
}


const pessoas = [
    { nome: 'Helano', idade: 25 },
    { nome: 'Emmanuel', idade: 30 },
    { nome: 'Narciso', idade: 42 }
];

const mediaIdades = calcularMediaIdades(pessoas);
console.log("A média das idades é:", mediaIdades);











