score=0;
cross=true; 
audio=new Audio('music.mp3')
audiogo=new Audio('gameover.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown=function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        mario=document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(() => {
            mario.classList.remove('animateMario')
        }, 700);
    }
    if(e.keyCode==39){
        mario=document.querySelector('.mario');
        marioX=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left=marioX+40+"px";
    }
    if(e.keyCode==37){
        mario=document.querySelector('.mario');
        marioX=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left=(marioX-40)+"px";
    }
}
setInterval(() => {
    mario=document.querySelector('.mario');
    game_over=document.querySelector('.game_over');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    //console.log(offsetX,offsetY)
    if(offsetX<73 && offsetY<52){
        game_over.style.visibility='visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            //audio.pause();
        }, 1000);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.2;
        obstacle.style.animationDuration = newDur + 's';
        console.log('new animation duration', newDur)
        }, 500);
    }
    
}, 10);
 
function updateScore(score){
    score_container.innerHTML = "Your Score: "+score
}