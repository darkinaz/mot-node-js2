class Puodukas {
    constructor(spalva, turis) {
        this.spalva = spalva;
        this.turis = turis;
        this.kiekis = 0;
    }
}
ipilk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis) {
        this.kiekis = this.turis;
    }
};
isgerk = function (kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        this.kiekis = 0;
    }
};

console.log(typeof Puodukas);
console.log(Puodukas.toString());
