const Router = require('express')
const Playlist = require('./model')
const Song = require('../songs/model')

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

  //As I understand the exercise, once I go to an Id I retrieve the Playlist info + the songs in that playlist.

  Playlist
    .findByPk(id)
    .then(playlist => { 

      if(playlist.id) {
        Song
        .findAll({where: {playlistId: playlist.id}})
        .then(songs => res.status(200).send({playlist, songs})
      )
      .catch(err => res.status(404).send(err))
      }     
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