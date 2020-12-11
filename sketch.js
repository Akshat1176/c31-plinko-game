 var Engine=Matter.Engine,
 World=Matter.World,
 Events=Matter.Events,
 Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=200;
var score=0;



function setup() {
  createCanvas(700,700);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k=0; k  <=width;k=k =80){
    divisions.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 75; j <=width; j=j+50)
  {

    plinkos.push(new plinkos(j,75));
  }

  for (var j = 50; j  <=width-10; j=j+50)
  {

    plinkos.push(new plinko(j,175));
  }

  for (var j=75; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,275));
  }

  for (va =50; j <=width-10; j=j+50)
  {

    plinkos.push(new plinko(j,375));
  }



  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  textSize(20)
  //text("score: "+score,20,30);
  Engine.update(engine);
  ground.display();
  
  for (var i = 0; i < plinkos.length;i++) {

    plinkos[i].display;
  }
  if (frameCount%60===0) {
    particles.push(new particles(random(100,700),10,10));
    score++;
  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
    for(var k=0; k <divisions.length;k++){

      divisions[k].display();
    }

  drawSprites();
  }