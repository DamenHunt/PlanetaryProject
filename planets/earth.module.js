import * as THREE from 'three';

const earthTexture = new THREE.TextureLoader().load('textures/earth-texture.jpg');

function earthMesh() {

    const earthGeo = new THREE.SphereGeometry(25, 100, 100);
    const earthMaterial = new THREE.MeshStandardMaterial({ 
        map: earthTexture,
    });
    const earth = new THREE.Mesh(earthGeo, earthMaterial);
    const earthObj = new THREE.Object3D();
    earthObj.add(earth);
    earth.position.set(990, 0, 0);
    // earthGeo.rotateZ(-0.41)

    earth.name = 'Earth';
    earth.color = '#5AA7E8';
    
    return { earthGeo, earthMaterial, earth, earthObj }

}

export default earthMesh;