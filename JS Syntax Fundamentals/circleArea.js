function area(argument) {
    let result;

    if (typeof argument !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`)
    }

    else {
        result = Math.PI * argument ** 2
        console.log(result.toFixed(2))
    }
}

area(5)