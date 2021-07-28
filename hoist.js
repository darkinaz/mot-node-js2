"use strict"
// console.log(i);

// i = 7;

// console.log(i);

// var i = 15;
// console.log(i);


// var i = 21;
// console.log(i);




console.log(global);
global.g = 100; //objektas window//
console.log(global);
let a;
console.log(a, g);
a = 10;

console.log(a, d, g);

{

    let b = 20;
    console.log(a, b, g);
    function testas() {
        let e = 60;
        console.log(a, b, d, e, g)
    }
    {
        let c = 30;
        var d = 40;
        let a = 50;
        {
            console.log("testas", a, b, c, d, g);
            testas();
        }

        a = 25;
    }

}
console.log(a, d, g);
