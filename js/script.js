
const num = 50;
   switch (num) {
       case 49:
           console.log('No');
           break;
        case 100:
            console.log('No');
            break;
        case 50:
            console.log('Bingo!');
            break;
        default:
            console.log('Maybe next time🎈');
            break;
   }



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



 if (4 == 9) {
      console.log('Ok!');

  } else {
console.log ('Error!');
  }

(num = 50) ? console.log('Ok!') : console.log('Error!'); //// тернарний оператор
