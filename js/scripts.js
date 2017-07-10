$(document).ready(function() {
  var groceries = [];

  $("#shoppingForm").submit(function(event) {
    // groceries.push($("input#item").val());

    var itemInput = $("input#item").val();

    if (itemInput === '') {
      alert("Please enter an item name.")
    } else {
      groceries.push($("input#item").val());
    }

    groceries.sort();

    var upperGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });
    alert(upperGroceries);

    event.preventDefault();

  });






// var itemInput = $("input#item").val();
  //  $("ul").append("<li>" + itemInput + "</li>")

  // groceries.forEach(function(grocery) {
  //   $("ul").append("<li>"+grocery+"</li>");
  // });
});
