const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dbUser = "cyubahiroemmy12_db_user";
const dbPass = "cBCTbXzeXmMtkJUs";
const cluster = "backenddb";

app.get("/", (req, res) => {
  res.send("Hello from the Node API Server Updated");
});

app.post("/api/products", (req, res) => {
  res.send("Data received");
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
