
//digitar a glicemia e testar se ta dentro do intervalo saudável. 

let paciente = prompt("Nome do paciente");  
let glicemia = prompt("Valor da glicemia");

if (glicemia < 70){
    //hipoglicemico
    alert("O paciente: "+ paciente +" está Hipoglicêmico")
}else if(glicemia > 99){
    //hiperglicemia
    alert("O paciente: "+ paciente +" está Hiperglicêmico")
}else{
    alert("O paciente: "+ paciente +" está Saudável")
    //saudável
}
