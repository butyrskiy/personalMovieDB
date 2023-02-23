/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '');
    }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('The name of the last movie you watched?', ''),
              b = prompt('What rating was given to the film?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favorite genre is numbered ${i}`, '');
    }
}

writeYourGenres();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert('Watched few films');
    } else if(personalMovieDB.count > 9 && personalMovieDB.count < 31) {
        alert('You are a classic spectator');
    } else alert('You a cinephile');
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    } else console.log('Database is privat');
}

showMyDB(personalMovieDB.privat);