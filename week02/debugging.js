function circleArea(radius) {
    const PI = 3.14;
    return radius * radius * PI
}

let radius = 3;
let area = 0;
area = circleArea(radius);
radius = 4;
console.log(area);
area = circleArea(radius);
console.log(area);