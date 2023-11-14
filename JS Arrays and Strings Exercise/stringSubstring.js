function stringSubstring(word, text) {
    let textToLower = text.toLowerCase().split(" ")
    let wordToLower = word.toLowerCase()
    let isFound = false

    for (let word of textToLower)
        if (word === wordToLower) {
            isFound = true;
            break;
        }

    if (isFound) {
        console.log(word)
    }
    else {
        console.log(`${word} not found!`)
    }
}

stringSubstring('JAVA', 'JavaScript is the best programming java language')