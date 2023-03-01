var abc =document.getElementById("item");
function test(){
var user = document.getElementById('username').value;
var age = document.getElementById('Age').value;
var Gr = document.getElementById('Graduation').value;
var yr = document.getElementById('Year of pass').value;
var li=document.createElement('li');
li.className="details";
li.appendChild(document.createTextNode(user+'-'+age+','+Gr+','+yr));
abc.appendChild(li);
console.log(li);
const obj = {
    user,
    age,
    Gr,
    yr
}
axios.post("https://crudcrud.com/api/4a6eae82e2c6428aa77406b2b32a5bef/user",obj)
.then((responce)=>{
    console.log(responce)
})
.catch((err) =>{
    console.log(err)
})
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('delete'));
li.appendChild(deleteBtn);
abc.appendChild(li);
var EditBtn = document.createElement('button');
EditBtn.className = 'btn btn-danger btn-sm float-right delete';
    EditBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(EditBtn);
    abc.appendChild(li);
}
abc.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;

      abc.removeChild(li);
    }
  }
}
window.addEventListener("DOMContentLoaded",()=>{
axios.get("https://crudcrud.com/api/4a6eae82e2c6428aa77406b2b32a5bef/user")
.then((responce)=>{
    console.log(responce)
    for(var i=0;i<responce.data.length;i++){
        showuseronscreen(responce.data[i])
    }
})
.catch((err) =>{
    console.log(err)
})
})
function showuseronscreen(user){
    var li=document.createElement('li');
    li.className="details";
    li.appendChild(document.createTextNode(user.user+","+user.age+","+user.Gr+","+user.yr));
    abc.appendChild(li);
    var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('delete'));
li.appendChild(deleteBtn);
abc.appendChild(li);

abc.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;

      abc.removeChild(li);
      axios.delete("https://crudcrud.com/api/4a6eae82e2c6428aa77406b2b32a5bef/user/user.id")
.then((responce)=>{
    console.log(responce)
})
.catch((err) =>{
    console.log(err)
})
    }
  }
}
}
