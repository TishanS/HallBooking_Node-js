const express=require('express');
const cors = require('cors');
const mongo=require('./shared');
const getRouter=require('./router/hall');
const res = require('express/lib/response');
const app=express();

app.use(cors());
app.use(express.json()); //inbuilt middleware //convert req body into json format
mongo.connect();

app.use('/users',getRouter);

const port=process.env.PORT || 3001
app.listen(port,function(){
    console.log("Port connected hello");
   
});