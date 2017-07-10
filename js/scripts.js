$(document).ready(function() {
  var groceries = [];

  $("#shoppingForm").submit(function(event) {
    // groceries.push($("input#item").val());
    var itemInput = $("input#item").val();

    $("ul").append("<li>" + itemInput + "</li>")

    event.preventDefault();
  });



  // groceries.forEach(function(grocery) {
  //   $("ul").append("<li>"+grocery+"</li>");
  // });
});
