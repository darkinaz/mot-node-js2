"use strict";
function Zmogus(v, p) {
    this.v = v;
    this.p = p;
}
Zmogus.prototype.labas = function (kreipinys) {
    console.log("Labas", kreipinys, this.v, this.p);
}
Zmogus.prototype.hello = kreipinys => {
    console.log("Hello", kreipinys, this.v, this.p);
}
// let z = new Zmogus("Jonas", "Jonaitis");
// z.labas("ponas");
// let l = z.labas;
// // l("ponas");
// z.hello("ponas");
// let h = z.hello;
// h("ponas");

// let z = new Zmogus("Jonas", "Jonaitis");
// console.log(z);
// let zz = Object.create(Zmogus.prototype);
// // Zmogus.call(zz, "Jonas", "Jonaitis");
// Zmogus.apply(zz, ["Jonas", "Jonaitis"]);
// console.log(zz);

function Studentas(v, p, m) {
    Zmogus.call(this, v, p);
    this.m = m;
}
Studentas.prototype = Object.create(Zmogus.prototype);
console.log(Studentas.prototype);
console.log(Studentas.prototype.constructor);
Studentas.prototype.constructor = Studentas;
console.log(Studentas.prototype.constructor);