let enemies = [];
let turret;
let bounds;
var Engine = Matter.Engine,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

var engine = Engine.create();

function setup(){
    createCanvas(400, 700);
    
    turret = new Turret(width/2, height-75);
    bounds = new Bounds();
}

function draw(){
    background(0);
    Engine.update(engine);
    if (frameCount % 1 == 0){
        enemies.push(new Enemy(width/2, 75))
    }
    turret.show();
    turret.update();

    for (let enemy of enemies){
        enemy.show();
    }
    bounds.show();
}

function mousePressed(){
    turret.fire();
}