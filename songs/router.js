const Router = require('express')
const Song = require('./model')
const Playlist = require('../playlist/model')
const auth = require('../auth/middleware.js');

const router = new Router();

router.post('/playlists/:id/songs', auth, (req, res, next) => {
  const playlistId = Number(req.params.id)

  const data = req.body

  if(!data.playlistId){ data.playlistId = playlistId } 
 
  Song
    .create(data)
    .then(newSong => {
      res.status(201).json(newSong)
    }
    )
    .catch(err => res.status(404).send(err))
})

router.put('/playlists/:id/songs/:idSong', (req, res, next) => {
  const playlistId = Number(req.params.id)
  const songId = Number(req.params.idSong)

  const data = req.body

  if(!data.playlistId){ data.playlistId = playlistId } 

  Song
    .findByPk(songId)
    .then( song => 
      song
        .update(data)
        .then(songUpdated => res.status(200).send(songUpdated))
        .catch(err => res.status(404).send(err))
      )
      .catch(err => res.status(404).send(err))
})

router.delete('/playlists/:id/songs/:songId', auth, (req, res, next) => {
  const songId = Number(req.params.idSong)

  const songsDeleted = Song
          .destroy({where: {playlistId}})
          .then(response => res.status(200).send({songsDeleted, playlistDeleted}))
          .catch(err => res.status(404).send(err))
})
module.exports = router;