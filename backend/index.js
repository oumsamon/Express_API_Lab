const express = require('express')
const app = express()
app.get('/' , (req,res) => {res.send('home sweet home')})
const port = 3000
app.listen(port, () => {console.log(`running on port ${port}`)})