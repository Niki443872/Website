const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Route to check if the server is working
app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
