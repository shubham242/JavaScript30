var inputs = document.querySelectorAll('input');
var lastChecked;
var clicked=0;
var between=false;
function handleClick (e){
    if(!clicked){
      lastChecked=this
      clicked=1;
    }
    else{
      if(e.shiftKey && this.checked)
      {
        inputs.forEach(input => {

          if(input===lastChecked||input===this)
          between=!between;

          if(between)
          input.checked=true;
        });

      }
      else{lastChecked=this}
    }
}

inputs.forEach(input => input.addEventListener('click',handleClick));
