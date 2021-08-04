const fs = require("fs/promises");

console.log("start");

let allData = "";

fs.readFile("a.txt")
    .then(data => {
        allData += data;
        return fs.readFile("b.txt");
    })
    .then(data => {
        allData += data;
        return fs.readFile("c.txt");
    })
    .then(data => {
        allData += data;
        console.log(allData);
    })
    .catch(err => {
        console.log("Klaida", err);
    });

console.log("finish");