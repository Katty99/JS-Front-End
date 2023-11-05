function promotion(day, age) {
    if (0 > age || 122 < age) {
        console.log("Error!")
    }

    else if (0 <= age && age <= 18) {
        if (day === "Weekday") {
            console.log("12$")
        }

        else if (day === "Weekend") {
            console.log("15$")
        }

        else {
            console.log("5$")
        }
    }

    else if (19 <= age && age <= 64) {
        if (day === "Weekday") {
            console.log("18$")
        }

        else if (day === "Weekend") {
            console.log("20$")
        }

        else {
            console.log("12$")
        }
    }

    else if (65 <= age && age <= 122) {
        if (day === "Weekday") {
            console.log("12$")
        }

        else if (day === "Weekend") {
            console.log("15$")
        }

        else {
            console.log("10$")
        }
    }
}
