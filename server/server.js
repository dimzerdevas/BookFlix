const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.get('/', (req,res) => {
    res.send('Hello Express')
})

    // Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})
