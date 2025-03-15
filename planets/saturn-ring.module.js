import * as THREE from 'three';



function saturnRingMesh() {

    const saturnRingGeo = new THREE.TorusGeometry(75, 20, 2, 150);
    const saturnRingMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xC2B290,
        flatShading: true
    });
    const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMaterial);
    const saturnRingObj = new THREE.Object3D();
    saturnRingGeo.rotateX(1.3);
    saturnRingGeo.rotateY(0.9);

    return { saturnRingGeo, saturnRingMaterial, saturnRing, saturnRingObj }

}

export default saturnRingMesh;