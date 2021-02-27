const express = require('express');
const router = express.Router();
const getData = require('../controllers/questionableControllers.js');

// import questionsController file here

// GET all Q&As
router.get('/questions', getData.getQuestionableData);

// GET answers for one Q
router.get('/questions/:question_id/answers', getData.getQuestionableData);

// POST a Q
router.post('/questions', getData.getQuestionableData);

// POST an A
router.post('/questions/:question_id/answers', getData.getQuestionableData);

// PUT mark an Q as helpful
router.put('/questions/:question_id/helpful', getData.getQuestionableData);

// PUT report an Q
router.put('/questions/:question_id/report', getData.getQuestionableData);

// PUT mark an A as helpful
router.put('/answers/:answer_id/helpful', getData.getQuestionableData);

// PUT report an A
router.put('/answers/:answer_id/report', getData.getQuestionableData);

module.exports = router;