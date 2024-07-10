
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Card = require('./models/Card');

require('dotenv').config();

// Request logger - prints request info to console -- only for dev purposes
const requestLogger = (req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:  ', req.path);
    console.log('Body:  ', req.body);
    console.log('---');
    next();
};

app.set('view engine', 'ejs');
app.use(requestLogger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
// / - GET - RENDERS ALL CARDS TO EJS VIEW
app.get('/', (req, res) => {
    Card.find()
        .then(results => {
            console.log('you got results girl');
        })
        .catch(error => console.error(error));
});

app.get("/api/cards", async (req, res) => {
    try {
        const PAGE_SIZE = 12;
        const page = parseInt(req.query.page || "0");
        const total = await Card.countDocuments({});
        const cards = await Card.find({})
            .sort({ setName: 1, collectorNumber: 1 })
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE  * page); 

            console.log('Response Data:', cards); // Log the response data

        res.json({
            totalPages: Math.ceil(total / PAGE_SIZE),
            cards,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Return the total number of cards in the collection
app.get('/api/cards/count', async (req, res) => {
    try {
        const totalCards = await Card.countDocuments();
        res.json({ totalCards });
    } catch (error) {
        console.error('Error fetching card count:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

/*
// /api/cards - GET - RETURNS ALL CARDS AS JSON - ORIGINAL ROUTE
app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find().sort({ setName: 1 , collectorNumber: 1 }); // Sorting by rarity in ascending order
        res.json(cards);
    }
    catch(error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        };
});
*/

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_DB_URI, { dbName: 'raw-deal-app' })
    .then(() => {
        console.log('Connected to Database');

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));
