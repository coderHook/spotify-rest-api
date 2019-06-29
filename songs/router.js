const Router = require('express')
const Song = require('./model')
const Playlist = require('../playlist/model')
const auth = require('../auth/middleware.js');

const router = new Router();

router.post('/playlists/:id/songs', auth, (req, res, next) => {
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