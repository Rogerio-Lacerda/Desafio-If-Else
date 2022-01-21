// 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
console.log("1)");

let idade = 18;

if(idade >= 18){
  console.log("Parabéns, você tem é maior de idade.");
} else {
  console.log("Que pena, você é menor de idade.");
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true

console.log("2)");

let humano = true;

if(idade >= 18 && humano === true){
  console.log("Você é humano e maior de idade.")
} else{
  console.log("Você é menor de idade.");
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

console.log("3)");

let mes = "Janeiro";

if(mes === "Janeiro" || mes === "Dezembro") {
  console.log("Você faz aniversário em janeiro ou dezembro.");
} else {
  console.log("Você não faz aniversario em janeiro e também não faz em dezembro.");
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

console.log("4)");

let nome = "Rogerio";

if(nome.substring(0,1) === "R") {
  console.log("Seu nome começa com a letra R");
} else{
  console.log("Seu nome não começa com a letra R");
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

console.log("5)");

sobrenome = "Barros"

if(sobrenome.length > 6 || nome.substring(0,1) === "E"){
    console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E.");
} else {
  console.log("Seu sobrenome não tem mais de 6 letras e seu nome não começa com a letra E.");
}