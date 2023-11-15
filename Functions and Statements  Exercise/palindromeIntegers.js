function palindromeIntegers(numbers) {
    for (let i of numbers) {
        let toString = i.toString()
        let reversedString = toString.split("").reverse().join("")
        if (toString === reversedString) {
            console.log("true")
        }
        else {
            console.log("false")
        }
    }
}

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])