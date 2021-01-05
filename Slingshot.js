class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
               strokeWeight(2)
               fill('white')
             line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(){
        this.sling.bodyA=launcher.body;
    }

    
}
