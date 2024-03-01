const fs = require('fs')
const readStream = fs.createReadStream('./blogs/blog2.txt')
const writeStream =fs.createWriteStream('./blogs/blog4')
// readStream.on('data',(chunk)=>{
//     console.log('........NEW chunk......')
//     console.log(chunk.toString())
//     writeStream.write('new stream')
//     writeStream.write(chunk)
// })

if(fs.existsSync('./blogs/blog4.txt')){
    fs.unlink('./blogs/blog4.txt',(err)=>{
        if(err){
            console.log(err)

        }
        
        console.log('the file is deleted')
    }
    )
}
else 
if(!fs.existsSync('./blogs/blog4.txt')){
    readStream.pipe(writeStream)
    console.log('file is created')

}
