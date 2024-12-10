// alert(" hello");

// FOREACH FUNCTION IN ARRAY 

// var array = [1,2,3,4];
// array.forEach( function(value){
//     console.log(value + " Hy Raghav")
    
// });

// MAP FUNCTION TO CREATE NEW ARRAY TO ADD ON SOME DATA 

// var arr =[1,2,3,4];
// var newarr = arr.map(function(val){
//     return val+3;
// }
// )
// console.log(newarr);



// Filter function in Array={}

// var arr =[1,2,3,4];
// var ans = arr.filter(function(val){
//     if(val>=3){return true;}
//     else return false;
// })
// console.log(ans);




// FIND


// var arr= [1,2,3,4];
// var ans= arr.find(function(val){
//     if(val===3)return val;
// })

// console.log(ans);



// arr.indexof

// var arr = [raghav,vijay,veer,ram];
// var ans= arr.indexOf(raghav)
// console.log(ans);




// objecte

// var obj = {
//     name:"Raghav"
    

// }
// obj.name



// Node Js Is A runtmime js environment 

// file system 
// write file 
// read
// append
//rename file 
// copy file
// unlink
// rmdir remove for empity folder







// const fs = require('fs');

// fs.appendFile('example.txt', 'raghav', (err) => {
//   if (err) throw err;
//   console.log('File written successfully!');
// });



// protocals -rules 
// internet par kuch rules banaye gaye hai jinhone internet banaya hai ,ab un rules ko follow karna jaruri hai isiliye ye os ke softwares mai pre installed aate hai



// server

// const http = require("http");
// const server = http.createServer(function(req,res){
//     res.end("hello raghav");

// }
// )
// server.listen(3000);

const express = require('express')
const app = express()

app.use(function (req, res,next) {
    console.log('Hy Chaksu bro  ');
    next();
  });

app.get('/', function (req, res) {
  res.send('Hello Raghav');
});
app.get('/profile', function (req, res) {
    res.send('Hy Chaksu bro  ');
  });

app.listen(3000)

