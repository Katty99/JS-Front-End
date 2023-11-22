function movies(array) {
    let movies = []

    for (let current of array) {
        if (current.includes("addMovie")) {
            let movie = current.split("addMovie ")[1]
            movies.push({name: movie})
        } else if (current.includes("directedBy")) {
            let [movie, director] = current.split(" directedBy ")
            let search = movies.find((el) => el.name === movie)
            if (search) {
                search['director'] = director;
            }
        } else if (current.includes("onDate")) {
            let [movie, date] = current.split(" onDate ")
            let search = movies.find((el) => el.name === movie)
            if (search) {
                search['date'] = date;
            }
        }

    }

    for (const movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}

movies([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

])