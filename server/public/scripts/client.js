const app = angular.module('songsApp', []);

const songController = app.controller('SongController', ['$http', function($http){
  let self = this;

  self.newSong = { };

  self.songArray = [ ];

  self.getAllSongs = function() {
    $http({
      method: 'GET',
      url: '/songs'
    })
    .then(function(response){
      console.log('Getting all songs:', response);
      //self.formatDate();
      self.songArray = response.data;
    })
    .catch(function(error){
      console.log(error);
    })   
  }

  self.addSong = function(newSong) {
    console.log('new song in addSong function', self.newSong);
    $http({
      method: 'POST',
      url: '/songs/add',
      data: {song: self.newSong}
    })
    .then(function(response){
      console.log('Added song:', song);
      self.getAllSongs();
      self.newSong = {};
    })
    .catch(function(error){
      console.log(error);
    })
  }

  // function updateSongRating(id, newRating) {
  //   $.ajax({
  //     type: 'PUT',
  //     url: `/songs/${id}`,
  //     data: { rating: newRating }
  //   })
  //   .done(function (response) {
  //     console.log('Updated song rating');
  //     getAllSongs();
  //   })
  //   .fail(function (error){
  //     console.log(error);
  //   })
  // }

  // function deleteSong(id){
  //   $.ajax({
  //     type: 'DELETE',
  //     url: `songs/${id}`,
  //   })
  //   .done(function (response){
  //     console.log('Deleted song');
  //     getAllSongs();
  //   })
  //   .fail(function(error) {
  //     console.log(error);
  //   })
  // }

  // function displaySongs(songs) {
  //   for (let song of songs) {
  //     $('#out-songs').append(`<tr><td>${song.track}</td>
  //       <td>${song.artist}</td><td>${formatDate(song.published)}</td>
  //       <td>${song.rank}</td></tr>`);
  //   }
  // }

  // function formatDate(isoDateStr) {
  //   let result = ''
  //   if (isoDateStr != null) {
  //     let date = new Date(isoDateStr);
  //     result = date.toLocaleDateString();
  //   }
  //   return result;
  // }

  self.getAllSongs();
}]);