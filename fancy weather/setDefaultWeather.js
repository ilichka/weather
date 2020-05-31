import {longitude, latitude,days} from "./setDefaultParams.js";
import {cityWeatherObj, cityLocationObj} from './getDefaultInfo.js'
export {setDefaultWeather,icons}

function setDefaultWeather() {
    let myLocObj = cityLocationObj.results[0];
    let myWeaObj = cityWeatherObj.list;
    let day1 = new Date(myWeaObj[8].dt_txt.slice(0, 10));
    let day2 = new Date(myWeaObj[16].dt_txt.slice(0, 10));
    let day3 = new Date(myWeaObj[24].dt_txt.slice(0, 10));
    document.querySelector('.city_name').innerHTML = cityWeatherObj.city.name;
    document.querySelector('.Latitude').innerHTML = 'Latitude: ' + myLocObj.annotations.DMS.lat;
    document.querySelector('.Longitude').innerHTML = 'Longitude: ' + myLocObj.annotations.DMS.lng;
    document.querySelector('.current-weather_temperature').innerHTML = Math.round(myWeaObj[0].main.temp - 273) + '&#176';
    document.querySelector('.summary').innerHTML = myWeaObj[0].weather[0].main.toUpperCase();
    document.querySelector('.feels-like').innerHTML = 'FEELS LIKE: ' + Math.round(myWeaObj[0].main.feels_like - 273) + '&#176';
    document.querySelector('.wind').innerHTML = 'WIND: ' + Math.round(myWeaObj[0].wind.speed) + ' m/s';
    document.querySelector('.humidity').innerHTML = 'HUMIDITY: ' + Math.round(myWeaObj[0].main.humidity) + '%';
    document.querySelector('.day1').innerHTML = days[day1.getDay()];
    document.querySelector('.day2').innerHTML = days[day2.getDay()];
    document.querySelector('.day3').innerHTML = days[day3.getDay()];
    document.querySelector('.temperature1').innerHTML = Math.round(myWeaObj[8].main.temp - 273) + '&#176';
    document.querySelector('.temperature2').innerHTML = Math.round(myWeaObj[16].main.temp - 273) + '&#176';
    document.querySelector('.temperature3').innerHTML = Math.round(myWeaObj[24].main.temp - 273) + '&#176';
    myMap.setCenter([latitude, longitude], 10, {duration: 1000});
    document.querySelector('.current-weather_icon').src = `${icons[document.querySelector('.summary').innerHTML]}`;
    document.querySelector('.icon1').src = `${icons[myWeaObj[8].weather[0].main.toUpperCase()]}`;
    document.querySelector('.icon2').src = `${icons[myWeaObj[16].weather[0].main.toUpperCase()]}`;
    document.querySelector('.icon3').src = `${icons[myWeaObj[24].weather[0].main.toUpperCase()]}`
}

let icons = {
    "CLOUDS": "assets/img/clouds.png",
    "RAIN": "assets/img/rain.png",
    "CLEAR": "assets/img/sun.png"
};

