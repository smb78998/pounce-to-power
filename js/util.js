
//until so that we can reference again 
 Array.prototype.parse2D = function(){
  const rows = [];
  //32 is the amount of cells in a row
  for (let i=0; i < this.length; i+=48){
    rows.push(this.slice(i, i +48));
  }

  return rows;
}