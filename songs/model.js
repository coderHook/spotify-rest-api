const Sequelize = require('sequelize')

const db = require('../db.js')
const Playlist = require('../playlist/model')

const Song = db.define(
  'songs',
  {
    title: Sequelize.STRING,
    artist: Sequelize.STRING,
    album: Sequelize.STRING,
  },
  {timestamps: false}
);

Song.belongsTo(Playlist)

module.exports = Song