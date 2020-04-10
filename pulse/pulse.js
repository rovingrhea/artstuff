function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(10)
  const cx = width / 2
  const cy = height / 2
  const size = min(width, height) * 0.5

  const duration = 5
  const time = millis() / 1800

  const playhead = time / duration % 1
  const anim = sin(playhead * PI * 2) * 0.5 + 0.5
  const thickness = size * 0.5 * anim

  noFill()
  stroke(255)
  strokeWeight(thickness)
  ellipse(cx, cy, size, size)
}
