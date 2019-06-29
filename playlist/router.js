const Router = require('express')
const Playlist = require('./model')

const router = new Router()

router.get('/playlist', (req, res, next) => {
  Playlist
    .findAll()
    .then(playlists => res.status(200).send(playlists))
    .catch(err => next(err))
})

module.exports = router