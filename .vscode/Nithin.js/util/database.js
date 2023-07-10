const mysql = require('mysql2')

const pool=mysql.createPool({
host:'localhost',
user:'root',
database:'node_comnplete',
password:'nodecomplete'

})
module.exports=pool.promise()
