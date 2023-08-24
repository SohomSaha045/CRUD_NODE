const express=require('express');
const app=express();
const userRouter=require('./routes/user');
const {connectMongoDb}=require ('./connection');
const {logReqRes}=require('./middlewares/index');
//Connecting Mongoose
connectMongoDb("mongodb://127.0.0.1:27017/testApi").then(()=>console.log('Connected'));
//SCHEMA BUILDING



  //middleware - plugin
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"));
//Routes
app.use('/api/user',userRouter);



app.listen(8000,()=>{
    console.log( `Listening to port 8000.....`);
});
