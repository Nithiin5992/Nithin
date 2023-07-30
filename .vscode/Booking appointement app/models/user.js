const db = require('../util/database');
module.exports = class User {
  constructor(id, username, password, email) {
     this.id=id;
     this.username=username;
     this.password=password;
     this.email=email;
  }
  save(){
  return db.execute(
    'INSERT INTO users (username,password,email) VALUES (?, ?, ?)',
    [this.username, this.password, this.email]
  );
}
static findById(id) {
  return db.execute(
    'SELECT*FROM users WHERE users.id=?',[id]
  );
}
static findByemail(email) {
  return db.execute(
    'SELECT*FROM users WHERE users.email=?',[email]
  );
}
}
