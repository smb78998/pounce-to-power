//Use Sprite for background and other images we upload 
class Sprite {
  constructor({position, imageSrc}){
    this.position = position;

    this.image = new Image();
    //if image is loaded set loaded to TRUE 
    this.image.onload = () =>{
      this.loaded = true;
    }
    
    this.image.src = imageSrc;
    this.loaded =false;
  }

  draw(){
    //if image has NOT loaded we do not continue
    if(!this.loaded) return

    c.drawImage(this.image, this.position.x, this.position.y);
  }
}