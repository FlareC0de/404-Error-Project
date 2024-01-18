let container = document.querySelector('.container');

for(var i = 0; i <= 50; i++){
    let numFour = document.createElement('span');
    numFour.classList.add('block');
    numFour.textContent = "ha";
    container.appendChild(numFour);
}

for(var i = 0; i <= 50; i++){
    let numZero = document.createElement('span');
    numZero.classList.add('block');
    numZero.textContent = "ha";
    container.appendChild(numZero);
}

function generate() {
    anime({
        targets: '.block',
        translateX: function (){
            return anime.random(-700, 700);
        },
        translateY: function (){
            return anime.random(-400, 400);
        },
        scale: function (){
            return anime.random(1, 10);
        },
        easing: 'spring(1, 80, 10, 0)',
        delay: 2
    })
}

generate();