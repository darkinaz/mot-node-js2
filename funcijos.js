"use strict"
let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    labas() {
        console.log("Labas", this.vardas, this.pavarde);
    }
};

zmogus.labas();



// function testas() {
//     console.log("testas");
// }
// testas();
// testas = function labas() {
//     console.log("labas");
// };

// testas();
// labas();

// function suma(a, b) {
//     console.log()

//     return a + b + c;
// }
// let c = 10;
// console.log(suma(1, 2, 3, 4, 5, 6,));

// let o = {
//     savyve: "reiksme",
//     kitaSavybe: 165,
//     testas() {
//         console.log(this.savyve + this.kitaSavybe);
//     }
// };
// o.testas();

// let t = o.testas;
// t();


// function labas(vardas, pavarde) {
//     console.log("Labas", vardas, pavarde);

// }
// labas("Jonas", "Jonaitis");
// labas("Jonas");