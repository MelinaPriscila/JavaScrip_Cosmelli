/*for (let index = 0; index <= 10; index++) {
    let result = numero * index;
    let mensaje = `${numero} * ${index} = ${result}`;
    alert(mensaje);
  } */

for(let i = 0; i < 10; i++){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Turno N ${i} Nombre: ${nombre}`;
    alert(mensaje);
 }

 /*for(let i = 0; i <= 10; i++){
  if(i === 5){
    continue;
  }
  console.log(i);
}
console.log("finalizamos proceso"); 

for(let i = 0; i = 10; i++){
  console.log(i);
} 

 let i = 0;
while(i < 100){
  console.log("hola");
  i = i + 1;
} 

 let entrada = prompt("Ingrese una palabra");
while(entrada != "terminar"){
  alert("Ingresamos" + entrada);
  entrada = prompt("Ingrese una palabra");
} */

 let usuario = prompt("Ingrese un usuario").toLowerCase();
while(usuario != "melina"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese un usuario");
}
alert("Bienvenido"); 

 let i = 5;
while(i < 3){
  console.log("hola");
} 
/* let i = 5; 
do{
  console.log("hola");
} while(i < 3);
 
 let i = 5;
do {
  console.log("hola");
}while(i < 3); */

 let numero = 0; 
do{
  numero = prompt("Ingrese numero");
  console.log(numero);
}while(parseInt(numero)); 

let number = 1;
switch(numero){
  case 1:
    console.log("es un 1");
    break;
  case 4:
    console.log("es 4");
    break;
  
  case 5:
    console.log("es un 5");
    break;
  
  default:
    console.log("no es ninguno de los anteriores");
    break;  
}  

