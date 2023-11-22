function makeADictionary(array) {
    let definitions = []

    array.forEach((pair) => {
        let current = JSON.parse(pair);
        definitions.push(current);
    })

     definitions.sort((a, b) => {
        const termA = Object.keys(a)[0];
        const termB = Object.keys(b)[0];
        return termA.localeCompare(termB);
    });

    let finalDictionary = {}

    definitions.forEach((definition) => {
        for (const word in definition) {
            finalDictionary[word] = definition[word];
        }
    })

    for (const term in finalDictionary) {
        console.log(`Term: ${term} => Definition: ${finalDictionary[term]}`)
    }
}

makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Tape":"A narrow strip of material, used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])