import * as THREE from 'three';

const marsTexture = new THREE.TextureLoader().load('textures/mars-texture.jpg');

function marsMesh() {

    const marsGeo = new THREE.SphereGeometry(10, 100, 100);
    const marsMaterial = new THREE.MeshStandardMaterial({ 
        map: marsTexture,
    });
    const mars = new THREE.Mesh(marsGeo, marsMaterial);
    const marsObj = new THREE.Object3D();
    marsObj.add(mars);
    mars.position.set(1220, 0, 0); 

    return { marsGeo, marsMaterial, mars, marsObj }

}

export default marsMesh;