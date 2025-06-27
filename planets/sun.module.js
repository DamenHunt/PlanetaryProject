import * as THREE from 'three';

function sunMesh() {

    const sunGeo = new THREE.SphereGeometry(300, 100, 100);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    const sun = new THREE.Mesh(sunGeo, sunMaterial);
    const sunObj = new THREE.Object3D();
    sunObj.add(sun);
    sun.position.set(0, 0, 0);

    sun.name = 'Sun';
    sun.color = '#FFD700';

    sun.body = `The Sun is the massive, glowing star at the center of our Solar System, providing the heat and light necessary for life on Earth. Composed mostly of hydrogen and helium, it generates energy through nuclear fusion, where hydrogen atoms merge to form helium, releasing immense amounts of energy. This process occurs in the Sun’s core, where temperatures reach about 15 million degrees Celsius (27 million degrees Fahrenheit). The Sun's outer layers include the photosphere, chromosphere, and corona, the latter being visible during solar eclipses.

    The Sun is classified as a G-type main-sequence star (G2V) and is about 4.6 billion years old. It follows an 11-year solar cycle marked by variations in sunspots, solar flares, and coronal mass ejections, which can affect Earth’s magnetic field and cause disruptions in communication and power grids. The solar wind, a stream of charged particles from the Sun, interacts with Earth's magnetosphere, creating the auroras.

    Scientists study the Sun using telescopes and space probes like Parker Solar Probe and Solar Orbiter, aiming to understand its behavior and predict solar storms. As a middle-aged star, the Sun will eventually expand into a red giant before shrinking into a white dwarf, marking the final stages of its evolution.`;

    return { sunGeo, sunMaterial, sun, sunObj }

}

export default sunMesh;