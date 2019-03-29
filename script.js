$(document).ready(function(){

    $("#button").click(function() {

        var artist = $("#artist").val();

        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist,
            dataType: "jsonp",
            success: function (answer){
                myCallBack(answer);
                print(answer);
        }
        });

    })

});

function myCallBack(myData){
    console.log(myData);
}
function print(songs){
    $("#table").empty();
    var list = "";
    songs.resultCount = $("#select").val();
    for (var i = 0; i < songs.resultCount; i++) {
        list += '<tr><td>';
        list += '<span class="rank">' + (i+1) + '.  </span>';
        list += "<img src='" + songs.results[i].artworkUrl100 + "'>";
        list += "<td>" + "<a href = 'detail.html?artist=" + songs.results[i].artistName + "&song=" + i + "'>"+ songs.results[i].trackName +"</a>";
        list += '</td><td>';
        list += '</td><td>';
        list += "<audio controls='true' src=" + songs.results[i].previewUrl + " id='audio' type='audio/m4a'></audio>";
        list += '</td></tr>';

    }
    $("#table").append(list);
}

