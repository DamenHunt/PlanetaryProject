import * as THREE from 'three';

function solarSystemMesh() {

    const solarSystemGeo = new THREE.SphereGeometry(100, 100, 100);
    const solarSystemMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const solarSystem = new THREE.Mesh(solarSystemGeo, solarSystemMaterial);
    const solarSystemObj = new THREE.Object3D();
    solarSystemObj.add(solarSystem);
    solarSystem.position.set(0, 0, 0);

    solarSystem.name = 'The Solar System';
    solarSystem.color = '#B0C4DE';

    solarSystem.body = `The Solar System is a vast collection of celestial bodies bound by gravity, with the Sun at its center. It includes eight planets—Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune—as well as dwarf planets like Pluto, moons, asteroids, comets, meteoroids, and interplanetary dust and gas. Formed about 4.6 billion years ago from a rotating cloud of gas and dust called the solar nebula, the Solar System is divided into the inner rocky planets and the outer gas and ice giants.

    The four inner planets—Mercury, Venus, Earth, and Mars—are small and solid, while the four outer planets—Jupiter, Saturn, Uranus, and Neptune—are massive and composed mostly of gas or ice. Between Mars and Jupiter lies the asteroid belt, a region filled with rocky remnants from the Solar System’s formation. Beyond Neptune is the Kuiper Belt, home to icy bodies like Pluto, and further still is the Oort Cloud, a theoretical sphere of distant comets.

    The Solar System constantly moves through the Milky Way galaxy, orbiting its center every 225–250 million years. Studying the Solar System helps scientists understand planetary formation, evolution, and the conditions necessary for life. It remains a focal point for exploration, discovery, and the search for extraterrestrial life.`

    return { solarSystemGeo, solarSystemMaterial, solarSystem, solarSystemObj }

}

export default solarSystemMesh;