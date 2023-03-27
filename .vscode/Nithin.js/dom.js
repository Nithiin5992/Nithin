var x=0;
var sellproduct=document.getElementById("form");
var totalprice=document.getElementById("price");
var num=document.getElementById("num");
var products=document.getElementById("products")
products.addEventListener('click', removedetails);
products.addEventListener('click', editdetails);
function submit()
{
 
    var a=parseInt(document.getElementById('SellingPrice').value);
    var b=document.getElementById('ProductName').value;
  
    var obj={
      "SellingPrice":a,
      "ProductName":b,
     }
     axios.post("https://crudcrud.com/api/3d490345d64743b7905c3c8d92dd0001/myobj",obj)
     .then((responce)=>console.log(responce))
     .catch((err) =>console.log(err))
     showuser(obj)
 }
   function showuser(obj){
      var li=document.createElement('li');
     
      li.appendChild(document.createTextNode(obj.ProductName+'-Rs:'+obj.SellingPrice));
      li.className=products;
      li.id1=obj._id;
      console.log(li.id)
      li.id2=obj.SellingPrice
      var dltbutton = document.createElement('button')
      dltbutton.className = 'btn btn-danger btn-sm float-right delete';
      dltbutton.appendChild(document.createTextNode('delete'));
      li.appendChild(dltbutton);
      const editbutton = document.createElement('button')
      editbutton.className = 'btn btn-danger btn-sm float-right Edit';
      editbutton.appendChild(document.createTextNode('Edit'));
      li.appendChild(editbutton);
      products.appendChild(li) ;
      x=x+obj.SellingPrice;
      num.textContent=x;
    
  
}
window.addEventListener("DOMContentLoaded",()=>{
axios.get("https://crudcrud.com/api/3d490345d64743b7905c3c8d92dd0001/myobj")
.then((responce)=>{
  for(var i=0;i<responce.data.length;i++){
    showuser(responce.data[i]);
  }
})
.catch((err) =>console.log(err))
})

  
    function removedetails(e)
    {
     
       if(e.target.classList.contains('delete'))
       {
        if(confirm('Are You Sure?'))
          {
          let li = e.target.parentElement;
          products.removeChild(li);
          axios.delete("https://crudcrud.com/api/3d490345d64743b7905c3c8d92dd0001/myobj/"+li.id1)
          num.textContent=x-li.id2
         
       
          }
        }
      }
      function editdetails(e)
      {
       
         if(e.target.classList.contains('Edit'))
         {
          if(confirm('Are You Sure?'))
            {
              let li = e.target.parentElement;
              products.removeChild(li);
              axios.delete("https://crudcrud.com/api/3d490345d64743b7905c3c8d92dd0001/myobj/"+li.id1)
              num.textContent=x-li.id2
            submit();
           
         
            }
          }
        }
  