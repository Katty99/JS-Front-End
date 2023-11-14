function repeatString(string, repeat) {
    let toPrint = ''

    for (let i = 1; i <= repeat; i++) {
        toPrint += string
    }

    console.log(toPrint)
}

repeatString('abc', 3)