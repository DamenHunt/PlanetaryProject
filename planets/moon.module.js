import * as THREE from 'three';

const moonTexture = new THREE.TextureLoader().load('./textures/moon-texture.jpg');

function moonMesh() {

    const moonGeo = new THREE.SphereGeometry(6, 100, 100);
    const moonMaterial = new THREE.MeshStandardMaterial({ 
        map: moonTexture,
    });
    const moon = new THREE.Mesh(moonGeo, moonMaterial);
    const moonObj = new THREE.Object3D();
    moon.position.set(65, 0, 0);
    moon.rotateY(3)

    return { moonGeo, moonMaterial, moon, moonObj }

}

export default moonMesh;