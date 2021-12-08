/* ROUTES USER */

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");


// CRUD
/*
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:id', auth, userCtrl.getUserProfile);
router.put('/:id', auth, multer, userCtrl.modifyUserProfile);
router.delete('/:id', auth, userCtrl.deleteAccount);
*/

module.exports = router;
