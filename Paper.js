class Paper{

constructor(x,y,diameter){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

        
        }
        this.x=x;
this.y=y;
this.diameter=diameter;
this.body= Matter.Bodies.circle(x,y,diameter,options);
this.diameter=6;
World.add(world,this.body);

}


display(){

    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
}

}