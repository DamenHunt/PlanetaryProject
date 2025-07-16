import * as THREE from 'three';

const mercuryTexture = new THREE.TextureLoader().load('./textures/mercury-texture.jpg');

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

    mercury.body = `Mercury is the smallest and innermost planet in the Solar System, orbiting the Sun at an average distance of about 57.9 million km (36 million miles). It has an extreme environment with surface temperatures ranging from -173°C (-280°F) at night to 427°C (800°F) during the day due to its lack of atmosphere. Mercury’s surface is heavily cratered, resembling Earth’s Moon, and its thin exosphere is composed of oxygen, sodium, hydrogen, helium, and potassium. 
    
    With a dense metallic core, Mercury is the second most dense planet in the Solar System, after Earth. Despite being the closest planet to the Sun, it is not the hottest—that title belongs to Venus. A year on Mercury lasts only 88 Earth days, but a single day-night cycle takes 176 Earth days due to its slow rotation. 
    
    The planet has been explored by spacecraft like Mariner 10 and, more recently, MESSENGER, which provided detailed images of its surface and magnetic field. Scientists are particularly interested in Mercury’s mysterious water ice deposits found in permanently shadowed craters at its poles. Despite its small size and harsh conditions, Mercury remains a subject of study for planetary formation and evolution theories.`;

    return { mercuryGeo, mercuryMaterial, mercury, mercuryObj, planetName }

}

export default mercuryMesh;