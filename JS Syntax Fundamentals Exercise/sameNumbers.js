function calculate(num) {
    let numToStr = num.toString()
    let allNumbersAreTheSame = true
    let totalSum = 0

    for (let i = 0; i < numToStr.length; i++) {
        if (numToStr[i] !== numToStr[0]) {
            allNumbersAreTheSame = false;
        }
        totalSum += parseInt(numToStr[i])
    }

    console.log(allNumbersAreTheSame)
    console.log(totalSum)
}

calculate(1234)