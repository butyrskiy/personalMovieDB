/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt('How many films have you already watched?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

for (let i = 0; i < 2; i++) {
    const a = prompt('The name of the last movie you watched?', ''),
          b = prompt('What rating was given to the film?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if(personalMovieDB.count < 10) {
    alert('Watched few films');
} else if(personalMovieDB.count > 9 && personalMovieDB.count < 31) {
    alert('You are a classic spectator');
} else alert('You a cinephile');


console.log(personalMovieDB);