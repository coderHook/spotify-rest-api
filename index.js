const express = require('express') 
const db = require('./db.js')
const playlist = require('./playlist/model.js')


const app = express()

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server Running on port: ${port}`))