// inputs stocked in Css variables which can be modified
// collect inputs
const inputs = document.querySelectorAll('.controls > input');
//subroutine to handel updates on inputs
function handleUpdate() {
  // COLLECTED INPUTS
  console.log(this.value);  //1
  console.log(this.name)  //2
  const suffix = this.dataset.sizing || ' ';  //dataset(object contains everything on my customized attributes 'data-')
  console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
