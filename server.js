// Steps: i) Create a folder. ii) Move into that folder. iii) npm init -y iv) Open folder v) npm i express vi) create server.js

// Server Instansiate
const express=require("express");
const app=express();

// body-parser is a middleware in Node.js
const bodyParser=require('body-parser');  // used to parse req.body in express -> PUT or POST
app.use(bodyParser.json());  // specifically parse JSON data and add it to the rquest.body object

// Activated the server on port 3000
app.listen(3000,()=>{
    console.log("Server started at port 3000");
});

// Routes
// get request
app.get('/',(request,response)=> {  // '/' this means that the router is the home page and when we'll be on the home page,this below line will be response
    response.send("Hello World");
}) 

// post request using POSTMAN
app.post('/api/cars',(request,response)=> {  
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully!!!");
})   


// MongoDB: No-SQL DB. Data can be stored in the form of documents, key-value pairs, graphs, etc.  CRUD
// Connecting express to mongodb i.e., server to db, we'll use mongoose
// Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js.

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{  // connecting mongoose to the database named myDatabase and if there is no db named myDatabase then it will create
    useNewUrlParser: true,
    useUnifiedTopology: true
})  // it is a promise so we are below using then catch
.then(()=> {console.log("Connection successful");})
.catch((err)=> {console.log("Received an error: ",err);}); 