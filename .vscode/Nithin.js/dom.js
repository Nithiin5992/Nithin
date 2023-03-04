
var sellproduct=document.getElementById("form");
var totalprice=document.getElementById("price")
function submit()
{
    var a=document.getElementById('SellingPrice').value;
    var b=document.getElementById('ProductName').value;
    var x=a;
    var li2=document.createElement('li2')
    li2.className=totalprice;
    li2.appendChild(document.createTextNode(x))
    console.log(li2)
    totalprice.appendChild(li2);
var obj =
    {
      a,
      b
    }
axios.post("https://crudcrud.com/api/67150e97737541b482516c21de2abada/user",obj)
.then((responce)=>{
                    showuseronscreen(responce.data)
                  })
.catch((err) =>{
                console.log(err)
               })
 window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/67150e97737541b482516c21de2abada/user")
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
    li.className=sellproduct;
    li.appendChild(document.createTextNode(user.b+user.a));
    console.log(li)
    sellproduct.appendChild(li);
    adddeletebtn(li);
    
    sellproduct.addEventListener('click', removedetails);
    totalprice.addEventListener('click', removed);
    function removed(e)
    {
    if(e.target.classList.contains('delete'))
    {
     
       x=x-a;
       }
    
}
    function removedetails(e)
    {
     
       if(e.target.classList.contains('delete'))
       {
        if(confirm('Are You Sure?'))
          {
          var li = e.target.parentElement;
          sellproduct.removeChild(li);
          axios.delete("https://crudcrud.com/api/67150e97737541b482516c21de2abada/user/"+user._id)
          .then((responce)=>{
                               console.log(responce);
                               
                            })
          .catch((err) =>{
                          console.log(err)
                         })
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
     sellproduct.appendChild(li);
  }
 
  }

  
  