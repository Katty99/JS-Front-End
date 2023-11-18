function songs(array) {
    let songs = [];
    let numberOfSongs = array.shift();
    let typeSong = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = array[i].split("_");
        let newSong = new Song(type, name, time);
        songs.push(newSong);
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    }
    else {
        let filteredSongs = songs.filter((i) => i.type === typeSong)
        filteredSongs.forEach((i) => console.log(i.name));
    }
}


songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])