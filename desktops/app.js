const api = require('./routes/api');
const pages = require('./routes/pages');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Config
const port = process.env.PORT || 3000;
const db_string = process.env.DB_STR;

// Mongo
mongoose.connect(db_string, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connection established');
    })
    .catch(err => {
        console.log(err);
    });

// Routes
app.use('/api/desktops', api);
app.use('/desktops', pages);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});