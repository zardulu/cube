import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;

let mouseDown = false,
mouseX = 0,
mouseY = 0,
lastMouseX = 0,
lastMouseY = 0;

function onDocumentMouseDown(event) {
mouseDown = true;
lastMouseX = event.clientX;
lastMouseY = event.clientY;
}

function onDocumentMouseUp(event) {
mouseDown = false;
}

function onDocumentMouseMove(event) {
if (!mouseDown) return;
mouseX = event.clientX;
mouseY = event.clientY;




// Rotate the cube based on mouse drag
const deltaX = mouseX - lastMouseX;
const deltaY = mouseY - lastMouseY

if (mouseDown) {
    cube.rotation.x += deltaY * 0.01;
    cube.rotation.y += deltaX * 0.01;
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;
}
function animate() {
    requestAnimationFrame( animate );   

    cube.rotation.x += 0.007;
    cube.rotation.y += 0.007;


    renderer.render( scene, camera );
}

document.addEventListener("mousedown", onDocumentMouseDown, false);
document.addEventListener("mouseup", onDocumentMouseUp, false);
document.addEventListener("mousemove", onDocumentMouseMove, false);


animate();