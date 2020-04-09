function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  blendMode(BLEND)
  background(255)

  const x = width / 2
  const y = height / 2
  const diameter = min(width, height)
  const size = diameter * 0.4
  strokeWeight(diameter * 0.006)
  strokeJoin(ROUND)

  blendMode(DIFFERENCE)

  noStroke()
  stroke(0)
  rectMode(CENTER)
  rect(x + 55, y + 45, size, size)
  circle(x - 40, y + 90, size)
  triangle(
    x,
    y - size / 2,
    x + size / 2,
    y + size / 2,
    x - size / 2,
    y + size / 2
  )
}
