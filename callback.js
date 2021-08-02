function randomLeter(ms, cb) {
    setTimeout(() => {
        cb(Math.trunc(Math.random() * 10 + 1))
    }, ms)

}