import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// textures 
const mercuryTexture = new THREE.TextureLoader().load('textures/mercury-texture.jpg');
const venusTexture = new THREE.TextureLoader().load('textures/venus-texture.jpg');
const earthTexture = new THREE.TextureLoader().load('textures/earth-texture.jpg');
const moonTexture = new THREE.TextureLoader().load('textures/moon-texture.jpg');
const marsTexture = new THREE.TextureLoader().load('textures/mars-texture.jpg');
const jupiterTexture = new THREE.TextureLoader().load('textures/jupiter-texture.jpg');
const saturnTexture = new THREE.TextureLoader().load('textures/saturn-texture.jpg');
const uranusTexture = new THREE.TextureLoader().load('textures/uranus-texture.jpg');
const neptuneTexture = new THREE.TextureLoader().load('textures/neptune-texture.jpg');

// planet geometries
const sunGeo = new THREE.SphereGeometry(300, 100, 100);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
const sun = new THREE.Mesh(sunGeo, sunMaterial);
const sunObj = new THREE.Object3D();
sunObj.add(sun);
sun.position.set(0, 0, 0);

const mercuryGeo = new THREE.SphereGeometry(8, 100, 100);
const mercuryMaterial = new THREE.MeshStandardMaterial({ 
    map: mercuryTexture,
});
const mercury = new THREE.Mesh(mercuryGeo, mercuryMaterial);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
mercury.position.set(530, 0, 0);

const venusGeo = new THREE.SphereGeometry(20, 100, 100);
const venusMaterial = new THREE.MeshStandardMaterial({ 
    map: venusTexture,
});
const venus = new THREE.Mesh(venusGeo, venusMaterial);
const venusObj = new THREE.Object3D();
venusObj.add(venus);
venus.position.set(760, 0, 0);

const earthGeo = new THREE.SphereGeometry(25, 100, 100);
const earthMaterial = new THREE.MeshStandardMaterial({ 
    map: earthTexture,
});
const earth = new THREE.Mesh(earthGeo, earthMaterial);
const earthObj = new THREE.Object3D();
earthObj.add(earth);
earth.position.set(990, 0, 0);

const moonGeo = new THREE.SphereGeometry(6, 100, 100);
const moonMaterial = new THREE.MeshStandardMaterial({ 
    map: moonTexture,
});
const moon = new THREE.Mesh(moonGeo, moonMaterial);
const moonObj = new THREE.Object3D();
earth.add(moonObj.add(moon));
moon.position.set(65, 0, 0);
moon.rotateY(3)

const marsGeo = new THREE.SphereGeometry(10, 100, 100);
const marsMaterial = new THREE.MeshStandardMaterial({ 
    map: marsTexture,
});
const mars = new THREE.Mesh(marsGeo, marsMaterial);
const marsObj = new THREE.Object3D();
marsObj.add(mars);
mars.position.set(1220, 0, 0); 

const jupiterGeo = new THREE.SphereGeometry(60, 100, 100);
const jupiterMaterial = new THREE.MeshStandardMaterial({ 
    map: jupiterTexture,
});
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
jupiter.position.set(1450, 0, 0); 

const saturnGeo = new THREE.SphereGeometry(45, 100, 100);
const saturnMaterial = new THREE.MeshStandardMaterial({ 
    map: saturnTexture,
});
const saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
saturn.position.set(1680, 0, 0);

const saturnRingGeo = new THREE.TorusGeometry(75, 20, 2, 400);
const saturnRingMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xE6D8AD
});
const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMaterial);
const saturnRingObj = new THREE.Object3D();
saturn.add(saturnRingObj.add(saturnRing));
saturnRingGeo.rotateX(1.3)
saturnRingGeo.rotateY(0.9)

const uranusGeo = new THREE.SphereGeometry(20, 100, 100);
const uranusMaterial = new THREE.MeshStandardMaterial({ 
    map: uranusTexture,
});
const uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
uranus.position.set(1910, 0, 0); 

const neptuneGeo = new THREE.SphereGeometry(20, 100, 100);
const neptuneMaterial = new THREE.MeshStandardMaterial({ 
    map: neptuneTexture,
});
const neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
neptune.position.set(2140, 0, 0); 

const pointLight = new THREE.PointLight(0xFFD700, 1000000, 2000);
const ambientLight = new THREE.AmbientLight(0x273746, 0.4)

function addStar() {
    const starGeo = new THREE.SphereGeometry(3, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xfdfefe });
    const star = new THREE.Mesh(starGeo, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10000))
    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar);

camera.position.set(0, 1000, 2200);

const control = new OrbitControls(camera, renderer.domElement);
control.autoRotate= true;
control.autoRotateSpeed = 1

var target = new THREE.Vector3();
const cameraPivot = new THREE.Object3D();
cameraPivot.add(camera);
cameraPivot.position.set(0, 0, 0)

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
planetArray[count].add(cameraPivot); // Initially attach cameraPivot to the first planet (sun)

function switchView() {

    planetArray[count].remove(cameraPivot); // Remove cameraPivot from the current planet
    count++;
    console.log(count);
    if ( count === planetArray.length ) {
        count = 0;
    }
    if ( planetArray[count] === sun ) {
        camera.position.set(0, 1000, 2200);
    } else if( planetArray[count] === mercury || planetArray[count] === mars || planetArray[count] === uranus ) {
        camera.position.set(0, 50, 70);
    } else if( planetArray[count] === saturn || planetArray[count] === jupiter ) {
        camera.position.set(0, 50, 250);
    } else {
        camera.position.set(0, 50, 120);
    }

    planetArray[count].add(cameraPivot); // Attach cameraPivot to the new planet
}

setInterval(switchView, 20000);

// sun.add(cameraPivot)

// add planets to scene
scene.add(sun);
scene.add(mercuryObj);
scene.add(venusObj);
scene.add(earthObj);
scene.add(marsObj);
scene.add(jupiterObj);
scene.add(saturnObj);
scene.add(uranusObj);
scene.add(neptuneObj);

// add lights to scene
scene.add(pointLight)
scene.add(ambientLight)

// render scene
function animate() {
    
    sunObj.rotateX(0.0001);
    mercuryObj.rotateY(0.0015);
    venusObj.rotateY(0.0012);
    earthObj.rotateY(0.001);
        moonObj.rotateY(0.005)
    marsObj.rotateY(0.0009);
    jupiterObj.rotateY(0.0007);
    saturnObj.rotateY(0.0005);
    uranusObj.rotateY(0.0003);
    neptuneObj.rotateY(0.0001);

    
    mercuryGeo.rotateY(.002)
    venusGeo.rotateY(-.0025)
    earthGeo.rotateY(.0035)
    marsGeo.rotateY(.003)
    jupiterGeo.rotateY(.007)
    saturnGeo.rotateY(.006)
    uranusGeo.rotateX(.006)
    neptuneGeo.rotateY(.009)


    control.update();
    cameraPivot.getWorldPosition(target);
    camera.lookAt(target)
    
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);