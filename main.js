import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const control = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 1000, 2000);
control.update();

// planet geometries
const sunGeo = new THREE.SphereGeometry(300);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
const sun = new THREE.Mesh(sunGeo, sunMaterial);

const mercuryGeo = new THREE.SphereGeometry(8);
const mercuryMaterial = new THREE.MeshStandardMaterial({ color: 0xB1AFAF  });
const mercury = new THREE.Mesh(mercuryGeo, mercuryMaterial);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
mercury.position.set(380, 0, 0);

const venusGeo = new THREE.SphereGeometry(20);
const venusMaterial = new THREE.MeshStandardMaterial({ color: 0xD4A373  });
const venus = new THREE.Mesh(venusGeo, venusMaterial);
const venusObj = new THREE.Object3D();
venusObj.add(venus);
venus.position.set(610, 0, 0);

const earthGeo = new THREE.SphereGeometry(25);
const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x2A7FFF  });
const earth = new THREE.Mesh(earthGeo, earthMaterial);
const earthObj = new THREE.Object3D();
earthObj.add(earth);
earth.position.set(840, 0, 0);

const moonGeo = new THREE.SphereGeometry(6);
const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xA9A9A9 });
const moon = new THREE.Mesh(moonGeo, moonMaterial);
const moonObj = new THREE.Object3D();
moonObj.add(moon);
earth.add(moonObj.add(moon));
moon.position.set(50, 0, 0);

const marsGeo = new THREE.SphereGeometry(10);
const marsMaterial = new THREE.MeshStandardMaterial({ color: 0xC1440E  });
const mars = new THREE.Mesh(marsGeo, marsMaterial);
const marsObj = new THREE.Object3D();
marsObj.add(mars);
mars.position.set(1070, 0, 0); 

const jupiterGeo = new THREE.SphereGeometry(60);
const jupiterMaterial = new THREE.MeshStandardMaterial({ color: 0xDAA06D  });
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
jupiter.position.set(1300, 0, 0); 

const saturnGeo = new THREE.SphereGeometry(45);
const saturnMaterial = new THREE.MeshStandardMaterial({ color: 0xE6C77F  });
const saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
saturn.position.set(1530, 0, 0); 

const uranusGeo = new THREE.SphereGeometry(20);
const uranusMaterial = new THREE.MeshStandardMaterial({ color: 0xA1E0E5  });
const uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
uranus.position.set(1760, 0, 0); 

const neptuneGeo = new THREE.SphereGeometry(20);
const neptuneMaterial = new THREE.MeshStandardMaterial({ color: 0x2C75FF  });
const neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
neptune.position.set(1990, 0, 0); 

const pointLight = new THREE.PointLight(0xFFD700, 1000000, 2000);
const ambientLight = new THREE.AmbientLight(0x273746, 0.5)

// const spaceTexture = new THREE.TextureLoader().load(''); // change the background img
// scene.background = spaceTexture; // apply background to the scene

function addStar() {
    const starGeo = new THREE.SphereGeometry(2, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfdfefe });
    const star = new THREE.Mesh(starGeo, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10000))
    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

scene.add(pointLight)
scene.add(ambientLight)

// scene add
scene.add(sun);
scene.add(mercuryObj);
scene.add(venusObj);
scene.add(earthObj);
scene.add(marsObj);
scene.add(jupiterObj);
scene.add(saturnObj);
scene.add(uranusObj);
scene.add(neptuneObj);

// render scene
function animate() {

    mercuryObj.rotateY(0.0015);
    venusObj.rotateY(0.0012);
    earthObj.rotateY(0.001);
        moonObj.rotateY(0.01)
    marsObj.rotateY(0.0009);
    jupiterObj.rotateY(0.0007);
    saturnObj.rotateY(0.0005);
    uranusObj.rotateY(0.0003);
    neptuneObj.rotateY(0.0001);

    sun.rotateX(0.0001);

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);