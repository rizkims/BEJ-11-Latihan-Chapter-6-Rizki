const express = require('express')
const router = express.Router()
const { Create, Get, GetById, Update, Delete } = require('../controller/content')


router.post('/', Create)
router.get('/', Get)
router.get('/:id', GetById)
router.put('/:id', Update)
router.delete('/:id', Delete)

module.exports = router;

