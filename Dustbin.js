class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
       this.body =  Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
        
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  pop();
    }
};