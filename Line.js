class Line{
constructor(x,y,width,height){
    var position={
        isStatic:true
    }
this.lines=Bodies.rectangle(x,y,width,height,position)
World.add(World,this.lines)
this.w=width;
this.h=height;

}

display(){
var pos=this.line.position;
rectMode(CENTER)
rect(pos.x,pos.y,this.w,this.h);

}
}