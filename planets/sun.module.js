import * as THREE from 'three';

function sunMesh() {

    const sunGeo = new THREE.SphereGeometry(300, 100, 100);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    const sun = new THREE.Mesh(sunGeo, sunMaterial);
    const sunObj = new THREE.Object3D();
    sunObj.add(sun);
    sun.position.set(0, 0, 0);

    sun.name = 'Sun';

    return { sunGeo, sunMaterial, sun, sunObj }

}

export default sunMesh;