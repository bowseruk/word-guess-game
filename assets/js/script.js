class word_choice {
    constructor(word) {
        this.word = word;
        this.possibleCharacters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
        
    }
    guessLetter(letter) {

    }
}


function selectWord() {
    let wordList = [
        "Javascript",
        "Hypertext",
        "Transport"
    ]
    let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let num = [];
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    // characters.forEach((element) => {
    //     num.pop(word.count(element))
    // })
    return word
}

// Elements that will be dynamic
document.getElementById("word-display").innerText = selectWord();
document.getElementById("win").innerText = 0;
document.getElementById("lose").innerText = 0;

