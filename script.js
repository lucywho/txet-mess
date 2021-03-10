const input = document.getElementById("inbox");
const output = document.getElementById("outbox");

let shufInnerStr = "";
let shufWord = [];
let first = "";
let x;
let final = "";
let resultArr = [];

function messText() {
    let text = input.value;

    let string = text.split(" ");

    string.forEach((item) => {
        let word = item.split("");
        let inner = [];
        let ins;

        first = word[0];
        if (word.length <= 1) {
            x = word.length;
        } else {
            x = word.length - 1;
        }
        final = word[x];

        for (i = 1; i < word.length - 1; i++) {
            ins = word[i];
            inner.push(ins);
        }

        shuffleArray(inner);

        result = shufWord.join("");
    });

    output.innerHTML = result;
}

function shuffleArray(array) {
    if (array.length > 1) {
        for (let i = array.length; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shufInnerStr = array.join("");

    shufWord.push(first, shufInnerStr, final, " ");

    return shufWord;
}

//"about" code

const about = document.getElementById("about");
const aboutText = document.getElementById("about_text");
const close = document.getElementById("close");

function openAbout() {
    about.classList.remove("invis");
    about.classList.add("vis");
}

function closeAbout() {
    about.classList.add("invis");
    about.classList.remove("vis");
}

aboutText.innerHTML = `<b>What this app does</b> <br> some information here <br> <br> <b>Website</b> <br> &copy <a href="https://lucysco.de/" target="_">Lucy Toman 2021</a> <br> From an original idea by <a href="https://trashpanda.cc/" target="_">Tim Duckett </a><br><br> `;
