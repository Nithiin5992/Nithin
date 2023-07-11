const mysql = require('mysql2')

const pool=mysql.createPool({
host:'localhost',
user:'root',
database:'node_complete',
password:'Nithin5992'
})
module.exports=pool.promise()
