console.log("hi")

var moreSongs = (function () {
  var loadSongs = [];

  return {
    getSongs: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'songs.json')
      xhr.addEventListener('load', function (evt) {
        songsJSON = JSON.parse(evt.target.responseText).songs
        cb(songsJSON)
      })
      xhr.send()
    },
    populatePage: function () {
      var container = document.querySelector("#songBox")
      songsJSON.forEach(function(songs) {
        container.innerHTML += `
          <p>${songs.songName} by
          ${songs.artistName} on the album
          ${songs.albumName}<button id="deleteButton">Delete</button></p>`
    })
  }
}

})(moreSongs || {})

moreSongs.getSongs(moreSongs.populatePage)

document.getElementById("songBox").addEventListener("click", function(event){
    if(event.target.id === "deleteButton")
    event.target.parentElement.remove()
})



// when user enteres song name, artist and album on the add music page this will push to the finalArray and display on the page
document.getElementById("addMusicButton").addEventListener("click", function () {
  addView.classList.add("hidden");
  homeView.classList.remove("hidden");
  var nameOfSong = document.getElementById("userInputSong").value;
  var nameOfArtist = document.getElementById("userInputArtist").value;
  var nameOfAlbum = document.getElementById("userInputAlbum").value;
  var addNewSong = nameOfSong + " - by " + nameOfArtist + " on the album " + nameOfAlbum
  // finalArray.push(addNewSong);
  // console.log(finalArray)
  songBox.innerHTML +=
    `<p> ${addNewSong} <button id="deleteButton">Delete</button></p>`
  document.getElementById("userInputSong").value = ""
  document.getElementById("userInputArtist").value = ""
  document.getElementById("userInputAlbum").value = ""
})

// var songs = [];

// // songs[songs.length] = "MMMMBop > by Hanson";
// // songs[songs.length] = "Legs > by ZZTop on the album Eliminator";
// // songs[songs.length] = "The Logical Song > by Supertr on the album Breakfast in America";
// // songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// // songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// // songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// // songs[songs.length] = "Firework > by Katy Perry";

// // var removeChar = [];
// // for(i=0; i<songs.length; i++) {
// //   removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""));
// // }

// // var finalArray = [];
// // for(i=0; i<removeChar.length; i++) {
// //   finalArray.push(removeChar[i].replace(">", "-"));
// //   songBox.innerHTML +=
// //     `<p> ${finalArray[i]} </p>`
// // }
