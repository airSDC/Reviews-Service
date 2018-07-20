const express = require('express');
const controller = require('../controllers');

const router = express.Router();
router.get('/rooms/:id', controller.reviews.get);

module.exports = router;
