export {clockStart}
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
