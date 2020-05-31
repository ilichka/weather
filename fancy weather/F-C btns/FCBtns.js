export {fahrenheitBtn, celsiusBtn}

function fahrenheitBtn() {
    if (!document.querySelector('.fahrenheit_btn').classList.contains('inactive')) {
        document.querySelector('.fahrenheit_btn').classList.toggle('inactive');
        document.querySelector('.celsius_btn').classList.toggle('inactive');
        document.querySelectorAll('.translate').forEach(key => {
            key.innerHTML = Math.round(key.innerHTML.slice(0, -1) * 9 / 5 + 32) + '&#176';
        });
        let arr = document.querySelector('.feels-like').innerHTML.split(' ')[2];
        let feelsLike = +/*document.querySelector('.feels-like').innerHTML.slice(12, -1)*/arr.slice(0,arr.length-1);
        document.querySelector('.feels-like').innerHTML =  document.querySelector('.feels-like').innerHTML.split(' ')[0] + ' ' + document.querySelector('.feels-like').innerHTML.split(' ')[1]  + ` ${Math.round(feelsLike * 9 / 5 + 32)}` + '&#176';
    }
}

function celsiusBtn() {
    if (!document.querySelector('.celsius_btn').classList.contains('inactive')) {
        document.querySelector('.fahrenheit_btn').classList.toggle('inactive');
        document.querySelector('.celsius_btn').classList.toggle('inactive');
        document.querySelectorAll('.translate').forEach(key => {
            key.innerHTML = Math.round((key.innerHTML.slice(0, -1) - 32) * 5 / 9) + '&#176';
        });
        let feelsLike = +/*document.querySelector('.feels-like').innerHTML.slice(12, -1)*/document.querySelector('.feels-like').innerHTML.split(' ')[2].slice(0,2);;
        document.querySelector('.feels-like').innerHTML = document.querySelector('.feels-like').innerHTML.split(' ')[0] + ' ' + document.querySelector('.feels-like').innerHTML.split(' ')[1]  +  ` ${Math.round((feelsLike - 32) * 5 / 9)}` + '&#176';
    }
}


