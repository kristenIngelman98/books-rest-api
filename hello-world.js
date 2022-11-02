// import express framework
const express = require('express')

// instantiate the express app
const app = express()

// set port
const port = 3000

// simple get endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}`))
