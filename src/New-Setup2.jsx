import React, { useRef, useState, useContext } from 'react'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { useGLTF, shaderMaterial } from '@react-three/drei'
import { useControls } from 'leva'
import MyContext from './MyContext';
import { HullMaterial } from './HullMaterial'

import {getProject} from '@theatre/core'
import {editable as e, SheetProvider, PerspectiveCamera} from '@theatre/r3f'
import demoProjectState from './state.json'
const demoSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')


//********************************************************************************************************************************************************************************
// Main Export function
//********************************************************************************************************************************************************************************
export function NewSetup2Model(props) {
  const { nodes, materials } = useGLTF('/model/New-Setup2.glb');

  const {deskModeOn, setDeskModeOn} = useContext(MyContext);
  const {phoneModeOn, setPhoneModeOn} = useContext(MyContext);
  const {paperModeOn, setPaperModeOn} = useContext(MyContext);
  const {bookModeOn, setBookModeOn} = useContext(MyContext);
  const {mugModeOn, setMugModeOn} = useContext(MyContext);
  const {monitorModeOn, setMonitorModeOn} = useContext(MyContext);

  const [zoomIn, setZoomIn] = useState(false)
  const [hoverDesk, setHoverDesk] = useState(false)
  const [hoverPaper, setHoverPaper] = useState(false)
  const [hoverMonitor, setHoverMonitor] = useState(false)
  const [hoverMug, setHoverMug] = useState(false)
  const [hoverBook, setHoverBook] = useState(false)
  const [hoverPhone, setHoverPhone] = useState(false)
  
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

    

  return (

    <SheetProvider 
      sheet={getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')} 
    >
      
      <group {...props} dispose={null} receiveShadow castShadow >

        //********************************************************************************************************************************************************************************
        // Desk
        //********************************************************************************************************************************************************************************
        <e.mesh 
          theatreKey='desk'
          geometry={nodes.Desk.geometry} 
          material={materials.Desk} 
          scale={0.2} 
          castShadows
          castShadow
          receiveShadow
          onClick=
          { (e) => 
            { 
              e.stopPropagation(); 
              if(deskModeOn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [12, 14.025]
                }))
                setDeskModeOn(true)
                console.log('deskMode = ' + deskModeOn);
              } 
              else if (deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [34, 36]
                }))
                setDeskModeOn(false)
                console.log('deskMode = ' + deskModeOn);
              }
            }
          }
          onPointerOver={ (e) => { 
            e.stopPropagation();
            if(zoomIn == false)
            {
              setHoverDesk(true) 
              // console.log('hover')
            }
          }}
          onPointerOut={ (e) => { 
            e.stopPropagation();
            setHoverDesk(false) 
              // console.log('unhover')
          }}
        />
        // Hover
        <mesh 
          geometry={nodes.Desk.geometry} 
          material={materials.Desk} 
          scale={0.19999} 
          visible={hoverDesk}
        >
          <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} />
        </mesh>

        //********************************************************************************************************************************************************************************
        // Monitor
        //********************************************************************************************************************************************************************************
        <e.group theatreKey="monitor" position={[-0.1, 0.71, 0]} rotation={[-Math.PI / 2, 0, 0]}
          onClick=
          { (e) => 
            { 
              e.stopPropagation(); 
              if(monitorModeOn == false && deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [38, 40]
                }))
                setMonitorModeOn(true)
                setZoomIn(true)
                console.log('monitorMode = ' + monitorModeOn);
              } 
              else if (monitorModeOn == true )
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [40, 42]
                }))
                setMonitorModeOn(false)
                setZoomIn(false)
                console.log('monitorMode = ' + monitorModeOn);
              }
            }
          }
          onPointerOver={ (e) => { 
            e.stopPropagation(); 
            if(hoverDesk == true) { setHoverMonitor(true) }
            console.log('hover monitor')
          }}
          onPointerOut={ (e) => { 
            e.stopPropagation();
            setHoverMonitor(false) 
            console.log('unhover monitor')
          }}
        >  
          <group rotation={[Math.PI / 2, 0, 0]} castShadows receiveShadows >
            <group scale={0.01}>
              <mesh geometry={nodes.Monitor_LP_lambert1_0_1.geometry} material={materials.lambert1} castShadows receiveShadows />
              <mesh geometry={nodes.Monitor_LP_lambert1_0_2.geometry} material={materials['Material.010']} castShadows   receiveShadows/>
              <mesh geometry={nodes.Monitor_LP_lambert1_0_3.geometry} material={materials.Cam_ring} castShadows receiveShadows />
            </group>
          </group>
        </e.group>
        // Hover Monitor
         <mesh 
            // position={[position.x, position.y, position.z]}
            // rotation={[rotation.x, rotation.y, rotation.z]}
            position={[-0.10, 0.708, 0]}
            rotation={[0, 0.009, -89.5339]}
            visible={hoverMonitor}
          >
          <boxBufferGeometry 
            // args={[size.x, size.y, size.z]} 
            args={[0.384, 0.034, 0.64]}
          />
          <meshStandardMaterial color={"blue"} />
          {/* <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} /> */}
        </mesh> 

        //****************************************************************************************
        // Paper
        //****************************************************************************************
        <e.group theatreKey="paper" position={[-19.06, 22.415, 8.62]} rotation={[-Math.PI / 2, 0, 0]}
          onClick={ (e) => 
            { 
              e.stopPropagation(); 
              if(paperModeOn == false && deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [22, 24]
                }))
                setPaperModeOn(true)
                setZoomIn(true)
                console.log("paper mode " + paperModeOn);
              } 
              else if (paperModeOn == true && deskModeOn == true)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [24, 26]
                }))
                setPaperModeOn(false)
                setZoomIn(false)
                console.log("paper mode " + paperModeOn);
              }
            }
          }
          onPointerOver={ (e) => { 
            e.stopPropagation();
            setHoverPaper(true)
            console.log('hover')
          }}
          onPointerOut={ (e) => { 
            e.stopPropagation();
            setHoverPaper(false) 
            console.log('unhover')
          }}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 58.91]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh geometry={nodes.defaultMaterial004.geometry} material={materials.T_paper_1001} position={[0.19, 0.68, -0.22]} rotation={[0, 0, -0.42]} scale={0.01} />
            </group>
          </group>
        </e.group>
        // hover
        <mesh 
          position={[-0.06, 0.4039, -0.47]} 
          rotation={[0, -0.42, 0]} 
          visible={hoverPaper}
          // position={[position.x, position.y, position.z]}
          // rotation={[rotation.x, rotation.y, rotation.z]}
          // scale={0.87}
        >
          <boxBufferGeometry 
            // args={[size.x, size.y, size.z]} 
            args={[0.30, 0.01, 0.215]} 
          />
          <meshStandardMaterial color={"blue"} />
          {/* <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} /> */}
        </mesh> 
        

        //****************************************************************************************
        // Phone
        //****************************************************************************************
        <e.group theatreKey="phone" position={[0.12, 0.41, -0.31]} rotation={[-Math.PI, -1.03, 0]} scale={0.81}
          onClick=
          { (e) => 
            { 
              e.stopPropagation(); 
              if(phoneModeOn == false && deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [26, 28]
                }))
                setPhoneModeOn(true)
                setZoomIn(true)
                console.log("phoneModeOn " + phoneModeOn);
              } 
              else if (phoneModeOn == true )
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [28, 30]
                }))
                setPhoneModeOn(false)
                setZoomIn(false)
                console.log("phoneModeOn " + phoneModeOn);
              }
            }
          }
          onPointerOver={ (e) => { 
            e.stopPropagation();
            setHoverPhone(true)  
            
            // setHoverDesk(false)
            console.log('hover')
          }}
          onPointerOut={ (e) => { 
            e.stopPropagation();
            setHoverPhone(false) 
            console.log('unhover')
          }}
        >
          <group rotation={[Math.PI / 2, 0, 0]} castShadow  >
            <mesh geometry={nodes.Back_Cam_Cover.geometry} material={materials.Cam_Case} />
            <mesh geometry={nodes.Back_Cover_Glass.geometry} material={materials.Back_Panel} />
            <mesh geometry={nodes.Cam.geometry} material={materials.Cam_Mt} />
            <mesh geometry={nodes.Cam_Glass.geometry} material={materials.Cam_Glass} />
            <mesh geometry={nodes.Cam_Lens.geometry} material={materials.material} />
            <mesh geometry={nodes.Cam_Mt2.geometry} material={materials.Cam_ring} />
            <mesh geometry={nodes.Cam_Rearcase.geometry} material={materials.Cam_Rearcase} />
            <mesh geometry={nodes.Display_ActiveArea.geometry} material={materials.Display_ActiveArea} />
            <mesh geometry={nodes.Display_ActiveArea_cam.geometry} material={materials.Display_ActiveArea_cam} />
            <mesh geometry={nodes.Display_ActiveArea_Front.geometry} material={materials.Display_ActiveArea_Front} />
            <mesh geometry={nodes.Flash.geometry} material={materials.Flash} />
            <mesh geometry={nodes.Flash_Glass.geometry} material={materials.Flash_Glass} />
            <mesh geometry={nodes.Hinge.geometry} material={materials.Hinge} />
            <mesh geometry={nodes.Hinge_2.geometry} material={materials.Hinge_2} />
            <mesh geometry={nodes.Left_Antenna_Plastic.geometry} material={materials.Antenna_Plastic} />
            <mesh geometry={nodes.Left_Bezel.geometry} material={materials.Bezel} />
            <mesh geometry={nodes.Left_Black_Hole.geometry} material={materials.Black_Hole} />
            <mesh geometry={nodes.Left_Rearcase.geometry} material={materials.Rearcase} />
            <mesh geometry={nodes.Left_Rearcase_Hole.geometry} material={materials.Rearcase_Inside} />
            <mesh geometry={nodes.Logo_line.geometry} material={materials.Logo_line} />
            <mesh geometry={nodes.Right_Rearcase.geometry} material={materials.Rearcase} />
            <mesh geometry={nodes.SAMSUNG_LOGO.geometry} material={materials.SAMSUNG_LOGO} />
            <mesh geometry={nodes.Side_hold.geometry} material={materials.Black_Hole} />
            <mesh geometry={nodes.Usb_1.geometry} material={materials.Usb_1} />
            <mesh geometry={nodes.Usb_2.geometry} material={materials.Usb_2} />
          </group>
        </e.group>
          <mesh 
            position={[0.12, 0.407, -0.31]} 
            rotation={[0, -0.54, 0]} 
            visible={hoverPhone}
            // position={[position.x, position.y, position.z]}
            // rotation={[rotation.x, rotation.y, rotation.z]}
            // scale={0.87}
          >
            <boxBufferGeometry 
              // args={[size.x, size.y, size.z]} 
              args={[0.13, 0.01, 0.11]} 
            />
            <meshStandardMaterial color={"blue"} />
            {/* <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} /> */}
          </mesh> 

        //********************************************************************************************************************************************************************************
        // Mug
        //********************************************************************************************************************************************************************************
        <e.group theatreKey="book left" position={[-0.09, 0.41, -0.31]} rotation={[Math.PI / 2, 0, 1.18]} scale={0.02}
          onClick=
          { (e) => 
            { 
              e.stopPropagation(); 
              if(mugModeOn == false && deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [30, 32]
                }))
                setMugModeOn(true)
                setZoomIn(true)
                console.log("mugModeOn " + mugModeOn);
              } 
              else if (mugModeOn == true )
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [32, 34]
                }))
                setMugModeOn(false)
                setZoomIn(false)
                console.log("mugModeOn " + mugModeOn);
              }
            }
          }
          onPointerOver={ (e) => { 
            e.stopPropagation();
            setHoverMug(true) 
            
            // setHoverDesk(false)
            console.log('hover')
          }}
          onPointerOut={ (e) => { 
            e.stopPropagation();
            setHoverMug(false) 
            console.log('unhover')
          }}
        >
          <mesh geometry={nodes.Mesh002.geometry} material={materials.Mug} castShadow  />
          <mesh geometry={nodes.Mesh002_1.geometry} material={materials.Coffee} castShadow  />
        </e.group>
        <mesh geometry={nodes.Mesh002.geometry} position={[-0.09, 0.41, -0.31]} rotation={[Math.PI / 2, 0, 1.18]} scale={0.0203} visible={hoverMug}>
          <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} />
        </mesh>

        
        //********************************************************************************************************************************************************************************
        // Left Book
        //********************************************************************************************************************************************************************************
        <e.group 
          theatreKey="left book" 
          position={[0.12, 0.41, 0.48]} 
          rotation={[0, 0.46, 0]} 
          scale={0.01}
          onClick=
          { (e) => 
            { 
              e.stopPropagation(); 
              if(bookModeOn == false && deskModeOn == true && zoomIn == false)
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [18, 20]
                }))
                setBookModeOn(true)
                setZoomIn(true)
                console.log("booke mode " + bookModeOn);
              } 
              else if (bookModeOn == true )
              {
                demoSheet.project.ready.then(() => demoSheet.sequence.play({
                  iterationCount: 1, 
                  range: [20, 22]
                }))
                setBookModeOn(false)
                setZoomIn(false)
                console.log("booke mode " + bookModeOn);
              }
            }
          }
          onPointerOver={ (e) => { 
            e.stopPropagation();
            setHoverBook(true) 
            // setHoverDesk(false)
            console.log('hover')
          }}
          onPointerOut={ (e) => { 
            e.stopPropagation();
            setHoverBook(false) 
            console.log('unhover')
          }}
        >
          <mesh geometry={nodes.Cube011.geometry} material={materials.book_a} />
          <mesh geometry={nodes.Cube011_1.geometry} material={materials.book_a_pages} />
        </e.group>
        <group visible={hoverBook} scale={0.0101} position={[0.12, 0.41, 0.479]} rotation={[0, 0.46, 0]} >
          <mesh geometry={nodes.Cube011.geometry}> 
            <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} /> 
          </mesh>
          <mesh geometry={nodes.Cube011_1.geometry}> 
            <hullMaterial depthWrite={false} color="#3059ff" side={THREE.BackSide} /> 
          </mesh>
        </group>
        
      </group>
    </SheetProvider>
  )
}

useGLTF.preload('/model/New-Setup2.glb')
