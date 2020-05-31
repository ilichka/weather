export {setLang, currentLang}

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
    currentLang = document.querySelector('.droplist').selectedOptions[0].innerHTML;
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
    let feel = document.querySelector('.feels-like').innerHTML.split(' ')[2]
    document.querySelector('.feels-like').innerHTML = lang.feelsLike + ': ' + feel.slice(0, feel-1)/* + '&#176'*/;
    document.querySelector('.wind').innerHTML = lang.wind + ': ' + document.querySelector('.wind').innerHTML.split(' ')[1] + ' ' + document.querySelector('.wind').innerHTML.split(' ')[2];
    document.querySelector('.humidity').innerHTML = lang.humidity + ': ' + document.querySelector('.humidity').innerHTML.split(' ')[1];
    document.querySelectorAll('.day-name').forEach(key=>{
        key.innerHTML = lang.fullDay[currentDay+i];
        i++;
    });
    document.querySelector('.Latitude').innerHTML = lang.latitude + ': ' + document.querySelector('.Latitude').innerHTML.split(': ')[1];
    document.querySelector('.Longitude').innerHTML = lang.longitude + ': ' + document.querySelector('.Longitude').innerHTML.split(': ')[1];
    document.querySelector('.input_text').placeholder = lang.placeholder;

}

let currentLang = 'En';


/*    if (currentLang !== document.querySelector('.droplist').selectedOptions[0].innerHTML) {
        console.log(document.querySelector('.droplist').selectedOptions[0].innerHTML);
        currentLang = document.querySelector('.droplist').selectedOptions[0].innerHTML;
        setLang(document.querySelector('.droplist').selectedOptions[0].innerHTML);
    }*/


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
}