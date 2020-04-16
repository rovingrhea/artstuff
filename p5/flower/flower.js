var flower = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)

  for(i = 0; i < 20; i++) {
    flower[i] = {
      x: window.innerWidth/2,
      y: window.innerHeight/2,
      show: function () {
        noFill()
        stroke(255)
        strokeWeight(1)
        ellipse(this.x, this.y, 200, 200)
      },
      move: function () {
        this.x += random(-1, 1)
        this.y += random(-1, 1)
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(20)
  for (i = 0; i < flower.length; i++) {
    flower[i].move()
    flower[i].show()
  }

}