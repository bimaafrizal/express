//memamnggil framework express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
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
app.get('/contact', (req, res) => {
    res.redirect('/users')
})

app.get('/users', (req, res) => {
    res.send('Get User')
})

app.post('/users', (req, res) => {
    res.send('Post User')
})

//: digunakan untuk parameter
app.put('/users/:id', (req, res) => {
    res.send(`Update User ${req.params.id}`)
})

app.delete('/users/:id', (req, res) => {
    res.send(`Delete User ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})