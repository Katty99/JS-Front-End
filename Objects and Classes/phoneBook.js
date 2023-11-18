function phoneBook(array) {
    let phoneBook = {}
    for (let entry of array) {
        let info = entry.split(' ')
        let name = info[0]
        let phone = info[1]
        phoneBook[name] = phone
    }

    for (const person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`)
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])