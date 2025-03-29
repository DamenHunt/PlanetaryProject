import * as THREE from 'three';

const mercuryTexture = new THREE.TextureLoader().load('textures/mercury-texture.jpg');

function mercuryMesh() {

    const planetName = 'Mercury';

    const mercuryGeo = new THREE.SphereGeometry(8, 100, 100);
    const mercuryMaterial = new THREE.MeshStandardMaterial({ 
        map: mercuryTexture,
    });
    const mercury = new THREE.Mesh(mercuryGeo, mercuryMaterial);
    const mercuryObj = new THREE.Object3D();
    mercuryObj.add(mercury);
    mercury.position.set(530, 0, 0);

    mercury.name = 'Mercury';
    mercury.color = '#8B7355';

    return { mercuryGeo, mercuryMaterial, mercury, mercuryObj, planetName }

}

export default mercuryMesh;