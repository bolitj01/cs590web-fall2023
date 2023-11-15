const express = require('express');
const router = express.Router();
const topicController = require('../controller/topicController');

router.get("/",topicController.getAllTopics)

module.exports = router