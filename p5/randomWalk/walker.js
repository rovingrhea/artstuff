class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.color = '#000'
  }

  move() {
    this.pos.x += random(-1, 1)
    this.pos.y += random(-1, 1)
  }

  colour(c) {
    this.color = c
  }

  show() {
    stroke(this.color)
    strokeWeight(2)
    point(this.pos.x, this.pos.y)
  }
}
