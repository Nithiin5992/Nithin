
var details=document.getElementById("form");
function submit()
{var a=document.getElementById('Name').value

var obj =
    {
      a
    }
axios.post("https://crudcrud.com/api/641ef2333b7d4d56836a91dbe8021506/myuser",obj)
.then((responce)=>{
                    showuseronscreen(responce.data)
                  })
.catch((err) =>{
                console.log(err)
               })
 window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/641ef2333b7d4d56836a91dbe8021506/myuser")
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
        
                   
  function showuseronscreen(user)
  {
    var li=document.createElement('li')
    li.className=details;
    li.appendChild(document.createTextNode(user.a));
    console.log(li)
    details.appendChild(li);
    adddeletebtn(li)
    addeditbtn(li)
    details.addEventListener('click', removeuser);
    details.addEventListener('click', edituser);
    function removeuser(e)
    {
     
       if(e.target.classList.contains('delete'))
       {
        if(confirm('Are You Sure?'))
          {
          var li = e.target.parentElement;
          details.removeChild(li);
          axios.delete("https://crudcrud.com/api/641ef2333b7d4d56836a91dbe8021506/myuser/"+user._id)
          .then((responce)=>{
                               console.log(responce);
                               
                            })
          .catch((err) =>{
                          console.log(err)
                         })
          }
       
      }
    }
    function edituser(e)
    {
     
       if(e.target.classList.contains('Edit'))
       {
        if(confirm('Are You Sure?'))
          {
          removeuser(e)
           
          }
       
      }
    }
}
   
   
  function adddeletebtn(li)
  {
     var deleteBtn = document.createElement('button');
     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('delete'));
     li.appendChild(deleteBtn);
     details.appendChild(li);
  }
  function addeditbtn(li)
  {
     var editBtn = document.createElement('button');
     editBtn.className = 'btn btn-danger btn-sm float-right Edit';
     editBtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editBtn);
     details.appendChild(li);
  }
 
}
  