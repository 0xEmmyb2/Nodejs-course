const express = require ('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from the Node API Server Updated");
});

mongoose.connect("mongodb+srv://cyubahiroemmy12_db_user:cUgTzCHEdTeKu757@backenddb.ugxei1n.mongodb.net/Node-API?appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});