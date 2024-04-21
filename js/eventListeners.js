window.addEventListener('keydown',(event)=>{

  switch(event.key){
    case 'w':
      if(player.velocity.y === 0){
        player.velocity.y=-13;
      }
      break;

     case 'a':
      //move to left
      player.velocity.x = -3;   
      keys.a.pressed = true;
      break;   
    case 'd':
      //move to right 
      player.velocity.x = 3;
      keys.d.pressed = true;
      break;
  }

})

window.addEventListener('keyup',(event)=>{

  switch(event.key){
  
     case 'a':
      //move to left
      player.velocity.x = 0;
      keys.a.pressed = false;
      break;
      
    case 'd':
      //move to right 
      player.velocity.x = 0;
      keys.d.pressed = false;
      break;
  }

})