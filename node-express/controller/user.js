let users = [
    {id:1, name: 'John Doe', email: 'john@gmail.com'},
    {id:2, name: 'Doe', email: 'doe@gmail.com'},
];

const index = (req, res) => {
    if(users.length > 0) {
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            // menampilkan waktu dari middleware
            time: req.time.toString()
        });
    } else {
        res.json({
            status: false,
            message: 'Data tidak ditemukan',
        });
    }
}

const store = (req, res) => {
    users.push(req.body);

    res.send({
        status: true,
        data: users,
        message: 'Data berhasil ditambahkan',
        method: req.method,
        url: req.url
    });
}

const update = (req, res) => {
    const id =  parseInt(req.params.id);
    users.filter(user => {
        if(user.id === id) {
            user.name = req.body.name
            user.email = req.body.email
        }
    })

    res.send({
        status: true,
        data: users,
        message: 'Data berhasil diedit',
        method: req.method,
        url: req.url
    });
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id)

    res.send({
        status: true,
        data: users,
        message: 'Data berhasil dihapus',
        method: req.method,
        url: req.url
    });
}

module.exports = {
    index,
    store,
    update,
    destroy
}