const express = require('express') 
const db = require('./db.js')
const playlist = require('./playlist/model.js')
const playlistRouter = require('./playlist/router.js')

const app = express()

app.use(playlistRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server Running on port: ${port}`))