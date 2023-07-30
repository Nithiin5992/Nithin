
function submit() {
var password = document.getElementById('password').value;
  var Email = document.getElementById('Email').value;
axios.get('http://localhost:4000/user/data')
.then((response)=>{
    for(let i=0;i<response.data.allUsers[0].length;i++){
   if((response.data.allUsers[0][i].email==Email)&&(response.data.allUsers[0][i].password==password)){
       alert('login successful')
   }
}
}).catch((err)=>{
    console.log('err')
    alert('error in login page')
})
}