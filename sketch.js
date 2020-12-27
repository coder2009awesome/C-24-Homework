const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=createSprite(30, 650, 40, 40)
	ball.shapeColor=("purple")

	ground=createSprite(0, 670, 1600, 10)
	ground.shapeColor=("yellow")


	Engine.run(engine);

	box1 = createSprite(560,635,20,70);
	box1.shapeColor=("white")
	box2 = createSprite(640,635,20,70);
	box2.shapeColor=("white")
	box3 = createSprite(600,660,70,20);
	box3.shapeColor=("white")

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		setTimeout(() => {ball.position.x= 80, baLL.position.y= 630;}, 100);
		setTimeout(() => {ball.position.x= 160, ball.position.y= 530;}, 200);
		setTimeout(() => {ball.position.x= 240, ball.position.y= 430;}, 300);
		setTimeout(() => {ball.position.x= 320, ball.position.y= 330;}, 400);
		setTimeout(() => {ball.position.x= 400, ball.position.y= 430;}, 500);
		setTimeout(() => {ball.position.x= 480, ball.position.y= 530;}, 600);
		setTimeout(() => {ball.position.x= 600, ball.position.y= 630;}, 700);
	}
}