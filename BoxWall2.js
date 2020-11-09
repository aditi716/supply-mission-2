class BoxWall2{
    constructor(x, y){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,200,20, options);
        World.add(world, this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        fill("red");
        rect (posX, posY, 200,20);
    }
}