const http=require('http');
const fs= require('fs');//enabling file system
const express =require('express');
const url =require('url');
const m1 =require('./Module1');
// const bodyparser = require('bodyparser');

var server = http.createServer(function(req,resp){
    resp.writeHeader(200,{"content-type":"text/html"});

    var q=url.parse(req.url,true)
    console.log(q);
    switch(q.pathname){
        case "/form":
            rs = fs.createReadStream("./public/form.html");//createinng resd stream
            rs.pipe(resp);
            break;
         
         case "/submit_button":
            resp.write("you entered num1 :" +q.query.num1 );  
            if(q.query.btn=="addition")//value = addition
            {
                resp.write("you entered num2 :" +q.query.num2);
                var ans = m1.addition(parseInt(q.query.num1),parseInt(q.query.num2));
                resp.end("Addition : "+ans);
            }else if(q.query.btn=="substract"){
                resp.write("you entered num2 :" +q.query.num2);
                var ans =m1.substraction(parseInt(q.query.num1),parseInt(q.query.num2));
                resp.end("substracion : "+ans);}
                else if(q.query.btn=="factorial"){
                    var ans = m1.factorial(parseInt(q.query.num1));
                    resp.end("factorial :"+ans);
                }
                else if(q.query.btn=="mul"){
                    resp.write("you entered num2 :" +q.query.num2);
                    var ans =m1.multiplication(parseInt(q.query.num1),parseInt(q.query.num2));
                    resp.end("multiplication : "+ans);
                }
                // else if(q.query.btn == "")
            // }else if(q.query.btn=="")
            console.log(q.query.btn);//for debuging
        break;
            default :
            resp.write(`<h4>this is default page</h4>`)
    }
})
server.listen(9090,function(){
console.log("listeninng at port number 9090");
})





