// Main Imports
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useCursor, Html, Backdrop, CameraControls, ContactShadows, PresentationControls, shaderMaterial, Sparkles, useGLTF, OrbitControls, Grid, GizmoHelper, Float, PivotControls, Stage } from '@react-three/drei'
// import { Leva, useControls } from 'leva'


// theatre.js stuff
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'

import {editable as e, SheetProvider, PerspectiveCamera} from '@theatre/r3f'
import {getProject} from '@theatre/core'
import demoProjectState from './state.json'

// studio.extend(extension)
// studio.initialize()

const demoSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')

// Model Import
import { KeysModel } from './Keys'
import { NewSetup2Model } from './New-Setup2'

// // My Imports
import MyContext from './MyContext'
import { HtmlPopups } from './HtmlPopups'



let firstStart = true;
let finishedFirstAnimation = false;

export default function Experience({start})
{

    if (start == true && firstStart == true) {
        console.log("start");
        demoSheet.project.ready.then(() => demoSheet.sequence.play({
            iterationCount: 1, 
            range: [34 , 47],
            // range: [0,0]
        }))
        finishedFirstAnimation = true;
      
        firstStart = false;
    }
  

    // for leva testing
    // let { position, rotation, size } = useControls({
    //     position: {
    //       x: 0,
    //       y: 0,
    //       z: 0
    //     },
    //     rotation: {
    //       x: 0,
    //       y: 0,
    //       z: 0
    //     },
    //     size: {
    //       x: 0,
    //       y: 0,
    //       z: 0
    //     }
    // })

    // const [showOverlay, setShowOverlay] = useState(false);
    const handleButtonClick = () => {
      setShowOverlay(!showOverlay);
    };

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
                        <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={75}  />
                    </Float>
                
                    {/* <e.pointLight theatreKey="Light" position={[10, 10, 10]} castShadows/> */}
                    <color args={ [ '#ffffff' ] } attach="background" />
                    {/* <Grid infiniteGrid={true} /> */}

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
                            castShadow
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
                                onClick={ () => setDeskModeOn(true) }
                                deskModeOn={deskModeOn}
                            />
                        </group>
                </Stage>
            </SheetProvider>
        </MyContext.Provider>
    </>
}

