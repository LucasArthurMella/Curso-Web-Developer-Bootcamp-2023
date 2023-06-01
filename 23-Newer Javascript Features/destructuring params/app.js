const user = {
    email: "jhon@gmail.com",
    password: "sCoTt1948sMiTh",
    firstName: "Jhon",
    lastName: "Carpenter",
    born: 1930,
    died: 1878,
    bio: "jhon is a movie maker",
    city: "cityOfJhon",
    state: "unknown"
}



// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;

// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;

// }
//fullName(user);


//in here you're destructuring it directly in the parameters, instead of inside the function like above.
function fullName({ firstName, lastName = "asassad" }) {
    return `${firstName} ${lastName}`;
}
//fullName(user);



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
];


// movies.filter((movie) => movie.score >= 90);
// movies.filter(({ score }) => score >= 90);

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
});