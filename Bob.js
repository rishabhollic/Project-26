class Paper{
    constructor(x,y, radius){
        var options={
            restitution: 1.27,
            friction: 1.2,
            density: 1.0,
            isStatic: false
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(this.x,this.y,this.radius/2, options);
        World.add(world, this.body);
     }
   
     display(){
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);//helps with seeing the body
       stroke("red") //optional 
       strokeWeight(2); //optional 
       fill("lightblue"); //optional 
       ellipse(0,0, this.radius,this.radius); //helps with seeing body
       pop();
     }
   }
