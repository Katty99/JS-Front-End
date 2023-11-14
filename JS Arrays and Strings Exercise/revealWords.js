function revealWords(words, sentence) {
    words = words.split(", ")
    for (let word of words) {
        let length = word.length
        let toReplace = "*".repeat(length)
        sentence = sentence.replace(toReplace, word)
    }
    console.log(sentence)
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')