

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:4000/user/data")
    .then((responce)=>{
        console.log(responce)
        
    })
    .catch((err) =>{
        console.log(err)
    })
    })   