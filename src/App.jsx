import { useEffect } from 'react'
import * as THREE from 'three';
import SceneInit from '../lib/SceneInit';
// import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
// import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { GUI } from 'dat.gui'

function App() {

  useEffect(() => {
    const test = new SceneInit('myThreeJSCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // boxMesh.position.x = -1;
    // test.scene.add(boxMesh);


    // const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 16);
    // const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true});

    // const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    // cylinderMesh.position.x = 5;

    // test.scene.add(cylinderMesh);

    // const teaPotGeomtery = new TeapotGeometry(0.5, 8);
    // const teaPotMaterial = new THREE.MeshNormalMaterial({ wireframe: true })

    // const teaPotMesh = new THREE.Mesh(teaPotGeomtery, teaPotMaterial);

    // teaPotMesh.position.x = 1;
    // test.scene.add(teaPotMesh);


    // const roundedBoxGeo = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);
    // const roundedBoxMaterial = new THREE.MeshNormalMaterial({ wireframe: true })

    // const roundedBoxMesh = new THREE.Mesh(roundedBoxGeo, roundedBoxMaterial);

    // roundedBoxMesh.position.x = 3;
    // test.scene.add(roundedBoxMesh);

        // box geo

        const earthTexture = new THREE.TextureLoader().load('./src/map.jpeg')

        const sphereGeo = new THREE.SphereGeometry(5);
        const sphereMaterial = new THREE.MeshStandardMaterial({
          map: earthTexture,
        });
        const sphereMesh = new THREE.Mesh(sphereGeo, sphereMaterial);
        sphereMesh.position.x = -1;


        test.scene.add(sphereMesh)

        const animate= ( ) => {
          sphereMesh.rotation.y += .002;
          window.requestAnimationFrame(animate)
        }
        animate();


        // const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        // const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        // boxMesh.position.x = 5;
        // test.scene.add(boxMesh);

    // // DAT.Gui initialize
    // const gui = new GUI();

    // // use folders
    // const geometryFolder  = gui.addFolder('Mesh Geomtery');
    // geometryFolder.open();

    // const rotationFolder = geometryFolder.addFolder('Rotation');

    // rotationFolder.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    // rotationFolder.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotate Y Axis');
    // rotationFolder.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');

    // const scaleFolder = geometryFolder.addFolder('Scale');

    // scaleFolder.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
    // scaleFolder.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
    // scaleFolder.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');

    // scaleFolder.open();

    // const materialFolder =  gui.addFolder('Material')

    // // update material feel
    // const materialParams = {
    //   boxMeshColor: boxMesh.material.color.getHex()
    // }
    // materialFolder.add(boxMesh.material, 'wireframe')
    // materialFolder.addColor(materialParams, 'boxMeshColor').onChange((val) => {
    //   boxMesh.material.color.set(val)
    // });

  }, [])
  return (
    <div >
      <canvas id="myThreeJSCanvas"></canvas>
    </div>
  )
}

export default App
