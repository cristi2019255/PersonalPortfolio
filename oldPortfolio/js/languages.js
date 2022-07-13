$(document).ready(() => {
  setTheme($.cookie("theme"), false);

  $("footer").on("hover", () => {
    this.style.opacity = "1";
  });
  // Gen data
  let gData = [
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
  gData = gData.map((el) => ({
    lat: el.lat - 18,
    lng: el.long,
    size: Math.random() / 3,
    color: ["red"][Math.round(Math.random() * 3)],
  }));

  const Globe = new ThreeGlobe({ animateIn: true })
    .globeImageUrl("./img/MapChart_Map.png")
    .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
    .pointsData(gData)
    .showAtmosphere(true)
    .atmosphereAltitude(0.3)
    .atmosphereColor("red")
    .pointAltitude("size")
    .pointColor("color");

  setTimeout(() => {
    gData.forEach((d) => (d.size = Math.random()));
    Globe.pointsData(gData);
  }, 4000);

  // Setup renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById("globeViz").appendChild(renderer.domElement);
  renderer.domElement.style.margin = "5vh 0";
  // Setup scene
  const scene = new THREE.Scene();
  scene.add(Globe);
  scene.add(new THREE.AmbientLight(0xbbbbbb));
  scene.add(new THREE.DirectionalLight(0xffffff, 1));

  // Setup camera
  const camera = new THREE.PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.z = 500;

  // Add camera controls
  const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
  tbControls.minDistance = 101;
  tbControls.rotateSpeed = 5;
  tbControls.zoomSpeed = 0.8;

  // Kick-off renderer
  (function animate() {
    // IIFE
    // Frame cycle
    tbControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();
});
