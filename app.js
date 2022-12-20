const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '747e51e606mshc892933ec6616a6p1b9452jsn7fa39fa4a643',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Srinagar', options)
	.then(response => response.json())
	.then((response)=>{
     document.querySelector('.cloud-pct-sri').innerHTML = response.cloud_pct
     document.querySelector('.feels-like-sri').innerHTML = response.feels_like
     document.querySelector('.humidity-sri').innerHTML = response.humidity
     document.querySelector('.max-temp-sri').innerHTML = response.max_temp
     document.querySelector('.min-temp-sri').innerHTML = response.min_temp
     document.querySelector('.sunrise-sri').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.temp-sri').innerHTML = response.temp
     document.querySelector('.wind-degree-sri').innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then((response)=>{
     document.querySelector('.cloud-pct-kol').innerHTML = response.cloud_pct
     document.querySelector('.feels-like-kol').innerHTML = response.feels_like
     document.querySelector('.humidity-kol').innerHTML = response.humidity
     document.querySelector('.max-temp-kol').innerHTML = response.max_temp
     document.querySelector('.min-temp-kol').innerHTML = response.min_temp
     document.querySelector('.sunrise-kol').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.temp-kol').innerHTML = response.temp
     document.querySelector('.wind-degree-kol').innerHTML = response.wind_degrees

    })
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
	.then(response => response.json())
	.then((response)=>{
     document.querySelector('.cloud-pct-beng').innerHTML = response.cloud_pct
     document.querySelector('.feels-like-beng').innerHTML = response.feels_like
     document.querySelector('.humidity-beng').innerHTML = response.humidity
     document.querySelector('.max-temp-beng').innerHTML = response.max_temp
     document.querySelector('.min-temp-beng').innerHTML = response.min_temp
     document.querySelector('.sunrise-beng').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.temp-beng').innerHTML = response.temp
     document.querySelector('.wind-degree-beng').innerHTML = response.wind_degrees

    })
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response)=>{
     document.querySelector('.cloud-pct-mum').innerHTML = response.cloud_pct
     document.querySelector('.feels-like-mum').innerHTML = response.feels_like
     document.querySelector('.humidity-mum').innerHTML = response.humidity
     document.querySelector('.max-temp-mum').innerHTML = response.max_temp
     document.querySelector('.min-temp-mum').innerHTML = response.min_temp
     document.querySelector('.sunrise-mum').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.temp-mum').innerHTML = response.temp
     document.querySelector('.wind-degree-mum').innerHTML = response.wind_degrees

    })
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneswar', options)
	.then(response => response.json())
	.then((response)=>{
     document.querySelector('.cloud-pct-bhu').innerHTML = response.cloud_pct
     document.querySelector('.feels-like-bhu').innerHTML = response.feels_like
     document.querySelector('.humidity-bhu').innerHTML = response.humidity
     document.querySelector('.max-temp-bhu').innerHTML = response.max_temp
     document.querySelector('.min-temp-bhu').innerHTML = response.min_temp
     document.querySelector('.sunrise-bhu').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.temp-bhu').innerHTML = response.temp
     document.querySelector('.wind-degree-bhu').innerHTML = response.wind_degrees

    })
	.catch(err => console.error(err));
     
    submit.addEventListener("click", (e)=>{
   e.preventDefault() 
   document.getElementById("header-city").innerHTML=city.value.toUpperCase()
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city.value}`, options)
	.then(response => response.json())
	.then((response)=>{
        console.log(response)
        document.querySelector('.temp').innerHTML = response.temp

     document.querySelector('.temp-head').innerHTML = response.temp
     document.querySelector('.max-temp-head').innerHTML = response.max_temp
     document.querySelector('.min-temp-head').innerHTML = response.min_temp
     document.querySelector('.humidity-feel-head').innerHTML = response.feels_like
     document.querySelector('.humidity-head').innerHTML = response.humidity
     document.querySelector('#humidity').innerHTML = response.humidity
     document.querySelector('.wind-degree-head').innerHTML = response.wind_degrees
     document.querySelector('.wind-speed-head').innerHTML = response.wind_speed
     document.querySelector('.wind-speed').innerHTML = response.wind_speed
     document.querySelector('.sunrise-head').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.sunset-head').innerHTML = Math.floor(response.sunset/1000/3600/24)
    
    })
	.catch(err => console.error(err));
    });

  

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response)=>{
        console.log(response)
        document.querySelector('.temp').innerHTML = response.temp

     document.querySelector('.temp-head').innerHTML = response.temp
     document.querySelector('.max-temp-head').innerHTML = response.max_temp
     document.querySelector('.min-temp-head').innerHTML = response.min_temp
     document.querySelector('.humidity-feel-head').innerHTML = response.feels_like
     document.querySelector('.humidity-head').innerHTML = response.humidity
     document.querySelector('#humidity').innerHTML = response.humidity
     document.querySelector('.wind-degree-head').innerHTML = response.wind_degrees
     document.querySelector('.wind-speed-head').innerHTML = response.wind_speed
     document.querySelector('.wind-speed').innerHTML = response.wind_speed
     document.querySelector('.sunrise-head').innerHTML = Math.floor(response.sunrise/1000/3600/24)
     document.querySelector('.sunset-head').innerHTML = Math.floor(response.sunset/1000/3600/24)
    
    })
	.catch(err => console.error(err));
  

  