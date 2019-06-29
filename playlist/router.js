const Router = require('express')
const Playlist = require('./model')

const router = new Router();

router.get('/playlists', (req, res, next) => {
  Playlist
    .findAll()
    .then(playlists => res.status(200).send(playlists))
    .catch(err => res.status(500).next(err))
});

router.post('/playlists', (req, res, next) => {
  Playlist
    .create(req.body)
    .then(newData => res.status(201).send(newData))
    .catch(err => res.status(422).next(err))
})

router.get('/playlists/:id', (req, res, next) => {
  const id = req.params.id

  Playlist
    .findByPk(id)
    .then(playlist => { 
      playlist.id && res.status(201).send(playlist)
    })
    .catch(err => res.status(404).send(err))
});

router.put('/playlists/:id', (req, res, next) => {
  const id = req.params.id;

  Playlist
    .findByPk(id)
    .then(playlist => 
      playlist
        .update(req.body)
        .then(updatedPlaylist => res.status(200).send(updatedPlaylist))      
    )
    .caught(err => res.status(404).send(err))
})

module.exports = router