const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Root Express 3000!'))

app.get('/hello', (req, res) => res.send('Hello World Express 3000!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
