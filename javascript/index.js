window.onload = function() {
  const url = "https://api.jikan.moe/v3/season/2021/winter"
  fetch(url)
    .catch(function (error) {
      console.log(error.message);
    })
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      let anime = "";
loopMain:
      for (let i = 0; i < data.anime.length; i++) {
	if (data.anime[i].episodes == null) {
	  continue;
	}
	for (let j = 0; j < data.anime[i].genres.length; j++) {
	  if (data.anime[i].genres[j].mal_id == 12) {
	    continue loopMain;
	  }
	}
	anime += "<div id='animeBlock'>";
	anime += '<img id="icon" src="' + data.anime[i].image_url + '"/>';
	anime += '<h2><a href="' + data.anime[i].url + '">' + data.anime[i].title + '</a></h2>';
	anime += "<span> Episodes: " + data.anime[i].episodes + "</span>";
	anime += "</div>"
      }
      document.getElementById("main").innerHTML = anime;
    });
}