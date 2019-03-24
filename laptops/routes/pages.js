const http = require('http');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {  
    const options = {
        host: 'localhost',
        port: process.env.PORT,
        path: '/api/laptops'
    }

    http.get(options, (request, response) => {
        let laptops = '';

        request.on('data', (data => {
            laptops += data;
        }));

        request.on('end', () => {
            console.log(JSON.stringify(laptops));
            res.render('index', {laptops: JSON.parse(laptops)});
        });

        request.on('error', error => {
            console.log(error);
        });
    });
});

module.exports = router;