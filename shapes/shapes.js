function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0)

  const x = width / 2
  const y = height / 2
  const diameter = min(width, height)
  const size = diameter * 0.3
  strokeWeight(diameter * 0.006)
  strokeJoin(ROUND)

  noFill()
  stroke(255)
  rectMode(CENTER)
  rect(x, y, size, size)
  circle(x, y, size)
  triangle(
    x,
    y - size / 2,
    x + size / 2,
    y + size / 2,
    x - size / 2,
    y + size / 2
  )
}
