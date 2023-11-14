function signCheck(numOne, numTwo, numThree) {
    let numbers = [numOne, numTwo, numThree]
    let negativeCount = 0
    for (let number of numbers) {
        if (number < 0) {
            negativeCount += 1
        }
    }

    if (negativeCount % 2 === 0) {
        console.log("Positive")
    }
    else {
        console.log("Negative")
    }
}

signCheck(-5, -12, -15)