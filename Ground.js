class Ground{
 constructor(x,y,height){
  var options={
     isStatic:true
  }
  this.body= Bodies.rectangle(x,y,800,height,options);
this.width=800;
this.height=height;
World.add(world,this.body);


}
display(){
var posi=this.body.position;
rectMode(CENTER);
fill("yellow");
stroke("black");
rect(posi.x,posi.y,this.width,this.height);



}
}