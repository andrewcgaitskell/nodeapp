const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => res.send('Root Express 8081!'))

app.get('/hello', (req, res) => res.send('Hello World Express 8081!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
