var products=document.getElementById("products")
var nums=document.getElementById("nums")
var x=0;
products.addEventListener('click', removedetails);
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:8000/getorders")
    .then((responce)=>{
      for(var i=0;i<responce.data.allOrders.length;i++){
        showuseronscreen(responce.data.allOrders[i])
    }
        console.log(responce)
        
    })
    .catch((err) =>{
        console.log(err)
    })
    })    
function submit(){
    var product=document.getElementById('sell').value
    var price=parseInt(document.getElementById('price').value)
    var obj={
        product,
        price
    }
    axios.post("http://localhost:8000/postorders",obj)
    .then((responce)=>{
        console.log(responce.data.neworder)
        
        showuseronscreen(responce.data.neworder)
    })
    .catch((err)=>console.log(err))
  
}
function showuseronscreen(user){
    var li=document.createElement('li')
    li.class="products"
    li.appendChild(document.createTextNode(user.product+"-rs"+user.price+"/-"))
    products.appendChild(li)
    x=x+user.price;
    li.id1=user.id
    li.id2=user.price
    nums.textContent=x;
    var dltbutton = document.createElement('button')
      dltbutton.className = 'btn btn-danger btn-sm float-right delete';
      dltbutton.appendChild(document.createTextNode('delete'));
      li.appendChild(dltbutton);
}

function removedetails(e)
{

   if(e.target.classList.contains('delete'))
   {
    if(confirm('Are You Sure?'))
      {   let li = e.target.parentElement;
        products.removeChild(li);
        axios.delete("http://localhost:8000/deleteorders/"+li.id1)
        x=x-li.id2;
        nums.textContent=x;


        }
      }
    }