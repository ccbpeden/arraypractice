$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var item1Input = $("input#item1").val();
    var itemArray = [];
    itemArray.push(item1Input);
    var item2Input = $("input#item2").val();
    itemArray.push(item2Input);
    var item3Input = $("input#item3").val();
    itemArray.push(item3Input);
    var item4Input = $("input#item4").val();
    itemArray.push(item2Input);
    $("#result1").append(itemArray);
    var itemArray2 = [];
    itemArray2.push(itemArray[1], itemArray[0], itemArray[2]);
    $("#result2").append(itemArray2);
    $("#result3").append("<li>" + itemArray2[0] + "</li>");
    $("#result3").append("<li>" + itemArray2[1] + "</li>");
    $("#result3").append("<li>" + itemArray2[2] + "</li>");
    console.log()
    itemArray2.forEach(function(item) {
      $("#result4").append("<li>" + item + "</li>");
    })
    event.preventDefault();
  });
});
