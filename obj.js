function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
}
Puodukas.prototype.ipilk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis) {
        this.kiekis = this.turis;
    }
};
Puodukas.prototype.isgerk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        this.kiekis = 0;
    }
};
function Termosas(spalva, turis) {
    Puodukas.call(this, spalva, turis);
    this.temp = 20;
}
Termosas.prototype = Object.create(Puodukas.prototype);
Termosas.prototype.constructor = Termosas;
Termosas.prototype.pasildyk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.temp += kiek;
};


let p1 = new Puodukas("baltas", 250);
let p2 = new Puodukas("rudas", 300);
p1.ipilk(100);
p1.isgerk(50);
console.log(p1, p2);
let t1 = new Termosas("Zalias", 1000);
t1.ipilk(200);


// function suma (a,b);



// let puodukas = {
//     spalva: "baltas",
//     turis: 250,
//     kiekis: 0
// };
// let puodukas = {
//     spalva: "rudas",
//     turis: 300,
//     kiekis: 0
// };






// let o = {};

// console.log(o.labas);
// o.labas = "hello";

// console.log(o.labas);

// o.labas = "HI";
// console.log(o.labas);
// console.log(o);

// o.savybe = "reiksme"; 
// console.log(o);

// let pav = "labas";
// console.log(o[pav]);
// console.log(o["savybe"]);

// o.kitaSavybe = 654
// console.log(o);
// delete o.savybe;
// console.log(o);

