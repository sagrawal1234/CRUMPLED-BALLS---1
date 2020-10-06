class Paper{
    constructor(){
        var paper_options = {
            isStatic:true,
        }
        
        paper = Bodies.circle(200,100,20,paper_options);
        World.add(world,paper);
        
      console.log(ground);
            
        
    }
    display(){
        background(0);
        Engine.update(engine);
        ellipseMode(RADIUS);
        ellipse(ball.position.x,ball.position.y,20,20);
    } 
}  

    
   
    