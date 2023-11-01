const url = "https://api.divar.ir/v8/web-search/tehran/vehicles"
const fs = require("fs");

fetch(url)
   .then((Response)=>{
    return Response.json();
 })
 .then((data)=>{
     let result = ""
    for(let item of data?.web_widgets?.post_list){
        result += `${item.data.title}\n`;

        // console.log("title : ", item.data.title);
    };
    fs.writeFile("divar.txt",result,(err)=>{
        if(err){
            console.log(err);
        }
    })
  
})
