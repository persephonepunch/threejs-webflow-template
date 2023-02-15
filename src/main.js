import './styles/style.css'



// Three
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl')

//Scene
const scene = new THREE.Scene();


//Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z=5
scene.add(camera)

//Geometry




//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene, camera)


document.body.appendChild( renderer.domElement );
