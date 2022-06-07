import { useEffect } from "react";
import * as THREE from "three";
import SceneInit from "../lib/SceneInit";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";
// import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
// import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJSCanvas");
    test.initialize();
    test.animate();

    // let gui;

    // const initGui = async () => {
    //   const dat = await import("dat.gui");
    //   gui = new dat.GUI();

    //   gui.hide()
    // };

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

    // const earthTexture = new THREE.TextureLoader().load('./map.jpeg')

    const starGeo = new THREE.BufferGeometry();

    const starMaterial = new THREE.ShaderMaterial({
      color: 0xfffff,
      size: 2,
      vertexShader: `varying vec3 vertexNormal;
      void main(){
        vertexNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      fragmentShader: `
      void main(){
        gl_FragColor = vec4(0, 0, 0, 0);
      }`,
    });

    const starVertices = [];

    for (let index = 0; index < 10000; index++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = - Math.random() * 2000;

      starVertices.push(x, y, z);
    }

    for (let index = 0; index < 10000; index++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = Math.random() * 2000;

      starVertices.push(x, y, z);
    }
    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    // starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeo, starMaterial);

    test.scene.add(stars);

    const sphereGeo = new THREE.SphereGeometry(5);
    const sphereMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load("/earth.jpeg"),
        },
      },
    });
    // map: earthTexture,
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMaterial);
    // sphereMesh.position.x = 0;

    const earth = new THREE.Group();
    earth.add(sphereMesh);

    test.scene.add(earth);

    const sphereGlow = new THREE.SphereGeometry(5, 50, 50);
    const sphereGlowMaterial = new THREE.ShaderMaterial({
      vertexShader: `varying vec3 vertexNormal;
          void main(){
            vertexNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
      fragmentShader: `varying vec3 vertexNormal;
          void main(){
            float intensity = pow(0.6 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
          }`,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    // map: earthTexture,
    const sphereGlowMesh = new THREE.Mesh(sphereGlow, sphereGlowMaterial);
    // sphereGlowMesh.position.x = 0;
    // sphereGlowMesh.position.z = -20;

    // const mouse = {
    //   x: undefined,
    //   y: undefined
    // }
    sphereGlowMesh.scale.set(1.1, 1.1, 1.1);

    test.scene.add(sphereGlowMesh);

    // addEventListener('mousemove', (event) => {
    //   mouse.x = (event.clientX / innerWidth) * 2 - 1;
    //   mouse.y = (event.clientY / innerHeight) * 2 + 1;

    // })

    const animate = () => {
      sphereMesh.rotation.y += 0.001;
      // earth.rotation.y = mouse.x * 0.5;
      window.requestAnimationFrame(animate);
    };
    animate();

    // const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    // const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // boxMesh.position.x = 5;
    // test.scene.add(boxMesh);

    // DAT.Gui initialize
    // await initGui();
    // use folders
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
  }, []);
  return (
    <div className="relative">
      <div className="absolute top-14 left-10">
        <h2 className="text-white font-bold text-4xl">
          Welcome to <span className="italic"> Earth-616</span>{" "}
        </h2>
      </div>
      <canvas id="myThreeJSCanvas"></canvas>
    </div>
  );
}

export default App;
