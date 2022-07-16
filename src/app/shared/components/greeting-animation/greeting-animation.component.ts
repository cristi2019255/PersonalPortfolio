import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
const resourcePath = './assets/greeting-animation/resources/';

@Component({
  selector: 'app-greeting-animation',
  templateUrl: './greeting-animation.component.html',
  styleUrls: ['./greeting-animation.component.scss'],
})
export class GreetingAnimationComponent implements OnInit {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  controls: OrbitControls;

  mixers: any[] = [];
  previousRAF: number | null = null;
  rotate = Math.PI / 3;
  pos = -25;
  page = window.location.pathname;

  @ViewChild('canvas')
  private canvas!: ElementRef;

  constructor() {
    this.renderer = this.initializeRenderer();
    this.camera = this.initializeCamera();
    this.scene = this.initializeScene();
    this.controls = this.initializeCameraControls();
    //this.addPlaneToScene();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.addRendererToDom();
    this.loadAnimatedModelAndPlay(
      'yrobot.fbx',
      this.getAnimationFileName(),
      new THREE.Vector3(5, 0, this.pos)
    );
    window.addEventListener(
      'resize',
      () => {
        this.onWindowResize();
      },
      false
    );
    this.animate();
  }

  initializeRenderer() {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    const size =
      window.innerWidth < window.innerHeight
        ? window.innerWidth / 2
        : window.innerHeight / 2;
    renderer.setSize(size, size);
    return renderer;
  }

  addRendererToDom() {
    this.canvas.nativeElement.appendChild(this.renderer.domElement);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    const size =
      window.innerWidth < window.innerHeight
        ? window.innerWidth / 2
        : window.innerHeight / 2;
    this.renderer.setSize(size, size);
  }

  initializeCamera() {
    const fov = 60;
    const aspect = 1920 / 1080;
    const near = 1.0;
    const far = 1000.0;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(60, 30, 0);
    return camera;
  }

  initializeScene() {
    const scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(20, 100, 10);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500.0;
    light.shadow.camera.left = 100;
    light.shadow.camera.right = -100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;

    scene.add(light);

    const light2 = new THREE.AmbientLight(0xffffff, 4.0);
    scene.add(light2);
    return scene;
  }

  initializeCameraControls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.target.set(0, 20, 0);
    controls.update();
    controls.enabled = false;
    return controls;
  }

  addPlaneToScene() {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 20, 10, 10),
      new THREE.MeshStandardMaterial({
        color: 0x202020,
      })
    );
    plane.position.set(5, 0, this.pos);
    plane.castShadow = false;
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI / 2;
    this.scene.add(plane);
  }

  getAnimationFileName() {
    let path: string = window.location.pathname;
    let page: string = path.split('/').pop() || ' ';
    let animFile = 'yrobot_';

    switch (page) {
      case 'work-experience':
        animFile += 'work';
        break;
      case 'other-information':
        animFile += 'awards';
        break;
      case 'education':
        animFile += 'education';
        break;
      case 'languages':
        animFile += 'languages';
        this.pos *= -1;
        this.rotate = Math.PI / 2;
        break;
      default:
        animFile += 'greeting';
        break;
    }
    animFile += '.fbx';
    return animFile;
  }

  loadAnimatedModelAndPlay(
    modelFile: string,
    animFile: string,
    offset: THREE.Vector3
  ) {
    const loader = new FBXLoader();
    loader.setPath(resourcePath);

    loader.load(modelFile, (fbx) => {
      fbx.name = 'yrobot';
      fbx.scale.setScalar(0.2);
      fbx.traverse((c) => {
        c.castShadow = true;
      });
      fbx.position.copy(offset);
      fbx.rotateY(this.rotate);

      const anim = new FBXLoader();
      anim.setPath(resourcePath);
      anim.load(animFile, (anim: { animations: THREE.AnimationClip[] }) => {
        const m = new THREE.AnimationMixer(fbx);
        this.mixers.push(m);
        const idle = m.clipAction(anim.animations[0]);
        idle.play();
      });
      this.scene.add(fbx);
    });
  }

  animate() {
    requestAnimationFrame((t) => {
      if (this.previousRAF === null) {
        this.previousRAF = t;
      }

      this.animate();

      this.renderer.render(this.scene, this.camera);
      this.animationStep(t - this.previousRAF);
      this.previousRAF = t;
    });
  }

  animationStep(timeElapsed: number) {
    const timeElapsedS = timeElapsed * 0.001;
    if (this.mixers) {
      this.mixers.map((m) => m.update(timeElapsedS));
    }

    if (this.page !== window.location.pathname) {
      this.page = window.location.pathname;
      this.scene.remove(this.scene.getObjectByName('yrobot')!);
      this.loadAnimatedModelAndPlay(
        'yrobot.fbx',
        this.getAnimationFileName(),
        new THREE.Vector3(5, 0, this.pos)
      );
    }
  }
}
