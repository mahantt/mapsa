let counterTime = 0

function timer() {
    counterTime++;
    console.log(counterTime);
}

let setTimeoutid= setInterval(timer,1000);
setTimeout(() => clearTimeout(setTimeoutid),20000);

