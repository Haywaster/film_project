"use strict";

<<<<<<< HEAD
=======
let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

// start();

>>>>>>> 54bc838c6c38557537382de29e47b7cdb2732ba7
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
<<<<<<< HEAD
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    detectPersonalLevl: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const   a = prompt("Один из последних просмотренных фильмов?", ""),
                    b = prompt("На сколько его оцените?", "");
        
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log ("done");
            } else {
                i--;
                console.log ("error");
            }
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre != null && genre != "") {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                alert("Вы ввели некорректные даныне");
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};
=======
    privat: false
};

function detectPersonalLevl() {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

// detectPersonalLevl();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько его оцените?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log ("done");
        } else {
            i--;
            console.log ("error");
        }
    }
}

// rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
>>>>>>> 54bc838c6c38557537382de29e47b7cdb2732ba7
