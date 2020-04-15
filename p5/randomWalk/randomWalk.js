let walker

function setup() {
  createCanvas(windowWidth, windowHeight)
  walker = new Walker(width/2, height/2)
  background(255)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  walker.move()
  walker.colour('#4D9E9A')
  walker.show()
}
