function cats(array) {
    let cats = []

    class Cats {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < array.length; i++) {
        let catInfo = array[i].split(" ");
        let [name, age] = catInfo;
        let newCat = new Cats(name, age);
        newCat.meow();
        cats.push(newCat)
    }

}

cats(['Mellow 2', 'Tom 5'])