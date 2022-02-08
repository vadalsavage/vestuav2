/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

var numer;
//insertar numero de peldaños
process.stdout.write(`Introduzca el numero de peldaños: `);
process.stdin.on('data', function(data){
    numer=data.toString().trim();
    result=contar(numer);
    process.stdout.write(`Total de combinaciones ${result}`);
    process.exit();
  })
//declaramos la funcion factorial que se usan en este caso de combinatorias
function factorial(n)
{if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
}
//funcion para hallar el numero de situciones posibles
function contar(numer)
{var result;
    var n1=0;
var n2=0;
var b=0;
//separando casos impares y pares
if(numer%2==0){
b=numer/2;
} else{
b=(numer-1)/2
}
//i es el numero de pasos de 2 peldaños

for(var i=0; i<=b; i++){
    //se hace la combinatoria para cada caso de i pasos de 2 peldaños
n1=factorial(numer-i)/factorial(numer-2*i);
// se guarda el valor de combinacionesy se procede al siguiente caso
n2=n1+n2;
}
//retorna el resultado total guardado en n2
return result=n2;}

