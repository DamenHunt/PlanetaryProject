import * as THREE from 'three';

const jupiterTexture = new THREE.TextureLoader().load('textures/jupiter-texture.jpg');

function jupiterMesh() {

    const jupiterGeo = new THREE.SphereGeometry(60, 100, 100);
    const jupiterMaterial = new THREE.MeshStandardMaterial({ 
        map: jupiterTexture,
    });
    const jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
    const jupiterObj = new THREE.Object3D();
    jupiterObj.add(jupiter);
    jupiter.position.set(1750, 0, 0); 

    jupiter.name = 'Jupiter';
    jupiter.color = '#DAA06D';

    jupiter.body = `Jupiter, the largest planet in the Solar System, is a gas giant primarily composed of hydrogen and helium. It has no solid surface, and its atmosphere is characterized by violent storms, including the Great Red Spot—a massive storm that has persisted for centuries. Jupiter’s magnetic field is the strongest of any planet, protecting its surroundings from solar radiation. 
    
    The planet has at least 95 known moons, the largest of which—Ganymede—is bigger than Mercury. Other major moons include Europa, Callisto, and Io, each offering unique scientific interest. Europa, for example, has a subsurface ocean that may harbor life. Jupiter plays a crucial role in the Solar System by deflecting asteroids and comets with its immense gravity. The planet has been studied extensively by spacecraft such as Juno, which has provided insights into its atmosphere, deep interior, and auroras. Jupiter’s rapid rotation causes it to have a flattened shape and intense weather systems. 
    
    Scientists continue to study its moons as potential candidates for extraterrestrial life, especially Europa, which may have conditions suitable for microbial organisms. Jupiter remains a key focus in planetary science due to its influence on the formation and evolution of the Solar System.`;

    return { jupiterGeo, jupiterMaterial, jupiter, jupiterObj }

}

export default jupiterMesh;