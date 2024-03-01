//deleting the file in the folder
const fs = require('fs')
if(fs.existsSync('./me.txt')){
    fs.unlink('./me.txt',(err)=>{

        if(err){
            console.log(err)
        }
        console.log('the file is deleted');
    })
}
else
{
    fs.touch('./me.txt',(err)=>{
console.log(err)
console.log('file is created')
    }
    )
}
