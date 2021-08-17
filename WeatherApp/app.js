//  Get my own API from OpenWeathermap.org

const API_key = "e6343d593a606b64427f10550b335c51"; /* API key */

    // link: "https://api.openweathermap.org/data/2.5/"  /* main website for api*/


// Get all values from HTML file
const inputTxt = document.querySelector('.inputTxt');
const button =document.querySelector('.btn');
const showDetails = document.querySelector('.showDetails');

// now add event listener
button.addEventListener('click', ()  =>{

	// get input value

	const inputCity = inputTxt.value;
	// console.log(inputCity);

	// now fetch through get API

	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&APPID=${API_key}`)
	.then(response => response.json())
	.then(data =>{
		// console.log(data); 

		// when fill input feild then clear input
		inputTxt.value = "";

		// now show all data value

    let city = document.querySelector('.showDetails  .city');

        city.innerText = `${data.name}`;

    let temp = document.querySelector('.showDetails .temp ');
        temp.innerHTML = `  ${Math.round(data.main.temp)}°C`;


    let range = document.querySelector('.showDetails .range');
        range.innerText = ` ${data.weather[0].main
        }`;
	});
});
