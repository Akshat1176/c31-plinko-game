class Particle{
    constructor(x,y,r){
        var options ={
            restitutuon:0.4
        }
        this.r=r;

        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(255),random(0,255),random(0,255));
        world.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=thus.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        Fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}