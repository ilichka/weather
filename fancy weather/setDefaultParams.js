import {getDefaultCityLocationObj, getDefaultCityWeatherObj} from './getDefaultInfo.js'
export {setDefaultParams}
export {latitude, longitude, days, failure}


let latitude, longitude, failure;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function setDefaultParams() {
    let currentDate = new Date();
    document.querySelector('.short-day_name').innerHTML = shortDays[currentDate.getDay()];
    document.querySelector('.day_num').innerHTML = currentDate.getDate();
    document.querySelector('.month').innerHTML = month[currentDate.getMonth()];
    document.querySelector('.day1').innerHTML = days[nextDay(currentDate.getDay() + 1)];
    document.querySelector('.day2').innerHTML = days[nextDay(currentDate.getDay() + 2)];
    document.querySelector('.day3').innerHTML = days[nextDay(currentDate.getDay() + 3)];
    navigator.geolocation.getCurrentPosition(success, fail);
}

function success(pos) {
    let crd = pos.coords;

    latitude = crd.latitude;
    longitude = crd.longitude;

    getDefaultCityLocationObj()/*.catch(e => console.log(`Error ${e}`));*/
    getDefaultCityWeatherObj()/*.catch(e => console.log(`Error ${e}`));*/
    /* console.log('Ur current position:');
     console.log(`latitude: ${crd.latitude}`);
     console.log(`longitude: ${crd.longitude}`);*/
}

function fail() {
    failure = true;
    document.querySelector('main').classList.add('none');
    document.querySelector('.controls').classList.add('none')
}

function nextDay(n) {
    if (n > 6) {
        return n % 7
    } else {
        return n
    }
}

let shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];