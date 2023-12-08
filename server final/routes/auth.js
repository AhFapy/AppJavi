const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth")

router.post("/create-user", authController.register)
router.post("/login", authController.login)
router.get("/check-auth", authController.check)     


module.exports = router;