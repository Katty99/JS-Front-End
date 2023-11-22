function towns(array) {
    let towns = {}

    for (const element of array) {
        let [town, latitude, longitude] = element.split(" | ")
        latitude = parseFloat(latitude)
        longitude = parseFloat(longitude)
        towns['town'] = town
        towns['latitude'] = latitude.toFixed(2)
        towns['longitude'] = longitude.toFixed(2)
        console.log(towns)
    }

}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])