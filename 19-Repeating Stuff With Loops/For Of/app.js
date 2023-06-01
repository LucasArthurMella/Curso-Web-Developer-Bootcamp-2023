const subitems = ["theone", "yep", "uhum", "that's right", "uhummm!"];

for (let i = 0; i < subitems.length; i++) {
    console.log(`Visit subitems.com/r/ ${subitems[i]}`);
}

for (let sub of subitems) {
    console.log(`Visit subitems.com/r/ ${sub}`);
}

const seatingChart = [["Kristen", "Erik", "Namita"],
["Geoffrey", "Juanita", "Antonio", "Kevin"],
["Yuma", "Sakura", "Jack", "Erika"]
];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }


// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char);
// }