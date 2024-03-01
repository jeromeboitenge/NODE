const fs = require('fs')
//streams allows us to use data while they are still loading becouse the data are very huge
const readStream = fs.createReadStream('./blogs/blog1.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./blogs/blog2.txt')
// readStream.on('data',(chunk)=>{
//     console.log('-----NEW CHUNK-----')
//     console.log(chunk)  
//     writeStream.write('\n\n\n\n\n\n\n\n\n\n NEW CHUNK\n\n\n\n\n\n\n\n\n')
// writeStream.write(chunk)
// })
//utf8 is to make the text in  the readable format 




//piping : copying readed data to writed data
readStream.pipe(writeStream);
