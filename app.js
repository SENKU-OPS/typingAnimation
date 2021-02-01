const texts = ["chocolate", "namkin", "lays", "kurkure"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typing = document.querySelector(".container__typing");

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    typing.textContent = letter;
    if (letter.length == currentText.length) {
        index = 0;
        count++;
    }
    setTimeout(type, 400);
}());