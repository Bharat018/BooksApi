const express = require('express');
const mogoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./route');

//connect to mongodb
mogoose.connect("mongodb+srv://Bharat:bharat02@mycluster.pz6la.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route)
        
        app.listen(process.env.PORT || 3000,()=>{
            console.log('server started..!!')
        })
    }
);
