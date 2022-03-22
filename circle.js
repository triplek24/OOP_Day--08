class Circle {
    constructor(...args) //radius=1.0, color="Red")
        {
            if (args.length == 0) {

            } else if (args.length == 1) {
                this.radius = args[0];
            } else if (args.length == 2) {
                this.radius = args[0];
                this.color = args[1];
            }
        }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(num) {
        this.radius = num;
    }

    setColor(col) {
        this.color = col;
    }

    getArea() {
        return Math.pow(this.radius, 2).toFixed(2);
    }

}


var circle = new Circle(5.4);


console.log(circle.getArea());
console.log(circle.getColor());  //output:29.16
