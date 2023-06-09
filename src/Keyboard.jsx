/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 keyboard.glb
*/

import React, { useRef, useState } from 'react'
import { useGLTF, shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'

// studio.initialize()
// studio.extend(extension)

import {getProject} from '@theatre/core'
import demoProjectState from '/state.json'


const demoSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')

const HighlightMaterial = shaderMaterial(
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
extend({ HighlightMaterial })

export function DeskModel(props) {
  const { nodes, materials } = useGLTF('/model/keyboard.glb')
  const [hoverBooks, setHoverBooks] = useState(false) 
  let bookmodeOn = false;
  let rightbookmodeOn = false;
  let deskmodeOn = false;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Desk.geometry} material={materials.Desk} scale={0.2} 
        onClick={ (e) => 
          { 
            e.stopPropagation(); 
            if(deskmodeOn == false)
            {
              demoSheet.project.ready.then(() => demoSheet.sequence.play({
                iterationCount: 1, 
                range: [0, 2]
              }))
              deskmodeOn = true
              console.log('deskMode = ' + deskmodeOn);
            } 
            else 
            {
              demoSheet.project.ready.then(() => demoSheet.sequence.play({
                iterationCount: 1, 
                range: [14, 16]
              }))
              deskmodeOn = false
            }
          }
        }
      />
      /**
      Books Left
      */
      <group scale={0.2}
        
        onClick=
        { (e) => 
          { 
            e.stopPropagation(); 
            if(bookmodeOn == false && deskmodeOn == true)
            {
              demoSheet.project.ready.then(() => demoSheet.sequence.play({
                iterationCount: 1, 
                range: [6, 8]
              }))
              bookmodeOn = true
              console.log(bookmodeOn);
            } 
            else if (bookmodeOn == true )
            {
              demoSheet.project.ready.then(() => demoSheet.sequence.play({
                iterationCount: 1, 
                range: [8, 10]
              }))
              bookmodeOn = false
            }
          }
        }
        // onPointerEnter={ () => { 
        //   setHoverBooks(true) 
        //   console.log('hover')
        // } }
        // onPointerLeave={ () => { 
        //     setHoverBooks(false) 
        //     console.log('unhover')
        // } }
      >
        <mesh geometry={nodes.Cube006.geometry} material={materials.Books} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Notebook} />
      </group>
      <group scale={0.2}
        visible={hoverBooks}
        position={[0,-0.01,0]}
        // visible={false}
        // onClick={ (e) => 
        //   { 
        //     e.stopPropagation(); 
        //     if(bookmodeOn == false && deskmodeOn == true)
        //     {
        //       demoSheet.project.ready.then(() => demoSheet.sequence.play({
        //         iterationCount: 1, 
        //         range: [6, 8]
        //       }))
        //       bookmodeOn = true
        //       console.log('bookMode = ' + bookmodeOn);
        //     } 
        //     else if (bookmodeOn == true)
        //     {
        //       demoSheet.project.ready.then(() => demoSheet.sequence.play({
        //         iterationCount: 1, 
        //         range: [8, 10]
        //       }))
        //       bookmodeOn = false
        //       console.log('bookMode = ' + bookmodeOn)
        //     }
        //   }
        // }
      >
        <mesh geometry={nodes.Cube006.geometry} material={materials.Books} >
          <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
        </mesh>
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Notebook} >
          <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
        </mesh>
      </group>
      <group scale={0.2}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials.Pen} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.Boxes} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Material.004']} />
      </group>
      <group position={[0.05, 0, 0.03]} scale={0.2}>
        <mesh geometry={nodes.Cube009.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['Material.007']} />
      </group>
      
      // Right Books
      <group scale={0.2} 
        onClick={ (e) => 
          { 
            e.stopPropagation(); 
            if(rightbookmodeOn == false && deskmodeOn == true)
            {
              demoSheet.project.ready.then(() => demoSheet.sequence.play({
                iterationCount: 1, 
                range: [10, 12]
              }))
              rightbookmodeOn = true
              console.log(rightbookmodeOn);
            } 
            else if (rightbookmodeOn == true && deskmodeOn == true)
            {
              demoSheet.project.ready.then(() => demoSheet.sequence.play({
                iterationCount: 1, 
                range: [12, 14]
              }))
              rightbookmodeOn = false
            }
          }
        }
      >
        <mesh geometry={nodes.Cube002.geometry} material={materials.Books} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.Paper} />
      </group>
      <mesh geometry={nodes.Mug.geometry} material={materials.Boxes} scale={0.2} />
      <group position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={0}>
        <mesh geometry={nodes.Mesh037.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh037_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Mesh037_2.geometry} material={materials['03 - Default']} />
      </group>
    </group>
  )
}

useGLTF.preload('/model/keyboard.glb')
