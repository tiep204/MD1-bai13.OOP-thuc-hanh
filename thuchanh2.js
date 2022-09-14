class circle {
    radius;
    color;


    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius
    }
    getRadius(){
        return  this.radius
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
    getArea(){
        return this.radius*this.radius*Math.PI
    }
}