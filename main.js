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
    control.dampingFactor = 0.07;


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
    slideShowModeContainer.style.display = 'inline';

    showGridBtn.style.display = 'none';
    gridCloseBtn.style.display = 'none';
    outlineArray.forEach((outline) => {
        scene.remove(outline);  
    });

    planetButtonList.style.display = 'none';

    infoContainer.style.display = 'none';
    infoToggleContainerBtn.style.display = 'none';

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
            camera.position.set(0, 1000, 2400);
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
    StopSlideShow();
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
const ambientLight = new THREE.AmbientLight(0x273746, 0.5);

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
        };

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.15
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


const infoContainer = document.getElementById('info-container'); // change the CSS property to 'none' when finished editing
const infoHeader = document.getElementById("info-header");
const infoBody = document.getElementById("info-container-body");
const infoCloseBtn = document.getElementById("close-info-container-btn");
const infoToggleContainerBtn = document.getElementById("info-toggle-btn-container");
let closedBtnWasPressed;

infoCloseBtn.addEventListener('click', () => {
    infoContainer.style.display = 'none';
    infoToggleContainerBtn.style.display = 'flex';
    closedBtnWasPressed = true;
})

infoToggleContainerBtn.addEventListener('click', () => {
    infoContainer.style.display = 'flex';
    infoToggleContainerBtn.style.display = 'none';
})

const planetButtonList = document.getElementById('planet-button-list')
const planetButtons = document.querySelectorAll(".planet-btn");
const arrayButtonsPlanets = Array.from(planetButtons);

for (let i = 0; i < arrayButtonsPlanets.length; i++) {
    arrayButtonsPlanets[i].addEventListener('click', () => {
        StopSlideShow(); // add a remove color to the function
        infoHeader.innerText = planetArray[i].name
        infoHeader.style.color = planetArray[i].color
        infoBody.style.scrollbarColor = `${planetArray[i].color} rgba(0, 0, 0, 0)`;
        if (!closedBtnWasPressed){
            infoContainer.style.display = 'flex';
        };
        planetArray[i].add(cameraPivot);
        if ( planetArray[i] === sun ) {
            camera.position.set(0, 1000, 2400);
        } else if ( planetArray[i] === mercury || planetArray[i] === mars ) {
            camera.position.set(0, 10, 35);
        } else if ( planetArray[i] === saturn || planetArray[i] === jupiter ) {
            camera.position.set(0, 50, 150);
        } else if ( planetArray[i] === uranus || planetArray[i] === neptune ) {
            camera.position.set(0, 10, 75);
        } else if ( planetArray[i] === venus || planetArray[i] === earth ) {
            camera.position.set(0, 40, 85);
        };
    });
};

function StopSlideShow() {
    slideShowBtn.style.display = 'flex';
    slideShowCloseBtn.style.display = 'none';
    slideShowModeContainer.style.display = 'none';
    showGridBtn.style.display = 'flex';
    planetButtonList.style.display = 'flex';
    // if (!closedBtnWasPressed){
    //     infoToggleContainerBtn.style.display = 'flex';
    // };
    clearInterval(slideShow);
}





/* TODO:

    - !!! there is an issue with the Slide-Show, Grid & Info buttons, list of issues:
        -- when StopSlideShow() is called it enables the infoToggleContainerBtn,
        this is an issue because the infoContainer must be opened then closed to activate this button..
        -- The show grid button duplicates when it is enabled and you select a planet from the planet list buttons


    - make a button for the moon to display information about it like the rest of the other planets
    - make a button for full screen mode that is compatable for all browsers (--webkits) 
    - figure out how to remove scrollbar arrows also

*/





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



window.addEventListener('resize', () => {
    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

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