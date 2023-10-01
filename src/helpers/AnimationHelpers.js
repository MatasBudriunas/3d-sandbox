export function startAnimation(scene, renderer, camera) {
    const animate = function () {
        requestAnimationFrame(animate);
        scene.update();
        renderer.render(scene, camera);
    };

    animate();
}
