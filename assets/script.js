
// Initial array of histories
var histories = ["London", "New York", "Hong Kong"];

// Function for displaying history data
function renderButtons() {

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
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + history + "&units=metic&appid=" + APIKey;

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

    $(".result-city").html("<h1>" + response.city.name + " Weather Details (" + responseToday[0] + ")" + "</h1>");

    // Convert the temperature to Celsius
    var tempC = response.list[0].main.temp - 273.15;

    // add temperature content to html
    $(".result-tempC").text("Temperature: " + tempC.toFixed(1) + "°C");
    // add humidity content to html
    $(".result-humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    // add wind speed content to html
    $(".result-wind").text("Wind Speed: " + response.list[0].wind.speed + " KPH");

    // Icon
    var iconcode = response.list[0].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);

  // for loop to display 5 day forecast into cards
    for (var i = 0; i < 5; i++) {
  var day = response.list[i * 8];
  var responseDate = day.dt_txt;
  var responseToday = responseDate.split(" ");
  // Date
  $(".result-city-" + (i + 1)).html("<h5>" + responseToday[0] + "</h5>");
  // Icon
  var iconcode = day.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  $('#wicon-' + (i + 1)).attr('src', iconurl);
  // Temp
  var tempC = day.main.temp - 273.15;
  $(".result-tempC-" + (i + 1)).text("Temp: " + tempC.toFixed(1) + "°C");
  // Humidity
  $(".result-humidity-" + (i + 1)).text("Humidity: " + day.main.humidity + "%");
  // Wind
  $(".result-wind-" + (i + 1)).text("Wind: " + day.wind.speed + " KPH");
}

  });
}
// Adding a click event listener to all elements with a class of "history-btn"
$(document).on("click", ".history-btn", displaycityweather);

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function (response) {

//   console.log(response);

//   $.each(response, function (index, item) {

//       });
//     }
//   });
// });

// $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=Osaka&units=metic&appid=b8ab8ad20877efa01fd8d4e1f506d0f7", function(data) {
//   // Use a for loop to iterate through the list of forecast items
//   for (var i = 0; i < data.list.length; i += 8) {
//     // Get the current forecast item
//     var forecast = data.list[i];
//     // Create a Bootstrap card for the forecast item
//     var card = '<div class="card" style="width: 18rem;">';
//     card += '<div class="card-body">';
//     card += '<h5 class="card-title">' + forecast.dt_txt + '</h5>';
//     card += '<img src="http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png"/>';
//     card += '<p class="card-text">Temperature: ' + forecast.main.temp + '</p>';
//     card += '<p class="card-text">Humidity: ' + forecast.main.humidity + '</p>';
//     card += '<p class="card-text">Wind Speed: ' + forecast.wind.speed + '</p>';
//     card += '</div></div>';
//     // Add the card to the page
//     $('#forecast-cards').append(card);
//   }
// });
