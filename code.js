const CAMPOUNO = document.querySelector("#numeroUno")
const CAMPODOS = document.querySelector("#numeroDos")
const TITULOUNO = document.querySelector(".label-uno")
const TITULODOS = document.querySelector(".label-dos")
const BOTON = document.querySelector("#operar")
const CAMPORESULTADO = document.querySelector(".campo-resultado")
const broma = document.querySelector(".broma")
const regexValidacion = /^[0-9A-F]+$/i;

BOTON.addEventListener('click', function () {
    
    TITULOUNO.classList.remove("clase-vacia");
    TITULODOS.classList.remove("clase-vacia");

  
    const esCampoUnoValido = CAMPOUNO.value && regexValidacion.test(CAMPOUNO.value);
    const esCampoDosValido = CAMPODOS.value && regexValidacion.test(CAMPODOS.value);
    CAMPORESULTADO.innerHTML = "..."
    let bromaUno = CAMPOUNO.value.includes(".")
    let bromaDos = CAMPODOS.value.includes(".")

        if(bromaUno||bromaDos){
        broma.innerHTML = "Le Tengo Miedo a Operar Con Racionales"
    }

    if (!esCampoUnoValido) {
        TITULOUNO.classList.add("clase-vacia");
    }

    if (!esCampoDosValido) {
        TITULODOS.classList.add("clase-vacia");
    }

    if (esCampoUnoValido && esCampoDosValido) {
        broma.innerHTML = "Multiplicación Hexadecimal de Enteros"
        const valorDecimalUno = BigInt("0x" + CAMPOUNO.value);
        const valorDecimalDos = BigInt("0x" + CAMPODOS.value);
        const resultadoFinal = valorDecimalUno * valorDecimalDos;
        const resultadoHexadecimal = resultadoFinal.toString(16);
        console.log(valorDecimalUno + " * " + valorDecimalDos + " = " + resultadoFinal)
        console.log(CAMPOUNO.value + " * " + CAMPODOS.value + " = " + resultadoHexadecimal)
        CAMPORESULTADO.innerHTML = resultadoHexadecimal
    } else {
        console.log("Uno o ambos campos son inválidos.");
    }
});
