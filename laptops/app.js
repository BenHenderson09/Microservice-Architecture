const api = require('./routes/api');
const pages = require('./routes/pages');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Config
const port = process.env.PORT || 3000;
const db_string = process.env.DB_STR;
app.set('view engine', 'ejs');

// Mongo
mongoose.connect(db_string, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connection established');
    })
    .catch(err => {
        console.log(err);
    });

// Routes
app.use('/api/laptops', api);
app.use('/laptops', pages);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});