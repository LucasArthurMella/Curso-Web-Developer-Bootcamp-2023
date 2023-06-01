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

const user2 = {
    email: "Stacy@gmail.com",
    fistName: "Stacy",
    lastName: "Gonzalez",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma"
}


// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;


//you can set a default value which is N/A in this case, if the object already has a value for the selected property, the default value will be ignored.
const { born: birthYear, died: deathYear = "N/A" } = user;

const { city, state, died = 'N/A' } = user2;