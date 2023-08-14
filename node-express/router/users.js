const express = require('express')
const router = express.Router()

//route group
router.route('/users2')
    .get((req, res) => {
        res.send('Get User Route Group')
    })
    .post((req, res) => {
        res.send('Post User Route Group')
    })

module.exports = router