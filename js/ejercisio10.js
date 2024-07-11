let numero =  parseInt(prompt("Ingrese un numero"))

if (numero % 2 === 0 ) 
    {
        document.write("el numero ingresado es divisible por dos ");
    }
else if (numero % 3 === 0) {
    document.write("el numero ingresado si es divisible por 3");
}

else if (numero % 5 === 0) {
    document.write("el numero ingresado si es divisible por 5");
}
else if (numero % 7 === 0) {
    document.write("el numero ingresado si es divisible por 7");
}
else {
    document.write ("el" + numero + "no es divisible ni por 2,3,5,7");
}
