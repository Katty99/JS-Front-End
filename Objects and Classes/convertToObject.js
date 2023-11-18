function convertToObject(jsonStr) {
    let person = JSON.parse(jsonStr)

    for (const property in person) {
        console.log(`${property}: ${person[property]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')