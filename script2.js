$.ajax({
        url: "https://itunes.apple.com/search?term=" + getQueryParameter("artist"),
        dataType: "jsonp",
        success: function (answer){
            myCallBack(answer);
            }


});


function myCallBack(songs){
    console.log(songs);
    var x = songs.results[getQueryParameter("song")].trackTimeMillis/1000;
    var min = Math.floor(x/60);
    var sec = Math.floor(x%60);
    var date = new Date(songs.results[getQueryParameter("song")].releaseDate);
    var explicit = songs.results[getQueryParameter("song")].trackExplicitness;
    var price = songs.results[getQueryParameter("song")].trackPrice;
    var genre = songs.results[getQueryParameter("song")].primaryGenreName;
    $("#newTable").empty();
    var details = "";
    details += '<tr><td>';
    details += "<img src='" + songs.results[getQueryParameter("song")].artworkUrl100 + "'>";
    details += '<br><td>' + songs.results[getQueryParameter("song")].trackName + '</a></td>';
    details += '</td><td>';
    details += '</td><br><td>';
    details += "<audio controls='true' src=" + songs.results[getQueryParameter("song")].previewUrl + " id='audio' type='audio/m4a'></audio>";
    details += '</td></tr>';
    details += "<tr><td>";
    if(sec<10){
        details += "Time " + min + ":0" + sec;
    } else {
        details += "Time " + min + ":" + sec
    }
    details += "</td><td>" + "Release Date: " + date.getMonth() + "/" + 27 + "/" + date.getFullYear() + " </td>";
    details += "<td>" +   "Language: " + explicit +  "</td>";
    details += "<td>        Price: $" + price + "</td>";
    details += "<td>" + "       Genre: " + genre + "</td>";
    details += "</tr>";
    $("#newTable").append(details);

}
function getQueryParameter(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}
//