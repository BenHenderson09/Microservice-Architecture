const express = require('express');
const app = express();

// Config
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

// Routing
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});