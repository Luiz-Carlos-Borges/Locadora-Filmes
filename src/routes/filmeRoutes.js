const express = require('express')
const router = express.Router()

const FilmeController = require('../controllers/filmeController')

router.get('/', FilmeController.getAllFilmes)
router.post('/', FilmeController.createFilme)

module.exports = router