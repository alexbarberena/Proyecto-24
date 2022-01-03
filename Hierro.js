class Hierro{
      constructor(x,y){
     var options={
        restitution:0.8,
        friction:3,
        density:30
         }
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,80,80,options);
        World.add(world,this.body); 
     }
     display(){
      var hierropos=this.body.position
      push();
      translate(hierropos.x,hierropos.y);
      strokeWeight(3);
      stroke('black')
      fill('green')
      rectMode(CENTER)
      rect(0,0,80,80);
      pop();
     }
}