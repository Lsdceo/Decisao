let peso = parseInt(prompt("Digite seu peso"))
let altura = parseInt(prompt("Digite sua altura"))
let idade = parseInt(prompt("Digite sua idade"))

let imc = peso / Math.pow(altura, 2)

switch (imc) {
    case (imc <= 18.5):
        console.log("Abaixo do peso")
        break;
    case (imc >= 18.5 && imc <= 24.9):
        console.log("Peso normal")
        break;
    case (imc >= 25 && imc <= 29.9):
        console.log("Sobrepeso")
    case (imc >= 39.9 && imc <= 49.9):
        console.log("Obesidade I")
        break;
    case (imc >= 40 && imc <= 49.9):
        console.log("Obesidade II")
        break;
    case (imc >= 40.9 && imc <= 49.9):
        console.log("Obesidade III")
    default:
        break;
}


