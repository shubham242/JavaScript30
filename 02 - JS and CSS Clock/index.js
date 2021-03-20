
  function set(){
  const current= new Date();
  const seconds=(current.getSeconds()*6)+90;
  const minutes=(current.getMinutes()*6)+90+(seconds-90)/60;
  const hours=(current.getHours()*30)+90+(minutes-90)/60;

  document.querySelector('.hour-hand').style.transform=`rotate(${hours}deg)`;
  document.querySelector('.min-hand').style.transform=`rotate(${minutes}deg)`;
  document.querySelector('.second-hand').style.transform=`rotate(${seconds}deg)`;
  }
  setInterval(set,1000);
  set();
