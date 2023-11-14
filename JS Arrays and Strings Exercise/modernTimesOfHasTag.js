function hashtag(sentence) {
    let condition = /#[a-zA-Z]+/gm;
    let matchedWords = sentence.match(condition)
    for (let word of matchedWords) {
        console.log(word.slice(1))
    }
}

hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')