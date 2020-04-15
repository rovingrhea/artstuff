var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canva'),
  antialias: true
})

renderer.setClearColor('#F3DDDB')
renderer.setSize(window.innerWidth, window.innerHeight)

var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000)

var scene = new THREE.Scene()

var ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

var pointLight = new THREE.PointLight('#ffffff', 0.5)
scene.add(pointLight)

var geometry = new THREE.CubeGeometry(100, 100, 100)
var material = new THREE.MeshLambertMaterial({color: '#ffffff'})
var mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, -1000)

scene.add(mesh)
requestAnimationFrame(render)

function render() {
  mesh.rotation.x += .01
  mesh.rotation.y += .01
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

