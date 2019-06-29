const Router = require('express')
const Playlist = require('./model')

const router = new Router();

router.get('/playlist', (req, res, next) => {
  Playlist
    .findAll()
    .then(playlists => res.status(200).send(playlists))
    .catch(err => res.status(500).next(err))
});

router.post('/playlist', (req, res, next) => {
  Playlist
    .create(req.body)
    .then(newData => res.status(201).send(newData))
    .catch(err => res.status(422).next(err))
})

module.exports = router