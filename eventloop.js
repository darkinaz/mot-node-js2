console.log("start");
function click1() {
    setTimeout(() => {
        console.log("click1 start");
        for (let i = 0; i < 5000000; i++) {
            for (let j = 0; j < 1000; j++) {
            }
        }
        console.log("click1 finish");
    }, 10);
}
function click2() {
    console.log("click2");
}
click1();
click2();
click2();
click1();
click2();
click2();
console.log("finish");