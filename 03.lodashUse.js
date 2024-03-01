const http = require('http')
const fs = require('fs')
const lod =require('lodash');
const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method)   
    //using lodash
    const num =lod.random(10,20);
    console.log(num);
    const greetings =lod.once(()=>{
        console.log('hello boitenge');
    });
    greetings();
    greetings();
    res.setHeader('content','html/text')
    let path ='./views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
            case '/about':
                // res.statusCode= 200;
            path += 'about.html' ;
            break;
            // redirecting the user
            case '/about-usaa':
                //status code which shows
                 res.statusCode = 301;
           res.setHeader('Location','/about')
           res.end()
           //user is finished to be redirected to about
            break;
            default:
                path +='404.html';
                break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        else
        res.write(data)
    res.end()
    })
    
})
server.listen(3000,'localhost',()=>{
    console.log('you are recieving requests from port 3000')

})