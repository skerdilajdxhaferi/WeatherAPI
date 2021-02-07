


const key = '32e5f5c04e31ee51dd5388643463ab87';     // API key

if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');



// Load JSON 

function weatherBallon( city ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=' + key +'&units=metric') 
	.then(function(resp) { 
        return resp.json() 
    }) // Convert data to json

	.then(function(data) {
		drawWeather(data);
    })
    
	.catch(function() {
		// catch any errors
	});
}


 function drawWeather( d ) {
  
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = d.main.temp + '&deg;' +"c";
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}


  
  




window.onload = function() {
	weatherBallon("tiran");
}







