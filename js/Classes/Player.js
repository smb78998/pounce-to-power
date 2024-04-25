class Player {
  //constructor contains all the variable that that players has like position, width,etc.
  constructor(){
    this.position = {
      x:100,
      y:100
    }

    this.width = 32;
    this.height = 32;

    this.sides={
      bottom: this.position.y + this.height
    }

    this.velocity={
      x:0,
      y:0
    }

    this.gravity = .4;
  }


  //below here are all the methods that the Player object will have 
  draw(){
    c.fillStyle='red';
    c.fillRect(this.position.x,this.position.y,this.width,this.height);
  }

  update(){

    this.position.x+= this.velocity.x;


    //adding velocity to y position of player
    //updating the position.y to be position.y +velocity.y
    this.position.y += this.velocity.y;

    this.sides.bottom = this.position.y+this.height;

    //If about the botton of the canvas
    if(this.sides.bottom + this.velocity.y < canvas.height){
      this.velocity.y+=this.gravity;
     
    }else{
      this.velocity.y=0;
    }
  }
}