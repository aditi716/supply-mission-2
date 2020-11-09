class BoxWall1{
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y, 20,100, options);
        World.add(world, this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        fill("red");
        rect(posX, posY, 20, 100);
        
    }
}