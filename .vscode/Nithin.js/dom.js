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
    localStorage.setItem("data",user+'-'+age+','+Gr+','+yr)
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
  

