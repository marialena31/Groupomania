/* ROUTES COMMENT */

const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

// CRUD
/*
router.post('/:postId', auth, commentCtrl.createComment);
router.get('/:postId', auth, commentCtrl.getAllComments);
router.delete('/:commentId', auth, commentCtrl.deleteComment);
*/

module.exports = router;