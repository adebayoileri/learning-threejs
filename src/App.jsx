import { useEffect } from 'react'
import * as THREE from 'three';
import SceneInit from '../lib/SceneInit';

function App() {

  useEffect(() => {
    const test = new SceneInit('myThreeJSCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);

  }, [])
  return (
    <div >
      <canvas id="myThreeJSCanvas"></canvas>
    </div>
  )
}

export default App
