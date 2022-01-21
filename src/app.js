const express = require('express')
const app = express()
const port = 5000


app.get('/', (req,res) => {
	res.send('Hello, World! JS Express')
})

app.listen(port, () => {
	console.log(`API rodando em http://127.0.0.1:${port}`)
})
