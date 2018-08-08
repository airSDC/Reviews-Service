const express = require('express');
const controller = require('../controllers');

const router = express.Router();
router.get('/rooms/:roomId/reviews', controller.reviews.get);
router.post('/rooms/:roomId/reviews', controller.reviews.post);
router.put('/rooms/:roomId/reviews/:reviewToUpdate', controller.reviews.put);
router.delete('rooms/:roomId/reviews/:reviewToDelete', controller.reviews.delete);

module.exports = router;
