
function submit() {
  console.log("err")
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var Email = document.getElementById('Email').value;
  if (!username || !password || !Email) {
    alert('Please enter fields')
  }
  else {
    var obj = {
      username,
      password,
      Email
    }
    axios.post("http://localhost:4000/user/signup", obj)
      .then(responce => {
       console.log(responce)
      })
  }
}
