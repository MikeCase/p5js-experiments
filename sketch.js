let enemies = [];
let turret;
let bounds;
var Engine = Matter.Engine,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events;

var engine = Engine.create();

function setup(){
    createCanvas(400, 700);
    turret = new Turret(width/2, height-75);
    bounds = new Bounds();
}


function draw(){
    background(0);
    Engine.update(engine);
    turret.show();
    turret.update();


    if (frameCount % 60 == 0){
        enemies.push(new Enemy(width/2, 75))
    }
    
    for (let enemy of enemies){
        enemy.show();
        if (enemy.dead){
            console.log("Enemy dead: " + enemy.dead);
            enemies.splice(enemy, 1);
            
        }
    }
    
    bounds.show();
    // Events.on(engine, 'collisionStart', turret.hits);
}

function mousePressed(){
    const RED = color(255,0,0);

    if (   mouseX > turret.pos.x-turret.r 
        && mouseX < turret.pos.x+turret.r 
        && mouseY < turret.pos.y+turret.r 
        && mouseY > turret.pos.y-turret.r){
        turret.fire();
        turret.setColor(RED);
    }
}