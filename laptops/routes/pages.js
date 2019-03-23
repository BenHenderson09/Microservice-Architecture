const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('laptop pages'));

module.exports = router;