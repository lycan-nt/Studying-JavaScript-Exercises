//==========================Introdução===========================
// var nome = "Felipe D. Santos"
// var idade = 24
// var idade2 = 10;
// var frase = "Bora dormi"

// //alert(`${nome} tem ${idade} anos`)
// //alert(idade + idade2);

// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace('dormi', 'codar!!!'));


//==================================Array e dicionário=========================================

// var lista = ["Felipe", "Marcella", "Yuno", "Floop"];
// lista.push("Bryan");
// lista.pop();
// console.log(lista);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join("/"));
// console.log(lista.length);
// alert(lista[0]);

// const membro = [
//     {
//         Nome: "Felipe D. Santos",
//         Idade: "24"
//     },

//     {
//         Nome: "Marcella D. Santos",
//         Idade: 23
//     },

// ];
// console.log(membro);
// alert(membro[1].Nome);


//===========================================Condicionais, laço de repetição e date=================================

// var idade = prompt("Qual sua idade?");

// if(idade >= 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de idade");
// }

// var count = 0;

// while(count < 5) {
//     console.log(count);
//     count ++
// }

// var count = 0;

// for(i = count; i < 5; i++) {
//     alert(i);

// }

// var data = new Date;
// alert(data);


//==========================================================================================================

// function soma(n1 , n2) {
//     return n1 + n2  
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome);
// }

// alert(setReplace("Bora dormir", "dormir", "Codar!"));

// alert(soma(10,10));

// function validarIdade(idade) {
//     var validar;
//     if(idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }

//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validarIdade(idade));

//==================================================Manipulando elementos======================================

function botao() {

    document.querySelector("#agradeco").innerHTML = "<b>Obrigado por clicar<b>";
    
}

function agradeco() {
    window.open("https://web.digitalinnovation.one/");
    // window.location.href("https://web.digitalinnovation.one/");
}

function trocar() {
    // alert("Trocar texto");

    document.getElementById("mousemove").innerHTML = "Obrigado";
}

function voltar() {
    // alert("Trocar texto");

    document.getElementById("mousemove").innerHTML = "Passe o mouse";
}

function load() {
    alert("Hello World!");
}