//memamnggil framework express
const express = require('express')
//jika memanggil module buatan gunakan ./
const router = require('./router/router')
const userRouter = require('./router/users')

const app = express()
const port = 3000

//membuat midleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-

//function middleware
const myLogger = (req, res, next) => {
    req.time = Date.now()
    console.log('LOGGED')
    next()
}

//mengaktifkan middleware
//dipasang diatas router
app.use(myLogger)

//untuk menerima request form input
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-

app.use(router)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})