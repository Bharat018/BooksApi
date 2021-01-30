const express = require('express');
const mogooes = require('mongoose');
const route = require('./route');

//connect to mongodb
mogooes.connect("mongodb://localhost:27017/emp",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route)
        app.listen(3000,()=>{
            console.log('server started..!!')
        })
    }
)