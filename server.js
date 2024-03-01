const http = require('http');
const server =http.createServer((req,res)=>{
    console .log(req.url,req.method);
    // set header content
    //  res.setHeader('content-type','text/plain');
    res.setHeader('content','text/html') 
     res.write('<head><link rel="styleseet"href="#"></head>');
    res.write('hello, Boitenge');

    res.write('<p>I Love You!</p>') 
    res.end();
});
server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
});