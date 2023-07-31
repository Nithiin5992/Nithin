

function submit() {
var password = document.getElementById('password').value;
  var Email = document.getElementById('Email').value;
var obj={
    Email,
    password
}
postuser(obj);
}
function postuser(newuser) {
  axios.post("http://localhost:4000/user/login", newuser)
    .then(responce => {
      alert(responce.data.message);
     
    
    })
    .catch((err) => {
      console.log('err')
      alert(err.message)
    });
}