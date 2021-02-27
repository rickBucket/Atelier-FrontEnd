const express = require('express');
const router = express.Router();

// import the reviewController file here

// GET all reviews
router.get('/', );

// POST a review
router.post('/', );

// Report a review (access review id by req.params.review_id)
// From the frontend DO NOT insert : this is just for the server
router.put('/reviews/:review_id/report', );

router.put('/reviews/:review_id/helpful', );

module.exports = router;