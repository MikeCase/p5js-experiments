class Ammo extends Turret {
    constructor(x,y) {
        super(x,y);
        this.r = 5;
        this.body = Bodies.circle(x, y, this.r);
        this.pos = this.body.position;
        Composite.add(engine.world, this.body);
        this.color = color(255, 127, 0);

    }

    show(){
        push();
        translate(this.pos.x, this.pos.y);
        fill(this.color);
        circle(0, 0, this.r*2);
        pop();
        Body.applyForce(this.body, createVector(this.pos.x, this.pos.y), createVector(0, -0.0001))
    }
}