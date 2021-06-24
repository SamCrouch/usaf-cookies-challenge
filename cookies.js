const express = require ('express')
const app = express ()
const cookieParser = require('cookie-parser')
const port = 3000

app.use(cookieParser())

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})

app.get('/login', (req, res) => {
    const username = req.query.username
    if (username) {
        res.cookie("username", username)
    }
    res.end()
})

app.get('/hello', (req, res) => {
    const username = req.query.username
    if (username) {
        console.log(`Hello ${username}`)
    } else {
        console.log(`Hello guest`)
    }
    res.end()
})