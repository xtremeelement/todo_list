//Check off items on click

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Delete item by clicking delete icon
$("ul").on("click", ".delete", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

//Add new item with enter key
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //extract text from input box
    var newItem = $(this).val();
    //Clear input box
    $(this).val("");
    //append item to ul's
    $("ul").append(
      `<li><span class="delete"><i class="fas fa-trash-alt"></i> </span>${newItem}</li>`
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text'").fadeToggle();
});
