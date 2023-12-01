const {add,update,manyUpdate,remove, display}=require('./bookcontroller');
var anotherBook={
    title: 'history', 
    arthor:'dr allan',
    year: 1900 
}
add(anotherBook);
update(1,"title","novel");
const upadeted={

    title:"technology",
    year:2000,
}
manyUpdate(upadeted);
remove(2);
display()