function meetings(array) {
    let calendar = {}

    for (const meeting of array) {
        let info = meeting.split(" ")
        let day = info[0]
        let person = info[1]

        if (!calendar.hasOwnProperty(day)) {
            calendar[day] = person
            console.log(`Scheduled for ${day}`)
        }

        else {
            console.log(`Conflict on ${day}!`)
        }
    }

    for (const key in calendar) {
        console.log(`${key} -> ${calendar[key]}`)
    }
}


meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])