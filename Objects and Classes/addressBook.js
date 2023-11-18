function addressBook(array) {
    const addresses = {}

    for (const entry of array) {
        let [name, address] = entry.split(":")
        addresses[name] = address
    }

    let peopleNames = Object.entries(addresses);
    const sorted = peopleNames.sort()

    for (const key of sorted) {
        console.log(`${key[0]} -> ${key[1]}`)
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])