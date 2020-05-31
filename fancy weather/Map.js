let myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map-id', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [51.0834196, 10.4234469], // Москва
        zoom: 10
    });

}

//map ^
//    |
//    |














//page params ^
//            |
//            |





/*let icons = {
    "CLOUDS": "assets/img/clouds.png",
    "RAIN": "assets/img/rain.png",
    "CLEAR": "assets/img/sun.png"
};*/





/*function setDefaultParams() {
    let currentDate = new Date();
    document.querySelector('.short-day_name').innerHTML = shortDays[currentDate.getDay()];
    document.querySelector('.day_num').innerHTML = currentDate.getDate();
    document.querySelector('.month').innerHTML = month[currentDate.getMonth()];
    document.querySelector('.day1').innerHTML = days[nextDay(currentDate.getDay() + 1)];
    document.querySelector('.day2').innerHTML = days[nextDay(currentDate.getDay() + 2)];
    document.querySelector('.day3').innerHTML = days[nextDay(currentDate.getDay() + 3)];
    navigator.geolocation.getCurrentPosition(success);
}*/

/*function success(pos) {
    let crd = pos.coords;

    latitude = crd.latitude;
    longitude = crd.longitude;

    getDefaultCityLocationObj()/!*.catch(e => console.log(`Error ${e}`));*!/
    getDefaultCityWeatherObj()/!*.catch(e => console.log(`Error ${e}`));*!/
    /!* console.log('Ur current position:');
     console.log(`latitude: ${crd.latitude}`);
     console.log(`longitude: ${crd.longitude}`);*!/
}*/

/*let defaultCityLocationObj, defaultCityWeatherObj;*/

/*function setDefaultWeather() {
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
    myMap.setCenter([+myLocObj.geometry.lat, +myLocObj.geometry.lng], 10, {duration: 1000});
    document.querySelector('.current-weather_icon').src = `${icons[document.querySelector('.summary').innerHTML]}`;
    document.querySelector('.icon1').src = `${icons[myWeaObj[8].weather[0].main.toUpperCase()]}`;
    document.querySelector('.icon2').src = `${icons[myWeaObj[16].weather[0].main.toUpperCase()]}`;
    document.querySelector('.icon3').src = `${icons[myWeaObj[24].weather[0].main.toUpperCase()]}`
}*/

/*async function getDefaultCityLocationObj() {
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
}*/


/*function nextDay(n) {
    if (n > 6) {
        return n % 7
    } else {
        return n
    }
}*/

/*document.addEventListener('DOMContentLoaded', () => {
    setDefaultParams();
});*/


//Default params ^
//               |
//               |



/*

let rand = Math.round(getRandomFloat(0,9)), prevRand;

function checkSame() {
    prevRand = rand;
    rand = Math.round(getRandomFloat(0,9));
    if(rand===prevRand) {
        checkSame();
    }
}

document.querySelector('.restore_btn').addEventListener('click', ()=>{
    document.querySelector('.restore_img').classList.toggle('restore_img-animation');
    document.querySelector('.restore_btn').classList.toggle('restore_btn-animation');
    /!*console.log(rand);*!/
    /!*console.log(background[rand]);*!/
    setTimeout(() => {
        document.querySelector('.restore_img').classList.toggle('restore_img-animation');
        document.querySelector('.restore_btn').classList.toggle('restore_btn-animation');
        document.body.style.backgroundImage = `url(${background[rand]})`;
        checkSame();
    }, 1000);
});

let background = ['./assets/img/bk0.jpg', './assets/img/bk1.jpg', './assets/img/bk2.jpg', './assets/img/bk3.jpg', './assets/img/bk4.jpg', './assets/img/bk5.jpg', './assets/img/bk6.jpg', './assets/img/bk7.jpg', './assets/img/bk8.jpg', './assets/img/bk9.jpg'];

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
*/































