import {getCityLocationObj} from './getCityLocation.js'
export {getCityWeatherObj, weaObj}

let weaObj;

async function getCityWeatherObj() {
    let apiKey = 'd0b9cf5011a1d4ea6ac31f2492fda53d';
    let city = document.querySelector('.input_text').value;
    let url = 'http://api.openweathermap.org/data/2.5/forecast' + '?' + '&q=' + city + '&appid=' + apiKey;
    let response = await fetch(url);
    weaObj = await response.json();
    console.log(weaObj.cod);
    if (weaObj.cod >= 200 && weaObj.cod <= 299) {
        getCityLocationObj();
    } else {
        throw new Error()
    }
}