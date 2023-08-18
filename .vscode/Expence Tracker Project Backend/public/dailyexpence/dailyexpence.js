var expenceheader = document.getElementById('expence');
var expencetracker = document.getElementById('expence_tracker');
var expence = document.getElementById('expences');
expence.addEventListener('click', removeexpence);
var totalexpence = 0;
window.addEventListener("DOMContentLoaded", () => {
  const premiumuser = localStorage.getItem('premiumuser');

  const token = localStorage.getItem('token');
  getexpence(token, 0)
  if (premiumuser == 'true') {
    getexpence(token, 0);
    updatepremiumuser();
  }
})
function rowrange() {
  var rows = document.getElementById('rows').value
  localStorage.setItem('rows', rows)
}

function submit() {
  var expenceamount = parseInt(document.getElementById('expenceamount').value);
  var description = document.getElementById('description').value;
  var category = document.getElementById('category').value;
  console.log(totalexpence)
  var obj = {
    expenceamount,
    description,
    category,
  }
  postexpence(obj);
}
function getexpence(token, i) {
  let rows = localStorage.getItem('rows')
  axios.get("http://localhost:4000/dailyexpence", { headers: { 'authorization': token } })
    .then((responce) => {
      let count = 0;
      var expencelist = document.createElement('expencelist');
      for (i; i < responce.data.dailyexpence.length; i++) {

        showuseronscreen(responce.data.dailyexpence[i], expencelist)
        count++
        if (count == rows) {
          createbutton(expencelist, 'NextPage', 'NextPage');
          NextPage.onclick = function () {
            expence.removeChild(expencelist);
            createbutton(expencelist, 'PreviousPage', 'PreviousPage');
            const token = localStorage.getItem('token');
            getexpence(token, i)
          }

          break;
        }
      }
      console.log(responce)

    })
    .catch((err) => {
      console.log(err)
    })

}

function postexpence(dailyexpence) {
  const token = localStorage.getItem('token');

  axios.post("http://localhost:4000/dailyexpence", dailyexpence, { headers: { 'authorization': token } })
    .then(responce => {
      console.log(responce)

      showuseronscreen(responce.data.dailyexpence)

      alert(responce.data.message)
    })
    .catch((err) => {
      console.log(err)
      alert('request error')
    });

}
function showuseronscreen(dailyexpence, expencelist) {
  var li = document.createElement('li');
  li.class = 'expencelist';
  li.appendChild(document.createTextNode(dailyexpence.category + '-' + dailyexpence.expenceamount + '(' + dailyexpence.description + ')'))
  expencelist.appendChild(li);
  expence.appendChild(expencelist)
  li.id = dailyexpence.id;
  var dltbutton = document.createElement('button')
  dltbutton.className = 'btn btn-danger btn-sm float-right delete';
  dltbutton.appendChild(document.createTextNode('deleteexpence'));
  li.appendChild(dltbutton);
}
function removeexpence(e) {

  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      let li = e.target.parentElement;
      expence.removeChild(li);
      const token = localStorage.getItem('token');
      axios.delete("http://localhost:4000/dailyexpence/" + li.id)

    }
  }
}
document.getElementById('rzp_button1').onclick = async function (e) {
  const token = localStorage.getItem('token')
  const responce = await axios.get("http://localhost:4000/purchase/purchasepremium", { headers: { 'authorization': token } })
  console.log(responce)

  var options = {
    "key": responce.data.key_id,
    "orderid": responce.data.order.id,
    "handler": async function (responce) {
      await axios.post("http://localhost:4000/purchase/updatetransactionstatus", {
        order_id: options.orderid,
        payment_id: responce.rozarpay_payment_id
      }, { headers: { 'authorization': token } })
      alert("you are a premium user now")
      localStorage.updateItem('premiumuser', 'true')
      updatepremiumuser();
    }
  }
  const rzpl = new Razorpay(options);
  rzpl.open();
  e.preventDefault()
  rzpl.on('payment failed', function (responce) {
    alert("somethingwentwrong")

  })
}
function updatepremiumuser() {
  var premiumbutton = document.getElementById('rzp_button1')
  var li = premiumbutton.parentElement;
  li.replaceChild(document.createTextNode('you are a premium user'), premiumbutton);
  createbutton(li, 'LeaderBoard', 'LeaderBoard')
  createbutton(li, 'dailyexpence', 'dailyexpence')
  createbutton(li, 'MonthlyExpence', 'MonthlyExpence')
  createbutton(li, 'YearlyExpence', 'YearlyExpence')
  const parent = li;
  LeaderBoard.onclick = async function (e) {
    await axios.get("http://localhost:4000/premium/leaderboard")
      .then(responce => {
        console.log(responce)
        for (let i = 0; i < responce.data.length; i++) {
          var li = document.createElement('li')
          li.appendChild(document.createTextNode('Name:' + responce.data[i].username + '-TotalExpence:' + responce.data[i].totalexpence))
          parent.appendChild(li)
        }
      }).catch((err) => console.log(err))
  }
}

function createbutton(li, button, id) {
  var newbutton = document.createElement('button');
  newbutton.appendChild(document.createTextNode(button));
  li.appendChild(newbutton);
  newbutton.id = id;
}


function downloadexpences() {
  const token = localStorage.getItem('token')
  axios.get("http://localhost:4000/downloadexpence", { headers: { 'authorization': token } })
    .then(responce => {
      var a = document.createElement('a');
      a.href = responce.data.fileurl;
      a.download = expence.scrollIntoView;
      a.click();
      console.log(responce.data)
    })
    .catch(err => console.log(err))
}
