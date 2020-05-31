import {clockStart} from './time.js'
import {changeBackground} from "./backgroundChange.js";
import {setDefaultParams} from "./setDefaultParams.js";
import {fahrenheitBtn,celsiusBtn} from "./F-C btns/FCBtns.js";
import {getCityWeatherObj} from './getCityWeather.js'
import {setLang, currentLang} from "./changeLang.js";

let focus = false;

document.addEventListener('DOMContentLoaded', () => {
    setDefaultParams();
});

clockStart();

document.querySelector('.restore_btn').addEventListener('click', ()=>{
    changeBackground();
});

document.querySelector('.fahrenheit_btn').addEventListener('click', () => {
    fahrenheitBtn()
});

document.querySelector('.celsius_btn').addEventListener('click', () => {
    celsiusBtn()
});

document.querySelector('.input_text').addEventListener('focus', () => {
    focus = true
});

document.querySelector('.input_text').addEventListener('blur', () => {
    focus = false
});

document.querySelector('.search_btn').addEventListener('click', () => {
    getCityWeatherObj().catch(e => errorHandler());
});

document.addEventListener('keydown', (e) => {
    if (focus && e.keyCode === 13) {
        getCityWeatherObj().catch(e => errorHandler());
    }
});

document.querySelector('.droplist').addEventListener('click', (e) => {
    if (currentLang !== document.querySelector('.droplist').selectedOptions[0].innerHTML) {
        console.log(document.querySelector('.droplist').selectedOptions[0].innerHTML);

        setLang(document.querySelector('.droplist').selectedOptions[0].innerHTML);
    }
});

function errorHandler() {
    document.querySelector('.input_text').value = 'No city was found:(';
}


/*
function update() {
    let clock = document.querySelector('.current_date');
    let date = new Date(); // (*)
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[3].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[4].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[5].innerHTML = seconds;
}

let timerId;

function clockStart() { // запустить часы
    timerId = setInterval(update, 1000);
    update(); // (*)
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
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
        clear: 'ЯСНА'
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
        clear: 'ЯСНО'
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
    document.querySelector('.feels-like').innerHTML = lang.feelsLike + ': ' + document.querySelector('.feels-like').innerHTML.split(' ')[2].slice(0, 2) + '&#176';
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
