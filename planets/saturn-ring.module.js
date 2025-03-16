import * as THREE from 'three';

let x = 1.47;
let y = 1.7;
let z = 0.1;

function saturnRingMesh() {

    const saturnRingGeo = new THREE.TorusGeometry(53, 5, 2, 150);
    const saturnRingMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xa4967a,
        flatShading: true
    });
    const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMaterial);
    const saturnRingObj = new THREE.Object3D();
    saturnRingGeo.rotateX(x);
    saturnRingGeo.rotateY(y);
    saturnRingGeo.rotateZ(z);

    const saturnRingGeo2 = new THREE.TorusGeometry(64, 5, 2, 150);
    const saturnRingMaterial2 = new THREE.MeshStandardMaterial({ 
        color: 0xead4a4,
        flatShading: true
    });
    const saturnRing2 = new THREE.Mesh(saturnRingGeo2, saturnRingMaterial2);
    const saturnRingObj2 = new THREE.Object3D();
    saturnRingGeo2.rotateX(x);
    saturnRingGeo2.rotateY(y);
    saturnRingGeo2.rotateZ(z);

    const saturnRingGeo3 = new THREE.TorusGeometry(75, 5, 2, 150);
    const saturnRingMaterial3 = new THREE.MeshStandardMaterial({ 
        color: 0xC2B290,
        flatShading: true
    });
    const saturnRing3 = new THREE.Mesh(saturnRingGeo3, saturnRingMaterial3);
    const saturnRingObj3 = new THREE.Object3D();
    saturnRingGeo3.rotateX(x);
    saturnRingGeo3.rotateY(y);
    saturnRingGeo3.rotateZ(z);
    
    return { 
        saturnRingGeo, 
        saturnRingMaterial, 
        saturnRing, 
        saturnRingObj,
        saturnRingGeo2, 
        saturnRingMaterial2, 
        saturnRing2, 
        saturnRingObj2,
        saturnRingGeo3, 
        saturnRingMaterial3, 
        saturnRing3, 
        saturnRingObj3 
    }

}

export default saturnRingMesh;
