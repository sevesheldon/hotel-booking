
//business logic

function Hotel(hotelName, rooms, booked) {
  this.hotelName = hotelName;
  this.rooms = rooms;
  this.booked = booked;
}

//user interface logic
$(document).ready(function() {

  $("form#hotel").submit(function(event) {
    event.preventDefault();

    var hotelName = $("input#hotel-name").val();
    var rooms = parseInt($("input#rooms-total").val());
    var booked = parseInt($("input#rooms-booked").val());

    var newHotel = new Hotel(hotelName, rooms, booked);



    $("ul#list-of-hotels").append("<li><span class='hotel-to-click'>" + hotelName + "</span></li>");

    $(".hotel-to-click").last().click(function() {
      $("#show-hotel").show();
      $("#show-hotel h2").text(newHotel.hotelName);
      $(".rooms-booked").text(newHotel.booked);
      $(".rooms-total").text(newHotel.rooms);
    });



    $("input").val("");


  });

});
