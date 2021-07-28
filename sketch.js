const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, wall1, wall2;

var jointLink1;
var Stone;

var stones = [];

var inv;

var stone1; 

var bridge, jointLink;

var bg;

function preload(){
 bg = loadImage("texture_02.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  

  ground = new base(200,680,680,20);

  wall1 = new base(40, 580, 300, 200);
  wall2 = new base(700, 280, 100, 50);
  wall3 = new base(0, 280, 100, 500);

  inv = new invBase(350, 280, 1000, 20);

  bridge = new Bridge(25, {x:width - 120, y:520});
  

  Matter.Composite.add(bridge.body ,wall2);
  jointLink = new link(bridge, wall2);

  Matter.Composite.add(bridge.body ,wall1);
  jointLink = new link(bridge, wall1);

 // Matter.Composite.add(bridge.body ,stone);
  //jointLink = new link(bridge, stone);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  image(bg, 0, 0, width, height);
  
  
  showStone();

stop();
  ground.display();
  bridge.show ();
  wall1.display();
  wall2.display();
  wall3.display();
 // inv.display();


  Engine.update(engine);



}



function showStone(){
  if(stones.length < 8){
    var x = random(300, 350);
    var y = random(50, 100);
    Stone = new stone(x, y, 25);
    stones.push(Stone);
  }

  for(var i = 0; i < stones.length; i++){
    stones[i].display();
  }
}
