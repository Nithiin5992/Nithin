
window.addEventListener("DOMContentLoaded",()=>{
axios.get("http://localhost:4000/user/data")
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
