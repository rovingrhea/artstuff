var x
var y
var walkerColor

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = width / 2
  y = height / 2
  walkerColor = ('#4D9E9A')
  background(255)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  strokeWeight(1)

  var walk = floor(random(4))

  point(x, y)
  stroke(walkerColor)

  switch (walk) {
    case 0:
      x += 1
      break
    case 1:
      y += 1
      break
    case 2:
      x -= 1
      break
    case 3:
      y -= 1
      break
  }

  if (x > width) {
    x = 0
  } else if (x < 0) {
    x = width
  } else if (y > height) {
    y = 0
  } else if (y < 0) {
    y = height
  }
}
