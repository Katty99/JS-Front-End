function charactersInRange(start, end) {
    let finalResult = []

    let startIndex = start.charCodeAt(0)
    let endIndex = end.charCodeAt(0)

    let [first, last] = [Math.min(startIndex, endIndex), Math.max(startIndex,endIndex)]

    for (let i = first + 1; i < last; i++) {
        finalResult.push(String.fromCharCode(i))
    }

    console.log(finalResult.join(" "))
}

charactersInRange('C', '#')