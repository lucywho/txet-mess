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
