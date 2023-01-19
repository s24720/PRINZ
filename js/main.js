const button1 = document.querySelector('.adding__button-male');
const button2 = document.querySelector('.adding__button-female');
const navBtn = document.querySelector('.adding__button');
const send = document.querySelector('.adding__send');
const info = document.querySelector('.adding__info');
const removeInfo = document.querySelector(".adding");



const handleNav = () => {
    button1.classList.toggle('adding__button-click');
    button2.classList.remove('adding__button-click');


}

button1.addEventListener('click', handleNav);


const handleNav2 = () => {
    button2.classList.toggle('adding__button-click');
    button1.classList.remove('adding__button-click');

}

button2.addEventListener('click', handleNav2);


const handleNav3 = () => {
    info.classList.add('adding__info--active');

}

send.addEventListener('click', handleNav3);

const handleNav4 = () => {
    info.classList.remove('adding__info--active');

}

info.addEventListener('click', handleNav4);
