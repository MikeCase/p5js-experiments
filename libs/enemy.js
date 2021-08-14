class Enemy {
    constructor(x, y){
        this.options = {
            restitution: 1,
            friction: 0,
            density: random(0.001, 100)
        }

        this.r = 1;
        this.body = Bodies.circle(x, y, this.r, this.options);
        Composite.add(engine.world, this.body);
        this.pos = this.body.position;
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y)
        noStroke();
        colorMode(HSB);
        fill(map(this.options.density, 0.001, 100, 0, 255), 255, 255);
        circle(0,0,this.r*2);
        pop();
    }

    offScreen(){
        if (this.pos.y > height + 50){
            return true;
        }
    }
}