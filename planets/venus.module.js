import * as THREE from 'three';

const venusTexture = new THREE.TextureLoader().load('textures/venus-texture.jpg');

function venusMesh() {

    const venusGeo = new THREE.SphereGeometry(20, 100, 100);
    const venusMaterial = new THREE.MeshStandardMaterial({ 
        map: venusTexture,
    });
    const venus = new THREE.Mesh(venusGeo, venusMaterial);
    const venusObj = new THREE.Object3D();
    venusObj.add(venus);
    venus.position.set(760, 0, 0);

    venus.name = 'Venus';
    venus.color = '#D4A373';

    venus.body = `Venus, often called Earth’s “sister planet” due to its similar size and composition, is the second planet from the Sun. However, it has a hostile environment with thick clouds of sulfuric acid and an atmosphere primarily composed of carbon dioxide, creating an extreme greenhouse effect. This makes Venus the hottest planet in the Solar System, with surface temperatures reaching 467°C (872°F). The planet's surface is rocky, featuring vast plains, mountains, and volcanoes, with evidence suggesting ongoing geological activity. Venus rotates very slowly and in the opposite direction of most planets, meaning a Venusian day is longer than its year. The planet’s dense clouds reflect sunlight, making it the brightest object in the night sky after the Moon. Due to its harsh conditions, only a few landers, such as those from the Soviet Venera program, have successfully transmitted data before being destroyed by the extreme heat and pressure. Modern missions like NASA’s upcoming VERITAS aim to further explore its surface and atmospheric conditions. Scientists speculate that Venus may have once had oceans, but runaway greenhouse gases turned it into the inhospitable world it is today, serving as a warning about climate change’s potential effects on Earth.`

return { venusGeo, venusMaterial, venus, venusObj }

}

export default venusMesh;