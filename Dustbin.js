class Dustbin{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':3,
          isStatic : true        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbin1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill("purple");

      image(this.image, 1000, 530)

      rect(pos.x, pos.y, this.width, this.height);
    }
};