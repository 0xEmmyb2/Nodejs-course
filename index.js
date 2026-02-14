const express = require ('express');
const mongoose = require('mongoose');
const app = express();

const dbUser = 'cyubahiroemmy12_db_user';
const dbPass = 'A%40barca100%25';
const cluster = 'BackendDB';

app.get('/', (req, res) => {
    res.send("Hello from the Node API Server Updated");
});

app.post

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${cluster}mongodb.net/?appName=BackendDB`)
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
})
.catch((error) => {
    console.error("Connection failed!",error);
});