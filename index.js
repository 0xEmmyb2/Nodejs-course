import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';

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

app.get('/api/products', async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
});


//Getting an object or name with a certain id
app.get('/api/products/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Get to view objects as they appear in the database.
app.post("/api/products", async (req, res) => {
  try{
      const product = await Product.create(req.body);
      res.status(200).json(product);
  } catch (error){
    console.error(error);
    res.status(500).json({message: error.message});
  }
});


//Update a product 
app.put('/api/products/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body,{ new: true, runValidators: true});

    if (!updatedProduct){
      return res.status(404).json({message: "Product Not Found"});
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});


//Deleting a product
app.delete('/api/products/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if(!deletedProduct){
      return res.status(404).json({message: "Product Not Found"});
    }

    res.status(200).json({message: "Product deleted successfully."})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

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
