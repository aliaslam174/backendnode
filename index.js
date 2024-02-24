const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors = require("cors")
const path = require("path");
const userRoutes=require('./routes/Userroutes')

// middel weare 
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));

// user routes

app.get('/', (req, res) => {
    res.send('Hello my node project !');
  });

app.use("/user",userRoutes)

// db conect and server listen (4002)

mongoose.connect('mongodb://127.0.0.1:27017/blog').then(()=>{
    app.listen('4002',()=>{
        console.log('server is listen')
    })

})

