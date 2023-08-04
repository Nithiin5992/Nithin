var details=document.getElementById('details');
details.addEventListener('click', removeexpence);
window.addEventListener("DOMContentLoaded",()=>{
    const token =localStorage.getItem('token');
    axios.get("http://localhost:4000/dailyexpence",{headers:{'authorization':token}})
    .then((responce)=>{
      for(var i=0;i<responce.data.dailyexpence.length;i++){
        showuseronscreen(responce.data.dailyexpence[i])
    }
        console.log(responce)
        
    })
    .catch((err) =>{
        console.log(err)
    })
    })   
function submit() {
    var expenceamount = document.getElementById('expenceamount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;
    const token =localStorage.getItem('token');
    
    
   
      var obj = {
        expenceamount,
        description,
        category,
        token
     
      }
      postuser(obj);
    }
  
  function postuser(dailyexpence) {
    const token =localStorage.getItem('token');
    
    axios.post("http://localhost:4000/dailyexpence", dailyexpence,{headers:{'authorization':token}})
      .then(responce => {
        console.log(responce)
        
            showuseronscreen(responce.data.dailyexpence)
        
       alert(responce.data.message)
      })
      .catch((err) => {
        console.log(err)
        alert('request error')
      });
     
  }
  function showuseronscreen(dailyexpence){
    console.log('nithihn')
    var li=document.createElement('li');
    li.class='details';
    li.appendChild(document.createTextNode(dailyexpence.category+'-'+dailyexpence.expenceamount+'('+dailyexpence.description+')'))
    details.appendChild(li)
    li.id=dailyexpence.id;
  var dltbutton = document.createElement('button')
  dltbutton.className = 'btn btn-danger btn-sm float-right delete';
  dltbutton.appendChild(document.createTextNode('deleteexpence'));
  li.appendChild(dltbutton);
  }
  function removeexpence(e)
{

   if(e.target.classList.contains('delete'))
   {
    if(confirm('Are You Sure?'))
      {   let li = e.target.parentElement;
        details.removeChild(li);
        axios.delete("http://localhost:4000/dailyexpence/"+li.id)
    
        }
      }
    }
    document.getElementById('rzp_button1').onclick=async function(e){
    const token=localStorage.getItem('token')
    const responce=await axios.get("http://localhost:4000/purchase/purchasepremium",{headers:{'authorization':token}})
        console.log(responce)
       
        var options={
            "key":responce.data.key_id,
            "orderid":responce.data.order.id,
            "handler": async function(responce){
             await  axios.post("http://localhost:4000/purchase/updatetransactionstatus",{
                order_id:options.orderid,
                payment_id:responce.rozarpay_payment_id
              },{headers:{'authorization':token}})
              alert("you are a premium user now")
            }
        }
const rzpl=new Razorpay(options);
rzpl.open();
e.preventDefault()
rzpl.on('payment failed',function(responce){
    alert("somethingwentwrong")

})
    }

    