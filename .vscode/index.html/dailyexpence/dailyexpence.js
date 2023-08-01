var details=document.getElementById('details');
details.addEventListener('click', removeexpence);
window.addEventListener("DOMContentLoaded",()=>{
    const token =localStorage.getItem('token');
    console.log(token)
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
    
    
   
      var obj = {
        expenceamount,
        description,
        category,
     
      }
      postuser(obj);
    }
  
  function postuser(dailyexpence) {
    axios.post("http://localhost:4000/dailyexpence", dailyexpence)
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