/*
let toEn = {
    date: {
        shortDayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    summary: {
        rain: 'RAIN',
        clouds: 'CLOUDS',
        clear: 'CLEAR'
    },
    feelsLike: 'FEELS LIKE',
    wind: 'WIND',
    humidity: 'HUMIDITY',
    fullDay : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'],
    latitude : 'latitude',
    longitude : 'longitude',
    placeholder : 'Search city',
};
let toRu = {
    date: {
        shortDayName: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    },
    summary: {
        rain: 'ДОЖДЬ',
        clouds: 'ОБЛАКА',
        clear: 'ЯСНО'
    },
    feelsLike: 'ОЩУЩАЕТСЯ КАК',
    wind: 'ВЕТЕР',
    humidity: 'ВЛАЖНОСТЬ',
    fullDay : ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник'],
    latitude : 'Широта',
    longitude : 'Долгота',
    placeholder: 'Искать город',
};
let toBe = {
    date: {
        shortDayName: ['Нд', 'Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб'],
        month: ['Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Май', 'Червень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк', 'Лiстапад', 'Снежань'],
    },
    summary: {
        rain: 'ДОЖДЖ',
        clouds: 'ВОБЛАКА',
        clear: 'ЯСНА'
    },
    feelsLike: 'АДЧУВАЕЦЦА ЯК',
    wind: 'ПАВЕТРА',
    humidity: 'ВІЛЬГОТНАСЦЬ',
    fullDay : ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота', 'Нядзеля', 'Панядзелак', 'Аўторак',],
    latitude : 'Шырата',
    longitude : 'Даўгата',
    placeholder : 'Пошук горада',
};

function setLang(lang) {
    if (lang === 'En') {
        lang = toEn;
    } else {
        if (lang === 'Ru') {
            lang = toRu;
        } else {
            if (lang === 'Be') {
                lang = toBe;
            }
        }
    }
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let i = 1;
    what();
    document.querySelector('.short-day_name').innerHTML = lang.date.shortDayName[currentDay];
    document.querySelector('.month').innerHTML = lang.date.month[currentDate.getMonth()];
    if(document.querySelector('.summary').innerHTML==='RAIN' || document.querySelector('.summary').innerHTML==='ДОЖДЖ' || document.querySelector('.summary').innerHTML==='ДОЖДЬ') {
        document.querySelector('.summary').innerHTML = lang.summary.rain;
    } else {
        if(document.querySelector('.summary').innerHTML==='CLOUDS' || document.querySelector('.summary').innerHTML==='ВОБЛАКА' || document.querySelector('.summary').innerHTML==='ОБЛАКА'){
            document.querySelector('.summary').innerHTML = lang.summary.clouds;
        } else {
            document.querySelector('.summary').innerHTML = lang.summary.clear;
        }
    }
    document.querySelector('.feels-like').innerHTML = lang.feelsLike + ': ' + document.querySelector('.feels-like').innerHTML.split(' ')[2].slice(0, 2);
    document.querySelector('.wind').innerHTML = lang.wind + ': ' + document.querySelector('.wind').innerHTML.split(' ')[1] + ' ' + document.querySelector('.wind').innerHTML.split(' ')[2]
    document.querySelector('.humidity').innerHTML = lang.humidity + ': ' + document.querySelector('.humidity').innerHTML.split(' ')[1];
    document.querySelectorAll('.day-name').forEach(key=>{
        key.innerHTML = lang.fullDay[currentDay+i];
        i++;
    });
    document.querySelector('.Latitude').innerHTML = lang.latitude + ': ' + document.querySelector('.Latitude').innerHTML.split(': ')[1];
    document.querySelector('.Longitude').innerHTML = lang.longitude + ': ' + document.querySelector('.Longitude').innerHTML.split(': ')[1];
    document.querySelector('.input_text').placeholder = lang.placeholder
}

let currentLang = 'En';

document.querySelector('.droplist').addEventListener('click', (e) => {
    if (currentLang !== document.querySelector('.droplist').selectedOptions[0].innerHTML) {
        console.log(document.querySelector('.droplist').selectedOptions[0].innerHTML);
        currentLang = document.querySelector('.droplist').selectedOptions[0].innerHTML;
        setLang(document.querySelector('.droplist').selectedOptions[0].innerHTML);
    }
});

let cyka;
async function what() {
    let apiKey = '39ded94cf3b947f78cc99f7fd2588cce';
    let city = document.querySelector('.city_name').innerHTML;
    let lang = '&language=' + `${currentLang.toLowerCase()}`;
    let url = 'https://api.opencagedata.com/geocode/v1/json' + '?' + 'key=' + apiKey + '&q=' + city + '&pretty=1' + '&no_annotations=1' + lang;
    let response = await fetch(url);
    cyka = await response.json();
    console.log(cyka);
    document.querySelector('.city_name').innerHTML = cyka.results[0].formatted;
}*/
