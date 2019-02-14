document.getElementById("songSubmit").addEventListener("click", function(event) {

  event.preventDefault();
  const songValue = document.getElementById("songInput").value;
  const artistValue = document.getElementById("artistInput").value;
  if (songValue === "" || artistValue === "") {
    return;
  }
  console.log(songValue + " " + artistValue);
  const url = "https://private-anon-46ac81efb4-lyricsovh.apiary-proxy.com/v1/" +
    artistValue + "/" + songValue;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);

      function jsonEscape(str) {
        return str.replace(/\n/g, "<br>").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
      }
      let lyrics = jsonEscape(json.lyrics);
      let title = songValue + " by " + artistValue + "<br>";
      document.getElementById("title").innerHTML = title;
      document.getElementById("songLyrics").innerHTML = lyrics;
    });
});