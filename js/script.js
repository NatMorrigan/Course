 const numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false 
    }; 

    const a = prompt('Один з останніх переглянутих фільмів?', ''),
          b = prompt('На скільки оцінюєте його?',''),
          c = prompt('Один з останніх переглянутих фільмів?', ''),
          d = prompt('На скільки оцінюєте його?','');

   personalMovieDB.movies[a] = b;
   personalMovieDB.movies [c] = d;

   console.log(personalMovieDB);