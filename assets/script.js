
 // Initial array of histories
 var histories = ["London", "New York", "Hong Kong"];

 // Function for displaying history data
 function renderButtons() {

   // YOUR CODE GOES HERE
   $('#history-view').empty();
for (var i = 0; i < histories.length; i++) {
  var buttonEl = $('<button>');
  buttonEl.addClass('history');
  buttonEl.attr('data-name', histories[i]);
  buttonEl.text(histories[i]);
  $('#history-view').append(buttonEl);
}
}

 // This function handles events where one button is clicked
 $("#add-history").on("click", function(event) {

  event.preventDefault();
    var history = $('#history-input').val().trim();
  histories.push(history);

  renderButtons();

 });

 // Calling the renderButtons function to display the initial list of histories
 renderButtons();


 