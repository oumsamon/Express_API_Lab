const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* START CONTROLLERS HERE */
const gifController = require('./controller/gifs')
app.use('./gifs', gifController)


/* END CONTROLLERS HERE */

app.get('/' , (req,res) => {res.send('home sweet home')})
const port = 3000
app.listen(port, () => {console.log(` running on port ${port}`)})