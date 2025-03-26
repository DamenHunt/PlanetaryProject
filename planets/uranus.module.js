import * as THREE from 'three';

const uranusTexture = new THREE.TextureLoader().load('textures/uranus-texture.jpg');

function uranusMesh() {

    const uranusGeo = new THREE.SphereGeometry(20, 100, 100);
    const uranusMaterial = new THREE.MeshStandardMaterial({ 
        map: uranusTexture,
    });
    const uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
    const uranusObj = new THREE.Object3D();
    uranusObj.add(uranus);
    uranus.position.set(2210, 0, 0);
    uranusGeo.rotateZ(Math.PI/2)

    uranus.name = 'Uranus';

    return { uranusGeo, uranusMaterial, uranus, uranusObj }

}

export default uranusMesh;