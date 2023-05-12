// Html Popups
// 
// - Controls the html and iframe popups in th experience
// - experience takes the the context from the New-Setup2.jsx script and passes the variables down
// - html is placed in the experience js
//


/**
 * Main Imports
 */
import './style.css'
import React, { useRef, useState, useContext } from 'react'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useCursor, Html, CameraControls } from '@react-three/drei'
// import { useControls } from 'leva'

/**
 * Theatre.js Imports
 */
import {getProject} from '@theatre/core'
import {editable as e, SheetProvider, PerspectiveCamera} from '@theatre/r3f'
import demoProjectState from './state.json'
// import Coffee from './Coffee'

export function HtmlPopups(props) {

    let websiteLink = '';

    if (props.monitorModeOn){
        websiteLink = "https://i.simmer.io/@visic/morph-2";
    } else
    {
        websiteLink = "";
    }

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
  
    return <>
            <SheetProvider 
                sheet={getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')}
            >   
                {/**************************************************
                    Game Screen
                ***************************************************/}
                <e.group theatreKey='gameScreen'>
                    <Html
                        style={{
                            opacity: props.monitorModeOn ? 1 : 0,
                            backgroundColor: 'brown',
                            color: 'white',
                            // padding: '50px',
                            margin: '100px',
                            // width: '800px',
                            // height: '1000px'
                        }}
                        transform
                        // scale={0.0245}
                        scale={props.monitorModeOn ? 0.0245 : 0}
                        position={[0.0, .71, -0.079]}
                        occlude
                        onPointerOver={ (e) => {e.stopPropagation();}  }
                        onClick={ (e) => {e.stopPropagation()} }
                    >
                        <iframe src={websiteLink} style={{width: '960px', height: '600px', background: "black"}}> </iframe>
                    </Html>
                </e.group>
                
                {/**************************************************
                    Paper
                ***************************************************/}
                <e.group 
                    theatreKey='paperHtml' 
                    // scale={(0.011)} position={[0.473, 0.41, -0.065]} rotation-y={[Math.PI * -0.104]}
                    position-y={ props.paperModeOn ? 0.41 : 0.39}
                >
                    <Html
                        wrapperClass="htmlPaper"
                        style={{
                            opacity: props.paperModeOn ? 1 : 0,
                            // opacity: 0,
                            backgroundColor: 'white',
                            color: 'darkbrown',
                            padding: '50px',
                            // margin: '100px',
                            width: '750px',
                            height: '1050px'
                        }}
                        transform
                        scale={props.paperModeOn ? 1 : 0}
                        // position={[0.5, 0.424, -0.12]}
                        rotation-x={[Math.PI * -0.5]}
                        rotation-z={[Math.PI * -0.1]}
                        // visible={phoneModeOn}
                        occlude
                        onPointerOver={ (e) => {e.stopPropagation();}  }
                        onClick={ (e) => {e.stopPropagation()} }
                    >
                        <div className="paper">
                            <h1>About Me, Jakob Visic</h1>
                            <br></br>
                            <div className="paperText">
                                <p> 
                                    I am Jakob Visic, a Croatian-Canadian Creative Developer with previous experience in UX Design, Motion Graphics, 
                                    and Tech Art. I previously interned at Pixelynx, Blackjet Inc. and Acentury Inc.  I bridge the gaps between the 
                                    worlds of design and development with a multi-disciplinary skill set, creative mindset, and strategic approach.
                                    I am obsessed with music production and like to combine my passions for music, design, and technology to create 
                                    musically charged experiences.
                                </p>
                                <br></br>
                                <p> 
                                    I am obsessed with music production and like to combine my passions for music, design, and technology to create 
                                    musically charged experiences.
                                </p>
                                <br></br>
                                <p> 
                                My hobbies are as diverse as my skillset, and I am continuously developing new interests. To stay active, I lift 
                                    heavy objects against the force of gravity, kick soccer balls, pedal two-wheeled vehicles, and hike nature trails for 
                                    hours. In my spare time, I like to listen to audiobooks, play video games, watch TV and movies, and occasionally 
                                    take photographs.–
                                </p>
                                <br></br>
                            </div>
                        </div>
                        
                    </Html>
                </e.group>
            
                {/**************************************************
                    Book
                ***************************************************/}
                <e.group theatreKey='bookHtml' 
                    position-y={ props.monitorModeOn ? 0.411 : 0.437}
                >
                    <Html
                        wrapperClass="htmlBook"
                        style={{
                            opacity: props.bookModeOn ? 1 : 0,
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '50px',
                            width: '1350px',
                            height: '950px'
                        }}
                        transform
                        scale={props.bookModeOn ? 0.0075 : 0}
                        position={[-0.397, 0, -0.0299]}
                        rotation-x={[Math.PI * -0.5]}
                        rotation-z={[Math.PI * 0.146]}
                        // visible={false}
                        occlude
                        onPointerOver={ (e) => {e.stopPropagation();}  }
                        onClick={ (e) => {e.stopPropagation()} }
                    >
                        <div className="BookGrid">
                            <div className="BookGridPage1">
                                <h1>About</h1>
                                <br></br>
                                <div className="BookText">
                                    <h2> What is this</h2>
                                    <p> 
                                        This is a project for my Computer Studio class where I was tasked with presenting my thesis project with a 
                                        website.  I opted to use three.js because I enjoyed using it in my second year.  This time around was much
                                        more interesting as I spend weeks learning it online on Three.js Journey.
                                    </p>
                                    <br></br>
                                    <h2> How Did I make it </h2>
                                    <p> 
                                        I used Three.js secifically the library for react, react three fibre or R3F for short.  I also used its popular
                                        libraries Drei and Leva to help me develop.  For the animations I used Theatre.js.
                                    </p>
                                    <br></br>
                                    <h2> Challenges </h2>
                                    <p> 
                                        There were many challenges.  First was learning three.js and R3F.  Once I did that I recreated my own room in 3D
                                        and added interactions with the intention of using that for my portfolio.  I still plan on doing so however 
                                        I took what I learned from that project and applied much of it to this one.  Although the Three.js community is 
                                        relatively large, it was difficult to troubleshoot specific issues.  Moreover, I React is was foreign to me until
                                        I began to learn R3F.  As a result I had a lot of issues with it's components such as its hooks.  
                                    </p>
                                    <br></br>
                                    <h2> Scope Creep </h2>
                                    <p> 
                                        I was hoping to have the time to rebuild the morph experience I created in Unity 3D for my thesis at a minimal level.
                                        Unfortunately I did not have the time due to all the work that went into building it for Unity.  
                                        I would like to update this in the future to add more interactivity.
                                    </p>
                                    <br></br>
                                </div>
                            </div>
                            <div className="BookGridPage2">
                                <div className="BookText">
                                    <h2> Keyboard</h2>
                                    <p> 
                                        The midi keyboard is a model of the Akai MPK Mini II, the popular begginer synth for budding producers.  It was 
                                        also my synth and I had a lot of fun using it to play and make music.  The intention was to make it functional
                                        and creat different sounds along with visuals.  Right now it only plays simple sine waves.  I decide to keep it in the project
                                        since it adds to the charm of the setup.
                                    </p>
                                    <br></br>
                                    <h2> The Unity Experience </h2>
                                    <p> 
                                        To play the Unity experience all you need to do is click on the screen and it will load up.  Unfortunately there are audio
                                        issues when I export to WEBGL so it's not full functional.  However, you can still play the tutorial and get an indea
                                        of how it works.
                                    </p>
                                    <br></br>
                                    <h2> Click around </h2>
                                    <p> 
                                        Hover on different objects and click around, its fun!  Different objects show different informations and interations.
                                    </p>
                                    <br></br>
                                    <h2> Future To-Do's </h2>
                                    <p> 
                                        I plan to add this to my portfolio so I would like to add some more features and polish it up a bit.  I plan to add a loading scren,
                                        more animations, a startup animation, more interactables, and integrating the Unity project in the website instead of using a third-party host.
                                    </p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        

                    </Html>
                </e.group>
            
                {/**************************************************
                    Phone
                ***************************************************/}
                <e.group 
                    theatreKey='phoneHtml'
                    // scale={(0.002)} position={[0.31, 0.413, 0.121]} rotation-x={[Math.PI * -0.151]} rotation-y={[Math.PI * -0.021]} rotation-z={[Math.PI * -0.539]}
                    // position={[0.31, 0.4125, 0.11]}
                >
                    <Html
                        wrapperClass="htmlPhone"
                        style={{
                            opacity: props.phoneModeOn ? 1 : 0,
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '50px',
                            width: '1820px',
                            height: '2190px',
                            borderRadius: '60px'
                        }}
                        transform
                        scale={props.phoneModeOn ? 0.96 : 0}
                        position={[-0.45, 0.2, 0]}
                        rotation-z={[Math.PI * -0.001]}
                        // position-z={2}
                        visible={false}
                        occlude
                        onPointerOver={ (e) => {e.stopPropagation(); }  }
                        onClick={ (e) => {e.stopPropagation();} }
                    >
                        <div className='PhoneGrid'>
                            <div className="PhonePanel1">
                                <div className="PhonePanelImage">
                                    <img src={'/model/HeadShot.png'}></img>
                                </div>
                            </div>
                            <div className="PhonePanel">
                                <p>Contact</p>
                                <br></br>
                                <h1>Jakob Visic</h1>
                            </div>
                            <div className="ContactGrid">

                                <div className="ContactTextGrid">
                                    <h2>Portfolio</h2>
                                    <br></br>
                                    <a href='https://jakobvisic.com/' target='_blank'>jakobvisic.com</a>
                                </div>
                                <div className="ContactTextGrid">
                                    <h2>LinkedIn</h2>
                                    <br></br>
                                    <a href='' target='_blank'>https://www.linkedin.com/in/jakob-visic/</a>
                                </div>
                                <div className="ContactTextGrid">
                                    <h2>E-Mail</h2>
                                    <br></br>
                                    <a href='mailto: jakob.visic@gmail.com' target='_blank' >jakob.visic@gmail.com</a>
                                </div>
                            </div>
                        </div>

                    </Html>
                </e.group>

                {/**************************************************
                    Mug
                ***************************************************/}
            
                    {/* <Html
                        wrapperClass="htmlMug"
                        style={{
                            // opacity: props.mugModeOn ?  1 : 0,
                            // backgroundColor: 'white',
                            color: 'none',
                            padding: '50px',
                            width: '400',
                            height: '400',
                            borderRadius: '100px',

                        }}
                        // transform
                        // position-y={ props.mugModeOn ? 0.56 : 0}
                        scale={ props.mugModeOn ? 0.01: 0.0000}
                        // scale={(0.0082)}
                        position={[0.27, .56, 0.13]}
                        opacity={ props.mugModeOn ? 1 : 0}
                        // position={[position.x, position.y, position.z]}
                        // rotation-x={[Math.PI * -0.5]}
                        // rotation-z={[Math.PI * -0.174]}
                        // visible={false}
                        onPointerOver={ (e) => {e.stopPropagation(); }  }
                        onClick={ (e) => {e.stopPropagation();} }
                        occlude
                    >
                        <div className='mugWrapper'>
                        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" ></img>
                        <a 
                            href={"https://www.buymeacoffee.com/VISIC"}
                            target= {"_blank"}
                            style={{
                                // opacity: props.mugeModeOn ?  1 : 0,
                                // backgroundColor: 'black',
                                // color: 'black',
                                padding: '50px',
                                width: '400',
                                height: '400',
                                fontSize: '50px',
                            }}
                        >
                            BUY ME A COFFEE
                        </a>
                        </div>
                    </Html> */}
               
            </SheetProvider>
    </>
}
  
<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="VISIC" data-color="#FFDD00" data-emoji=""  data-font="Lato" data-text="Fun my caffeine addiction" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>