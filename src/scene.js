import * as THREE from 'three';
import sceneData from '../public/assets/scene.json'

let whiteDie,blackDie,timer;

let loader = new THREE.ObjectLoader();
let scene = loader.parse(sceneData)
whiteDie = scene.getObjectByName("White")
blackDie = scene.getObjectByName("Black")
scene.background = new THREE.Color(0xFF5566)
console.log(scene)
console.log(whiteDie)
console.log(blackDie)

//Rotations

/*
      X           Y       Z
 1 = -PI/2        0       0
 2 =  0           0       0
 3 =  0         -PI/2     0
 4 =  0          PI/2     0
 5 =  PI          0       0 / 0 PI 0
 6 =  PI/2
*/

whiteDie.position.x += 0.5
blackDie.position.x += -0.5
whiteDie.rotation.x =  Math.PI /2

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer;
camera.position.z = 5;





const animate = () => {
  timer = true
  setTimeout(function () {
    timer = false;
  }, 6000);

  spinDice()

};

const spinDice = () =>{
  if(timer){
    requestAnimationFrame(spinDice)
    whiteDie.rotation.x += 0.03
    whiteDie.rotation.z += 0.03
    whiteDie.rotation.y += 0.03

    blackDie.rotation.x -= 0.03
    blackDie.rotation.z -= 0.03
    blackDie.rotation.y -= 0.03

    renderer.render(scene,camera)
  }
}

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (ref) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: ref });
  resize();
  renderer.render(scene, camera);
}

window.addEventListener('resize', resize);
window.addEventListener('click',animate);
