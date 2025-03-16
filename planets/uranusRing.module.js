import * as THREE from 'three';


function uranusRingMesh() {

    const uranusRingGeo = new THREE.TorusGeometry(27, 3, 2, 150);
        const uranusRingMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffffff,
            flatShading: true,
            transparent: true,
            opacity: 0.4
        });
        const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMaterial);
        const uranusRingObj = new THREE.Object3D();
        uranusRingGeo.rotateY(Math.PI/2);
        uranusRingGeo.rotateZ(-0.25)

    return { uranusRingGeo, uranusRingMaterial, uranusRing, uranusRingObj }

}

export default uranusRingMesh;