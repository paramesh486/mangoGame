class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,   ////you mentioned class name in capitals but in index.html
            stiffness: 0.04,  ////you mentioned it in small there
            length: 10
        
        }


        this.pointB = pointB;

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
 
     fly(){
        this.chain.bodyA = null;
    }
}