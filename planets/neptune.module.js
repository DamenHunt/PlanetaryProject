import * as THREE from 'three';

const neptuneTexture = new THREE.TextureLoader().load('textures/neptune-texture.jpg');

function neptuneMesh() {

    const neptuneGeo = new THREE.SphereGeometry(20, 100, 100);
    const neptuneMaterial = new THREE.MeshStandardMaterial({ 
        map: neptuneTexture,
    });
    const neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
    const neptuneObj = new THREE.Object3D();
    neptuneObj.add(neptune);
    neptune.position.set(2440, 0, 0); 

    neptune.name = 'Neptune';
    neptune.color = '#2E5FA3';

    neptune.body = `Neptune, the eighth and farthest known planet from the Sun, is another ice giant similar to Uranus. It has the strongest winds in the Solar System, reaching speeds of over 2,100 km/h (1,300 mph). Its deep blue color comes from methane in its atmosphere. Neptune has a dynamic climate with massive storms, including the Great Dark Spot, a storm comparable to Jupiter’s Great Red Spot. The planet has a faint ring system and at least 14 known moons, the largest being Triton. Triton orbits Neptune in a retrograde direction, suggesting it was a captured object from the Kuiper Belt. The planet was first observed in 1846, making it the only planet discovered through mathematical predictions rather than direct observation. Voyager 2 remains the only spacecraft to have visited Neptune, passing by in 1989. Because of its vast distance from the Sun, Neptune takes 165 Earth years to complete one orbit. Future missions aim to explore Neptune and its moons, particularly Triton, which may have an internal ocean beneath its icy crust. Studying Neptune helps scientists understand ice giants and the broader dynamics of the outer Solar System.`;

    return { neptuneGeo, neptuneMaterial, neptune, neptuneObj }

}

export default neptuneMesh;