var abc =document.getElementById("item");
function test(){
var a = document.getElementById('choose experiment').value;
var b = document.getElementById('choose description').value;
var c = document.getElementById('Choose a category').value;
var li=document.createElement('li');
li.className="details";
li.appendChild(document.createTextNode(a+'-'+b+'-'+c));
abc.appendChild(li);
console.log(li);
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('Delete Expence'));
li.appendChild(deleteBtn);
abc.appendChild(li);
var EditBtn = document.createElement('button');
EditBtn.className = 'btn btn-danger btn-sm float-right delete';
    EditBtn.appendChild(document.createTextNode('Edit Expence'));
    li.appendChild(EditBtn);
    abc.appendChild(li);
    localStorage.setItem("data",a+'-'+b+','+c)
    
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
  
