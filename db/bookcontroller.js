const {booksDatabase}=require('./books');
const add=(newbooks)=>{
    newbooks.id=booksDatabase.length+1;
    booksDatabase.push(newbooks);
    console.log("book added");
}
const update=(id,key,value)=>{
    var exist=booksDatabase.find(element=>element.id==id);
    if (!exist) {
        console.log("no such book in our library");
    } else {
        exist[key]=value;
        console.log("updated/n");
        console.log(exist);
    }
//update many
const manyUpdate=(id,object)=>{
    var exists=booksDatabase.find(element=>element.id===id);
    if (!exists) {
        console.log("no such book in our libraly");
    } else {
        for(key in object){
            exists[key]=object[key];  
        
        console.log("book was upadeted");
        console.log(exists);
            } 
     }  
    }
    const remove=(id)=>{
        var exists=booksDatabase.find(element=>element.id===id);
        if (!exists) {
          console.log("book not found\n");
      
      
        } else {
          var remaining=[];
          remaining=booksDatabase.filter(element=>element.id!==id);
          console.log(remaining);
      
        } 
        const display=()=>{
            console.log(booksDatabase);
        } 
      }
}











module.exports={
    add,update,manyUpdate,display,
}