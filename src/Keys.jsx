
import React, { useRef, useState, useContext } from 'react'
import { useGLTF, shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import { Vector3 } from 'three'
import * as Tone from 'tone'

import {getProject} from '@theatre/core'
import {editable as e, SheetProvider, PerspectiveCamera} from '@theatre/r3f'
import demoProjectState from './state.json'
import MyContext from './MyContext';


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

  const [notePositionC2, setNotePositionC2] =   useState([0.12, 0.43, -0.16])
  const [notePositionCs2, setNotePositionCs2] = useState([0.12, 0.43, -0.16])
  const [notePositionD2, setNotePositionD2] =   useState([0.12, 0.43, -0.16])
  const [notePositionDs2, setNotePositionDs2] = useState([0.12, 0.43, -0.16])
  const [notePositionE2, setNotePositionE2] =   useState([0.12, 0.43, -0.16])
  const [notePositionF2, setNotePositionF2] =   useState([0.12, 0.43, -0.16])
  const [notePositionFs2, setNotePositionFs2] = useState([0.12, 0.43, -0.16])
  const [notePositionG2, setNotePositionG2] =   useState([0.12, 0.43, -0.16])
  const [notePositionGs2, setNotePositionGs2] = useState([0.12, 0.43, -0.16])
  const [notePositionA2, setNotePositionA2] =   useState([0.12, 0.43, -0.16])
  const [notePositionAs2, setNotePositionAs2] = useState([0.12, 0.43, -0.16])
  const [notePositionB2, setNotePositionB2] =   useState([0.12, 0.43, -0.16])
  const [notePositionC3, setNotePositionC3] =   useState([0.12, 0.43, -0.08])

  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()

  // const {keysModeOn, setKeysModeOn} = useContext(MyContext);
  const [keysModeOn, setKeysModeOn] = useState(false)
  const [zoomIn, setZoomIn] = useState(false)

  return (
    <SheetProvider 
      sheet={getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')} 
    >
    <group {...props} dispose={null}
    
    >
      <e.mesh theatreKey={'keyboardBody'} geometry={nodes.KeyBoard.geometry} material={materials['03 - Default']} position={[0.12, 0.43, 0]} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onClick=
          { (e) => 
            { 
              e.stopPropagation(); 
              if(keysModeOn == false && props.deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [2, 4]
                }))
                setKeysModeOn(true)
                setZoomIn(true)
                console.log('keys' + keysModeOn);
              } 
              else if (keysModeOn == true && zoomIn == true)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [4, 6]
                }))
                setKeysModeOn(false)
                setZoomIn(false)
               console.log('keys' + keysModeOn);
              }
            }
          }
      />
      // C
      <group visible={(keysModeOn || props.deskModeOn) ? false : true}>
        <e.mesh theatreKey={'keyC'} geometry={nodes.c.geometry} material={materials['Material.001']} position={notePositionC} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { e.stopPropagation(); setNotePositionC([0.12, 0.427, 0]); synth.triggerAttackRelease("C4", "8n"); }}
          onPointerLeave={ (e) => { e.stopPropagation(); setNotePositionC([0.12, 0.43, 0]); synth.triggerRelease(); }}
          onPointerUp={ (e) => { e.stopPropagation();  setNotePositionC([0.12, 0.43, 0]); synth.triggerRelease(); }}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // C#
        <e.mesh theatreKey={'keyC#'} geometry={nodes['c#'].geometry} material={materials['Material.002']} position={notePositionCs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionCs([0.12, 0.427, 0]); synth.triggerAttackRelease("C#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionCs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionCs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // d
        <e.mesh theatreKey={'keyD'} geometry={nodes.d.geometry} material={materials['Material.001']} position={notePositionD} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionD([0.12, 0.427, 0]); synth.triggerAttackRelease("D4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionD([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionD([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // d#
        <e.mesh theatreKey={'keyD#'} geometry={nodes['d#'].geometry} material={materials['Material.002']} position={notePositionDs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionDs([0.12, 0.427, 0]); synth.triggerAttackRelease("D#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionDs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionDs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // e
        <e.mesh theatreKey={'keyE'} geometry={nodes.e.geometry} material={materials['Material.001']} position={notePositionE} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionE([0.12, 0.427, 0]); synth.triggerAttackRelease("E4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionE([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionE([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // f
        <e.mesh theatreKey={'keyF'} geometry={nodes.f.geometry} material={materials['Material.001']} position={notePositionF} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionF([0.12, 0.427, 0]); synth.triggerAttackRelease("F4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionF([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionF([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />≠
        // f#
        <e.mesh theatreKey={'keyF#'} geometry={nodes['f#'].geometry} material={materials['Material.002']} position={notePositionFs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionFs([0.12, 0.427, 0]); synth.triggerAttackRelease("F#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionFs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionFs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // g
        <e.mesh theatreKey={'keyG'} geometry={nodes.g.geometry} material={materials['Material.001']} position={notePositionG} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionG([0.12, 0.427, 0]); synth.triggerAttackRelease("G4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionG([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionG([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // g#
        <e.mesh theatreKey={'keyG#'} geometry={nodes['g#'].geometry} material={materials['Material.002']} position={notePositionGs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionGs([0.12, 0.427, 0]); synth.triggerAttackRelease("G#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionGs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionGs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // a
        <e.mesh theatreKey={'keyA'} geometry={nodes.a.geometry} material={materials['Material.001']} position={notePositionA} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionA([0.12, 0.427, 0]); synth.triggerAttackRelease("A4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionA([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionA([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // a#
        <e.mesh theatreKey={'keyA#'} geometry={nodes['a#'].geometry} material={materials['Material.002']} position={notePositionAs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionAs([0.12, 0.427, 0]); synth.triggerAttackRelease("A#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionAs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionAs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // b
        <e.mesh theatreKey={'keyB'} geometry={nodes.b.geometry} material={materials['Material.001']} position={notePositionB} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionB([0.12, 0.427, 0]); synth.triggerAttackRelease("B4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionB([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionB([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        <group
          position={[0,0,.08]}
        >
          // c2
          <e.mesh theatreKey={'keyC2'} geometry={nodes.c2.geometry} material={materials['Material.001']} position={notePositionC2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionC2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("C4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionC2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionC2([0.12, 0.430, -0.16])}}
          />
          // c#2
          <e.mesh theatreKey={'keyC#2'} geometry={nodes['c#2'].geometry} material={materials['Material.002']} position={notePositionCs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionCs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("C#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionCs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionCs2([0.12, 0.430, -0.16])}}
          />
          // d2
          <e.mesh theatreKey={'keyD2'} geometry={nodes.d2.geometry} material={materials['Material.001']} position={notePositionD2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionD2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("D4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionD2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionD2([0.12, 0.430, -0.16])}}
          />
          // d#2
          <e.mesh theatreKey={'keyD#2'} geometry={nodes['d#2'].geometry} material={materials['Material.002']} position={notePositionDs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionDs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("D#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionDs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionDs2([0.12, 0.430, -0.16])}}
          />
          // e2
          <e.mesh theatreKey={'keyE2'} geometry={nodes.e2.geometry} material={materials['Material.001']} position={notePositionE2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionE2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("E4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionE2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionE2([0.12, 0.430, -0.16])}}
          />
          // f2
          <e.mesh theatreKey={'keyF2'} geometry={nodes.f2.geometry} material={materials['Material.001']} position={notePositionF2} rotation={[0, Math.PI / 2, 0]} scale={.0005}
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionF2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("F4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionF2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionF2([0.12, 0.430, -0.16])}}
          />
          // f#2
          <e.mesh theatreKey={'keyF#2'} geometry={nodes['f#2'].geometry} material={materials['Material.002']} position={notePositionFs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionFs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("F#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionFs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionFs2([0.12, 0.430, -0.16])}}
          />
          // g2
          <e.mesh theatreKey={'keyG2'} geometry={nodes.g2.geometry} material={materials['Material.001']} position={notePositionG2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionG2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("G4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionG2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionG2([0.12, 0.430, -0.16])}}
          />
          // g#2
          <e.mesh theatreKey={'keyG#2'} geometry={nodes['g#2'].geometry} material={materials['Material.002']} position={notePositionGs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionGs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("G#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionGs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionGs2([0.12, 0.430, -0.16])}}
          />
          // a2
          <e.mesh theatreKey={'keyA2'} geometry={nodes.a1.geometry} material={materials['Material.001']} position={notePositionA2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionA2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("A5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionA2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionA2([0.12, 0.430, -0.16])}}
          />
          // a#2
          <e.mesh theatreKey={'keyA#2'} geometry={nodes['a#1'].geometry} material={materials['Material.002']} position={notePositionAs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionAs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("A#5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionAs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionAs2([0.12, 0.430, -0.16])}}
          />
          // b2
          <e.mesh theatreKey={'keyB2'} geometry={nodes.b1.geometry} material={materials['Material.001']} position={notePositionB2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionB2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("B5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionB2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionB2([0.12, 0.430, -0.16])}}
          />
          // c3
          <e.mesh theatreKey={'keyC32'} geometry={nodes.c3.geometry} material={materials['Material.001']} position={notePositionC3} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionC3([0.12, 0.427, -0.08]);   synth.triggerAttackRelease("B#5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionC3([0.12, 0.430, -0.08])}}
            onPointerUp={ (e) =>    { setNotePositionC3([0.12, 0.430, -0.08])}}
          />
        </group>
      </group>


      <group visible={(keysModeOn || props.deskModeOn) ? true : false}>
        <mesh theatreKey={'keyC'} geometry={nodes.c.geometry} material={materials['Material.001']} position={notePositionC} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { e.stopPropagation(); setNotePositionC([0.12, 0.427, 0]); synth.triggerAttackRelease("C4", "8n"); }}
          onPointerLeave={ (e) => { e.stopPropagation(); setNotePositionC([0.12, 0.43, 0]); synth.triggerRelease(); }}
          onPointerUp={ (e) => { e.stopPropagation();  setNotePositionC([0.12, 0.43, 0]); synth.triggerRelease(); }}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // C#
        <mesh theatreKey={'keyC#'} geometry={nodes['c#'].geometry} material={materials['Material.002']} position={notePositionCs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionCs([0.12, 0.427, 0]); synth.triggerAttackRelease("C#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionCs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionCs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // d
        <mesh theatreKey={'keyD'} geometry={nodes.d.geometry} material={materials['Material.001']} position={notePositionD} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionD([0.12, 0.427, 0]); synth.triggerAttackRelease("D4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionD([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionD([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // d#
        <mesh theatreKey={'keyD#'} geometry={nodes['d#'].geometry} material={materials['Material.002']} position={notePositionDs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionDs([0.12, 0.427, 0]); synth.triggerAttackRelease("D#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionDs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionDs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // e
        <mesh theatreKey={'keyE'} geometry={nodes.e.geometry} material={materials['Material.001']} position={notePositionE} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionE([0.12, 0.427, 0]); synth.triggerAttackRelease("E4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionE([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionE([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // f
        <mesh theatreKey={'keyF'} geometry={nodes.f.geometry} material={materials['Material.001']} position={notePositionF} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionF([0.12, 0.427, 0]); synth.triggerAttackRelease("F4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionF([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionF([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />≠
        // f#
        <mesh theatreKey={'keyF#'} geometry={nodes['f#'].geometry} material={materials['Material.002']} position={notePositionFs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionFs([0.12, 0.427, 0]); synth.triggerAttackRelease("F#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionFs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionFs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // g
        <mesh theatreKey={'keyG'} geometry={nodes.g.geometry} material={materials['Material.001']} position={notePositionG} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionG([0.12, 0.427, 0]); synth.triggerAttackRelease("G4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionG([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionG([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // g#
        <mesh theatreKey={'keyG#'} geometry={nodes['g#'].geometry} material={materials['Material.002']} position={notePositionGs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionGs([0.12, 0.427, 0]); synth.triggerAttackRelease("G#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionGs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionGs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // a
        <mesh theatreKey={'keyA'} geometry={nodes.a.geometry} material={materials['Material.001']} position={notePositionA} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionA([0.12, 0.427, 0]); synth.triggerAttackRelease("A4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionA([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionA([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // a#
        <mesh theatreKey={'keyA#'} geometry={nodes['a#'].geometry} material={materials['Material.002']} position={notePositionAs} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionAs([0.12, 0.427, 0]); synth.triggerAttackRelease("A#4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionAs([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionAs([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        // b
        <mesh theatreKey={'keyB'} geometry={nodes.b.geometry} material={materials['Material.001']} position={notePositionB} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
          onPointerDown={ (e) => { setNotePositionB([0.12, 0.427, 0]); synth.triggerAttackRelease("B4", "8n"); }}
          onPointerLeave={ (e) => { setNotePositionB([0.12, 0.43, 0])}}
          onPointerUp={ (e) => { setNotePositionB([0.12, 0.43, 0])}}
          onClick={ (e) => { e.stopPropagation() }}
        />
        <group
          position={[0,0,.08]}
        >
          // c2
          <mesh theatreKey={'keyC2'} geometry={nodes.c2.geometry} material={materials['Material.001']} position={notePositionC2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionC2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("C4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionC2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionC2([0.12, 0.430, -0.16])}}
          />
          // c#2
          <mesh theatreKey={'keyC#2'} geometry={nodes['c#2'].geometry} material={materials['Material.002']} position={notePositionCs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionCs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("C#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionCs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionCs2([0.12, 0.430, -0.16])}}
          />
          // d2
          <mesh theatreKey={'keyD2'} geometry={nodes.d2.geometry} material={materials['Material.001']} position={notePositionD2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionD2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("D4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionD2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionD2([0.12, 0.430, -0.16])}}
          />
          // d#2
          <mesh theatreKey={'keyD#2'} geometry={nodes['d#2'].geometry} material={materials['Material.002']} position={notePositionDs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionDs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("D#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionDs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionDs2([0.12, 0.430, -0.16])}}
          />
          // e2
          <mesh theatreKey={'keyE2'} geometry={nodes.e2.geometry} material={materials['Material.001']} position={notePositionE2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionE2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("E4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionE2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionE2([0.12, 0.430, -0.16])}}
          />
          // f2
          <mesh theatreKey={'keyF2'} geometry={nodes.f2.geometry} material={materials['Material.001']} position={notePositionF2} rotation={[0, Math.PI / 2, 0]} scale={.0005}
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionF2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("F4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionF2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionF2([0.12, 0.430, -0.16])}}
          />
          // f#2
          <mesh theatreKey={'keyF#2'} geometry={nodes['f#2'].geometry} material={materials['Material.002']} position={notePositionFs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionFs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("F#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionFs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionFs2([0.12, 0.430, -0.16])}}
          />
          // g2
          <mesh theatreKey={'keyG2'} geometry={nodes.g2.geometry} material={materials['Material.001']} position={notePositionG2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionG2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("G4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionG2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionG2([0.12, 0.430, -0.16])}}
          />
          // g#2
          <mesh theatreKey={'keyG#2'} geometry={nodes['g#2'].geometry} material={materials['Material.002']} position={notePositionGs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionGs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("G#4", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionGs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionGs2([0.12, 0.430, -0.16])}}
          />
          // a2
          <mesh theatreKey={'keyA2'} geometry={nodes.a1.geometry} material={materials['Material.001']} position={notePositionA2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionA2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("A5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionA2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionA2([0.12, 0.430, -0.16])}}
          />
          // a#2
          <mesh theatreKey={'keyA#2'} geometry={nodes['a#1'].geometry} material={materials['Material.002']} position={notePositionAs2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionAs2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("A#5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionAs2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionAs2([0.12, 0.430, -0.16])}}
          />
          // b2
          <mesh theatreKey={'keyB2'} geometry={nodes.b1.geometry} material={materials['Material.001']} position={notePositionB2} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionB2([0.12, 0.427, -0.16]);   synth.triggerAttackRelease("B5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionB2([0.12, 0.430, -0.16])}}
            onPointerUp={ (e) =>    { setNotePositionB2([0.12, 0.430, -0.16])}}
          />
          // c3
          <mesh theatreKey={'keyC32'} geometry={nodes.c3.geometry} material={materials['Material.001']} position={notePositionC3} rotation={[0, Math.PI / 2, 0]} scale={.0005} 
            onClick={ (e) => { e.stopPropagation() }}
            onPointerDown={ (e) =>  { setNotePositionC3([0.12, 0.427, -0.08]);   synth.triggerAttackRelease("B#5", "8n"); }}
            onPointerLeave={ (e) => { setNotePositionC3([0.12, 0.430, -0.08])}}
            onPointerUp={ (e) =>    { setNotePositionC3([0.12, 0.430, -0.08])}}
          />
        </group>
      </group>
    </group>
    </SheetProvider>
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
//         <mesh geometry={nodes.c2.geometry} material={materials['Material.001']} position={} rotation={[0, Math.PI / 2, 0]} scale={.0005} >
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
