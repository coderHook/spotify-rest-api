# spotify-rest-api


GET /playlists/:id: A user should be able to get a single one of their playlists, with all the songs on it (but no others).

```
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
```