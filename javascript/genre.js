document.getElementById("button").addEventListener("click", function(event) {
  event.preventDefault();
  var id = 1;
  let genres = ["Action","Adventure","Cars","Comedy","Dementia","Demons","Mystery","Drama","Ecchi","Fantasy","Game","Hentai","Historical","Horror","Kids","Magic","Martial Arts", "Mecha","Music","Parody","Samurai","Romance","School","Sci Fi", "Shoujo", "Shoujo Ai", "Space", "Sports", "Super Power","Vampire", "Yaoi", "Yuri", "Harem", "Slice of Life", "Supernatural", "Military", "Police", "Psychological","Thriller","Seinen","Josei"]
  for (i = 0; i < 43; i++) {
    if (genres[i] == document.getElementById("genre").value) {
      id = i + 1;
    }
  }
  const url = "https://api.jikan.moe/v3/genre/anime/" + id;
  fetch(url)
    .catch(function (error) {
      console.log(error.message);
    })
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      let anime = "";
      for (let i = 0; i < data.anime.length; i++) {
	if (data.anime[i].episodes == null) {
	  continue;
	}
	anime += "<div id='animeBlock'>";
	anime += '<img id="icon" src="' + data.anime[i].image_url + '"/>';
	anime += '<h2><a href="' + data.anime[i].url + '">' + data.anime[i].title + '</a></h2>';
	anime += "<span> Episodes: " + data.anime[i].episodes + "</span>";
	anime += "</div>"
      }
      document.getElementById("main").innerHTML = anime;
    });
})