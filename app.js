let valorInputEncriptar = "";
let valorInputDesencriptar = "";
let mapeoVocales = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

function reemplazarVocales(match) {
    return mapeoVocales[match] || match;
}

function encriptar() {
    valorInputEncriptar = document.getElementById("encriptarODesencriptar").value;
    console.log("Valor capturado " + valorInputEncriptar);
    //i = es para que tome letras mayusculas y minusculas en el metodo .replace()
    //g = hace los cambios requeridos en toda la oracion en el metodo .replace()
    //m = toma en cuenta multiples lineas en el metodo .replace()
    valorInputEncriptar = valorInputEncriptar.replace(/[aeiou]/img, reemplazarVocales);
    console.log(`Valor encriptado: ${valorInputEncriptar}`);
    //Agrega el texto encriptado en el textarea para mostrarlo
    document.getElementById("resultado").innerHTML = valorInputEncriptar;
    //Limpia el imput al hacer click
    document.querySelector("#encriptarODesencriptar").value = "";
}

/* Las dos maneras de cambiar las letras por palabras y las palabras por letras funcionan de la misma manera
ya sea utilizando el metodo .replace() junto con la funcion y el object o utilizando el metodo replace()
las veces que sean necesarias */

function desencriptar() {
    valorInputDesencriptar = document.getElementById("encriptarODesencriptar").value;
    console.log("Valor capturado " + valorInputDesencriptar);

    valorInputDesencriptar = valorInputDesencriptar.replace(/ai/g, "a");
    valorInputDesencriptar = valorInputDesencriptar.replace(/enter/g, "e");
    valorInputDesencriptar = valorInputDesencriptar.replace(/imes/g, "i");
    valorInputDesencriptar = valorInputDesencriptar.replace(/ober/g, "o");
    valorInputDesencriptar = valorInputDesencriptar.replace(/ufat/g, "u");

    console.log(`Valor desencriptado: ${valorInputDesencriptar}`);
    //Agrega el texto desencriptado en el textarea para mostrarlo
    document.getElementById("resultado").innerHTML = valorInputDesencriptar;
    //Limpia el imput al hacer click
    document.querySelector("#encriptarODesencriptar").value = "";
}

function mostrarBoton() {
    let valorBoton = document.getElementById("encriptarDesencriptar").value;
    let botonCopiar = document.getElementById("boton-copiar");
    if (valorBoton = true) {
        botonCopiar.style.display = "inline-block";
    }
}

function quitarImg1() {
    let valorBoton = document.getElementById("encriptarDesencriptar").value;
    let imgs = document.getElementById("img-textarea");
    if (valorBoton = true) {
        imgs.style.display = "none";
    }
}

function quitarImg2() {
    let valorBoton = document.getElementById("encriptarDesencriptar").value;
    let imgs = document.getElementById("img2-textarea");
    if (valorBoton = true) {
        imgs.style.display = "none";
    }
}

function copiarTexto() {
    //Obtine el texto del textarea
    let textarea = document.getElementById("resultado");
    //Selecciona y copia el texto
    textarea.select();
    document.execCommand("copy");
}

