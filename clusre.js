function multplyn(n) {
    return function (x) {
        return x *n
    }
    
}
let multiplyby5= multplyn(5)
// console.log(multiplyby5(8));


function counter() {
    let n = 0
    return {
        count: function () {
            return n++;
        },
        reset:function(){
            return 0;
        }
    }
    
}
let mycounter = counter()
mycounter.count()
mycounter.count()
// console.log(mycounter.count());

 let myCounterObj= {
    n:0,
    count(){
        return this.n++;
    },
    reset(){
        this.n = 0;
    },
}

myCounterObj.count()
myCounterObj.count()
console.log(myCounterObj.count());