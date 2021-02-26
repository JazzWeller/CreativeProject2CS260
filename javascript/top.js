window.onload = function() {
  const url = "https://api.jikan.moe/v3/top/anime/1"
  fetch(url)
    .catch(function (error) {
      console.log(error.message);
    })
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      let anime = "";
      for (let i = 0; i < data.top.length; i++) {
	if (data.top[i].episodes == null) {
	  continue;
	}
	anime += "<div id='animeBlock'>";
	anime += "<h2><u>" + (i + 1) + "</u></h2>";
	anime += '<img id="icon" src="' + data.top[i].image_url + '"/>';
	anime += '<hr><h2><a href="' + data.top[i].url + '">' + data.top[i].title + '</a></h2><hr>';
	anime += "<span> Episodes: " + data.top[i].episodes + "</span><br>";
	anime += "<span> Score: " + data.top[i].score + "</span>";
	anime += "</div>"
      }
      document.getElementById("main").innerHTML = anime;
    });
}
