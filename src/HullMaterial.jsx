import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

export const HullMaterial = shaderMaterial(
    {
      color: new THREE.Color('#00AEFF'),
      size: 1.8
    },
    /*glsl*/ `
    uniform float size;
    
    void main() {
        vec3 transformed = position + normal * size/100.;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
    }
    `,
        /*glsl*/ `
    uniform vec3 color;
    
    void main() {
        gl_FragColor = vec4(color, 1.);
    }
    `
)
extend({ HullMaterial }) 