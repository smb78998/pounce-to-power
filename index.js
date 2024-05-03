

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//the width and hieght are written out a little funky because we want correct aspect ratio
canvas.width = 32*48;
canvas.height = 32* 18;



//setting collisions blocks
const collisionBlocks= [];

const parsedCollisions = collisionsLevel1.parse2D();

parsedCollisions.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if(symbol === 4){
      //push new collisions
      collisionBlocks.push(new CollisionBlock({
        position:{
          x: x*48,
          y: y*18,
        }
      }));
    }
  })
})


const backgroundLevel1 = new Sprite({
  position:{
    x:0,
    y:0
  }, 
  imageSrc:'./img/V5P1.png'
});



const player = new Player({
  collisionBlocks: collisionBlocks,
});

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
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  })

  player.velocity.x=0;
  //MOVEMENT, makes sure we are moving in the correct direction of pressed keys
  if(keys.d.pressed){
    player.velocity.x =3;
  }else if(keys.a.pressed){
    player.velocity.x = -3;
  }

//WHEN PLAYERS GOES TO RIGHT THE BACKGROUND CHANGES 
if(player.position.x >= 32*31.5){
  
}

  player.draw();
  player.update();

}




animate();

