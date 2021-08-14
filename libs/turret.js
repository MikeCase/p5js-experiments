class Turret {
    constructor(x, y){

        this.options = {
            isStatic: true,
            restitution: 0.9,
            friction: 0
        }

        this.r = 32;
        this.body = Bodies.circle(x, y, this.r, this.options);
        this.pos = this.body.position;
        Composite.add(engine.world, this.body);

        this.ammoRounds = [];

    }

    show(){
        push();
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(255);
        circle(0, 0, this.r*2);
        pop();
    }

    update() {
        if (this.ammoRounds.length > 0){
            for (let round of this.ammoRounds){
                round.show();
            }
        }
    }

    fire(){
        this.ammoRounds.push(new Ammo(this.pos.x, this.pos.y-(this.r*2)));
    }
}