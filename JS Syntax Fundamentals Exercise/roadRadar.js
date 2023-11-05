function radar(speed, place) {
    let limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential":20
    }

    if (speed <= limits[place]) {
        console.log(`Driving ${speed} km/h in a ${limits[place]} zone`)
    }

    else if (speed > limits[place] && speed <= limits[place] + 20) {
        let difference = speed - limits[place]
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limits[place]} - speeding`)
    }

    else if (speed > limits[place] && speed <= limits[place] + 40) {
        let difference = speed - limits[place]
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limits[place]} - excessive speeding`)
    }

    else {
        let difference = speed - limits[place]
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limits[place]} - reckless driving`)
    }
}
