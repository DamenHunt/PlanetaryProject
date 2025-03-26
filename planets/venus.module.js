import * as THREE from 'three';

const venusTexture = new THREE.TextureLoader().load('textures/venus-texture.jpg');

function venusMesh() {

    const venusGeo = new THREE.SphereGeometry(20, 100, 100);
    const venusMaterial = new THREE.MeshStandardMaterial({ 
        map: venusTexture,
    });
    const venus = new THREE.Mesh(venusGeo, venusMaterial);
    const venusObj = new THREE.Object3D();
    venusObj.add(venus);
    venus.position.set(760, 0, 0);

    venus.name = 'Venus';

return { venusGeo, venusMaterial, venus, venusObj }

}

export default venusMesh;