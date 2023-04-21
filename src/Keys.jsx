
import React, { useRef, useState } from 'react'
import { useGLTF, shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import { Vector3 } from 'three'
import * as Tone from 'tone'

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


export function KeysModel(props) {
  const { nodes, materials } = useGLTF('/model/keys.glb')

  const [notePositionC, setNotePositionC] = useState([0.12, 0.43, 0])
  const [notePositionCs, setNotePositionCs] = useState([0.12, 0.43, 0])
  const [notePositionD, setNotePositionD] = useState([0.12, 0.43, 0])
  const [notePositionDs, setNotePositionDs] = useState([0.12, 0.43, 0])
  const [notePositionE, setNotePositionE] = useState([0.12, 0.43, 0])
  const [notePositionF, setNotePositionF] = useState([0.12, 0.43, 0])
  const [notePositionFs, setNotePositionFs] = useState([0.12, 0.43, 0])
  const [notePositionG, setNotePositionG] = useState([0.12, 0.43, 0])
  const [notePositionGs, setNotePositionGs] = useState([0.12, 0.43, 0])
  const [notePositionA, setNotePositionA] = useState([0.12, 0.43, 0])
  const [notePositionAs, setNotePositionAs] = useState([0.12, 0.43, 0])
  const [notePositionB, setNotePositionB] = useState([0.12, 0.43, 0])

  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()

  return (
    <group {...props} dispose={null}
    onClick={ (e) => 
      { 
        e.stopPropagation(); 
      }
    }
    >
      <mesh  geometry={nodes.KeyBoard.geometry} material={materials['03 - Default']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
      />
      // C
      <mesh geometry={nodes.c.geometry} material={materials['Material.001']} position={notePositionC} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionC([0.12, 0.427, 0]); synth.triggerAttackRelease("C4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionC([0.12, 0.43, 0]); synth.triggerRelease(); }}
        onPointerUp={ (e) => { setNotePositionC([0.12, 0.43, 0]); synth.triggerRelease(); }}
      />
      // C#
      <mesh geometry={nodes['c#'].geometry} material={materials['Material.002']} position={notePositionCs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionCs([0.12, 0.427, 0]); synth.triggerAttackRelease("C#4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionCs([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionCs([0.12, 0.43, 0])}}
      />
      // d
      <mesh geometry={nodes.d.geometry} material={materials['Material.001']} position={notePositionD} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionD([0.12, 0.427, 0]); synth.triggerAttackRelease("D4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionD([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionD([0.12, 0.43, 0])}}
      />
      // d#
      <mesh geometry={nodes['d#'].geometry} material={materials['Material.002']} position={notePositionDs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionDs([0.12, 0.427, 0]); synth.triggerAttackRelease("D#4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionDs([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionDs([0.12, 0.43, 0])}}
      />
      // e
      <mesh geometry={nodes.e.geometry} material={materials['Material.001']} position={notePositionE} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionE([0.12, 0.427, 0]); synth.triggerAttackRelease("E4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionE([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionE([0.12, 0.43, 0])}}
      />
      // f
      <mesh geometry={nodes.f.geometry} material={materials['Material.001']} position={notePositionF} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionF([0.12, 0.427, 0]); synth.triggerAttackRelease("F4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionF([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionF([0.12, 0.43, 0])}}
      />
      // f#
      <mesh geometry={nodes['f#'].geometry} material={materials['Material.002']} position={notePositionFs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionFs([0.12, 0.427, 0]); synth.triggerAttackRelease("F#4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionFs([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionFs([0.12, 0.43, 0])}}
      />
      // g
      <mesh geometry={nodes.g.geometry} material={materials['Material.001']} position={notePositionG} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionG([0.12, 0.427, 0]); synth.triggerAttackRelease("G4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionG([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionG([0.12, 0.43, 0])}}
      />
      // g#
      <mesh geometry={nodes['g#'].geometry} material={materials['Material.002']} position={notePositionGs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionGs([0.12, 0.427, 0]); synth.triggerAttackRelease("G#4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionGs([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionGs([0.12, 0.43, 0])}}
      />
      // a
      <mesh geometry={nodes.a.geometry} material={materials['Material.001']} position={notePositionA} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionA([0.12, 0.427, 0]); synth.triggerAttackRelease("A4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionA([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionA([0.12, 0.43, 0])}}
      />
      // a#
      <mesh geometry={nodes['a#'].geometry} material={materials['Material.002']} position={notePositionAs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionAs([0.12, 0.427, 0]); synth.triggerAttackRelease("A#4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionAs([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionAs([0.12, 0.43, 0])}}
      />
      // b
      <mesh geometry={nodes.b.geometry} material={materials['Material.001']} position={notePositionB} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
        onPointerDown={ (e) => { setNotePositionB([0.12, 0.427, 0]); synth.triggerAttackRelease("B4", "8n"); }}
        onPointerLeave={ (e) => { setNotePositionB([0.12, 0.43, 0])}}
        onPointerUp={ (e) => { setNotePositionB([0.12, 0.43, 0])}}
      />
      <group
        position={[0,0,.08]}
      >
        // c2
        <mesh geometry={nodes.c2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // c#2
        <mesh geometry={nodes['c#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // d2
        <mesh geometry={nodes.d2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // d#2
        <mesh geometry={nodes['d#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // e2
        <mesh geometry={nodes.e2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // f2
        <mesh geometry={nodes.f2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // f#2
        <mesh geometry={nodes['f#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // g2
        <mesh geometry={nodes.g2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // g#2
        <mesh geometry={nodes['g#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // a2
        <mesh geometry={nodes.a1.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // a#2
        <mesh geometry={nodes['a#1'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // b2
        <mesh geometry={nodes.b1.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
        // c3
        <mesh geometry={nodes.c3.geometry} material={materials['Material.001']} position={[0.12, 0.43, -.08]} rotation={[0, Math.PI / 2, 0]} scale={.0005} />
      </group>
    </group>
  )
}

// export function HighlightKeysModel(props) {
//   const { nodes, materials } = useGLTF('/model/keys.glb')
//   return (
//     <group {...props} dispose={null}>
//       {/* <mesh geometry={nodes.KeyBoard.geometry} material={materials['03 - Default']} position={notePosition} rotation={[0, Math.PI / 2, 0]} scale={.0005} /> */}

//       // C
//       <mesh geometry={nodes.c.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // C#
//       <mesh geometry={nodes['c#'].geometry} material={materials['Material.002']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // d
//       <mesh geometry={nodes.d.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // d#
//       <mesh geometry={nodes['d#'].geometry} material={materials['Material.002']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // e
//       <mesh geometry={nodes.e.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // f
//       <mesh geometry={nodes.f.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // f#
//       <mesh geometry={nodes['f#'].geometry} material={materials['Material.002']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // g
//       <mesh geometry={nodes.g.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // g#
//       <mesh geometry={nodes['g#'].geometry} material={materials['Material.002']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // a
//       <mesh geometry={nodes.a.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // a#
//       <mesh geometry={nodes['a#'].geometry} material={materials['Material.002']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       // b
//       <mesh geometry={nodes.b.geometry} material={materials['Material.001']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//         <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//       </mesh>
//       <group
//         position={[0,0,.08]}
//       >
//         // c2
//         <mesh geometry={nodes.c2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // c#2
//         <mesh geometry={nodes['c#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // d2
//         <mesh geometry={nodes.d2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // d#2
//         <mesh geometry={nodes['d#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // e2
//         <mesh geometry={nodes.e2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // f2
//         <mesh geometry={nodes.f2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // f#2
//         <mesh geometry={nodes['f#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // g2
//         <mesh geometry={nodes.g2.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // g#2
//         <mesh geometry={nodes['g#2'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // a2
//         <mesh geometry={nodes.a1.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // a#2
//         <mesh geometry={nodes['a#1'].geometry} material={materials['Material.002']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // b2
//         <mesh geometry={nodes.b1.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.16]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//         // c3
//         <mesh geometry={nodes.c3.geometry} material={materials['Material.001']} position={[0.12, 0.43, -0.08]} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
//           <highlightMaterial depthWrite={false} side={THREE.BackSide}  />
//         </mesh>
//       </group>
//     </group>
//   )
// }

useGLTF.preload('/model/keys.glb')
