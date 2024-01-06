require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const nodemailer = require('nodemailer');
const sgmail = require('@sendgrid/mail');
//routers
const userRouter = require('./Routes/user.js');
const recipeRouter = require('./Routes/recipe.js');
const queryRouter = require('./Routes/query.js');
const connectToDatabase = require("./db.js");


app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Logging
if(process.env.NODE_ENV === "Development") {
    app.use(morgan("dev"));
} 

connectToDatabase();

app.get("/",(req,res)=>{
    const response = {
        ok:true,
        data:{
            msg:"Naive-Baker Backend here!😀"   
        },
        err:{    
        }
    }
    res.send(response);
});

app.use("/user",userRouter);
app.use("/recipe",recipeRouter);
app.use("/query",queryRouter);

const port = process.env.PORT  || 5000;
app.listen(port,() => {
    console.log(`server is running on port : ${port}`);
});



