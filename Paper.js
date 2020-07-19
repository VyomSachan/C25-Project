class Paper{
    constructor(x, y){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("crumpled_paper_T1.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        image(this.image, 0, 0);

        pop();
    }
}