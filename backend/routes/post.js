/* ROUTES POST */

// imports
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const upload = require("../middleware/multer-config");


// CRUD
//router.get('/', auth, postCtrl.getAllPosts);
//router.post('/', auth, upload.single("images"), postCtrl.createPost);
//router.put('/:id', auth, postCtrl.updatePost);
//router.delete('/:id', auth, postCtrl.deletePost);

// images
//router.get('/images/:id', auth, postCtrl.getOneImage);

// like & dislike
//router.patch("/:id/likeunlike", auth, postCtrl.likeUnlikePost);
//router.post("/:id/postLikedByUser", auth, postCtrl.postLikedByUser);
//router.post("/:id/likeunlike", auth, postCtrl.countLikes);

module.exports = router;
