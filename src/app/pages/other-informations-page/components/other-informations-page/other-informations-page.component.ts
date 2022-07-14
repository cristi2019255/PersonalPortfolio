import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
interface Coordinate {
  lat: number;
  lng: number;
  size: number;
  color: string;
}

@Component({
  selector: 'app-other-informations-page',
  templateUrl: './other-informations-page.component.html',
  styleUrls: ['./other-informations-page.component.scss'],
})
export class OtherInformationsPageComponent implements OnInit {
  gData: Coordinate[];
  globe: ThreeGlobe;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  controls: OrbitControls;

  @ViewChild('globeViz')
  private canvas!: ElementRef;

  constructor() {
    this.gData = this.initializeCoordinates();
    this.globe = this.initializeGlobe();
    this.renderer = this.initializeRenderer();
    this.scene = this.initializeScene();
    this.camera = this.initializeCamera();
    this.controls = this.initializeCameraControls();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.gData.forEach((d) => (d.size = Math.random()));
      this.globe.pointsData(this.gData);
    }, 2000);
  }

  ngAfterViewInit() {
    this.addRendererToDom(this.renderer);
    this.startAnimation();
  }

  private initializeCoordinates() {
    const gData = [
      { lat: 51.3, long: -0.7 }, //London
      { lat: 55.45, long: 37.37 }, //Moscow
      { lat: 38.89, long: -77 }, //Washington
      { lat: -35.28, long: 149.12 }, //Canberra
      { lat: 41.9, long: 12.5 }, //Rome
      { lat: 48.87, long: 2.34 }, //Paris
      { lat: 52.31, long: 13.24 }, //Berlin
      { lat: 45.25, long: -75.41 }, //Ottawa
      { lat: 44.43, long: 26 }, //Bucharest
      { lat: 47, long: 28.9 }, //Chisinau
    ];

    return gData.map((el) => ({
      lat: el.lat - 18,
      lng: el.long,
      size: Math.random() / 3,
      color: ['red'][Math.round(Math.random() * 3)],
    }));
  }

  private initializeGlobe() {
    return new ThreeGlobe({ animateIn: true })
      .globeImageUrl('./assets/images/MapChart_Map.png')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .pointsData(this.gData)
      .showAtmosphere(true)
      .atmosphereAltitude(0.3)
      .atmosphereColor('red')
      .pointAltitude('size')
      .pointColor('color');
  }

  private initializeRenderer() {
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
    return renderer;
  }

  private initializeCamera() {
    // Setup camera
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 300;
    if (window.innerWidth <= 770) {
      camera.position.z = 500;
    }
    if (window.innerWidth <= 420) {
      camera.position.z = 600;
    }
    return camera;
  }

  private initializeScene() {
    // Setup scene
    const scene = new THREE.Scene();
    scene.add(this.globe);
    scene.add(new THREE.AmbientLight(0xbbbbbb));
    scene.add(new THREE.DirectionalLight(0xffffff, 1));
    return scene;
  }

  private initializeCameraControls() {
    // Add camera controls
    const tbControls = new OrbitControls(this.camera, this.renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 5;
    tbControls.zoomSpeed = 0.8;
    return tbControls;
  }

  private addRendererToDom(renderer: THREE.WebGLRenderer) {
    this.canvas.nativeElement.appendChild(renderer.domElement);
  }

  /**
   * Start the rendering loop
   * @private
   * @memberof OtherInformationPageComponent
   */
  private startAnimation() {
    // Start animation
    let component: OtherInformationsPageComponent = this;
    console.log('starting animation');
    (function render() {
      requestAnimationFrame(render);
      component.controls.update();
      component.renderer.render(component.scene, component.camera);
    })();
  }
}
