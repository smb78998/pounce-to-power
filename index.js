

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//the width and hieght are written out a little funky because we want correct aspect ratio
canvas.width = 64*16;
canvas.height = 64* 9;



const backgroundLevel1 = new Sprite({
  position:{
    x:0,
    y:0
  }, 
  imageSrc:'./img/CandyMap3.0.png'
});



const player = new Player();

//we want to make sure that we move in the direction of which key is pressed down,so this is a fix for that 
const keys = {
  w:{
    pressed:false
  },
  a: {
    pressed: false
  },
  d:{
    pressed: false
  }

}

function animate(){
  window.requestAnimationFrame(animate);
  //THERE ARE A COUPLE WAYS TO ANIMATE
  //1.using set interval functions
  //2. using requestanimatiomframe

  backgroundLevel1.draw();

  player.velocity.x=0;
  //MOVEMENT, makes sure we are moving in the correct direction of pressed keys
  if(keys.d.pressed){
    player.velocity.x =3;
  }else if(keys.a.pressed){
    player.velocity.x = -3;
  }

  player.draw();
  player.update();

}

animate();

