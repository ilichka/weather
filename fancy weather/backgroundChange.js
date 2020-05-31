export {changeBackground, background, rand, checkSame}
function changeBackground() {
    document.querySelector('.restore_img').classList.toggle('restore_img-animation');
    document.querySelector('.restore_btn').classList.toggle('restore_btn-animation');
    /*console.log(rand);*/
    /*console.log(background[rand]);*/
    setTimeout(() => {
        document.querySelector('.restore_img').classList.toggle('restore_img-animation');
        document.querySelector('.restore_btn').classList.toggle('restore_btn-animation');
        document.body.style.backgroundImage = `url(${background[rand]})`;
        checkSame();
    }, 1000);
}

let rand = Math.round(getRandomFloat(0,9)), prevRand;

function checkSame() {
    prevRand = rand;
    rand = Math.round(getRandomFloat(0,9));
    if(rand===prevRand) {
        checkSame();
    }
}

let background = ['./assets/img/bk0.jpg', './assets/img/bk1.jpg', './assets/img/bk2.jpg', './assets/img/bk3.jpg', './assets/img/bk4.jpg', './assets/img/bk5.jpg', './assets/img/bk6.jpg', './assets/img/bk7.jpg', './assets/img/bk8.jpg', './assets/img/bk9.jpg'];

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}