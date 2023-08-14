const express = require('express')
const router = express.Router()

let users = [
    {id:1, name: 'John Doe', email: 'john@gmail.com'},
    {id:2, name: 'Doe', email: 'doe@gmail.com'},
]

router.get('/', (req, res) => {
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

router.get('/users', (req, res) => {
    // res.send('Get User')
    res.json(users);
})

//request dari form input
router.post('/users', (req, res) => {
    users.push(req.body);
    console.log(req.body);
    res.send(users);
    // res.send('Post User')
})

//: digunakan untuk parameter
router.put('/users/:id', (req, res) => {
    const id =  parseInt(req.params.id);
    users.filter(user => {
        if(user.id === id) {
            user.name = req.body.name
            user.email = req.body.email
        }
    })
    res.send(users);
})

router.delete('/users/:id', (req, res) => {
    const id =  parseInt(req.params.id);
    users = users.filter(user => user.id !== id)
    res.send(users)
})

module.exports = router