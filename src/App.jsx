// Main Imports
import { useCursor, Html, CameraControls, PresentationControls, shaderMaterial, Sparkles, useGLTF, OrbitControls, Grid, Loader } from '@react-three/drei'
import { useFrame, extend, Canvas } from '@react-three/fiber'
import { useRef, useState, useHelper, useEffect } from 'react'
import { Leva } from 'leva'


import { LoadingScreen }  from './LoadingScreen.jsx'
import Experience from './Experience.jsx'

export default function App()
{
    const [ start, setStart ] = useState(false);
    const [ playButtonPressed, setPlayButtonPressed ] = useState(false);

    useEffect(() => {
        if (start == true) {
          setPlayButtonPressed(true)
        }
      }, [start]);

    return (
        <>
            <Leva hidden />
            <Canvas
                dpr={[1, 2]}
                shadows
                aspect={(1920, 1080)}
            >
                <Experience start={playButtonPressed}/>
            </Canvas>
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    )
}

