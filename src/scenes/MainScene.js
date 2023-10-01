import * as THREE from 'three';
import BouncingBall from '../objects/BouncingBall';

class MainScene extends THREE.Scene {
    constructor() {
        super();
        this.ball = new BouncingBall();
        this.add(this.ball);
    }

    update() {
        this.ball.update();
    }
}

export default MainScene;
