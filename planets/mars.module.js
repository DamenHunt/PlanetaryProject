import * as THREE from 'three';

const marsTexture = new THREE.TextureLoader().load('textures/mars-texture.jpg');

function marsMesh() {

    const marsGeo = new THREE.SphereGeometry(10, 100, 100);
    const marsMaterial = new THREE.MeshStandardMaterial({ 
        map: marsTexture,
    });
    const mars = new THREE.Mesh(marsGeo, marsMaterial);
    const marsObj = new THREE.Object3D();
    marsObj.add(mars);
    mars.position.set(1220, 0, 0); 

    mars.name = 'Mars';
    mars.color = '#C1440E'

    mars.body = `Mars, the fourth planet from the Sun, is often called the “Red Planet” due to its iron-rich soil that gives it a reddish appearance. It has a thin atmosphere composed mostly of carbon dioxide, which makes it incapable of retaining much heat, leading to surface temperatures ranging from -140°C (-220°F) at the poles to 30°C (86°F) in rare cases near the equator. Mars has the tallest volcano in the Solar System, Olympus Mons, and the deepest canyon, Valles Marineris. The planet shows evidence of ancient riverbeds, suggesting that liquid water once flowed on its surface. Scientists believe Mars may have once had conditions suitable for life. Today, water exists in the form of ice at the poles and beneath the surface. Robotic missions such as Curiosity, Perseverance, and InSight have provided valuable data about Mars' climate, geology, and potential for human exploration. Mars is the primary target for future colonization efforts, with NASA, SpaceX, and other organizations planning missions to send humans to the planet. The search for microbial life continues, with ongoing studies of Martian soil, atmosphere, and subsurface ice deposits. Understanding Mars may help answer questions about the potential for life beyond Earth.`;

    return { marsGeo, marsMaterial, mars, marsObj }

}

export default marsMesh;