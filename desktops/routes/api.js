const Desktop = require('../models/Desktop');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    Desktop.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let valid = mongoose.Types.ObjectId.isValid(id)

    if (!valid){
        return res.status(400).json({success: false, msg: 'Invalid item id provided'});
    }

    Desktop.findById(req.params.id)
        .then(data => {
            if (data) {
                res.json({success: true, item: data});
            }
            else {
                res.status(400).json({success: false, msg: 'Item does not exist'});
            }
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/', (req, res) => {
    let valid = (() => {
        if (!req.body) return false;
        if (!req.body.name) return false;
        if (!req.body.price) return false;
        return true;
    })();

    if (!valid){
        return res.status(400).json({success: false, msg: 'Required parameters are missing'});
    }

    let newItem = new Desktop();
    newItem.name = req.body.name;
    newItem.price = req.body.price;

    newItem.save()
        .then(data => {
            res.json({sucess: true, item: data});
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;