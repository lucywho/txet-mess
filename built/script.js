var input = document.getElementById("inbox");
var output = document.getElementById("outbox");
var outInfo = document.getElementById("outbox-info");
var inInfo = document.getElementById("inbox-info");
var inputValue = input.value;
var outputValue = output.value;
// button code
var messButton = document.getElementById("mess_button");
var againButton = document.getElementById("again_button");
messButton.innerHTML = "mess it up";
messButton.addEventListener("click", function () {
    messText();
});
againButton.innerHTML = "mess again";
againButton.addEventListener("click", function () {
    againGone();
});
function againGone() {
    console.log("againGone fires");
    againButton.classList.remove("vis");
    againButton.classList.add("invis");
    messButton.classList.add("vis");
    messButton.classList.remove("invis");
    inputValue = "";
    outputValue = "";
}
// label code
inInfo.innerHTML = "type or paste your text here and click the \"mess it up\" button";
outInfo.innerHTML = "your messed up text will appear here";
// word scramble code
var shufInnerStr = "";
var shufWord = [];
var first = "";
var final = "";
var startChar;
var endChar;
function messText() {
    console.log("mess text fires");
    shufWord = [];
    var txt = inputValue.replace(/\s+/g, " ");
    var punct = txt.match(/[^\w\s]|_/g);
    if (txt == "") {
        outInfo.innerText = "please enter some text in the pink box";
    }
    else {
        messButton.classList.add("invis");
        messButton.classList.remove("vis");
        againButton.classList.remove("invis");
        againButton.classList.add("vis");
        outInfo.innerText = "click mess again to mess up some more text";
        if (punct == null) {
            punct = [];
        }
        var stringArr = txt.split(" ");
        var result_1;
        stringArr.forEach(function (word) {
            var x;
            var y;
            startChar = "";
            endChar = "";
            var inner = [];
            var ins;
            if (word.length <= 1) {
                x = word.length;
            }
            else {
                x = word.length - 1;
            }
            if (punct.includes(word[0])) {
                first = word[1];
                startChar = word.slice(0, 1);
            }
            else {
                first = word[0];
            }
            if (punct.includes(word[x])) {
                y = x - 1;
                final = word[y];
                endChar = word.slice(-1);
            }
            else {
                final = word[x];
            }
            if (startChar) {
                if (endChar) {
                    for (var i = 2; i < word.length - 2; i++) {
                        ins = word[i];
                        inner.push(ins);
                    }
                }
                else {
                    for (var i = 2; i < word.length - 1; i++) {
                        ins = word[i];
                        inner.push(ins);
                    }
                }
            }
            if (!startChar) {
                if (endChar) {
                    for (var i = 1; i < word.length - 2; i++) {
                        ins = word[i];
                        inner.push(ins);
                    }
                }
                else {
                    for (var i = 1; i < word.length - 1; i++) {
                        ins = word[i];
                        inner.push(ins);
                    }
                }
            }
            shuffleArray(inner);
            result_1 = shufWord.join("");
        });
        outputValue = result_1;
        againButton.classList.add("vis");
        againButton.classList.remove("hidden");
    }
}
function shuffleArray(array) {
    if (array.length > 1) {
        for (var i = array.length; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shufInnerStr = array.join("");
    shufWord.push(startChar, first, shufInnerStr, final, endChar, " ");
    return shufWord;
}
// "more about" code
var about = document.getElementById("about");
var aboutText = document.getElementById("about_text");
var openClose = document.getElementById("open_close");
openClose.innerHTML = "more about this app";
function toggleAbout() {
    if (!about.classList.contains("vis")) {
        about.classList.remove("invis");
        about.classList.add("vis");
        openClose.innerHTML = "close";
    }
    else {
        about.classList.add("invis");
        about.classList.remove("vis");
        openClose.innerHTML = "more about this app";
    }
}
aboutText.innerHTML = "It is a meme universally acknowledged that a word in possession of all its letters can still be easily read if the middle letters are scrambled, because the human brain reads the whole word not the individual letters.<br> <br>\nIt is, perhaps, less universally acknowledged that an unemployed web dev in possession of a bored husband during a pandemic is going to be given some weird shit to build. So here we are...<br><br>\n<b>What this app does</b> <br>The site will scramble your text, retaining the first and last letter of each word in the correct position. Obviously, this doesn't work on words of 3 letters or less, and there's a chance that other short words will appear to be unscrambled: for example, a 4&#8209letter word only has two inner letters to scramble, so there's a 50% chance it will look exactly the same after randomising.<br><br>If you enter anything much more complex than \"the quick brown fox...\" you will realise quite quickly that the meme is not entirely accurate. Yes, fluent readers do tend to read the word as whole rather than reading each individual letter, but it takes about 11% longer and there are various other issues that affect our reading comprehension of jumbled words. For example, it is much easier to read words where the letters are transposed rather than completely scrambled, or where the overall sound of the word is not much altered by the scrambling (e.g. daeilng is easier to read as \"dealing\" than dalneig). Longer words rapidly become increasingly tricky acronymn puzzles if scrambled randomly.\n<br><br><b>References</b><br>Rawlinson, G.E.(1976) <i>The Significance of Letter Position in Word Recognition</i> [Unpublished doctoral thesis]. University of Nottingham <br> <a href=\"https://www.mrc-cbu.cam.ac.uk/people/matt.davis/Cmabrigde/rawlinson/\" target=\"_\">Summary available online <a> at the University of Cambridge MRC Cognition and Brain Sciences Unit website<br><br>\nRayner, K., White, S.J., Johnson, R.L and Liversedge, S.P (2006) <i>Raeding Wrods With Jubmled Lettres There Is a Cost</i>\nPsychological Science, 17(3), 192-193<br><br><b>Website</b> <br> &copy <a href=\"https://lucysco.de/\" target=\"_\">Lucy Toman 2021</a> <br> From an original idea by <a href=\"https://trashpanda.cc/\" target=\"_\">Tim Duckett </a><br><br> ";
