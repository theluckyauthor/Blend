var main = function (){

}


app.get('/login', function(req, res) {
  var scopes = 'user-library-read playlist-modify-public user-read-recently-played user-top-read user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
  });

addTrack(user_id , playlist_id)
{
  fetch('https://api.spotify.com/v1/users/' + user_id + '/playlists/' + playlist_id +'/tracks', {
    method: "POST"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

deleteTrack(user_id , playlist_id)
{
  fetch('https://api.spotify.com/v1/users/' + user_id + '/playlists/' + playlist_id +'/tracks', {
    method: "DELETE"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

createPlaylist(user_id)
{
  fetch('https://api.spotify.com/v1/users/' + user_id + '/playlists', {
    method: "POST"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

giveRecentTracks(user_id)
{
  fetch('https://api.spotify.com/v1/users/' + user_id + '/player/recently-played', {
    method: "GET"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

giveFavoriteTracks(user_id)
{
  fetch('https://api.spotify.com/v1/users/' + user_id + '/top/tracks', {
    method: "GET"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

giveTracksFromPlaylist(user_id , playlist_id)
{
  fetch('https://api.spotify.com/v1/users/' + user_id + '/playlists/' + playlist_id +'/tracks', {
    method: "GET"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}




