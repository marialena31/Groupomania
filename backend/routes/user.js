/* ROUTES UTILISATEURS */

// import
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
const upload = require("../middleware/multer-config")


// CRUD
//router.get("/:id", auth, userCtrl.getOneUser);
//router.get("/images/:id", auth, userCtrl.getProfilPicture);
//router.put("/:id", auth, upload.single("images"), userCtrl.updateOneUser);

module.exports = router;
