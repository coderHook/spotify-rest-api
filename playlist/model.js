const Sequelize = require('sequelize')
const db = require('../db.js')
const User = require('../user/model')

const Playlist = db.define(
  'playlist', 
  {
    name: Sequelize.STRING
  },
  {timestamps: false}
);

Playlist.belongsTo(User)

module.exports = Playlist
