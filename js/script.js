'use strict';

/* Первый (консольный) проект ! */

const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

const peronalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Один из последних просмотренних фильмов?', ''),
	b = prompt('На сколько оцините его?', ''),
	c = prompt('Один из последних просмотренних фильмов?', ''),
	d = prompt('На сколько оцините его?', '');

peronalMovieDB.movies[a] = b;
peronalMovieDB.movies[c] = d;

console.log(peronalMovieDB);