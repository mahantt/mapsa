const fs = require("fs")
let options={

}

fs.readFile("config.json", (err,text)=> {
    if(err){
        throw new Error("We have a error")
    }else{
        Object.assign(options, JSON.parse(text));
    }
    console.log(options);
});