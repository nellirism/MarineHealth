// Storing YouTube API key & URL
function videos(weather) {
  
    var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&limit=3&order=relevance&type=video&videoEmbeddable=true&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";
    console.log(weather);
    $.ajax({
        url: youtubeURL,
        method: "GET",
        data: {
          q: weather
        }
      }).then(function(response) {
        console.log(response)
              
      
  
        for (var i = 0; i < response.items.length; i++) {
  
        // Container for videos
        var vidDiv = $("<div>");
  
        // Gathering video info
        var vidTitle = $("<h3>").text(response.items[i].snippet.title);
        var vidDesc = $("<p>").text(response.items[i].snippet.description);
        var vidId = response.items[i].id.videoId;
        var vidThumbnail = response.items[i].snippet.thumbnails.high.url;
  
        var videoPlayer = $('<iframe />', {
          type: 'video/mp4',
          controls: true,
          poster: vidThumbnail,
          height: 300,
          width: 400
        });
  
        videoPlayer.attr('src', 'https://www.youtube.com/embed/' + vidId);
       
        vidTitle.attr("id", "vidTitle")
        vidDesc.attr("id", "desc")
        videoPlayer.attr("class", "vidPlay")
  
        vidDiv.append(vidTitle)
        vidDiv.append(videoPlayer)
        vidDiv.append(vidDesc)
  
        $("#youtube").append(vidDiv)
        }
      });
      $("#youtube").empty()
    }
  