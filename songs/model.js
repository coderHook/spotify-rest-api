const Sequelize = require('sequelize')

const db = require('../db.js')

const Song = db.define(
  'songs',
  {
    title: Sequelize.STRING,
    artist: Sequelize.STRING,
    album: Sequelize.STRING,
    playlist_id: Sequelize.INTEGER
  },
  {timestamps: false}
);

module.exports = Song