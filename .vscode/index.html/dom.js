var abc=document.getElementById('details')
details.addEventListener('click', removeuser);
window.addEventListener("DOMContentLoaded",()=>{
  axios.get("http://localhost:4000/user/data")
  .then((responce)=>{
    for(var i=0;i<responce.data.allUsers.length;i++){
      showuseronscreen(responce.data.allUsers[i])
  }
      console.log(responce)
      
  })
  .catch((err) =>{
      console.log(err)
  })
  })    
  function submit(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var Email=document.getElementById('Email').value;
    var obj ={
           username,
           password,
           Email
          }
          axios.post("http://localhost:4000/user/add",obj)
          .then(responce=>{
               showuseronscreen(responce.data.newuser)
          })
        }
function showuseronscreen(user){
 var li=document.createElement('li');
li.className="details";
li.appendChild(document.createTextNode(user.username+"-"+user.password+"-"+user.Email+user.id));
abc.appendChild(li);
li.id=user.id
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('delete'));
li.appendChild(deleteBtn);

}
  function removeuser(e)
  {
  
     if(e.target.classList.contains('delete'))
     {
      if(confirm('Are You Sure?'))
        {
        var li = e.target.parentElement;
        details.removeChild(li);
        var a=li.id;
        
        axios.delete('http://localhost:4000/user/deletedata/'+a)
        .then((responce)=>{
                             console.log(responce);
  
                          })
        .catch((err) =>{
                        console.log(err)
                       })
        }
  
    }
  }
