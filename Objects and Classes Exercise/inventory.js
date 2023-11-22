function inventory(array) {
    let heroes = []

    for (const hero of array) {
        let [name, level, items] = hero.split(" / ")
        heroes.push({name: name, level: level, items: items})
    }
    heroes.sort((a, b) => a.level- b.level)

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}

// inventory([
//
// 'Isacc / 25 / Apple, GravityGun',
//
// 'Derek / 12 / BarrelVest, DestructionSword',
//
// 'Hes / 1 / Desolator, Sentinel, Antara'
//
// ])

inventory(['Batman / 2 / Banana, Gun',
'Superman / 18 / Sword',
'Poppy / 28 / Sentinel, Antara'])