//Use Sprite for background and other images we upload 
class Sprite {
  constructor({position, imageSrc, frameRate = 1 }) {
    this.position = position
    this.image = new Image()
    //if image is loaded set loaded to TRUE 
    this.image.onload = () => {
      this.loaded = true
      this.width = this.image.width;
      this.height = this.image.height / this.frameRate;
    }
    this.image.src = imageSrc
    this.loaded = false
    this.frameRate = frameRate
    this.currentFrame = 0
    this.elapsedFrames = 0
    //if speed of cat want to be updated 
    this.frameBuffer = 4

  }

  draw(){
    //if image has NOT loaded we do not continue
    if(!this.loaded) return
    const cropBox = {
      position: {
        x: 0,
        y: this.height * this.currentFrame,
      },
      width: this.width,
      height: this.height,
    }

    c.drawImage(  
      this.image,
      cropBox.position.x,
      cropBox.position.y,
      cropBox.width,      
      cropBox.height,      
      this.position.x,      
      this.position.y,      
      this.width,      
      this.height,
      );
      this.updateFrames()
    }

  updateFrames(){
    this.elapsedFrames++;

    if (this.elapsedFrames % this.frameBuffer === 0){
    if(this.currentFrame < this.frameRate - 1) 
    this.currentFrame ++
else this.currentFrame = 0
}

  }

}