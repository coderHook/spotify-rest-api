# spotify-rest-api

How to use it:

go to :4000/users email="" password="" to add a user

go to :4000/tokens email="" password="" to login --> Copy the Token

Test User
-----------
email=test password=test
```
{
    "email": "test",
    "id": 4,
    "password": "$2b$10$tcLEsafEfTZEbgVLnq8eAeVWIVGyrgWVkogoAf/ArkoIHjhWxJtnG"
}
```
JWT of this user for test purposes:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU2MTgzNDM2OCwiZXhwIjoxNTYxODQxNTY4fQ.-CFUphIBN2Ycu-5GmJNouUqWx9Z-cZ0SX3jcCCHRQh4"
}
```
In every one of the pages you have to add the following sentence:

$ http :4000/secret-endpoint Authorization:"Bearer <JWT>"

Example for our user "test"
```
http :4000/secret-endpoint Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU2MTgzNDM2OCwiZXhwIjoxNTYxODQxNTY4fQ.-CFUphIBN2Ycu-5GmJNouUqWx9Z-cZ0SX3jcCCHRQh4"
```

so in every page we add:
```
Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTU2MTgzNDM2OCwiZXhwIjoxNTYxODQxNTY4fQ.-CFUphIBN2Ycu-5GmJNouUqWx9Z-cZ0SX3jcCCHRQh4"

```






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