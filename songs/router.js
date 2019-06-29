const Router = require('express')
const Song = require('./model')

const router = new Router();

router.get('/playlists/:id/songs/', (req, res, next) => {
  const playlist = req.params.id

  Song
    .findAll({ where: {'playlist_id': playlist}}) 
    .then(songs => res.status(200).send(songs))
    .catch(err => res.status(404).send(err))
});

module.exports = router;