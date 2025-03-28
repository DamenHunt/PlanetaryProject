import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { TTFLoader } from 'three/examples/jsm/Addons.js';

import sunMesh from './planets/sun.module.js';
import mercuryMesh from './planets/mercury.module.js';
import venusMesh from './planets/venus.module.js';
import earthMesh from './planets/earth.module.js';
import moonMesh from './planets/moon.module.js';
import marsMesh from './planets/mars.module.js';
import jupiterMesh from './planets/jupiter.module.js';
import saturnMesh from './planets/saturn.module.js';
import saturnRingMesh from './planets/saturnRing.module.js';
import uranusMesh from './planets/uranus.module.js';
import neptuneMesh from './planets/neptune.module.js';
import uranusRingMesh from './planets/uranusRing.module.js';
import { color } from 'three/tsl';

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
const { uranusRingGeo, uranusRing, uranusRingObj } = uranusRingMesh();
    uranus.add(uranusRingObj.add(uranusRing));
const { neptuneGeo, neptune, neptuneObj } = neptuneMesh();


function addStar() {
    const starGeo = new THREE.SphereGeometry(3, 2, 2);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfdfefe });
    const star = new THREE.Mesh(starGeo, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10000));
    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

const control = new OrbitControls(camera, renderer.domElement);
    control.autoRotate= true;
    control.autoRotateSpeed = 1.2;
    control.enableDamping = true;


var target = new THREE.Vector3(); // to store the coordinates of an object to allow camera to track pivot around

const cameraPivot = new THREE.Object3D();
cameraPivot.add(camera);
cameraPivot.position.set(0, 0, 0);

camera.position.set(0, 1000, 2400);

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


// create slide show for viewing different planets
const slideShowContainer = document.getElementById('slide-show-container');
const slideShowBtn = document.getElementById('slide-show-btn');
const slideShowCloseBtn = document.getElementById('slide-show-close-btn');
const slideShowModeContainer = document.getElementById('slide-show-mode-container');

let slideShow;

slideShowBtn.addEventListener('click', () => {

    camera.position.set(0, -600, 800);

    slideShowBtn.style.display = 'none';
    slideShowCloseBtn.style.display = 'flex';
    slideShowModeContainer.style.display = 'inline'

    setTimeout(()=> {
        slideShowModeContainer.style.display = 'none'
    }, 7000)


    var count = 0;
    planetArray[count].add(cameraPivot); // initially attach cameraPivot to the first planet
    function switchView() {
        planetArray[count].remove(cameraPivot); // remove cameraPivot from the current planet
            count++;
            // console.log(count);
        if ( count === planetArray.length ) {
            count = 0;
        }
        if ( planetArray[count] === sun ) {
            camera.position.set(0, 1000, 2200);
        } else if ( planetArray[count] === mercury || planetArray[count] === mars ) {
            camera.position.set(0, 10, 35);
        } else if ( planetArray[count] === saturn || planetArray[count] === jupiter ) {
            camera.position.set(0, 50, 150);
        } else if ( planetArray[count] === uranus || planetArray[count] === neptune ) {
            camera.position.set(0, 10, 75);
        } else if ( planetArray[count] === venus || planetArray[count] === earth ) {
            camera.position.set(0, 40, 85);
        }

        planetArray[count].add(cameraPivot); // attach cameraPivot to the new planet
    }
    slideShow = setInterval(switchView, 10000);

});

slideShowCloseBtn.addEventListener('click', () => {
    slideShowBtn.style.display = 'flex';
    slideShowCloseBtn.style.display = 'none';
    clearInterval(slideShow);
    slideShowModeContainer.style.display = 'none'
    camera.position.set(0, 1000, 2200);
    sun.add(cameraPivot);
});

// saturn.add(cameraPivot);

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
];

addToScene.map((planet) => {
    scene.add(planet);
});

// add lights to scene
// const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
const pointLight = new THREE.PointLight(0xFFD700, 1000000, 2200);
const ambientLight = new THREE.AmbientLight(0x273746, 0.4);

