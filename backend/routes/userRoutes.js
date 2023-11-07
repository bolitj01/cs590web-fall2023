const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUserById)


router.post("/",userController.createUser)
router.post("/login",userController.isUser)


router.put("/:id",userController.updateUser)

router.delete("/:id",userController.deleteUserById)

module.exports = router