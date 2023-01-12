 let pergunta = "Quanto é 8 + 2?";
 let opcaoA = "9";
 let opcaoB = "10";
 let opcaoC = "7"; //nome de variável não pode ter acento 
 let opcaoD = "15";

 let opcaoCorreta = "10";
 alert(pergunta + "\n" + opcaoA + "\n" + opcaoB + "\n" + opcaoC + "\n" + opcaoD  );   //  o "\n" é new line, para quebrar a linha, para a debaixo
 let opcaoDigitada = prompt("Digite a opção correta");
 
 if(opcaoDigitada == opcaoB){  //operador de igualdade ==
    alert("Resposta correta")
 }else if (opcaoDigitada != opcaoA 
    && opcaoDigitada != opcaoB 
    &&  opcaoDigitada != opcaoC
     && opcaoDigitada != opcaoD){
    alert("Esta opção não contém dentre as alternativas")
 }else{
    alert("Opção incorreta")
 }



 //loop : estrutura de repetição tendo o for: repete os números que a gente fala com ele pra repetir // while: estrutura de repetição junto com o if, repete enquanto for verdade 


 let pergunta1 = "Quanto é 8 + 2?";
 let opcaoE = "9";
 let opcaoF = "10";
 let opcaoG = "7"; //nome de variável não pode ter acento 
 let opcaoH = "15";

 let opcaoCorreta1 = "10";
 alert(pergunta1 + "\n" + opcaoE + "\n" + opcaoF + "\n" + opcaoG + "\n" + opcaoH  );   //  o "\n" é new line, para quebrar a linha, para a debaixo
 


while(true) {
    let opcaoDigitada1 = prompt("Digite a opção correta");

    if (opcaoDigitada1 != opcaoE 
        && opcaoDigitada1 != opcaoF 
        &&  opcaoDigitada1 != opcaoG 
        && opcaoDigitada1 != opcaoH){
        alert("Esta opção não contém dentre as alternativas");
     }else if (opcaoDigitada1 != opcaoF) {
        alert("Opção incorreta");
        break // para o programa
     }else{
        alert("Opção correta");
        break //para o programa
     }
}


