import React, { Component } from "react"
import * as THREE from "three"
import OrbitControls from "three-orbitcontrols"

class AbstractFace extends Component {
    constructor(props) {
        super(props);
        this.mount = React.createRef();
        this.video = props.video;
        this.scene = undefined;
        this.renderer = undefined;
        this.camera = undefined;
        this.clock = undefined;
        this.particles = undefined;
        this.frameId = undefined;
        this.imageCache = undefined;
    }

    state = {
        width: 0,
        height: 0,
        videoWidth: 0,
        videoHeight: 0,
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        console.log("componentDidMount");
        this.init();
    }

    componentWillUnmount() {
        this.mount.current.removeChild(this.renderer.domElement);
        window.removeEventListener("resize", this.updateDimensions);

        cancelAnimationFrame(this.frameId);
        console.log("unmount");
    }

    async updateDimensions () {
        console.log(window.innerWidth, window.innerHeight);
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        }, () => {
            if (this.renderer) {
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize(
                    this.state.width,
                    this.state.height
                );
            }
    
            if (this.camera) {
                this.camera.aspect = this.state.width / this.state.height;
                this.camera.updateProjectionMatrix();
            }
        });
    }

    async init () {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xD1D2D7);

        this.renderer = new THREE.WebGLRenderer({ antialias: true});
        this.mount.current.appendChild(this.renderer.domElement);
        this.clock = new THREE.Clock();

        this.setState({
            videoWidth: this.video.current.videoWidth,
            videoHeight: this.video.current.videoHeight
        });

        await this.updateDimensions();
        await this.initCamera();
        await this.createParticles();
        this.draw();

    }

    async initCamera() {
        const fov = 45;
        const aspect = this.state.width / this.state.height;
        const z = Math.min(this.state.width, this.state.height);
        
        this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 10000);
        this.camera.position.set(0, 0, z);
        this.camera.lookAt(0, 0, 0);

        this.scene.add(this.camera);
    }

    createParticles = () => {
        const imageData = this.getImageData();
        const geometry = new THREE.Geometry();
        geometry.morphAttributes = {};

        const material = new THREE.PointsMaterial({
            size: 1,
            color: 0xffffff,
            sizeAttenuation: false
        });

        for (let y = 0, height = imageData.height; y < height; y += 1) {
            for (let x = 0, width = imageData.width; x < width; x += 1) {
                const vertex = new THREE.Vector3(
                    x - imageData.width / 2,
                    -y + imageData.height / 2,
                    0
                );
                geometry.vertices.push(vertex);
            }
        }

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    getImageData = (useCache) => {
        if (useCache && this.imageCache) {
            return this.imageCache;
        }

        const w = this.video.current.videoWidth;
        const h = this.video.current.videoHeight;

        this.canvas.width = w;
        this.canvas.height = h;
        
        this.ctx.translate(w, 0);
        this.ctx.scale(-1, 1);
        
        this.ctx.drawImage(this.video.current, 0, 0);
        this.imageCache = this.ctx.getImageData(0, 0, w, h);
        
        return this.imageCache;
    }

    draw = (t) => {
        this.clock.getDelta();
        const time = this.clock.elapsedTime;

        if (this.particles) {
            // const r = 0.05;
            // const g = 0.01;
            // const b = 0.02;

            const r = Math.abs(Math.sin(time * 0.5)) * 0.3 + 0.1;
            const g = Math.abs(Math.cos(time * 0.5)) * 0.3 + 0.1;
            const b = Math.abs(Math.sin(time * 0.5)) * 0.3 + 0.1;
            
            // this.particles.material.color.r = 1 - r;
            // this.particles.material.color.g = 1 - g;
            // this.particles.material.color.b = 1 - b;

            const density = 2;
            const useCache = parseInt(t) % 2 === 0; 
            const imageData = this.getImageData(useCache);

            for (let i = 0, length = this.particles.geometry.vertices.length; i < length; i++) {
                const particle = this.particles.geometry.vertices[i];

                if (i % density !== 0) {
                    particle.z = 10000;
                    continue;
                }

                let index = i * 4;
                let gray = (imageData.data[index] + imageData.data[index + 1] + imageData.data[index + 2]) / 3;

                let threshold = 300;

                if (gray < threshold) {
                    if (gray < threshold / 3) {
                        particle.z = gray * r * 5;
    
                    } else if (gray < threshold / 2) {
                        particle.z = gray * g * 5;
    
                    } else {
                        particle.z = gray * b * 5;
                    }
                } else {
                    particle.z = 10000;
                }
            }
            this.particles.geometry.verticesNeedUpdate = true;
        }

        this.renderer.render(this.scene, this.camera);
        this.frameId = requestAnimationFrame(this.draw);
    }

    render() {
        return (
            <div ref={this.mount}>
            </div>
        );
    }
}

export default AbstractFace