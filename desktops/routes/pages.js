const http = require('http');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {  
    const options = {
        host: 'localhost',
        port: process.env.PORT,
        path: '/api/desktops'
    }

    http.get(options, (request, response) => {
        let desktops = '';

        request.on('data', (data => {
            desktops += data;
        }));

        request.on('end', () => {
            console.log(JSON.stringify(desktops));
            res.render('index', {desktops: JSON.parse(desktops)});
        });

        request.on('error', error => {
            console.log(error);
        });
    });
});

module.exports = router;