function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(250)
  const cx = width / 2
  const cy = height / 2
  const size = min(width, height) * 0.5

  const duration = 5
  const time = millis() / 2150

  const playhead = time / duration % 1
  const anim = sin(playhead * PI * 2) * 0.5 + 0.5
  const thickness = size * 1 * anim

  noStroke()
  let colour = map(thickness - 80, 0, cx, 0, 255)
  fill(16, colour, 151)
  ellipse(cx, cy, thickness + 100, thickness + 100)
}
