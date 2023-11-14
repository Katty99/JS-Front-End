function pascalCaseSplitter(string) {
    let condition = /[A-Z][a-z]*/gm;
    let words = string.match(condition)
    let toPrint = []

    for (let word of words) {
        toPrint.push(word)
    }

    console.log(toPrint.join(', '))
}

pascalCaseSplitter('IThisIsSoAnnoyingToDo')