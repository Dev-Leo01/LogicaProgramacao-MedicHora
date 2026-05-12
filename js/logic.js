console.clear();
console.log("=== RESULTADO ===");

/*Este arquivo possui somente a finalidade de contribuir para a compreensão lógica de programação 
aplicada a Javascript, não fazendo integrando a totalidade do projeto*/

var nome; //Declaração de variável
nome = "nome"; //Atribuição de valor à variável

//Inicialização da variável (declara e atribui de uma vez só)
var email = "leonardo.hcarletti@senacsp.edu.br";

var data = "2026-04-15T20:05";
var medicamento = "Dipirona";
var medicamentopadrao = true;
var dosagem = 500;
var dosesdia = 2;
var resultado;

// A informação exige alocação na memória; então, a partir de um tipo da informação, pode-se indicar se ela exigirá menos
// ou mais capacidade de alocação
// Tipo da variável: 
// string -> armazena uma cadeia de caracteres
// number -> armazena números com finalidade de operações aritméticas
// booLean -> armazena valor true ou false

console.log(nome, typeof nome);
console.log(email, typeof email);
console.log(data, typeof data);
console.log(medicamento, typeof medicamento);
console.log(medicamentopadrao, typeof medicamentopadrao);
console.log(dosagem, typeof dosagem);
console.log(dosesdia, typeof dosesdia);

function calculardosagemdiaria(dosagem, dosesdia) {
    resultado = dosagem/dosesdia;
    return resultado;
}

resultado = calculardosagemdiaria(dosagem, dosesdia);
// console.log("A dosagem por dia é o resultado de "+ dosagem + "mg" + " dividido por " + dosesdia + " dias = " + resultado + "mg ");

console.log(
    `
     Dados do paciente:\n
     Nome: ${nome}\n
     Email: ${email}\n
     Data: ${data}\n
     Medicamento: ${medicamento}\n
     Dosagem: ${dosagem}\n
     Quantidade de Doses por dia: ${dosesdia}\n
     Resultado: ${resultado}
     `
);

