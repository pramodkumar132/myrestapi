
require("./connection");

const express = require("express");
const Joi = require("joi");
const app = express();
const validation = require("./validation");
app.use(express.json());
const port = process.env.PORT||3000;
app.post("/", validation.registeration, (req, res) => {
  //Inserting Data
  res.send({ msg: "Successfully Registered" });
});

app.post("/data", (req, res) => {
  
  res.send({ msg: "Data Inserted" });
});

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
});


//app.listen(4000, () => console.log("Server is running"));