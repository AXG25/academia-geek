let palabra;
let inverse;

function Palindromo(palabra) {
    palabra = document.querySelector("#palabra").value;
    inverse = palabra;

    palabra = palabra
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, "")
        .split("");
    inverse = inverse
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, "")
        .split("")
        .reverse()
        .toString();

    if (palabra == inverse) {
        document.querySelector(
            ".resultado"
        ).innerHTML = `Si!! Esta palabra es un palindromo =)`;
    } else {
        document.querySelector(
            ".resultado"
        ).innerHTML = `No... Esta palabra no es un palindromo =(`;
    }
}
