import {setDefaultWeather} from './setDefaultWeather.js'
import {longitude, latitude} from "./setDefaultParams.js";
export {getDefaultCityLocationObj, getDefaultCityWeatherObj}
export {cityLocationObj, cityWeatherObj};

let cityLocationObj, cityWeatherObj;

async function getDefaultCityLocationObj() {
    let apiKey = '39ded94cf3b947f78cc99f7fd2588cce';
    let lang = '&language=' + `en`;
    let url = 'https://api.opencagedata.com/geocode/v1/json' + '?' + 'key=' + apiKey + '&q=' + latitude + '+' + longitude + lang + '&pretty=1';
    let response = await fetch(url);
    cityLocationObj = await response.json();
    city = cityLocationObj.results[0].components.city;
    console.log(cityLocationObj);
    if (cityWeatherObj)
        setDefaultWeather();
}

async function getDefaultCityWeatherObj() {
    let apiKey = 'd0b9cf5011a1d4ea6ac31f2492fda53d';
    let url = 'http://api.openweathermap.org/data/2.5/forecast' + '?' + 'lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
    let response = await fetch(url);
    cityWeatherObj = await response.json();
    console.log(cityWeatherObj);
    if (cityLocationObj)
        setDefaultWeather();
}

let city;
