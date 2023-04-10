const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/coba', (req, res) => {
    //   res.send('Hello coba!')
    // res.status(200).json({
    //     status: 'success',
    //     message: 'Berhasil mendapatkan data',
    //     data: {
    //         nama: 'Bima Afrizal',
    //         email: 'bima@gmail.com',
    //         role: 'user',
    //     }
    // });
    //menampilkan file
    res.sendFile('./index.html', {root: __dirname});
})

app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
    //req params semua yang ada di url
});
app.get('/product2/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
    //query untuk mengambil nilai dari url
});

//use untuk menjalankan sebuah middleware
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});
//jika ada request demgam routing yang tidak ada maka akan dijalanakn
//deklarasikan paling bawah agar routing lain bisa dijalankan
//respon merupakan yang dikembalikan dari express dari express

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})