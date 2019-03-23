const Laptop = require('../models/Laptop');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(bodyParser.json());

function validateId(id){
    let validId = mongoose.Types.ObjectId.isValid(id);

    if (!validId) return res.status(400).json({success: false, message: 'Invalid item id provided'});

    return Promise.resolve();
}

// Gets all items
router.get('/', (req, res) => {
    Laptop.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
});

// Gets a single item by the id
router.get('/:id', (req, res) => {
    validateId(req.params.id)
        .then(() => {
            return Laptop.findById(req.params.id);
        })
        .then(item => {
            if (!item) return res.status(400).json({success: false, msg: 'Item does not exist'});

            res.json(item);
        })
        .catch(err => console.log(err));
});

// Creates a single item in the database
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

    let newItem = new Laptop();
    newItem.name = req.body.name;
    newItem.price = req.body.price;

    newItem.save()
        .then(item => {
            res.json({sucess: true, item});
        })
        .catch(err => console.log(err));
});

// Updates an item by id
router.put('/:id', (req, res) => {
    let validBody = (() => {
        if (!req.body) return false;
        if (!req.body.name && !req.body.price) return false;
        return true;
    })();

    if (!validBody){
        return res.status(400).json({success: false, msg: 'Required parameters are missing'});
    }

    validateId(req.params.id)
        .then(() => {
            return Laptop.findById(req.params.id);
        })
        .then(item => {
            if (!item) return res.status(400).json({success: false, msg: 'Item does not exist'});

            if (req.body.name) item.name = req.body.name;
            if (req.body.price) item.price = req.body.price;

            return item.save();
        })
        .then(item => {
            res.json({success: true, item});
        })
        .catch(err => console.log(err));
});

// Deletes an item by id
router.delete('/:id', (req, res) => {
    validateId()
        .then(() => {
            return Laptop.findById(req.params.id);
        })
        .then(item => {
            if (!item) return res.status(400).json({success: false, msg: 'Item does not exist'});

            return item.remove();
        })
        .then(() => {
            res.json({success: true, msg: 'Item deleted successfully'});
        })
        .catch(err => console.log(err));
});

module.exports = router;