var arr = [];
$(document).ready(function() {
  $("form#favs").submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var movie = $('#movie').val();
    var book = $('#book').val();
    var album = $('#album').val();

    arr.push(name, movie, book, album);

    for (var i = 0; i < arr.length; i++) {
      $("#output ul").append("<li>"+arr[i]+"</li>");
    }
  });
});
