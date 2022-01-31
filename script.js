//Skriv all kod här
const KEY = '40bbb43e02b342b59b54aab4ae747016';

const btn = document.querySelector('button');
const input = document.querySelector('input');



btn.addEventListener('click', function(event){

    removeElement();

    //const urlToday = `https://api.weatherbit.io/v2.0/current?city=${input.value}&key=${KEY}&lang=sv`;

    const urlForecast = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input.value}&key=${KEY}&lang=sv`;

   // let today = fetch(urlToday).then(handlePromise).catch(handleError);

   // console.log(today);

    let forecast = fetch(urlForecast).then(handlePromise).then(handleData).catch(handleError);

    // console.log(forecast);

});


function handlePromise(response){
    if(response.status >=200 && response.status < 300){
        return response.json();
    }else{
        throw `Error!`
    }
}

function handleData(data){
    const currentDescript = document.getElementById('current-description');
    currentDescript.innerText = `Vädret idag är: ${data.data[0].weather.description}`;

    const currentTemp = document.getElementById('current-temp');
    currentTemp.innerText = `Temperaturen är: ${Math.round(data.data[0].temp)} Celsius`;

    const currentWind = document.getElementById('current-wind');
    currentWind.innerText = `Vindhastigheten är: ${Math.round(data.data[0].wind_spd)} m/s i ${data.data[0].wind_cdir_full} riktning`;

    const currentHum = document.getElementById('current-humidity');
    currentHum.innerText = `Luftfuktigheten är: ${Math.round(data.data[0].rh)}%`;

    const currentWeatherIcon = document.getElementById('weather-icon');
    currentWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`;

    const tmrwDescript = document.getElementById('current-description1');
    tmrwDescript.innerText = `Vädret imorgon är: ${data.data[1].weather.description}`;

    const tmrwTemp = document.getElementById('current-temp1');
    tmrwTemp.innerText = `Temperaturen är: ${Math.round(data.data[1].temp)} Celsius`;

    const tmrwWeatherIcon = document.getElementById('weather-icontmrw');
    tmrwWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.data[1].weather.icon}.png`;

    const twoDescript = document.getElementById('current-description2');
    twoDescript.innerText = `Vädret om två dagar är: ${data.data[2].weather.description}`;

    const twoTemp = document.getElementById('current-temp2');
    twoTemp.innerText = `Temperaturen är: ${Math.round(data.data[2].temp)} Celsius`;

    const twoWeatherIcon = document.getElementById('weather-icontwodays');
    twoWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.data[2].weather.icon}.png`;

    const threeDescript = document.getElementById('current-description3');
    threeDescript.innerText = `Vädret om tre dagar är: ${data.data[3].weather.description}`;

    const threeTemp = document.getElementById('current-temp3');
    threeTemp.innerText = `Temperaturen är: ${Math.round(data.data[3].temp)} Celsius`;

    const threeWeatherIcon = document.getElementById('weather-iconthreedays');
    threeWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.data[3].weather.icon}.png`;

    const fourDescript = document.getElementById('current-description4');
    fourDescript.innerText = `Vädret om fyra dagar är: ${data.data[4].weather.description}`;

    const fourTemp = document.getElementById('current-temp4');
    fourTemp.innerText = `Temperaturen är: ${Math.round(data.data[4].temp)} Celsius`;

    const fourWeatherIcon = document.getElementById('weather-iconfourdays');
    fourWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.data[4].weather.icon}.png`;

    const fiveDescript = document.getElementById('current-description5');
    fiveDescript.innerText = `Vädret om fem dagar är: ${data.data[5].weather.description}`;

    const fiveTemp = document.getElementById('current-temp5');
    fiveTemp.innerText = `Temperaturen är: ${Math.round(data.data[5].temp)} Celsius`;

    const fiveWeatherIcon = document.getElementById('weather-iconfivedays');
    fiveWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.data[5].weather.icon}.png`;
}

function handleError(error){
    
    const h4 = document.getElementById('error-message');
    h4.innerText = 'Staden du sökte på finns inte! Kolla stavning eller sök på en ny stad!';
    return console.error();
}

function removeElement(){
    const elementH4 = document.querySelector('h4');
    elementH4.innerText = '';

    const currentDescript = document.getElementById('current-description');
    currentDescript.innerText = '';

    const currentTemp = document.getElementById('current-temp');
    currentTemp.innerText = '';

    const currentWind = document.getElementById('current-wind');
    currentWind.innerText = '';

    const currentHum = document.getElementById('current-humidity');
    currentHum.innerText = '';

    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = ''; 
    
    const tmrwDescript = document.getElementById('current-description1');
    tmrwDescript.innerText = '';

    const tmrwTemp = document.getElementById('current-temp1');
    tmrwTemp.innerText = '';

    const tmrwWeatherIcon = document.getElementById('weather-icontmrw');
    tmrwWeatherIcon.src = '';

    const twoDescript = document.getElementById('current-description2');
    twoDescript.innerText = '';

    const twoTemp = document.getElementById('current-temp2');
    twoTemp.innerText = '';

    const twoWeatherIcon = document.getElementById('weather-icontwodays');
    twoWeatherIcon.src = '';

    const threeDescript = document.getElementById('current-description3');
    threeDescript.innerText = '';

    const threeTemp = document.getElementById('current-temp3');
    threeTemp.innerText = '';

    const threeWeatherIcon = document.getElementById('weather-iconthreedays');
    threeWeatherIcon.src = '';

    const fourDescript = document.getElementById('current-description4');
    fourDescript.innerText = '';

    const fourTemp = document.getElementById('current-temp4');
    fourTemp.innerText = '';

    const fourWeatherIcon = document.getElementById('weather-iconfourdays');
    fourWeatherIcon.src = '';

    const fiveDescript = document.getElementById('current-description5');
    fiveDescript.innerText = '';

    const fiveTemp = document.getElementById('current-temp5');
    fiveTemp.innerText = '';

    const fiveWeatherIcon = document.getElementById('weather-iconfivedays');
    fiveWeatherIcon.src = '';
}