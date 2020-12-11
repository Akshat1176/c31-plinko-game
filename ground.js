class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    world.add(world,this.body)
    }
    diaplay(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
}