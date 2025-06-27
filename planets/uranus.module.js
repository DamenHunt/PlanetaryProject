import * as THREE from 'three';

const uranusTexture = new THREE.TextureLoader().load('./textures/uranus-texture.jpg');

function uranusMesh() {

    const uranusGeo = new THREE.SphereGeometry(20, 100, 100);
    const uranusMaterial = new THREE.MeshStandardMaterial({ 
        map: uranusTexture,
    });
    const uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
    const uranusObj = new THREE.Object3D();
    uranusObj.add(uranus);
    uranus.position.set(2210, 0, 0);
    uranusGeo.rotateZ(Math.PI/2)

    uranus.name = 'Uranus';
    uranus.color = '#A1E0E5';

    uranus.body = `Uranus is the seventh planet from the Sun and the third-largest in the Solar System. It is unique among planets due to its extreme axial tilt of about 98 degrees, causing it to rotate on its side. This results in extreme seasonal variations, with each pole experiencing 42 years of continuous sunlight followed by 42 years of darkness. 
    
    Uranus is classified as an ice giant due to its composition of hydrogen, helium, and heavier elements like methane, which gives it a pale blue color. The planet has a faint ring system and at least 27 known moons, with Titania and Oberon being the largest. Uranus' atmosphere is the coldest of any planet, with temperatures plunging to -224°C (-371°F). The Voyager 2 spacecraft remains the only mission to have visited Uranus, providing limited but valuable data. 
    
    Scientists suspect that Uranus' extreme tilt resulted from a massive collision in the past. The planet’s unusual characteristics make it a priority for future space exploration, as studying its atmosphere, moons, and internal structure could provide new insights into planetary formation and evolution.`;

    return { uranusGeo, uranusMaterial, uranus, uranusObj }

}

export default uranusMesh;