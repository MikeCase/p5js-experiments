class Ammo  {
    constructor(x,y) {
        // super(x,y);
        this.options = { 
            // isStatic: true,
            density: 5,
            label: 'Ammo'
        }
        this.r = 8;
        this.body = Bodies.circle(x, y-(this.r*4), this.r, this.options);
        this.pos = this.body.position;
        Composite.add(engine.world, this.body);
        this.color = color(255, 127, 0);
        this.dead = false;
    }

    show(){
        
        push();
        translate(this.pos.x, this.pos.y);
        // this.pos.y = this.pos.y-(this.r*2);
        let angle = this.body.angle;
        fill(this.color);
        noStroke();
        rotate(angle);
        circle(0, 0, this.r*2);
        // strokeWeight(20);
        // stroke(0);
        // line(0, 0, 0, -this.r);
        pop();
        Body.applyForce(this.body, createVector(this.pos.x, this.pos.y), createVector(0, -3))
    }

    offScreen(){
        if (this.pos.y < -50){
            return true;
        }
    }

    remFromScn(){
        // this.dead = true;
        Composite.removeBody(engine.world, this.body);
    }

}