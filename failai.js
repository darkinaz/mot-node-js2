const fs = require("fs");
console.log("start");
fs.readFile("a.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    console.log("" + data);
});
fs.readFile("b.txt", (err, data) => {
    if (err) {
        console.log("Klaida", err);
        return;
    }
    console.log("" + data);
});
console.log("finish");

/*
perskaitytumet duomenis is failu a.txt, b.txt, c.txt
priskirtumet vienam kintamajam butent tokia tvarka
ir atspausdintumet to kintojo reiksme
*/