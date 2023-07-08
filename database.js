
var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    Password: "Siddhick",
})
conn.connect(function(err){
    if(err)
      throw err;
    console.log("Connection ");
})



