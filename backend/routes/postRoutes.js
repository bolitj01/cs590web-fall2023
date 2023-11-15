const express = require('express');
const router = express.Router();
const postController = require('../controller/postsControler');


router.post("/",postController.addPost)

router.get("/",postController.getAllPosts)
router.get("/:id",postController.getPost)


module.exports = router