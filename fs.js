 const fs= require('fs');
// fs.readFile('./text.txt',(err,data)=>{
// if (err)
// {

//     console.log(err)};
    
    
//     console.log(data.toString());});  

//     console.log('last linne');
// fs.writeFile('./text1.txt','hello again Boitenge',()=>{
//     console.log('file was writen')

// })
//(the below function checks if the directory created does not exist then create it)
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('directory is successfully creaated')
})}
else
{
    //when fs.existsSync find that the folder alread exist it will delete it
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Directory is deleted!')

    })
}

//deleting the file in the folder
if(fs.existsSync('./me.txt')){
    fs.unlink('./me.txt',(err)=>{

        if(err){
            console.log(err)
        }
        console.log('the file is deleted');
    })
}
