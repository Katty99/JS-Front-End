function calculate(num) {
    let numToStr = num.toString();
    let sum = 0;

    for (let digit of numToStr) {
        sum += parseInt(digit)
    }

    console.log(sum)
}

calculate(245678)