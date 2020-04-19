function setup() {
  createCanvas(400, 400);
  background(10);
}

function draw() {
  translate(width / 2, height / 2)
  let v = p5.Vector.random2D()
  v.mult(random(100, 150))
  stroke(255, 255, 255, 50)
  line(0, 0, v.x, v.y)
}
