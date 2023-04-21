// Main Imports
import { useCursor, Html, CameraControls, PresentationControls, shaderMaterial, Sparkles, useGLTF, OrbitControls, Grid, GizmoHelper, Float, PivotControls, ContactShadows, Stage, SpotLight, SpotLightShadow, Backdrop } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState, useHelper, useEffect } from 'react'
import { useControls } from 'leva'

// theatre.js stuff
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

import {getProject} from '@theatre/core'
import {editable as e, SheetProvider, PerspectiveCamera} from '@theatre/r3f'
import demoProjectState from './state.json'

// studio.extend(extension)
studio.initialize()

// Model Import
import { KeysModel } from './Keys'
import { NewSetupModel } from './New-setup'
import { NewSetup2Model } from './New-Setup2'
import { DeskModel } from './Keyboard'

// My Imports
import MyContext from './MyContext';
import { HtmlPopups } from './HtmlPopups'

const demoSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')
// const bookSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Book Sheet')

const HullMaterial = shaderMaterial(
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

export default function Experience()
{
    const [hovered, set] = useState()
    useCursor(hovered, /*'pointer', 'auto'*/)

    console.log('repeat')

    // for leva testing
    let { position, rotation, size } = useControls({
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0
        },
        size: {
          x: 0,
          y: 0,
          z: 0
        }
    })

    const [showOverlay, setShowOverlay] = useState(false);
    const handleButtonClick = () => {
      setShowOverlay(!showOverlay);
    };

    const setup = useRef()
    const [bookModeOn, setBookModeOn] = useState(false);
    const [paperModeOn, setPaperModeOn] = useState(false);
    const [deskModeOn, setDeskModeOn] = useState(false);
    const [mugModeOn, setMugModeOn] = useState(false);
    const [phoneModeOn, setPhoneModeOn] = useState(false);
    const [monitorModeOn, setMonitorModeOn] = useState(false);

    return <>
        <MyContext.Provider
            value={{
                bookModeOn,
                paperModeOn,
                deskModeOn,
                mugModeOn,
                phoneModeOn,
                monitorModeOn,
                setBookModeOn,
                setPaperModeOn,
                setDeskModeOn,
                setMugModeOn,
                setPhoneModeOn,
                setMonitorModeOn
            }}
        >
            <SheetProvider 
                sheet={getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')}
            >   
                <Stage intensity={0.001} shadows="contact" >

                    <Float
                        speed={deskModeOn ? 0 : 0.9} // Animation speed, defaults to 1
                        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
                        floatingRange={[-1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                        floatIntensity={0.05} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    >
                        <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75}/>
                    </Float>
                
                    {/* <e.pointLight theatreKey="Light" position={[10, 10, 10]}/> */}
                    <color args={ [ '#ffffff' ] } attach="background" />
                    {/* <Grid infiniteGrid={true} /> */}3

                    {/* <directionalLight
                        position={[0, 3, 0.3]} 
                        intensity={1}
                        castShadow 
                        shadow-mapSize-width={(512 * 8)}
                        shadow-mapSize-height={(512 * 8)}
                        shadow-camera-far={1000}
                        shadow-camera-left = {-10}
                        shadow-camera-right = {10}
                        shadow-camera-top = {10}
                        shadow-camera-bottom = {-10}
                        rotateX={position.x}
                        // position={[position.x, position.y, position.z]}
                        // rotation={[rotation.x, rotation.y, rotation.z]}
                    
                    /> */}
              
                    <HtmlPopups 
                        bookModeOn={bookModeOn}
                        paperModeOn={paperModeOn}
                        deskModeOn={deskModeOn}
                        mugModeOn={mugModeOn}
                        phoneModeOn={phoneModeOn}
                        monitorModeOn={monitorModeOn}
                    />
                        <NewSetup2Model 
                            rotation={[0,Math.PI * 1.5,0]}
                        />
                        <group
                            rotation={[0,Math.PI * 1.5,0]}
                            scale={1.6}
                            position={[0,-.25,-0.04]}
                        >
                            <KeysModel 
                                // scale={[2,2,2]}
                                // position={[0,0,0]}
                                // rotation={[0,Math.PI * 1.5,0]}
                                onClick={ () => console.log("clicked")}
                            />
                            {/* <HighlightKeysModel 
                                scale={1.005}
                            /> */}
                        </group>
                </Stage>
            </SheetProvider>
        </MyContext.Provider>
  
    </>
}

