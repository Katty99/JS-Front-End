function censor(sentence, word) {
    let replacement = '';
    for (let i = 1; i <= word.length; i++){
        replacement += "*"
    }

    let censored = sentence.replace(word, replacement)

    while (censored.includes(word)) {
        censored = censored.replace(word, replacement)
    }

    console.log(censored)
}

censor('A small sentence with some small words', 'small')
censor('Find the hidden word', 'hidden')