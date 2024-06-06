const express = require('express')
const router = express.Router()
const profileRoutes = require('./profile.route')
const feedRoutes = require('./feed.route')
const contentRoutes = require('./content.route')
const detailRoutes = require('./detail.route')

router.get('/',function (req, res) {
        res.render('index')
    }
);


router.use('/profile', profileRoutes)
router.use('/', feedRoutes)
router.use('/content', contentRoutes)
router.use('/detail', detailRoutes)
module.exports = router;