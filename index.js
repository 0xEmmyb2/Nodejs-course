const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require('./models/product.model.js');

const dbUser = "cyubahiroemmy12_db_user";
const dbPass = "cBCTbXzeXmMtkJUs";
const cluster = "backenddb";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the Node API Server Updated");
});

app.get('/api/products', async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
})

app.post("/api/products", async (req, res) => {
  try{
      const product = await Product.create(req.body);
      res.status(200).json(product);
  } catch (error){
    console.error(error);
    res.status(500).json({message: error.message});
  }
});

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
