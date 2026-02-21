const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const Product = require("./models/product.model");

const app = express();


const dbUser = "cyubahiroemmy12_db_user";
const dbPass = "cBCTbXzeXmMtkJUs";
const cluster = "backenddb";


//Middleware configuration
app.use(express.json());
//Adding the form URL Encoded
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products",  productRoute);

app.get("/", (req, res) => {
  res.send("Hello from the Node API Server Updated");
});


//Connection to the database
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@${cluster}.ugxei1n.mongodb.net/?appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to database!");
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) =>{
    console.error("Database connection failed:");
    console.error("Error Code:", error.code);
    console.error("Full Message:", error.message);
  }
  );