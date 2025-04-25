var express = require("express")
var cors = require("cors")
var dotenv=require("dotenv")
dotenv.config();
require("./connection")
var path=require("path")

var port=process.env.PORT;

var app=express();


const userRoute=require("./routes/userRoute")
const productRoute=require("./routes/productRoute")

app.use(express.json())

app.use(cors())

app.use('/api',userRoute)
app.use('/p',productRoute)
app.use('/upload',express.static(path.join(__dirname,'upload')))



app.listen(port,()=>{
    console.log(`Server is up and Running ${port}`)
})
