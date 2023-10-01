import * as THREE from 'three';
import MainScene from './scenes/MainScene';
import { startAnimation } from './helpers/AnimationHelpers';

// Initialize MainScene, renderer, and camera here

const scene = new MainScene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
