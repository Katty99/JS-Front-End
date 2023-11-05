function calculate(num1, num2) {
    let result = 0;
    let toPrint = []

    for (let i = num1; i <= num2; i++) {
        result += i
        toPrint.push(i)
    }

    console.log(toPrint.join(" "))
    console.log(`Sum: ${result}`)
}
