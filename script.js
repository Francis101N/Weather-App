let input = document.querySelector('.search-bar');
const form = document.querySelector('#form');
const city = document.querySelector('.city');
const Temp = document.querySelector('.temp')
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const API_KEY = '63dd8a6a67a4e6277df26f97a2c0402d';
const body = document.querySelector('body');
const meet = document.querySelector("#meet")


 form.addEventListener("submit", getWeatherData);

 async function getWeatherData(e) {
    e.preventDefault();
    
    if(input.value === "") {
        alert('please type in a place.')
       
    } else {
        input = input.value;
    }
    console.log(input);
    
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${API_KEY}`)
    let data = await response.json();
   
    const mainResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}&units=metric`)

    let mainData = await mainResponse.json();
    // console.log(mainData);
    

    updateDOM(mainData);
    updateBackground(mainData);
 
};


function updateDOM(data){
    const place = document.createElement('span');
    place.innerHTML = `The Weather of ${data.name}:`;
    city.appendChild(place);

    const temperature = document.createElement('span');
    temperature.innerHTML = `<span></span>${data.main.temp}°C`
    Temp.appendChild(temperature);

    const desc = document.createElement('span');
    desc.innerHTML = `<span></span>${data.weather[0].description}`
    description.appendChild(desc)

    const humid = document.createElement('span');
    humid.innerHTML = `<span></span>${data.main.humidity}`
    humidity.appendChild(humid);

    const windSpeed = document.createElement('span');
    windSpeed.innerHTML = `<span></span>${data.wind.speed} km/h`
    wind.appendChild(windSpeed);

}


function updateBackground(data) {
    if (data.main.temp <= 18) {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=2500')"
    } else if (data.main.temp >= 18) {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&w=2500')";
    } else if (data.main.temp >= 22)  {

        body.style.backgroundImage = "url('https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&w=2500')"
    }
    }




