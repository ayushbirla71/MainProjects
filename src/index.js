const express = require('express')
const { Router } = require('express');
const bodyparser=require('body-parser')
const {default: mongoose}= require('mongoose')
const route = require('../src/route')

const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/ProjectPhase01?retryWrites=true&w=majority",{ useNewUrlParser:true})
.then(()=>console.log("mongoDB is connected"))
.catch(err=>console.log(err))

app.use('/',route)
app.listen(process.env.PORT||3000, function(){console.log('Express app running On PORT'+(process.env.PORT||3000))
})

