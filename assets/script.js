
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

    // ===== CARD 1 ======
    var day1 = response.list[8]
    var responseDate = day1.dt_txt
    var responseToday = responseDate.split(" ");
    // Date
    $(".result-city-1").html("<h5>" + responseToday[0] + "</h5>");
    // Icon
    var iconcode = day1.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon-1').attr('src', iconurl);
    // Temp
    var tempC = day1.main.temp - 273.15;
    $(".result-tempC-1").text("Temp: " + tempC.toFixed(1) + "°C");
    // Humidity
    $(".result-humidity-1").text("Humidity: " + day1.main.humidity + "%");
    // Wind
    $(".result-wind-1").text("Wind: " + day1.wind.speed + " KPH");

    // ===== CARD 2 ======
    var day2 = response.list[16]
    var responseDate = day2.dt_txt
    var responseToday = responseDate.split(" ");
    // Date
    $(".result-city-2").html("<h5>" + responseToday[0] + "</h5>");
    // Icon
    var iconcode = day2.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon-2').attr('src', iconurl);
    // Temp
    var tempC = day2.main.temp - 273.15;
    $(".result-tempC-2").text("Temp: " + tempC.toFixed(1) + "°C");
    // Humidity
    $(".result-humidity-2").text("Humidity: " + day2.main.humidity + "%");
    // Wind
    $(".result-wind-2").text("Wind: " + day2.wind.speed + " KPH");

    // ===== CARD 3 ======
    var day3 = response.list[24]
    var responseDate = day3.dt_txt
    var responseToday = responseDate.split(" ");
    // Date
    $(".result-city-3").html("<h5>" + responseToday[0] + "</h5>");
    // Icon
    var iconcode = day3.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon-3').attr('src', iconurl);
    // Temp
    var tempC = day3.main.temp - 273.15;
    $(".result-tempC-3").text("Temp: " + tempC.toFixed(1) + "°C");
    // Humidity
    $(".result-humidity-3").text("Humidity: " + day3.main.humidity + "%");
    // Wind
    $(".result-wind-3").text("Wind: " + day3.wind.speed + " KPH");

    // ===== CARD 4 ======
    var day4 = response.list[32]
    var responseDate = day4.dt_txt
    var responseToday = responseDate.split(" ");
    // Date
    $(".result-city-4").html("<h5>" + responseToday[0] + "</h5>");
    // Icon
    var iconcode = day4.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon-4').attr('src', iconurl);
    // Temp
    var tempC = day4.main.temp - 273.15;
    $(".result-tempC-4").text("Temp: " + tempC.toFixed(1) + "°C");
    // Humidity
    $(".result-humidity-4").text("Humidity: " + day4.main.humidity + "%");
    // Wind
    $(".result-wind-4").text("Wind: " + day4.wind.speed + " KPH");

    // ===== CARD 5 ======
    var day5 = response.list[39]
    var responseDate = day5.dt_txt
    var responseToday = responseDate.split(" ");
    // Date
    $(".result-city-5").html("<h5>" + responseToday[0] + "</h5>");
    // Icon
    var iconcode = day5.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon-5').attr('src', iconurl);
    // Temp
    var tempC = day5.main.temp - 273.15;
    $(".result-tempC-5").text("Temp: " + tempC.toFixed(1) + "°C");
    // Humidity
    $(".result-humidity-5").text("Humidity: " + day5.main.humidity + "%");
    // Wind
    $(".result-wind-5").text("Wind: " + day5.wind.speed + " KPH");    

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
