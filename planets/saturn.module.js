import * as THREE from 'three';

const saturnTexture = new THREE.TextureLoader().load('textures/saturn-texture.jpg');

function saturnMesh() {

    const saturnGeo = new THREE.SphereGeometry(45, 100, 100);
    const saturnMaterial = new THREE.MeshStandardMaterial({ 
        map: saturnTexture,
    });
    const saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
    const saturnObj = new THREE.Object3D();
    saturnObj.add(saturn);
    saturn.position.set(1980, 0, 0);

    saturn.name = 'Saturn';
    saturn.color = '#E6C77F';

    saturn.body = `Saturn is the second-largest planet in the Solar System and is best known for its spectacular ring system, which consists of countless ice and rock particles. Like Jupiter, Saturn is a gas giant composed mainly of hydrogen and helium, with no solid surface. The planet’s atmosphere is marked by high winds and storms, though they are less extreme than those on Jupiter. 
    
    Saturn has at least 146 moons, with Titan being the largest. Titan has a thick atmosphere and liquid methane lakes, making it one of the most intriguing celestial bodies for astrobiology. The Cassini spacecraft provided extensive data on Saturn and its rings, revealing details about their composition, dynamics, and possible origins. 
    
    Scientists believe Saturn's rings may be remnants of a destroyed moon or leftover material from the planet's formation. The planet’s low density means it would float in water if a large enough body of water existed. Despite its immense size, Saturn has a rapid rotation period of about 10.7 hours. Future missions, such as Dragonfly, are set to explore Titan in greater detail, potentially offering insights into early Earth-like conditions and the potential for life beyond our planet.`;

    return { saturnGeo, saturnMaterial, saturn, saturnObj }

}

export default saturnMesh;