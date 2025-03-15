import * as THREE from 'three';

const jupiterTexture = new THREE.TextureLoader().load('textures/jupiter-texture.jpg');

function jupiterMesh() {

    const jupiterGeo = new THREE.SphereGeometry(60, 100, 100);
    const jupiterMaterial = new THREE.MeshStandardMaterial({ 
        map: jupiterTexture,
    });
    const jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
    const jupiterObj = new THREE.Object3D();
    jupiterObj.add(jupiter);
    jupiter.position.set(1450, 0, 0); 

    return { jupiterGeo, jupiterMaterial, jupiter, jupiterObj }

}

export default jupiterMesh;