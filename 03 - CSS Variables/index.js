const inputs=document.querySelectorAll(".controls input");

function update(){
  const suff = this.dataset.sizing||'';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suff)
}

inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));
