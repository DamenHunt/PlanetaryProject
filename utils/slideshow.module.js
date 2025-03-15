import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import sunMesh from '../planets/sun.module.js';
import mercuryMesh from '../planets/mercury.module.js';
import venusMesh from '../planets/venus.module.js';
import earthMesh from '../planets/earth.module.js';
import moonMesh from '../planets/moon.module.js';
import marsMesh from '../planets/mars.module.js';
import jupiterMesh from '../planets/jupiter.module.js';
import saturnMesh from '../planets/saturn.module.js';
import saturnRingMesh from '../planets/saturn-ring.module.js';
import uranusMesh from '../planets/uranus.module.js';
import neptuneMesh from '../planets/neptune.module.js';

const { sun, sunObj }  = sunMesh();
const { mercuryGeo, mercury, mercuryObj } = mercuryMesh();
const { venusGeo, venus, venusObj } = venusMesh();
const { earthGeo, earth, earthObj } = earthMesh();
const { moonGeo, moon, moonObj } = moonMesh();
    earth.add(moonObj.add(moon));
const { marsGeo, mars, marsObj } = marsMesh();
const { jupiterGeo, jupiter, jupiterObj } = jupiterMesh();
const { saturnGeo, saturn, saturnObj } = saturnMesh();
const { saturnRingGeo, saturnRing, saturnRingObj } = saturnRingMesh();
    saturn.add(saturnRingObj.add(saturnRing));
const { uranusGeo, uranus, uranusObj } = uranusMesh();
const { neptuneGeo, neptune, neptuneObj } = neptuneMesh();


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);

// camera.position.set(0, 1000, 2200);

const cameraPivot = new THREE.Object3D();
cameraPivot.add(camera);
cameraPivot.position.set(0, 0, 0);

const planetArray = [
    sun, 
    mercury, 
    venus, 
    earth, 
    mars, 
    jupiter, 
    saturn, 
    uranus, 
    neptune
];

var count = 0;
planetArray[count].add(cameraPivot); // initially attach cameraPivot to the first planet (sun)

export function switchView() {
    planetArray[count].remove(cameraPivot); // remove cameraPivot from the current planet
        count++;
        console.log(count);
    if ( count === planetArray.length ) {
        return count = 0;
    }
    if ( planetArray[count] === sun ) {
        return camera.position.set(0, 1000, 2200);
    } else if( planetArray[count] === mercury || planetArray[count] === mars ) {
        return camera.position.set(0, 10, 35);
    } else if( planetArray[count] === saturn || planetArray[count] === jupiter ) {
        return camera.position.set(0, 50, 150);
    } else if( planetArray[count] === uranus || planetArray[count] === neptune ) {
        return camera.position.set(0, 30, 75);
    } else if( planetArray[count] === venus || planetArray[count] === earth ) {
        return camera.position.set(0, 40, 85);
    }

     return planetArray[count].add(cameraPivot); // attach cameraPivot to the new planet
}



// export function controlCamera() {
//     control.update();
//     cameraPivot.getWorldPosition(target);
//     camera.lookAt(target);
// }