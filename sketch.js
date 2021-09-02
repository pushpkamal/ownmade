const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 1.4,
		isStatic:false,
    }



    ball1 = Bodies.circle(675,300,25,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(725,300,25,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(775,300,25,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(825,300,25,ball_options);
	World.add(world,ball4);

	roof = Bodies.rectangle(750,200,230,20,roof_options);
    World.add(world,roof);

	con1=Matter.Constraint.create({
		pointA:{x:675,y:200},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
      })
	   World.add(world,con1);

	   con2=Matter.Constraint.create({
		pointA:{x:725,y:200},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
      })
	   World.add(world,con2);

	   con3=Matter.Constraint.create({
		pointA:{x:775,y:200},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
      })
	   World.add(world,con3);

	   con4=Matter.Constraint.create({
		pointA:{x:825,y:200},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
      })
	   World.add(world,con4);
	 

	   Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  

  //call display() to show ropes here
   
  push();
  strokeWeight(2);
  stroke(0);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  pop();
  
  rect(roof.position.x,roof.position.y,230,20);

  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,50);
  ellipse(ball2.position.x,ball2.position.y,50);
  ellipse(ball3.position.x,ball3.position.y,50);
  ellipse(ball4.position.x,ball4.position.y,50);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.


function keyPressed(){

    if (keyCode ===UP_ARROW){

		Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.03,y:0});
		
	}
		
}