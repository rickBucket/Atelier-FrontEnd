const express = require('express');
const router = express.Router();

// import questionsController file here

// GET all Q&As
router.get('/questions', );

// GET answers for one Q
router.get('/questions/:question_id/answers', );

// POST a Q
router.post('/questions', );

// POST an A
router.post('/questions/:question_id/answers', );

// PUT mark an Q as helpful
router.put('/questions/:question_id/helpful', );

// PUT report an Q
router.put('/questions/:question_id/report', );

// PUT mark an A as helpful
router.put('/answers/:answer_id/helpful', );

// PUT report an A
router.put('/answers/:answer_id/report', );

module.exports = router;