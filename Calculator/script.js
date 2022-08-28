let buttons = document.querySelector('.buttons');
let btn =document.querySelectorAll('span');
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        if(this.innerHTML == '='){
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML == 'clear'){
                value.innerHTML = '';
            }else{
                value.innerHTML += this.innerHTML;
            }
        }
    } )
}

const preferedColorScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
).matches ? 'dark' : 'light';
//console.log(preferedColorScheme)
const slider = document.getElementById('slider');

const setThheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setThheme(switchToTheme);
})

setThheme(localStorage.getItem('theme') || preferedColorScheme);

/* Script input range value*/
function changeRangeValue(value) {
    document.getElementById('range-value').innerHTML = value;
}
document.getElementsByClassName('range')[0].addEventListener('input', function () {
    changeRangeValue(this.value);
}, false);