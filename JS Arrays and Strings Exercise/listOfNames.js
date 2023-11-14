function listNames(names) {
    let toPrint = []
    names.sort()
    for (let i = 1; i <= names.length; i ++) {
        toPrint.push(`${i}.${names[i-1]}`)
    }
    console.log(toPrint.join("\n"))
}

listNames(["John", "Bob", "Christina", "Ema"])