/* ROUTES POST */

const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');
const multer = require("../middleware/multer-config");


// CRUD
/*
router.post('', auth, multer, postCtrl.createPost);
router.get('', auth, postCtrl.getAllPosts);
router.put('/:postId', auth, multer, postCtrl.modifyPost);
router.delete('/:postId', auth, postCtrl.deletePost);

router.post('/:postId/like', auth, likeCtrl.likePost);
router.get('/:postId/like', auth, likeCtrl.getAllLike);
*/

module.exports = router;
