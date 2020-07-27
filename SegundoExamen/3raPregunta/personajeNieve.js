var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	scene = new THREE.Scene();
	var canvasWidth = window.innerWidth * 0.9;
  var canvasHeight = window.innerHeight * 0.9;

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 80000);
  camera.position.set(0, 10, 40);
  camera.lookAt(0, 0, 0);

  // LIGHTS
  light = new THREE.DirectionalLight(0xFFFFFF, 0.7);
  light.position.set(0, 4, -2);
  light.target.position.set(0, 0, 0);
  light.target.updateMatrixWorld()
  var ambientLight = new THREE.AmbientLight(0x111111);

  // RENDERER
  renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setSize(canvasWidth, canvasHeight);
  renderer.setClearColor(0xAAAAAA, 1.0);

  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  // Add to DOM
  var container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  // CONTROLS
  cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
  cameraControls.target.set(0, 0, 0);

  crear_plano(0, -8, 0, 0, 0, 0);
	cuerpo();
	brazoIzquierdo();
	brazoDerecho();
	botones();
	ojos_boca();
	sombrero();
	nariz_zanahoria();
  scene.add(light);
  scene.add(ambientLight);
}

//OBJETOS

function nariz_zanahoria(){
	texture = new THREE.ImageUtils.loadTexture("Imagenes/carrot.jpg");
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(10, 10);
	var material = new THREE.MeshPhongMaterial({map: texture, side:THREE.DoubleSide});
	var geometry = new THREE.CylinderGeometry(0.3,2,10,10,1, false);
	var cone = new THREE.Mesh(geometry, material);
	cone.translateZ(3);
	cone.translateY(8.5);

	rotateObject(cone, 90, 0, 0);
	cone.scale.set(0.17,0.17,0.17);
	scene.add(cone);

}

function sombrero(){
	texture = new THREE.ImageUtils.loadTexture("Imagenes/black.jpg");
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(10, 10);
	var material = new THREE.MeshPhongMaterial({map: texture, side:THREE.DoubleSide});
	var juntar = new THREE.Geometry();

	//base
	var geometry = new THREE.CylinderGeometry(0,1.4,2,32,1, true);
	var cone = new THREE.Mesh(geometry, material);
	cone.translateY(10.5);
	cone.scale.set(2,0.5,2);
	juntar.mergeMesh(cone);

	var geometry = new THREE.CylinderGeometry(1.8,1.4,3,32,1, false);
	var cone = new THREE.Mesh(geometry, material);
	cone.translateY(11.5);
	cone.scale.set(1.2,1.2,1.2);
	juntar.mergeMesh(cone);


	mesh = new THREE.Mesh(juntar, material);
	mesh.translateY(-0.5)
	scene.add(mesh);

	var material = new THREE.MeshPhongMaterial({color: 0xff0000, side:THREE.DoubleSide});

	var geometry = new THREE.CylinderGeometry(1.4,1.4,1,32,1, true);
	var cone = new THREE.Mesh(geometry, material);
	cone.translateY(10.5);
	cone.scale.set(1.3,1.3,1.3);
	scene.add(cone);

}

