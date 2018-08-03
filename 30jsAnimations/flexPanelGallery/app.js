console.log('works');
// Event on click to distinguish in which paner user clicked
// 1  Built an array-like NodeList
const panels = document.querySelectorAll('.panel');
// 2 Write the function I want to apply on
function toggleOpen() {
  this.classList.toggle('open');
  this.classList.toggle('active');
}
// 3 Make sure my function is properly applied on each panel when clicked on
panels.forEach( panel => panel.addEventListener('click', toggleOpen));
// 4 Finish event when other panel is clicked
panels.forEach( panel => panel.addEventListener('transitionend', toggleActive));

  function toggleActive(){
    // this.classList.toggle('open-active');
    // Another way
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')){
      this.classList.toggle('open-active');
    }
  }
