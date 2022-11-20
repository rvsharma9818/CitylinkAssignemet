const express = require('express');
const app=express()
const connectDB =require('./Dbconfif.js/dbconfig')
const route = require('./Routes/routes')
require('dotenv').config();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',route)

connectDB() 



app.listen(process.env.port,()=>{
    console.log(`${process.env.PORT} Server is runing`)
})