const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10;
});




const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013
    },
    {
        title: "13 Going On 30",
        score: 70,
        year: 2004
    },

    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999

    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }
]

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80;
// })

const goodMovies = movies.filter(m => m.score > 80);
const goodTitles = goodMovies.map(m => m.title);

//combining map and filter in one go.
movies
    .filter(m => m.score > 80)
    .map(m => m.title);


const badMovies = movies.filter(m => m.score < 70);

const recentMovies = movies.filter(m => m.year > 2000);


const exams = [80, 98, 92, 78, 77, 34, 89, 84, 81, 77];

//function that returns true if all of the contents in the array attend the condition on the every argument
exams.every(score => score >= 75);

//function that returns true if atleast one of the contents in the array attend the condition on the every argument

exams.some(score => score >= 75);



movies.some(movie => movie.year > 2015);