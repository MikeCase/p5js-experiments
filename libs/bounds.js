class Bounds {
    constructor(){
        this.options = {
            isStatic: true
        }
        this.hTop = 10;
        this.hBottom = 10;
        this.wTop = width;
        this.bottomW = width;

        this.sideW = 10;
        this.sideH = height;
        this.bodyTop = Bodies.rectangle(width/2, 0, this.wTop, this.hTop, this.options);
        this.bodyBottom = Bodies.rectangle(width/2, height, this.bottomW, this.hBottom, this.options);
        this.bodyLeft = Bodies.rectangle(0, height/2, this.sideW, this.sideH, this.options);
        this.bodyRight = Bodies.rectangle(width, height/2, this.sideW, this.sideH, this.options);
        this.btPos = this.bodyTop.position;
        this.bbPos = this.bodyBottom.position;
        this.blPos = this.bodyLeft.position;
        this.brPos = this.bodyRight.position;
        Composite.add(engine.world, [this.bodyTop, this.bodyBottom, this.bodyLeft, this.bodyRight]);
        
    }

    show() {
        push();
        fill(127);
        noStroke();
        rectMode(CENTER);
        rect(this.btPos.x, this.btPos.y, this.wTop, this.hTop);
        rect(this.bbPos.x, this.bbPos.y, this.bottomW, this.hTop);
        rect(this.blPos.x, this.blPos.y, this.sideW, this.sideH);
        rect(this.brPos.x, this.brPos.y, this.sideW, this.sideH);
        pop();
    }
}