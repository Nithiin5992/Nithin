var candyshop = document.getElementById('candyshop')
candyshop.addEventListener('click', buy);
window.addEventListener("DOMContentLoaded", () =>
   axios.get("http://localhost:4300/candies")
      .then((responce) => {
         console.log(responce)
         for (let i = 0; i < responce.data.allcandy.length; i++) {
            showonscreen(responce.data.allcandy[i]);
         }
      })
      .catch((err) => console.log(err))
)

function submit() {
   var candyname = document.getElementById('candyname').value
   var description = document.getElementById('description').value
   var price = parseInt(document.getElementById('price').value)
   var quantity = parseInt(document.getElementById('quantity').value)
   var obj = {
      candyname,
      description,
      price,
      quantity
   }
   postcandy(obj);
}
function postcandy(obj) {
   axios.post("http://localhost:4300/candies", obj)
      .then((responce) => {
         console.log(responce)
         showonscreen(responce.data.newcandy);
      }).catch(err => console.log('err'))
}
function showonscreen(candy) {
   var li = document.createElement('li');
   li.appendChild(document.createTextNode(candy.candyname + '-' + candy.description + '-rs' + candy.price + '/-' + candy.quantity));
   li.className = candyshop;
   li.id = candy.id;
   li.candyname = candy.candyname;
   li.description = candy.description;
   li.price = candy.price;
   li.quantity = candy.quantity;
   candyshop.appendChild(li)
   var buy1 = document.createElement('button')
   buy1.className = 'btn btn-danger btn-sm float-right BUY-1';
   buy1.appendChild(document.createTextNode('BUY-1'))
   li.appendChild(buy1)
   var buy2 = document.createElement('button')
   buy2.className = 'btn btn-danger btn-sm float-right BUY-2';
   buy2.appendChild(document.createTextNode('BUY-2'))
   li.appendChild(buy2)
   var buy3 = document.createElement('button')
   buy3.className = 'btn btn-danger btn-sm float-right BUY-3';
   buy3.appendChild(document.createTextNode('BUY-3'))
   li.appendChild(buy3)
}
function buy(e) {

   if (e.target.classList.contains('BUY-1')) {
      var li = e.target.parentElement;
      if (li.quantity > 0) {
         axios.delete("http://localhost:4300/candies/" + li.id);
         candyshop.removeChild(li);
         candyname = li.candyname;
         description = li.description;
         price = parseInt(li.price);
         quantity = li.quantity - 1;
         var obj = {
            candyname,
            description,
            price,
            quantity
         }
         postcandy(obj)
      }
      else {
         axios.delete("http://localhost:4300/deletecandy/" + li.id);
         candyshop.removeChild(li);
      }
   }
   else if (e.target.classList.contains('BUY-2')) {
      var li = e.target.parentElement;
      if (li.quantity > 1) {
         axios.delete("http://localhost:4300/deletecandy/" + li.id);
         candyshop.removeChild(li);
         candyname = li.candyname;
         description = li.description;
         price = parseInt(li.price);
         quantity = li.quantity - 2;
         var obj = {
            candyname,
            description,
            price,
            quantity
         }
         postcandy(obj);
      }
      else {
         alert('less quantity or out of stock')
      }
   }
   else if (e.target.classList.contains('BUY-3')) {
      var li = e.target.parentElement;
      if (li.quantity > 2) {
         axios.delete("http://localhost:4300/deletecandy/" + li.id);
         candyshop.removeChild(li);
         quantity = quantity - 3
         candyname = li.candyname;
         description = li.description;
         price = parseInt(li.price);
         quantity = li.quantity - 3;
         var obj = {
            candyname,
            description,
            price,
            quantity
         }
         postcandy(obj);
      }
      else {
         alert('less quantity or out of stock')
      }
   }
}