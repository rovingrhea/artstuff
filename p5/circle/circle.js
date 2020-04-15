function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background('black')

  const x = width / 2
  const y = height / 2
  const diameter = min(width, height) * 0.25

  point(x, y)
  fill('white')
  noStroke()

  circle(x, y, diameter)
}