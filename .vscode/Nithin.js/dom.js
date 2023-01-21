function test(){
  var uid = document.getElementById("username").value;
  var Age =document.getElementById("Age").value
  var Gr =document.getElementById("Graduation").value
  var yr =document.getElementById("Year of pass").value
  localStorage.setItem("Name",uid);
  localStorage.setItem("Age",Age);
  localStorage.setItem("Graduation",Gr);
  localStorage.setItem("year",yr);
}