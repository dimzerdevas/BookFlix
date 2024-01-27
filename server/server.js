const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const whitelist = ["http://localhost:5173"];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}


const Book = require('./models/Book')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server Error' });
    }
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
