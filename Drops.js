class Drops{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,5,options);
        this.radius = 5;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
       rectMode(CENTER)
       fill("blue")
       circle(0,0,this.radius)
        pop();
      }
      update() {
     if(this.body.position.y>height){
     Matter.Body.setPosition(this.body,{x:random(0,1000),y:random(0,1000)})
     }  
      }
}