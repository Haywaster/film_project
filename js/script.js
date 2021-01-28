"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

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

let   a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько его оцените?", "");

console.log(personalMovieDB);