 let arr= [3,4,5,2,3,4]

function myMap(arr,callback) {
     return arr.reduce((prevval,corentval)=>{
     prevval.push(callback(corentval));
     return prevval

    },[])
    
}
console.log(myMap(arr, (val) => val *2));



function myFilter(arr,callback) {
    return arr.reduce((prevval,currval)=>{
        callback(currval) ?  prevval.push(currval) : null;
        return prevval;
    },[])
    
}

console.log(myFilter(arr,(val) => val > 3));


