"use strict"
function testas() {
    console.log("testas");
}
testas();
testas = function labas(){
    console.log("labas");
};

testas();
labas();
