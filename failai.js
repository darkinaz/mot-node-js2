const fs = require("fs");

function readFile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

let text = "";
readFile("a1.txt", {
        encoding: "utf8"
    })
    .then(
        data => {
            console.log("perskaiciau is failo");
            console.log(data);
            text += data;
            return readFile("b.txt", {
                encoding: "utf8"
            });
        }
    )
    .catch(err => {
        console.log("nesigavo perskaityt pirmo failo");
        console.log(err);
        return readFile("b.txt", {
            encoding: "utf8"
        });
    })
    .then(data => {
        console.log("perskaiciau is kito failo");
        console.log(data);
        text += data;
    })
    .catch(err => {
        console.log("klaida skaitant is failo");
        console.log(err);
    })
    .finally(() => {
        console.log(text);
    });

console.log("main'as baige");

// console.log("start");

// let allData = "";

// fs.readFile("a.txt", (err, data) => {
//     if (err) {
//         console.log("Klaida", err);
//         return;
//     }
//     allData += data;
//     fs.readFile("b.txt", (err, data) => {
//         if (err) {
//             console.log("Klaida", err);
//             return;
//         }
//         allData += data;
//         fs.readFile("c.txt", (err, data) => {
//             if (err) {
//                 console.log("Klaida", err);
//                 return;
//             }
//             allData += data;
//             console.log(allData);
//         });
//     });
// });

// console.log("finish");

// /*
// perskaitytumet duomenis is failu a.txt, b.txt, c.txt
// priskirtumet vienam kintamajam butent tokia tvarka
// ir atspausdintumet to kintojo reiksme

// */