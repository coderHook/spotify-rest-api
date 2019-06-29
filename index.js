const express = require('express') 
const bodyParser = require('body-parser')

const db = require('./db.js')

const playlist = require('./playlist/model.js')
const playlistRouter = require('./playlist/router.js')

const app = express()
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(playlistRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server Running on port: ${port}`))