function ojos_boca(){
	var material = new THREE.MeshPhongMaterial({color: 0x000000, side:THREE.DoubleSide});
	var juntar = new THREE.Geometry();


	//ojos
	var geometry = new THREE.SphereGeometry( 0.3, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(-0.5);
	sphere.translateZ(2);
	sphere.translateY(9);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.3, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(0.5);
	sphere.translateZ(2);
	sphere.translateY(9);
	juntar.mergeMesh(sphere);

	//boca
	var geometry = new THREE.SphereGeometry( 0.1, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(0.5);
	sphere.translateZ(1.9);
	sphere.translateY(8);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.1, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(-0.5);
	sphere.translateZ(1.9);
	sphere.translateY(8);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.1, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(0.5 + 0.35);
	sphere.translateZ(1.8);
	sphere.translateY(8 + 0.15);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.1, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(-0.5 - 0.35);
	sphere.translateZ(1.9);
	sphere.translateY(8 + 0.15);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.1, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(-0.5 + 0.35);
	sphere.translateZ(1.9);
	sphere.translateY(8 - 0.1);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.1, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateX(-0.5 + 0.70);
	sphere.translateZ(1.9);
	sphere.translateY(8 - 0.1);
	juntar.mergeMesh(sphere);




	mesh = new THREE.Mesh(juntar, material);
	scene.add(mesh);

}

function botones(){

	var material = new THREE.MeshPhongMaterial({color: 0xff0000, side:THREE.DoubleSide});
	var juntar = new THREE.Geometry();

	var geometry = new THREE.SphereGeometry( 0.4, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateZ(5);
	sphere.translateY(-3);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.4, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateZ(4.8);
	sphere.translateY(-1);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.4, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateZ(3.8);
	sphere.translateY(1);
	juntar.mergeMesh(sphere);

	//arriba
	var geometry = new THREE.SphereGeometry( 0.3, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateZ(3.5);
	sphere.translateY(4);
	juntar.mergeMesh(sphere);

	var geometry = new THREE.SphereGeometry( 0.3, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	sphere.translateZ(3);
	sphere.translateY(6);
	juntar.mergeMesh(sphere);



	//mostrar
	mesh = new THREE.Mesh(juntar, material);

	// mesh.translateX(-4);
	// mesh.translateY(4);
	//
	// mesh.scale.x = 0.3;
	// mesh.scale.y = 0.3;
	// mesh.scale.z = 0.3;


	scene.add(mesh);

}

function brazoIzquierdo(){
	texture = new THREE.ImageUtils.loadTexture("Imagenes/wood.jpg");
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(10, 10);
	var material = new THREE.MeshPhongMaterial({map: texture, side:THREE.DoubleSide});
	var juntar = new THREE.Geometry();

	var geometry = new THREE.CylinderGeometry( 1, 1, 20, 32 );
	var cylinder = new THREE.Mesh(geometry);
	rotateObject(cylinder,0,0,90);
	juntar.mergeMesh(cylinder);

	var geometry = new THREE.CylinderGeometry( 1, 1, 10, 32 );
	var cylinder = new THREE.Mesh(geometry);
	cylinder.translateX(-13);
	cylinder.translateY(3.2);
	rotateObject(cylinder,0,0,45);
	juntar.mergeMesh(cylinder);

	var geometry = new THREE.CylinderGeometry( 1, 1, 10, 32 );
	var cylinder = new THREE.Mesh(geometry);
	cylinder.translateX(-21);
	cylinder.translateY(7);
	rotateObject(cylinder,0,0,85);
	juntar.mergeMesh(cylinder);

	var geometry = new THREE.CylinderGeometry( 0.8, 0.8, 10, 32 );
	var cylinder = new THREE.Mesh(geometry);
	cylinder.translateX(-19.5);
	cylinder.translateY(10);
	rotateObject(cylinder,0,0,45);
	juntar.mergeMesh(cylinder);

	//mostrar
	mesh = new THREE.Mesh(juntar, material);

	mesh.translateX(-4);
	mesh.translateY(4);

	mesh.scale.x = 0.3;
	mesh.scale.y = 0.3;
	mesh.scale.z = 0.3;


	scene.add(mesh);

}
function brazoDerecho(){
	texture = new THREE.ImageUtils.loadTexture("Imagenes/wood.jpg");
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(10, 10);
	var material = new THREE.MeshPhongMaterial({map: texture, side:THREE.DoubleSide});

	var juntar = new THREE.Geometry();

	var geometry = new THREE.CylinderGeometry( 1, 1, 20, 32 );
	var cylinder = new THREE.Mesh(geometry);
	rotateObject(cylinder,0,0,90);
	juntar.mergeMesh(cylinder);

	var geometry = new THREE.CylinderGeometry( 1, 1, 15, 32 );
	var cylinder = new THREE.Mesh(geometry);
	cylinder.translateX(14.5);
	cylinder.translateY(5);
	rotateObject(cylinder,0,0,-45);
	juntar.mergeMesh(cylinder);

	var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 );
	var cylinder = new THREE.Mesh(geometry);
	cylinder.translateX(17);
	cylinder.translateY(6);
	rotateObject(cylinder,0,0,-85);
	juntar.mergeMesh(cylinder);

	var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 5, 32 );
	var cylinder = new THREE.Mesh(geometry);
	cylinder.translateX(2);
	cylinder.translateY(2);
	rotateObject(cylinder,0,0,45);
	juntar.mergeMesh(cylinder);


	//mostrar
	mesh = new THREE.Mesh(juntar, material);

	mesh.translateX(4);
	mesh.translateY(4);

	mesh.scale.x = 0.3;
	mesh.scale.y = 0.3;
	mesh.scale.z = 0.3;


	scene.add(mesh);

}
function cuerpo(){
	// var geometry = new THREE.SphereGeometry( 4, 32, 32 );
	// var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
	// var sphere = new THREE.Mesh( geometry, material );
	// sphere.scale.y = 0.2
	// scene.add( sphere );
	//color blanco
	texture = new THREE.ImageUtils.loadTexture("Imagenes/snow.png");
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(10, 10);
	var material = new THREE.MeshPhongMaterial({map: texture, side:THREE.DoubleSide});
	//base
	var geometry = new THREE.CylinderGeometry(0.4,1.4,3,32,1, true);
	var cone = new THREE.Mesh(geometry, material);
	cone.translateY(-7);
	cone.scale.set(2,0.5,2);
	scene.add(cone);

	var geometry = new THREE.SphereGeometry( 5, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	// sphere.scale.y = 0.2
	sphere.translateY(-2.5)
	scene.add( sphere );

	var geometry = new THREE.SphereGeometry( 3.5, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	// sphere.scale.y = 0.2
	sphere.translateY(4)
	scene.add( sphere );

	var geometry = new THREE.SphereGeometry( 2, 32, 32);
	var sphere = new THREE.Mesh( geometry, material );
	// sphere.scale.y = 0.2
	sphere.translateY(8.5)
	scene.add( sphere );
}

function crear_plano(tx, ty, tz, rx, ry, rz) {

  var trasladarObjetoX = tx;
  var trasladarObjetoY = ty;
  var trasladarObjetoZ = tz;

  var rotarObjetoX = rx;
  var rotarObjetoY = ry;
  var rotarObjetoZ = rz;

  //Geometría del plano
  geometry_plane = new THREE.PlaneGeometry(20, 20, 10, 10);
  //Textura
  texture = new THREE.ImageUtils.loadTexture("images/WoodFloor041_2k_Color.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);
  // Material y agregado la textura
  material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide });
  // El plano (Territorio)
  mesh_plane = new THREE.Mesh(geometry_plane, material);

  mesh_plane.translateX(0 + tx);
  mesh_plane.translateY( + ty);
  mesh_plane.translateZ(0 + tz);

  mesh_plane.rotateX(Math.PI / 2 + rx);
  mesh_plane.rotateY(0 + ry);
  mesh_plane.rotateZ(0 + rz);

  scene.add(mesh_plane);
}

function animate() {
    window.requestAnimationFrame(animate);
    render();
}

function render() {
    var delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
}

try {
    init();
    animate();
} catch (e) {
    var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
    $('#container').append(errorReport + e);
}



function rotateObject(object, degreeX = 0, degreeY = 0, degreeZ = 0) {
    object.rotateX(THREE.Math.degToRad(degreeX));
    object.rotateY(THREE.Math.degToRad(degreeY));
    object.rotateZ(THREE.Math.degToRad(degreeZ));
}
function meshPosition(mesh, trX, trY, trZ) {
    mesh.position.x = trX;
    mesh.position.y = trY;
    mesh.position.z = trZ;
}
