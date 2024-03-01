const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)   
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