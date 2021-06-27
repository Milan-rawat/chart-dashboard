const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.route("/").post(dataController.getAllData);

module.exports = router;
