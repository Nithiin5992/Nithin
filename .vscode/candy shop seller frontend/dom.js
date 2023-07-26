var candyshop=document.getElementById('candyshop')
candyshop.addEventListener('click',buy);
function submit(){
   var candyname=document.getElementById('candyname').value
   var description=document.getElementById('description').value
   var price=parseInt(document.getElementById('price').value)
   var quantity=parseInt(document.getElementById('quantity').value)
   var obj={
    candyname,
    description,
    price,
    quantity
   }
   postcandy(obj);
}
function  postcandy(obj){
   axios.post("http://localhost:4300/postcandydetails",obj)
   .then((responce)=>{
    console.log(responce)
    showonscreen(responce.data.newcandy);
   })
   .catch((err)=>console.log(err))
}
function showonscreen(candy){
  var li=document.createElement('li');
  li.appendChild(document.createTextNode(candy.candyname+'-'+candy.description+'-'+candy.price+'-'+candy.quantity));
  li.className=candyshop;
  li.id=candy.id;
  candyshop.appendChild(li)
  var buy1=document.createElement('button')
  buy1.className = 'btn btn-danger btn-sm float-right delete';
  buy1.appendChild(document.createTextNode('BUY'))
  li.appendChild(buy1)
  var buy2=document.createElement('button')
  buy2.appendChild(document.createTextNode('BUY-2'))
  li.appendChild(buy2)
  var buy3=document.createElement('button')
  buy3.appendChild(document.createTextNode('BUY-3'))
  li.appendChild(buy3)
}
function buy(e){
    console.log('errr');
        var candyname=document.getElementById('candyname').value
        var description=document.getElementById('description').value
        var price=parseInt(document.getElementById('price')).value
        var quantity=parseInt(document.getElementById('quantity')).value
    if(e.target.classList.contains('BUY'))
     {
        console.log('errr');
        if(confirm('Are You Sure?'))
        {
        var li=e.target.parentElement;
        candyshop.removeChild(li);
        axios.delete("http://localhost:4300/deletecandy/"+li.id);
       quantity=quantity-1
        var obj={
         candyname,
         description,
         price,
         quantity
        }
        postcandy(obj);
    }
     }}