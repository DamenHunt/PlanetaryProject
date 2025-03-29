import * as THREE from 'three';

const neptuneTexture = new THREE.TextureLoader().load('textures/neptune-texture.jpg');

function neptuneMesh() {

    const neptuneGeo = new THREE.SphereGeometry(20, 100, 100);
    const neptuneMaterial = new THREE.MeshStandardMaterial({ 
        map: neptuneTexture,
    });
    const neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
    const neptuneObj = new THREE.Object3D();
    neptuneObj.add(neptune);
    neptune.position.set(2440, 0, 0); 

    neptune.name = 'Neptune';
    neptune.color = '#2E5FA3';

    return { neptuneGeo, neptuneMaterial, neptune, neptuneObj }

}

export default neptuneMesh;