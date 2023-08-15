var table1=document.getElementById('table1');
var table2=document.getElementById('table2');
var table3=document.getElementById('table3');
var tables=document.getElementById('tables');
window.addEventListener('click',removeitem)

function submit(){
    var fooditem=document.getElementById('fooditem').value;
    var foodprice=document.getElementById('foodprice').value;
    var tablenumber=document.getElementById('tablenumber').value;
var a={
    fooditem,
    foodprice,
    tablenumber
}

axios.post("http://localhost:3000/data/postorder",a)

    .then(responce=>{
        showuseronscreen(responce.data.neworder)
   })
.catch(err=>console.log(err))


}
window.addEventListener("DOMContentLoaded",()=>{
axios.get("http://localhost:3000/data/getorder")
.then(responce=>{
    showuseronscreen(responce.data.allorders)
    console.log(responce)
})
.catch(err=>console.log(err))
})

function showuseronscreen(menu){

var li=document.createElement('li')
li.appendChild(document.createTextNode(menu.fooditem+'-'+menu.foodprice+'/-'))
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('delete'));
li.appendChild(deleteBtn);
if(menu.tablenumber==1){
li.class=table1;
table1.appendChild(li);
}
else if(menu.tablenumber==2){
    li.class=table2;
    table2.appendChild(li);
 }
 else if(menu.tablenumber==3){
    li.class=table3;
   table3.appendChild(li);
 }
 else{
    console.log("No table found")
    li.class=table1;
table1.appendChild(li);
 }
}
function removeitem(e){
    if(e.target.classList.contains('delete'))
     {
var li=e.target.parentElement;
table1.removeChild(li)

}
}


