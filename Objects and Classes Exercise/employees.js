function employees(names) {
    let employeeInfo = {}
    for (const name of names) {
        let personalId = name.length
        employeeInfo[name] = personalId
    }

    for (const key in employeeInfo) {
        console.log(`Name: ${key} -- Personal Number: ${employeeInfo[key]}`)
    }
}

employees([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

])