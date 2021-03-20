window.addEventListener('keydown',function(event){
  const a =  document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const b =  document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!a) return;
  a.currentTime=0;
  a.play();
  b.classList.add('playing');
});

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',function(e){
      if(e.propertyName!=='transform') return;
      this.classList.remove('playing');
}));
