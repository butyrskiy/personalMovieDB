/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB. Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы.

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщения в таком виде: "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    this.count = +prompt('How many films have you already watched?', '');

    while(this.count == '' || this.count == null || isNaN(this.count)) {
        this.count = +prompt('How many films have you already watched?', '');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('The name of the last movie you watched?', ''),
              b = prompt('What rating was given to the film?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            this.movies[a] = b;
        } else {
            i--;
        }
    }
  },
  detectPersonalLevel() {
    if(this.count < 10) {
        alert('Watched few films');
    } else if(this.count > 9 && this.count < 31) {
        alert('You are a classic spectator');
    } else alert('You a cinephile');
  },
  toggleVisibleMyDB() {
    if(this.privat) {
        this.privat = false;
    } else {
        this.privat = true;
    }
  },
  writeYourGenres() {
    let i;
    for (i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre is numbered ${i}`, '');
        
        if(genre === null || genre === '') {
            const genre = prompt(`Your favorite genre is numbered ${i}`, '');
            personalMovieDB.genres[i-1] = genre;
            i--;
        } else personalMovieDB.genres[i-1] = genre;
    }
    this.genres.forEach((item, i) => {
        console.log(`Favorite genre #${i+1} this is ${item}`);
    });
  },
  showMyDB(hidden) {
    if(!hidden) {
        console.log(this);
    } else console.log('Database is privat');
  },
}

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);