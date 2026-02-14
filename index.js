const express = require ('express');
const mongoose = require('mongoose');
const app = express();

const dbUser = 'cyubahiroemmy12_db_user';
const dbPass = 'A%40barca100%25';
const cluster = 'BackendDB';

app.get('/', (req, res) => {
    res.send("Hello from the Node API Server Updated");
});

app.post('/api/products', (req, res) => {
    res.send("Data received");
});

// Start server first so it runs even if DB connection fails
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${cluster}.mongodb.net/?appName=BackendDB`)
    .then(() => console.log("Connected to database!"))
    .catch((error) => console.error("Database connection failed:", error.message));