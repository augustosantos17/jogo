const mario = document.querySelector('.mario');
const pipe = document.querySelector ('.pipe');
const game = document.querySelector ('.gameover');
const song = document.querySelector ('song');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } , 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario) .bottom.replace('px', '');
    
    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        game.style.display = 'block';
        game.style.width = '450px'
        game.style.marginLeft = '0px'
        game.style.marginTop = '10px'
        game.style.fontSize = '80px'
        game.style.fontFamily = 'Arial'
        game.style.textAlign = 'center'
        game.style.color = 'white'
                     
                              
        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump)