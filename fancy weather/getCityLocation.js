import {setCurrentWeather} from "./setCurrentWeather.js";
export {getCityLocationObj, locObj}

let locObj;

async function getCityLocationObj() {
    let apiKey = '39ded94cf3b947f78cc99f7fd2588cce';
    let city = document.querySelector('.input_text').value;
    let lang = '&language=' + `en`;
    let url = 'https://api.opencagedata.com/geocode/v1/json' + '?' + 'key=' + apiKey + '&q=' + city + '&pretty=1'/* + '&no_annotations=1'*/ + lang;
    let response = await fetch(url);
    locObj = await response.json();
    console.log(locObj);
    document.querySelector('.restore_img').classList.toggle('restore_img-animation');
    document.querySelector('.restore_btn').classList.toggle('restore_btn-animation');
    setTimeout(() => {
        setCurrentWeather();
        document.querySelector('.restore_img').classList.toggle('restore_img-animation');
        document.querySelector('.restore_btn').classList.toggle('restore_btn-animation');
    }, 1000);
}