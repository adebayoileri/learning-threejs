import { useEffect } from 'react'
import * as THREE from 'three';
import SceneInit from '../lib/SceneInit';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';


function App() {

  useEffect(() => {
    const test = new SceneInit('myThreeJSCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -1;
    test.scene.add(boxMesh);


    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 16);
    const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true});

    const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinderMesh.position.x = 5;

    test.scene.add(cylinderMesh);

    const teaPotGeomtery = new TeapotGeometry(0.5, 8);
    const teaPotMaterial = new THREE.MeshNormalMaterial({ wireframe: true })

    const teaPotMesh = new THREE.Mesh(teaPotGeomtery, teaPotMaterial);

    teaPotMesh.position.x = 1;
    test.scene.add(teaPotMesh);


    const roundedBoxGeo = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);
    const roundedBoxMaterial = new THREE.MeshNormalMaterial({ wireframe: true })

    const roundedBoxMesh = new THREE.Mesh(roundedBoxGeo, roundedBoxMaterial);

    roundedBoxMesh.position.x = 3;
    test.scene.add(roundedBoxMesh);



  }, [])
  return (
    <div >
      <canvas id="myThreeJSCanvas"></canvas>
    </div>
  )
}

export default App
