class Turret {
    constructor(x, y){

        this.options = {
            isStatic: true,
            restitution: 0.9,
            friction: 0,
            label: "turret"
        }
        this.color = color(255,255,255);
        this.r = 32;
        this.body = Bodies.circle(x, y, this.r, this.options);
        this.pos = this.body.position;
        Composite.add(engine.world, this.body);

        this.ammoRounds = [];
        this.cooldown = 100;

    }

    show(){
        push();
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(this.color);
        circle(0, 0, this.r*2);
        pop();
    }

    update() {
        if (this.ammoRounds.length > 0){
            for (let round of this.ammoRounds){

                round.show();
                Events.on(engine, 'collisionStart', function(event){
                    var pairs = event.pairs;
                    // console.table(pairs);
                    for (let pair of pairs){
                        if (pair.bodyA.label == 'Ammo' && pair.bodyB.label == 'Enemy' 
                            || pair.bodyA.label == "Enemy" && pair.bodyB.label == 'Ammo'){

                                for (let i=turret.ammoRounds.length; i <= 0; i++){
                                    if (turret.ammoRounds[i].body.id == pair.bodyA.id || turret.ammoRounds[i].body.id == pair.bodyB.id){
                                        turret.ammoRounds[i].dead = true;
                                        // turret.ammoRounds[i].remFromScn();
                                    }
                                }
                                for (let e of enemies){
                                    if (e.body.id == pair.bodyA.id || e.body.id == pair.bodyB.id){
                                        e.dead = true;
                                        // e.remFromScn();
                                    }
                                }
                                Composite.remove(engine.world, [pair.bodyA, pair.bodyB]);
                        }

                    }
                });

                if (round.dead == true){
                    round.remFromScn();
                    this.ammoRounds.splice(round, 1);
                    // this.ammoRounds[-1];
                    return;
                }

                if (round.offScreen()){
                    console.log("removing round, it's off the screen");
                    round.remFromScn();
                    this.ammoRounds.splice(round, 1);
                    // this.ammoRounds[-1];
                    return;
                }
            }
        }
        
        if (this.cds && millis() >= (this.cds+this.cooldown)){
            this.color = color(255,255,255);
            this.cds = null;
        }
        
    }
    
    hits(event){
        // var pairs = event.pairs;
        // // console.table(pairs);
        // for (let pair of pairs){
        //     if (pair.bodyA.label == 'Ammo' && pair.bodyB.label == 'Enemy' 
        //         || pair.bodyA.label == "Enemy" && pair.bodyB.label == 'Ammo'){

        //             for (let i=turret.ammoRounds.length-1; i <= 0; i++){
        //                 if (turret.ammoRounds[i].body.id == pair.bodyA.id || turret.ammoRounds[i].body.id == pair.bodyB.id){
        //                     turret.ammoRounds[i].dead = true;
        //                     turret.ammoRounds[i].remFromScn();
        //                 }
        //             }
        //             for (let e of enemies){
        //                 if (e.body.id == pair.bodyA.id || e.body.id == pair.bodyB.id){
        //                     e.dead = true;
        //                     e.remFromScn();
        //                 }
        //             }
        //             // Composite.remove(engine.world, [pair.bodyA, pair.bodyB]);
        //     }

        // }
    }

    setColor(col){
        this.cds = millis();
        this.color = col;
    }

    fire(){
        this.ammoRounds.push(new Ammo(this.pos.x, this.pos.y));
    }
}