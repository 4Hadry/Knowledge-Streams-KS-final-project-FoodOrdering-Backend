var express = require("express");
const getAllData = require("../controller/foodController.js");
var router = express.Router();

/* GET users listing. */
router.get("/", getAllData);

module.exports = router;
