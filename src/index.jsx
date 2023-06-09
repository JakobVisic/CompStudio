import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas,  } from '@react-three/fiber'
import Experience from './Experience.jsx'
import React, { useState } from 'react';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <> 
        <Canvas
            // flat        
            // camera={ {
            //     fov: 45,
            //     near: 0.1,
            //     far: 200,
            //     position: [ 1, 2, 6 ]
            // } }
            dpr={[1, 2]}
            // style={{ pointerEvents: "none" }}
            shadows
            aspect={(1920, 1080)}
        >
            <Experience /> 

        </Canvas>
    </>
    

   
)

