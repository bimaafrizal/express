//memamnggil framework express
const express = require('express')
//jika memanggil module buatan gunakan ./
const router = require('./router/router')
const userRouter = require('./router/users')

const app = express()
const port = 3000

//untuk menerima request form input
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-

app.use(router)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})