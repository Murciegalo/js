console.log('works');
// 2
function playSound(e) {
  //console.log(e); event is an object full of data/tools to describe what happens console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
  // console.log(audio);
  // Points me to the class key which contains keyCode pressed & run by this function
  const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
  // console.log(key);
  if (!audio) return; //No audio associated ->STop function
  audio.currentTime = 0; //rewind to the start
  audio.play();
  // Audio works , ADding class for styles now
  key.classList.add('playing');
// Problem: Keys need to get back to normal state when Event ends
}
// 3
  function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform
  // console.log(e.propertyName);
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//1 on window  Adding event listener
window.addEventListener('keydown', playSound)
