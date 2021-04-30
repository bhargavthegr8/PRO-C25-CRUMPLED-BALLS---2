class Paper{
    constructor(x, y, radius) {
      var options = {
        'restitution':1,
        'friction':1,
        'density':2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER),
      image(this.image, pos.x, pos.y+46, this.radius, this.radius)
    }
}