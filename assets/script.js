
// Initial array of histories
var histories = ["London", "New York", "Hong Kong"];

// Function for displaying history data
function renderButtons() {

  $('#history-view').empty();
  for (var i = 0; i < histories.length; i++) {
    var buttonEl = $('<button>');
    buttonEl.addClass('history-btn ');
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
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + history + "&units=metic&appid=" + APIKey;
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + history + "&units=metic&appid=" + APIKey;

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
    var currentDate = moment().format('DD MMM yyyy')

    $(".result-city").html("<h1>" + response.name + " Weather Details (" + currentDate + ")" + "</h1>");

    // Convert the temperature to Celsius
    var tempC = response.main.temp - 273.15;
    var tempCFeelsLike = response.main.feels_like - 273.15;

    // add temperature content to html
    $(".result-tempC").text("Temperature: " + tempC.toFixed(1) + "°C");
    $(".result-tempC-fl").text("Feels like: " + tempCFeelsLike.toFixed(1) + "°C");

    // add humidity content to html
    $(".result-humidity").text("Humidity: " + response.main.humidity + "%");
    // add wind speed content to html
    $(".result-wind").text("Wind Speed: " + response.wind.speed + " KPH");

    // Icon
    var iconcode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
  })
  // FIVE-DAY FORECAST
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response2) {
    // for loop to display 5 day forecast into cards
    for (var i = 0; i < 5; i++) {
      var day = response2.list[i * 8];
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

// Get the search form
const searchForm = document.querySelector('form');

// Add an event listener to the form
searchForm.addEventListener('.add-history', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the value of the search input
  const searchTerm = searchInput.value;

  // Check if local storage is supported by the browser
  if (typeof(Storage) !== "undefined") {
    // Get the existing search history from local storage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Add the new search term to the search history
    searchHistory.push(searchTerm);

    // Update the search history in local storage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    // Display the search history
    displaySearchHistory();
  }
});
