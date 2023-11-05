function slice(word, startIndex, count) {
    let result = [];
    for (let i = startIndex; i < startIndex + count; i++){
        result.push(word[i])
    }
    console.log(result.join(''))
}

slice('ASentence', 1, 8)
slice('SkipWord', 4, 3)