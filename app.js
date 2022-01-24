document.addEventListener('DOMContentLoaded', cityWeather);

function weatherDataFetch(city) {
	var key = "69b59f16412e7194b1ed129a5a27c525";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp){
		return resp.json()
	})
	
	.then(function(data) {
		console.log(data);
		drawWeather(data);
	})
	.catch(function() {

	});
}

function cityWeather(e) {
	weatherDataFetch('Tallinn');
}


function drawWeather(data){
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var description = data.weather[0].description;

	document.querySelector('#description').innerHTML = description;
	document.querySelector('#temp').innerHTML = celcius + "&deg;";
	document.querySelector("location").innerHTML = data.name;
}