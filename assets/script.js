
// Initial array of histories
var histories = ["London", "New York", "Hong Kong"];

// Function for displaying history data
function renderButtons() {

  // YOUR CODE GOES HERE
  $('#history-view').empty();
  for (var i = 0; i < histories.length; i++) {
    var buttonEl = $('<button>');
    buttonEl.addClass('history-btn');
    buttonEl.attr('data-name', histories[i]);
    buttonEl.text(histories[i]);
    $('#history-view').append(buttonEl);
  }
}

// This function handles events where one button is clicked
$("#add-history").on("click", function (event) {

  event.preventDefault();
  var history = $('#history-input').val().trim();
  histories.push(history);

  renderButtons();
});

// Calling the renderButtons function to display the initial list of histories
renderButtons();

function displaycityweather() {
  var history = $(this).attr("Data-name");
  // API key
  var APIKey = "b8ab8ad20877efa01fd8d4e1f506d0f7";

  // URL for querying the database
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ history +"&units=metic&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
    var responseDate = response.list[0].dt_txt
    var responseToday = responseDate.split(" ");
    
    $(".result-city").html("<h1>" + response.city.name + " Weather Details (" + responseToday[0] +")" +"</h1>");
  
    // Convert the temperature to Celsius
    var tempCLow = response.list[2].main.temp - 273.15;
    var tempCHigh = response.list[5].main.temp - 273.15;
    // add temperature content to html
    $(".result-tempC").text("Temperature: " + tempCLow.toFixed(1) + "°C - " + tempCHigh.toFixed(1) + "°C");
    // add humidity content to html
    $(".result-humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    // add wind speed content to html
    $(".result-wind").text("Wind Speed: " + response.list[0].wind.speed + " KPH");

    // Icon
    var iconcode = response.list[0].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
  });
}
 // Adding a click event listener to all elements with a class of "history-btn"
$(document).on("click", ".history-btn", displaycityweather);