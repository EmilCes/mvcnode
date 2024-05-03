const express = require('express');
const router = express.Router();
const { index } = require("../controllers/home");

// Establecce las rutas donde se encuentran los controladores
router.use("/", index);

module.exports = router;