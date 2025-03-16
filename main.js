import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import sunMesh from './planets/sun.module.js';
import mercuryMesh from './planets/mercury.module.js';
import venusMesh from './planets/venus.module.js';
import earthMesh from './planets/earth.module.js';
import moonMesh from './planets/moon.module.js';
import marsMesh from './planets/mars.module.js';
import jupiterMesh from './planets/jupiter.module.js';
import saturnMesh from './planets/saturn.module.js';
import saturnRingMesh from './planets/saturn-ring.module.js';
import uranusMesh from './planets/uranus.module.js';
import neptuneMesh from './planets/neptune.module.js';
import { pingpong } from 'three/src/math/MathUtils.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const { sunGeo, sun, sunObj }  = sunMesh();
const { mercuryGeo, mercury, mercuryObj } = mercuryMesh();
const { venusGeo, venus, venusObj } = venusMesh();
const { earthGeo, earth, earthObj } = earthMesh();
const { moonGeo, moon, moonObj } = moonMesh();
    earth.add(moonObj.add(moon));
const { marsGeo, mars, marsObj } = marsMesh();
const { jupiterGeo, jupiter, jupiterObj } = jupiterMesh();
const { saturnGeo, saturn, saturnObj } = saturnMesh();
const { 
saturnRingGeo, 
saturnRing, 
saturnRingObj,
saturnRingGeo2, 
saturnRingMaterial2, 
saturnRing2, 
saturnRingObj2,
saturnRingGeo3, 
saturnRingMaterial3, 
saturnRing3, 
saturnRingObj3  
} = saturnRingMesh();
    saturn.add(saturnRingObj.add(saturnRing));
    saturn.add(saturnRingObj2.add(saturnRing2));
    saturn.add(saturnRingObj3.add(saturnRing3));
const { uranusGeo, uranus, uranusObj } = uranusMesh();
const { neptuneGeo, neptune, neptuneObj } = neptuneMesh();

const pointLight = new THREE.PointLight(0xFFD700, 1000000, 2000);
const ambientLight = new THREE.AmbientLight(0x273746, 0.4)

function addStar() {
    const starGeo = new THREE.SphereGeometry(3, 2, 2);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfdfefe });
    const star = new THREE.Mesh(starGeo, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10000))
    star.position.set(x, y, z);
    scene.add(star);
}

Array(150).fill().forEach(addStar);



const control = new OrbitControls(camera, renderer.domElement);
// control.autoRotate= true;
// control.autoRotateSpeed = 1.2

var target = new THREE.Vector3();
const cameraPivot = new THREE.Object3D();
cameraPivot.add(camera);
cameraPivot.position.set(0, 0, 0);

camera.position.set(0, 1000, 2200);

// const planetArray = [
//     sun, 
//     mercury, 
//     venus, 
//     earth, 
//     mars, 
//     jupiter, 
//     saturn, 
//     uranus, 
//     neptune
// ];

// var count = 0;
// planetArray[count].add(cameraPivot); // initially attach cameraPivot to the first planet (sun)
// function switchView() {
//     planetArray[count].remove(cameraPivot); // remove cameraPivot from the current planet
//         count++;
//         console.log(count);
//     if ( count === planetArray.length ) {
//         count = 0;
//     }
//     if ( planetArray[count] === sun ) {
//         camera.position.set(0, 1000, 2200);
//     } else if ( planetArray[count] === mercury || planetArray[count] === mars ) {
//         camera.position.set(0, 10, 35);
//     } else if ( planetArray[count] === saturn || planetArray[count] === jupiter ) {
//         camera.position.set(0, 50, 150);
//     } else if ( planetArray[count] === uranus || planetArray[count] === neptune ) {
//         camera.position.set(0, 10, 75);
//     } else if ( planetArray[count] === venus || planetArray[count] === earth ) {
        // camera.position.set(0, 40, 85);
//     }

//      planetArray[count].add(cameraPivot); // attach cameraPivot to the new planet
//  }
// setInterval(switchView, 10000);

sun.add(cameraPivot)

const addToScene = [
    sunObj, 
    mercuryObj, 
    venusObj, 
    earthObj, 
    marsObj, 
    jupiterObj, 
    saturnObj, 
    uranusObj, 
    neptuneObj
]

addToScene.map((planet) => {
    scene.add(planet);
});

// add lights to scene
scene.add(pointLight, ambientLight)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const loopTime = 1;
const earthOrbitSpeed = 0.0001;
const moonOrbitRadius = 100;
const moonOrbitSpeed = 30;


const curve = new THREE.EllipseCurve(
    0,0,
    1000, 1150,
    0, 2*Math.PI,
);


const points = curve.getSpacedPoints(200)
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.5 })
const orbit = new THREE.Line(geometry, material)
orbit.rotateX(-Math.PI/2)
scene.add(orbit)


const fakeEarthGeo = new THREE.SphereGeometry(50, 50, 50)
const fakeEarthMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
const fakeEarth = new THREE.Mesh(fakeEarthGeo, fakeEarthMaterial)

const fakeMoonGeo = new THREE.SphereGeometry(20, 20, 20)
const fakeMoonMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
const fakeMoon = new THREE.Mesh(fakeMoonGeo, fakeMoonMaterial)
const fakeMoonObj = new THREE.Object3D();
// fakeMoon.position.set(150, 0, 0);
fakeEarth.add(fakeMoonObj.add(fakeMoon));

scene.add(fakeEarth)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// render scene
function animate() {

    // planets orbiting speed around the sun
    // sunObj.rotateX(0.0001);
    mercuryObj.rotateY(0.0015);
    venusObj.rotateY(0.0012);
    earthObj.rotateY(0.001);
        moonObj.rotateY(0.005)
    marsObj.rotateY(0.0009);
    jupiterObj.rotateY(0.0007);
    saturnObj.rotateY(0.0005);
    uranusObj.rotateY(0.0003);
    neptuneObj.rotateY(0.0001);

    // planets rotation on their own axis
    mercuryGeo.rotateY(.002)
    venusGeo.rotateY(-.0025)
    earthGeo.rotateY(.0035)
    marsGeo.rotateY(.003)
    jupiterGeo.rotateY(.0065)
    saturnGeo.rotateY(.006)
    uranusGeo.rotateX(.006)
    neptuneGeo.rotateY(.009)

    control.update();
    cameraPivot.getWorldPosition(target);
    camera.lookAt(target)
    
    
///////////////////////////////////////////////////

    const time = earthOrbitSpeed * Date.now();
    const t = (time % loopTime) / loopTime

    let p = curve .getPoint(t)
    console.log(p, t)

    fakeEarth.position.x = p.x;
    fakeEarth.position.z = p.y;

    fakeMoon.position.x = -Math.cos(time * moonOrbitSpeed) * moonOrbitRadius;
    fakeMoon.position.z = -Math.sin(time * moonOrbitSpeed) * moonOrbitRadius;

///////////////////////////////////////////////////

renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);




