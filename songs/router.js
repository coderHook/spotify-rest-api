const Router = require('express')
const Song = require('./model')
const Playlist = require('../playlist/model')

const router = new Router();

router.get('/playlists/:id/songs/', (req, res, next) => {
  const playlistId = req.params.id

  Song
  .findAll({where: {playlistId}})    
  .then(songs => res.status(200).send(songs))
    .catch(err => res.status(404).send(err))
});

router.post('/playlists/:id/songs', (req, res, next) => {
  const playlistId = Number(req.params.id)

  console.log('Request BODY', req.body)

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

module.exports = router;