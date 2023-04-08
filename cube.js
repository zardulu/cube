import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.LineBasicMaterial( {
	color: 0xffffff,
	
} );
const cube = new THREE.LineSegments( new THREE.EdgesGeometry(geometry),
 material );

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

function onDocumentMouseScroll(event) {
    event.preventDefault();
    const zoomSpeed = 0.01;
    camera.position.z += event.deltaY * zoomSpeed;
  }


function animate() {
    requestAnimationFrame( animate );   


    if (!mouseDown) {
    cube.rotation.y += 0.010; }


    renderer.render( scene, camera );
}

document.addEventListener("mousedown", onDocumentMouseDown, false);
document.addEventListener("mouseup", onDocumentMouseUp, false);
document.addEventListener("mousemove", onDocumentMouseMove, false);
document.addEventListener("wheel", onDocumentMouseScroll, false);



animate();