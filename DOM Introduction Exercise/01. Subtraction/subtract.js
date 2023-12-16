function subtract() {

    const numOne = document.getElementById('firstNumber').value
    const numTwo = document.getElementById('secondNumber').value

    let result = Number(numOne) - Number(numTwo)
    document.getElementById('result').textContent = result
}