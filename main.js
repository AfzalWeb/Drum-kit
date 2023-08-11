window.addEventListener('keydown',function(e){
const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);

if(!audio) return;

audio.currentTime=0;
audio.play();
key.classList.add('playing')


// remove the 'playing' class after the transition is complete
key.addEventListener('transitionend', function() {
  key.classList.remove('playing');
});
});
