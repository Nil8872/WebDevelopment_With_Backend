const express = require('express')
const path = require('path');
const fs = require('fs');
const api = express();

const pugPath = (path.join(__dirname, "../pug"));
api.set("view engine", 'pug');
api.set("views", pugPath);
api.use(express.urlencoded())

api.get("/", (req, res)=>{
    res.render('index', {
        title : "Nilesh's Website",
    });
})

api.post("/", (req, res)=>{
    Name = req.body.name
    age = req.body.age
    gender = req.body.gender
    number = req.body.number
    email = req.body.email
    address = req.body.address
    more = req.body.more
    res.send("your data submited successfully...")
    let data = `Client name is ${Name}, age is : ${age}, gender is ${gender} \n Mobile No.:${number}\n Email Address : ${email} \n Address : ${address} \n About more is : ${more} `
    fs.writeFileSync("niles.txt", data)
})
api.listen(4000, ()=>{
    console.log("Now server is starting");
})