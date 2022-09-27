const express = require("express");
const multer = require('multer');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  insecureAuth : true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();

app.use(express.json());

app.use(express.static("./public/LoginForm"));

app.listen(3000,()=>{
  console.log("server started listening on port 3000")
});

const loginForm = express.Router();
loginForm.use("/", express.static("./public/LoginForm/"))
loginForm.post("/",(req,res)=>{
  console.log("hit askdjkj")
  const userDetail= {
    username: "user",
    password: "pass"
  }
  res.status(200).json(userDetail);
})
app.use('/login', loginForm);