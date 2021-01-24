"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB.count);