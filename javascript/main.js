var nameBookInPut=document.getElementById("bookName")
var URLBookInPut=document.getElementById("URL")
if (localStorage.getItem("bookstorge") !=null ){
     bookList=JSON.parse(localStorage.getItem("bookstorge"))
     display()
}
var bookList=[];
function addBoock() {
    var book={
        naame:nameBookInPut.value,
        ulr:URLBookInPut.value,
    }
    
    bookList.push(book)
    localStorage.setItem("bookstorge",JSON.stringify(bookList))
    display()
}
function display(){
    var temp="";
    for(var i=0;i<bookList.length;i++){
        temp+=` <tr>
        <td>`+i+`</td>
        <td>`+bookList[i].naame+`</td>
        <td><button class="delete" class="btn b" ><i class="fa-solid fa-eye"></i>visit</button></td>
        <td><button onclick="delet(`+i+`)"  class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
        
    </tr>
</tbody>`
    }
    document.getElementById("bookTable").innerHTML=temp
}function delet(indexbook){
    bookList.splice(indexbook,1)
    localStorage.setItem("bookstorge",JSON.stringify(bookList))
    display();}