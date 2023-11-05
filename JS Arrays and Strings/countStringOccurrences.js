function count(sentence, word) {
    let words = sentence.split(" ");
    let count = 0;
    for (let currentWord of words) {
        if (currentWord === word) {
            count += 1
        }
    }
    console.log(count)
}

count('This is a word and it also is a sentence', 'is')