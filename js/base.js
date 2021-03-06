class base{
    constructor(x, y, w, h){
        var Option ={
            isStatic:true
        }
        this.w =w;
        this.h  = h;
        this.body = Bodies.rectangle(x, y, w, h, Option);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("green");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}