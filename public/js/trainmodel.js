var camera, controls, scene, renderer;
var ice;
var cooling;
var tank1, tank2, tank3, tank4;
var webglwrapper = $('#webglwrap');
var clock = new THREE.Clock();
var mixers = [];

function addNote(note) {
	$('#notifications').append('<a href="#" class="list-group-item"><i class="fa fa-tasks fa-fw"></i>' + note + '<span class="pull-right text-muted small"><em>43 minutes ago</em></span></a>');
};

function toggleTransparent(opa) {
	ice.getObjectByName('main_carriage').material.forEach(function(d) {
		//console.log(d);
		d.opacity = opa;
		d.transparent = true;
	})
};


$(document).ready(function() {

	$('.showAfterLoading').hide();
	init();
	render(); // remove when using next line for animation loop (requestAnimationFrame)
	//animate();
	function init() {
		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0xcccccc );
		scene.fog = new THREE.FogExp2( 0xcccccc, 0.0007 );
		renderer = new THREE.WebGLRenderer();
		var container = document.getElementById( 'webglcontainer' );
		//renderer.setPixelRatio( webglwrapper.innerHeight / webglwrapper.innerWidth );
		//renderer.setSize( webglwrapper.innerHeight, webglwrapper.innerWidth );
		renderer.setPixelRatio( webglwrapper.innerWidth() / 400 );
		
		renderer.setSize( webglwrapper.innerWidth(), 400 );
		container.appendChild( renderer.domElement );
		camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.x = -100;
		camera.position.y = 200;
		camera.position.z = 600;
		
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.addEventListener( 'change', render ); // remove when using animation loop
		// enable animation loop when using damping or autorotation
		controls.enableDamping = false;
		controls.dampingFactor = 0.25;
		controls.enableZoom = true;
		controls.autoRotate = false;




		/*
		// world
		var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
		for ( var i = 0; i < 500; i ++ ) {
			var mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = ( Math.random() - 0.5 ) * 1000;
			mesh.position.y = ( Math.random() - 0.5 ) * 1000;
			mesh.position.z = ( Math.random() - 0.5 ) * 1000;
			mesh.updateMatrix();
			mesh.matrixAutoUpdate = false;
			scene.add( mesh );
		}*/
		// loading manager


		var loader = new THREE.ColladaLoader();
	// loader.load( './models/collada/kawada-hironx.dae', function ( collada ) {
		loader.load( 'ice_low.dae', function ( object ) {
	/*
			object.mixer = new THREE.AnimationMixer( object );
			mixers.push( object.mixer );
			var action = object.mixer.clipAction( object.animations[ 0 ] );
			action.play();
	*/
			ice = object.scene;
			scene.add( ice );

	//					
			/*
			ice.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
					// model does not have normals
					child.material.flatShading = true;
				}
			} );
			*/
			ice.scale.x = ice.scale.y = ice.scale.z = 30.0;
			ice.position.x = 300;
			ice.rotation.z = (Math.PI / 2);
			ice.updateMatrix();


			var geometry = new THREE.CubeGeometry( 400, 10, 50 );
			var material = new THREE.MeshPhongMaterial( { color: 0xff4444, flatShading: true } );
			var cooling = new THREE.Mesh( geometry, material );
			cooling.position.x = -50;
			cooling.position.y = 110;
		//				mesh.position.z = ( Math.random() - 0.5 ) * 1000;
			cooling.updateMatrix();
			cooling.matrixAutoUpdate = false;
			scene.add( cooling );



			var geometry = new THREE.CubeGeometry( 100, 20, 70 );
			
			var material1 = new THREE.MeshPhongMaterial( { color: 0x4444ff, flatShading: true } );
			var tank1 = new THREE.Mesh( geometry, material1 );
			tank1.position.x = -210;
			tank1.position.y = 30;
			scene.add( tank1 );
			var material2 = new THREE.MeshPhongMaterial( { color: 0x4444ff, flatShading: true } );
			var tank2 = new THREE.Mesh( geometry, material2 );
			tank2.position.x = -100;
			tank2.position.y = 30;
			scene.add( tank2 );
			var material3 = new THREE.MeshPhongMaterial( { color: 0x4444ff, flatShading: true } );
			var tank3 = new THREE.Mesh( geometry, material3 );
			tank3.position.x = 10;
			tank3.position.y = 30;
			scene.add( tank3 );
			var material4 = new THREE.MeshPhongMaterial( { color: 0x4444ff, flatShading: true } );
			var tank4 = new THREE.Mesh( geometry, material4 );
			tank4.position.x = 120;
			tank4.position.y = 30;
			scene.add( tank4 );


			toggleTransparent(0.7);
			$('#loadingstatus').html('');
			$('.showAfterLoading').show();
			requestAnimationFrame( animate );
		//kinematics = collada.kinematics;
	
		});
		// lights
		var light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 1, 1, 1 );
		scene.add( light );
		var light = new THREE.DirectionalLight( 0x002288 );
		light.position.set( -1, -1, -1 );
		light.intensity = 0.6;
		scene.add( light );
		var light = new THREE.AmbientLight( 0xCCCCCC );
		scene.add( light );
		//
		//stats = new Stats();
		//container.appendChild( stats.dom );
		//
		window.addEventListener( 'resize', onWindowResize, false );
	}

	function onWindowResize() {
		camera.aspect = webglwrapper.innerWidth / webglwrapper.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( webglwrapper.innerWidth, webglwrapper.innerHeight );
	}
	function animate() {
		requestAnimationFrame( animate );
	//				ice.rotation.z += 0.001;
		controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
		//stats.update();
		render();
		//TWEEN.update();
	}
	function render() {

		renderer.render( scene, camera );
	}




	$('.clickTransparent80').click(function(param) {
		toggleTransparent(0.8);
		});

	$('.clickTransparent100').click(function(param) {
		toggleTransparent(1);
		});	

	$('.clickRotate').click(function(param) {
		controls.autoRotate = !controls.autoRotate;
	});
	
	$('.clickNote').click(function(param) {
		addNote('Neuer Eintrag');
	});

});