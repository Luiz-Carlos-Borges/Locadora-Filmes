const express = require("express")
const router = express.Router()

const testController = require("../controllers/testController")

router.get("/", testController.testConection)
router.get("/tables", testController.listTables)

module.exports = router