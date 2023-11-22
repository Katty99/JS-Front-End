function oddOccurrences(string) {
    let words = string.split(" ")
    let occurrences = {}

    words.forEach((word) => {
        occurrences[word.toLowerCase()] = 0
    })

    words.forEach((word) => {
        occurrences[word.toLowerCase()] += 1
    })

    let toPrint = ''

    let sortedOccurrences = Object.entries(occurrences).sort((a, b) => b[1] - a[1])
    for (const occurrence of sortedOccurrences) {
        if (occurrence[1] % 2 !== 0) {
            toPrint += occurrence[0] + ' '
        }
    }

    console.log(toPrint)
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')