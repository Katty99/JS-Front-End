function convertToJson(name, lastName, hairColor) {
    const person = {
        name,
        lastName,
        hairColor
    }
    const obj = JSON.stringify(person)
    console.log(obj)
}

convertToJson('George', 'Jones', 'Brown')
convertToJson('Peter', 'Smith', 'Blond')