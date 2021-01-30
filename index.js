const express = require('express');
const mogooes = require('mongoose');
const route = require('./route');

//connect to mongodb
mogooes.connect("mongodb+srv://Bharat:bharat02@mycluster.pz6la.mongodb.net/<Student>?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route)
        app.listen(process.env.PORT || 3000,()=>{
            console.log('server started..!!')
        })
    }
)