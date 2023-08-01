

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
      localStorage.setItem('token',responce.data.token)
      window.location.href = "http://127.0.0.1:5501/dailyexpence/dailyexpence.html";
    
    })
    .catch((err) => {
      console.log('err')
      alert(err.message)
    });
}