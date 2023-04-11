var expence=document.getElementById("expence");
const btn=document.getElementById("submit")
btn.addEventListener("click",submit);
expence.addEventListener("click",removedata)
expence.addEventListener("click",editdata)

function submit(){
    var a=document.getElementById("Choose experiment").value;
    var b=document.getElementById("Description").value;
    var c=document.getElementById("mySelect").value;
    var obj={
        "choose experiment":a,
        "Description":b,
        "Choose a category":c
    }
showuser(obj)
}
 function showuser(obj){
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(obj["choose experiment"]+obj.Description+obj["Choose a category"]));
    li.className=expence;
    li.id=obj.Description;
    var dltbutton = document.createElement('button')
    dltbutton.className = 'btn btn-danger btn-sm float-right delete';
    dltbutton.appendChild(document.createTextNode('delete'));
    li.appendChild(dltbutton);
    const editbutton = document.createElement('button')
    editbutton.className = 'btn btn-danger btn-sm float-right Edit';
    editbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbutton);
    expence.appendChild(li)   
        localStorage.setItem(li.id,JSON.stringify(obj));
        console.log(localStorage);     
  }  

    window.addEventListener("DOMContentLoaded",()=>
   {
    console.log(Object.values(localStorage))
    for(var i=0;i<Object.keys(localStorage).length;i++){
        var li=document.createElement('li');
        var localStorageobj=JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]));
      showuser(localStorageobj)
     }
    })
function removedata(e)
    {
        if(e.target.classList.contains('delete'))
        {
           
         if(confirm('Are You Sure?'))
           {
           let li = e.target.parentElement;
          expence.removeChild(li);
          localStorage.removeItem(li.id)
           }
         }
     }

function editdata(e)
    {
        if(e.target.classList.contains('Edit'))
        {
           
            let li = e.target.parentElement;
            expence.removeChild(li);
            localStorage.removeItem(li.id)
           submit();
         }
     }
    