scene.add(pointLight, ambientLight);


// draw orbit outline for each planet
const showGridContainer = document.getElementById('slide-show-btn');
const showGridBtn = document.getElementById('show-grid-btn');
const gridCloseBtn = document.getElementById('grid-close-btn');

let outlineArray = [];

showGridBtn.addEventListener('click', () => {

    showGridBtn.style.display = 'none';
    gridCloseBtn.style.display = 'flex';

    planetArray.map((planet) => {

        let radius = planet.position.x
        const segments = 1000;
        const points = [];

        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        });
        const circleOutline = new THREE.LineLoop(geometry, material);

        circleOutline.rotateX(-Math.PI/2);
        scene.add(circleOutline);

        outlineArray.push(circleOutline);
    });

});

gridCloseBtn.addEventListener('click', () => {
    gridCloseBtn.style.display = 'none';
    showGridBtn.style.display = 'flex';
    outlineArray.forEach((outline) => {
        scene.remove(outline);  
    });
});



// function PickAPlanet() {
//     const planetButtons = document.querySelectorAll(".planet-btn");
//     const arrayButtonsPlanets = Array.from(planetButtons);

//     arrayButtonsPlanets.map(() => {

//     })

// }

// PickAPlanet();



// REVIEW HOW THIS FUNCTION WORKS!

    /* 1. Why do you have to use a "FONT" instance instead of "FontLoader", 
    and why is it parsing a json file? */
    /* 2. Remember how to use 'Text Geometry" and how it is similar to the other geometries
    that have been used. */
    /* 3. Remember that adding Object3D can be used to reference the text's position around other objects,
    similar to how the Moon is to the Earth, the rings are for Saturn and Uranus as well as 
    camera pivoting. */
    /* 4. Determine the best strategy for positioning the text centered over the sun and rest of the
    planets. */

// planetArray.forEach((planet) => {

//     if( planet !== sun ){

//         const loader = new TTFLoader();
//         loader.load('./fonts/space-age.ttf', (json) => {
//             const spaceAgeFont = new Font(json);
//             const textGeo = new TextGeometry(`${planet.name}`, {
//                 height: 20,
//                 depth: 3,
//                 size: 7,
//                 font: spaceAgeFont,
//             });
//             const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//             const text = new THREE.Mesh(textGeo, textMaterial);
//             const textObj = new THREE.Object3D()
//             text.position.x = 50;
//             // text.position.y = 0;
//             // text.position.z = 0;

//             // if( planet === jupiter && planet === saturn ) { 
//             //     text.position.x = 100;
//             // }
        
//             planet.add(textObj.add(text))      
//         });
//     }

// })

/* Tomorrow's Project:
    - FIGURE OUT HOW TO ADD TEXT ABOVE EACH PLANET AND SET OF THEIR NAME AND COLOR TO THE TEXT
        - maybe create an object for each planet file, storing their name, color value, descripiton, etc.
        - then use that object data in an array with the text geometry to apply it to each planet accordingly.
*/



// render scene
function animate() {

    // planets orbiting speed around the sun
    // sun.rotateX(0.0001);
    mercuryObj.rotateY(0.0015);
    venusObj.rotateY(0.0012);
    earthObj.rotateY(0.001);
        moonObj.rotateY(0.005);
    marsObj.rotateY(0.0009);
    jupiterObj.rotateY(0.0007);
    saturnObj.rotateY(0.0005);
    uranusObj.rotateY(0.0003);
    neptuneObj.rotateY(0.0001);

    // planets rotation on their own axis
    mercuryGeo.rotateY(.002);
    venusGeo.rotateY(-.0025);
    earthGeo.rotateY(.0035);
    marsGeo.rotateY(.003);
    jupiterGeo.rotateY(.0065);
    saturnGeo.rotateY(.006);
    uranusGeo.rotateX(.006);
    neptuneGeo.rotateY(.009);

    control.update();
    cameraPivot.getWorldPosition(target);
    camera.lookAt(target);

renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);