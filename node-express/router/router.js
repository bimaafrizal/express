const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/user')

router.get('/', (req, res) => {
    // console.log("Hello World");
    res.send('Hello World!')
})

router.get('/about', (req, res) => {
    const kelas = {
        id: 1,
        nama: 'NodeJS'
    }
    // untuk mengembalikan json bisa menggunakan.send atau .json
    // res.send(kelas)
    res.json(kelas)
    // res.send('About Page')
})

//redirect routing
router.get('/contact', (req, res) => {
    res.redirect('/users')
})

router.get('/users', usercontroller.index)

//request dari form input
router.post('/users', usercontroller.store)

//: digunakan untuk parameter
router.put('/users/:id', usercontroller.update)

router.delete('/users/:id', usercontroller.destroy)

module.exports = router