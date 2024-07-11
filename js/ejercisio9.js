let frase = prompt("Ingrese una frase").toLowerCase();
let vocales = "";
let i =0;

while (i<=frase.length)
    {
        if (frase.charAt(i) === "a" || frase.charAt(i) === "e"  || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u" ) 
            {   
                vocales = vocales+frase.charAt(i)
                
            }
            i++;
}
document.write("ingreso la frase: " + frase + " <br> y tiene estas vocales:  " + vocales );


