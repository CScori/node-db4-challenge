const express = require('express')

const server = express()

const router = require('./rts/ing-rt.js')
server.use(express.json())
server.use('/api', router)

server.get('/', (req, res) => {
    res.send('Server up!')
})

module.exports = server