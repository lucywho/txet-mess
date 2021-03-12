// word scramble code

const input = document.getElementById("inbox");
const output = document.getElementById("outbox");

let shufInnerStr = "";
let shufWord = [];
let first = "";
let x;
let final = "";
let resultArr = [];

function messText() {
    let txt = input.value;

    if (!txt) {
        input.innerText = "";
        output.innerHTML = `please enter some text in the pink box`;
    } else {
        let string = txt.split(" ");

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

//"more about" code

const about = document.getElementById("about");
const aboutText = document.getElementById("about_text");
const openClose = document.getElementById("open_close");

openClose.innerHTML = `more about this app`;

function toggleAbout() {
    if (!about.classList.contains("vis")) {
        about.classList.remove("invis");
        about.classList.add("vis");
        openClose.innerHTML = `close`;
    } else {
        about.classList.add("invis");
        about.classList.remove("vis");
        openClose.innerHTML = `more about this app`;
    }
}

aboutText.innerHTML = `It is a meme universally acknowledged that a word in possession of all its letters can still be easily read if the middle letters are scrambled, because the human brain reads the whole word not the individual letters.<br> <br>
It is, perhaps, less universally acknowledged that an unemployed web dev in possession of a bored husband during a pandemic is going to be given some weird shit to build. So here we are...<br><br>
<b>What this app does</b> <br>The site will scramble your text, retaining the first and last letter of each word in the correct position. Obviously, this doesn't work on words of 3 letters or less, and there's a chance that other short words will appear to be unscrambled: for example, a 4-letter word only has two inner letters to scramble, so there's a 50% chance it will look exactly the same after randomising.<br><br>If you enter anything much more complex than "the quick brown fox..." you will realise quite quickly that the meme is not entirely accurate. Yes, fluent readers do tend to read the word as whole rather than reading each individual letter, but it takes about 11% longer and there are various other issues that affect our reading comprehension of jumbled words. For example, it is much easier to read words where the letters are transposed rather than completely scrambled, or where the overall sound of the word is not much altered by the scrambling (e.g. daeilng is easier to read as "dealing" than dalneig). Longer words rapidly become increasingly tricky acronymn puzzles if scrambled randomly.
<br><br><b>References</b><br>Rawlinson, G.E.(1976) <i>The Significance of Letter Position in Word Recognition</i> [Unpublished doctoral thesis]. University of Nottingham <br> <a href="https://www.mrc-cbu.cam.ac.uk/people/matt.davis/Cmabrigde/rawlinson/" target="_">Summary available online <a> at the University of Cambridge MRC Cognition and Brain Sciences Unit website<br><br>
Rayner, K., White, S.J., Johnson, R.L and Liversedge, S.P (2006) <i>Raeding Wrods With Jubmled Lettres There Is a Cost</i>
Psychological Science, 17(3), 192-193<br><br><b>Website</b> <br> &copy <a href="https://lucysco.de/" target="_">Lucy Toman 2021</a> <br> From an original idea by <a href="https://trashpanda.cc/" target="_">Tim Duckett </a><br><br> `;
