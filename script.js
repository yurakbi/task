"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
                
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
                
            }
        }
    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 ) {
            console.log('Просмотрено очень мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви класический зритель');
        } else if  (personalMovieDB.count >= 30 ) {
            console.log('Ви киноман');
        } else {
            console.log('Произошла ошибка');
        }
    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
    
        }
    },
    toogleleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else  {
            personalMovieDB.privat = true;

        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимий жанр под номером ${i}`, '');
            personalMovieDB.genres[i - 1] = genre;

            if (genre == null || genre == '') {
                console.log("Ви ввели некоректні дані або взагалі їх не ввели");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
    
        }

        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        
    }
    
};

console.log(personalMovieDB);



