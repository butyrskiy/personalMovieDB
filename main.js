/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt('How many films have you already watched?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const a = prompt('The name of the last movie you watched?', ''),
      b = prompt('What rating was given to the film?', ''),
      c = prompt('The name of the last movie you watched?', ''),
      d = prompt('What rating was given to the film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
// personalMovieDB['movies'] = {[nameLastFilms]: raitingFilms};

console.log(personalMovieDB);
console.log(personalMovieDB['movies']);