function calculate(group, type, day) {
    let result;
    let priceList = {
        Friday: [8.45, 10.9, 15],
        Saturday: [9.8, 15.6, 20],
        Sunday: [10.46, 16, 22.5],
    };

    switch (type) {
        case "Students":
            result = priceList[day][0] * group;
            if (group >= 30) {
                result *= 0.85
            }
            break;

        case "Business":
            if (group >= 100) {
                group -= 10
            }
            result = priceList[day][1] * group;
            break;

        case "Regular":
            result = priceList[day][2] * group;
            if (group >= 10 && group <= 20) {
                result *= 0.95
            }
    }

    console.log(`Total price: ${result.toFixed(2)}`)
}

