class Player {
  //constructor contains all the variable that that players has like position, width,etc.
  constructor({
    collisionBlocks = []
  }){
    this.position = {
      x:32*6,
      y:32*14
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

    this.gravity = 1;
    

    this.collisionBlocks = collisionBlocks;
    console.log(this.collisionBlocks);
  }


  //below here are all the methods that the Player object will have 
  draw(){
    c.fillStyle='red';
    c.fillRect(this.position.x,this.position.y,this.width,this.height);
  }

  update(){
 

    this.position.x+= this.velocity.x;
    //check for hori collisions
    // for(let i = 0; i< this.collisionBlocks.length ; i++){
    //   const collisionBlock = this.collisionBlocks[i];

    //   //take account both sides
    //   if(this.position.x <= collisionBlock.position.x + collisionBlock.width && this.position.x + this.width >= collisionBlock.position.x){

    //   }
    // }


    //adding velocity to y position of player
    //updating the position.y to be position.y +velocity.y
    this.position.y += this.velocity.y;
    //this.sides.bottom = this.position.y+this.height;
    this.velocity.y+=this.gravity;

    //check for collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      // if a collision exists
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >=  collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y <= 0) {
          this.velocity.y = 0
          this.position.y =
            collisionBlock.position.y + collisionBlock.height  + 0.01
          break
        }

        if (this.velocity.y >= 0) {
          this.velocity.y = 0
          this.position.y = collisionBlock.position.y -this.height - 0.01
          break
        }
      }
    }
  
    //CHECK IF DEAD
    if(this.position.y>=32* 18){
      this.position.x=100;
      this.position.y=32*14;
    }

    

    //If about the botton of the canvas, after collisions addition we removed
  //   if(this.sides.bottom + this.velocity.y < canvas.height){
  //     this.velocity.y+=this.gravity;
     
  //   }else{
  //     this.velocity.y=0;
  //   }
   }
}