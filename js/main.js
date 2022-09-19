import GLTFLoader from three/examples/jsm/loaders/GLTFLoader
let loader = new GLTFLoader();
loader.load('../../assets/hoverBike/scene.gltf', function(gltf){
let bike= gltf.scene.children[0];
scene.add(gltf.scene);// add it to your scene
animate();// call the animate function for infinite loop
});
//smooth srcholling
$('#navbar a, .btn').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            },
            800
            );
    }
});

