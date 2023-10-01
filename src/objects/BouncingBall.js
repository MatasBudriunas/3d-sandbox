import * as THREE from 'three';

class BouncingBall extends THREE.Mesh {
    constructor() {
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        super(geometry, material);
        this.dx = 0.01;
        this.dy = 0.01;
    }

    update() {
        // Update position logic here
        if (this.position.x >= 2 || this.position.x <= -2) this.dx = -this.dx;
        if (this.position.y >= 2 || this.position.y <= -2) this.dy = -this.dy;
        this.position.x += this.dx;
        this.position.y += this.dy;
    }
}

export default BouncingBall;
