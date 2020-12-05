class Paper{
    constructor(x,y,width,height){
        var option={
           isStatic:false,
           restitution:0.3, 
           density:1.2,
           friction:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
}
}