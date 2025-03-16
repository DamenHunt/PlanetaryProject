import * as THREE from 'three';

const saturnTexture = new THREE.TextureLoader().load('textures/saturn-texture.jpg');

function saturnMesh() {

    const saturnGeo = new THREE.SphereGeometry(45, 100, 100);
    const saturnMaterial = new THREE.MeshStandardMaterial({ 
        map: saturnTexture,
    });
    const saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
    const saturnObj = new THREE.Object3D();
    saturnObj.add(saturn);
    saturn.position.set(1980, 0, 0);

    return { saturnGeo, saturnMaterial, saturn, saturnObj }

}

export default saturnMesh;