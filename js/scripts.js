$(document).ready(function() {


  $("#shoppingForm").submit(function(event) {
    // groceries.push($("input#item").val());
    var groceries = [];

    var itemInput = $("input#item").val();

    if (itemInput === '') {
      alert("Please enter an item name.")
    } else {
      groceries.push($("input#item").val());
      $("p").append(groceries);
    }

    event.preventDefault();
  });



// var itemInput = $("input#item").val();
  //  $("ul").append("<li>" + itemInput + "</li>")

  // groceries.forEach(function(grocery) {
  //   $("ul").append("<li>"+grocery+"</li>");
  // });
});
